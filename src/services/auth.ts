import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const authenticateUser = async (phone: string, pin: string): Promise<boolean> => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, 
      where('phoneNumber', '==', phone),
      where('pin', '==', pin)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Authentication error:', error);
    return false;
  }
};
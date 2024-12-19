import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const initializeUser = async () => {
  try {
    // Check if user already exists
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('phoneNumber', '==', '9380255730'));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Add the user if they don't exist
      await addDoc(collection(db, 'users'), {
        phoneNumber: '9380255750',
        pin: '123456',
        createdAt: new Date().toISOString()
      });
      console.log('Test user added successfully');
    }
  } catch (error) {
    console.error('Error initializing user:', error);
  }
};
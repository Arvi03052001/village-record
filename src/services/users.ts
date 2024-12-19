import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

interface User {
  name: string;
  serialNumber: string;
  dateTime: string;
}

export const addUser = async (userData: User): Promise<{ success: boolean; error?: string }> => {
  try {
    // Check if user exists
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('serialNumber', '==', userData.serialNumber));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, error: 'user_exists' };
    }

    // Add user
    await addDoc(collection(db, 'users'), userData);
    return { success: true };
  } catch (error) {
    console.error('Error adding user:', error);
    return { success: false, error: 'database_error' };
  }
};

export const removeUser = async (serialNumber: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('serialNumber', '==', serialNumber));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, error: 'user_not_found' };
    }

    // Delete the user document
    const userDoc = querySnapshot.docs[0];
    await deleteDoc(doc(db, 'users', userDoc.id));
    return { success: true };
  } catch (error) {
    console.error('Error removing user:', error);
    return { success: false, error: 'database_error' };
  }
};
'use client';
import { createContext, useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    auth,
    db,
    doc,
    onSnapshot,
} from '@/Firebase/FirebaseConfig';

export const RegUserInfo = createContext();

const LoggedUser = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const unsubscribe = onSnapshot(
                    userDocRef,
                    (docSnapshot) => {
                        if (docSnapshot.exists()) {
                            const data = docSnapshot.data();
                            console.log('Document Data:', data);
                            setUser(data);
                        } else {
                            //   console.log('Document does not exist');
                            setUser(null);
                        }
                    },
                    (error) => {
                        console.error('Error fetching document:', error);
                    }
                );

                return () => {
                    unsubscribe();
                };
            } else {
                // console.log('Logged Out');
                setUser(null);
            }
        });
    }, []);

    return (
        <RegUserInfo.Provider value={{ user, setUser }}>
            {children}
        </RegUserInfo.Provider>
    );
};
export default LoggedUser;

import { useState, useEffect, createContext } from 'react';
import {
    db,
    collection,
    query,
    onSnapshot,
    doc,
    setDoc,
    deleteDoc,
    onAuthStateChanged,
    auth,
} from '../Firebase/FirebaseConfig';

export const GetAddedUsers = createContext();

const GetAddedUsersProvider = ({ children }) => {
    const [currentChatUser, setCurrentChatUser] = useState();

    const [addedUsers, setAddedUsers] = useState([]);

    const addNewUser = (addUser ) => {
        onAuthStateChanged(auth, (loggedInUser) => {
            if (loggedInUser) {
                try {
                    const contactedUsersRef = doc(
                        db,
                        'users',
                        loggedInUser.uid,
                        'contactedUsers',
                        addUser.id
                    );
                    setDoc(contactedUsersRef, addUser);

                } catch (error) {
                    console.error('Error adding document: ', error);
                }
            }
        });
    };
    const removeAddedUser = (userIdToRemove) => {
        const updatedUsers = addedUsers.filter(user => user.id !== userIdToRemove);
        setAddedUsers(updatedUsers);

        // Remove the user from the database
        onAuthStateChanged(auth, (loggedInUser) => {
            if (loggedInUser) {
                const contactedUsersRef = doc(
                    db,
                    'users',
                    loggedInUser.uid,
                    'contactedUsers',
                    userIdToRemove // Assuming userIdToRemove is the ID of the user to remove
                );
                deleteDoc(contactedUsersRef)
                    .then(() => {
                        console.log('Document successfully deleted from database!');
                    })
                    .catch((error) => {
                        console.error('Error removing document: ', error);
                    });
            }
        });
    };

    const GetAddeUserCollection = () => {
        onAuthStateChanged(auth, (loggedInUser) => {
            if (loggedInUser) {
                const q = query(
                    collection(db, 'users', loggedInUser.uid, 'contactedUsers')
                );

                onSnapshot(q, (querySnapshot) => {
                    const getSubCollection = [];
                    querySnapshot.forEach((doc) => {
                        getSubCollection.push({ ...doc.data(), id: doc.id });
                    });
                    setAddedUsers(getSubCollection);
                });
            }
        });
    };
    useEffect(() => {
        GetAddeUserCollection();
    }, []);

    return (
        <GetAddedUsers.Provider
            value={{ addNewUser, addedUsers, currentChatUser, setCurrentChatUser, removeAddedUser }}
        >
            {children}
        </GetAddedUsers.Provider>
    );
};

export default GetAddedUsersProvider;
import { useContext, useState } from 'react';
import {
    db,
    collection,
    query,
    where,
    onSnapshot,
} from '../Firebase/FirebaseConfig';
import { createContext } from 'react';

export const GetAllUsers = createContext();

const GetAllUsersProvider = ({ children }) => {
    const [userCollection, setUserCollection] = useState([]);

    const fetchData = async (newUserQuery) => {
        let path = '';

        try {
            if (newUserQuery === "all") {
                path = query(collection(db, 'users'));
            } else {
                const isEmailSearch = newUserQuery.trim().endsWith('@gmail.com');

                if (isEmailSearch) {
                    path = query(
                        collection(db, 'users'),
                        where('email', '==', newUserQuery.trim())
                    );
                } else {
                    path = query(
                        collection(db, 'users'),
                        where('name', '==', newUserQuery.trim())
                    );
                }
            }

            onSnapshot(path, (querySnapshot) => {
                const users = [];
                querySnapshot.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id });
                });
                setUserCollection(users);
            });
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <GetAllUsers.Provider value={{ userCollection, fetchData }}>
            {children}
        </GetAllUsers.Provider>
    );
};

export default GetAllUsersProvider;
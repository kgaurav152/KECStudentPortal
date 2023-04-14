import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

return (
    <AuthContext.Provider

        value={{
            user,
            setUser,
            login: async (email, password) => {
             try {
                    await auth().signInWithEmailAndPassword (email, password);
                } catch (e) {
                    alert("Either Email or Password is Wrong..Please Try Again!");
                }
            },

            register: async (email, password, name) => {
             try {
                    const result = await auth().createUserWithEmailAndPassword (email, password);
                    const user = result.user;
                    await user.updateProfile({
                      displayName: name,
                    });
                    alert("Signup successful!");
                } catch (e) {
                    alert("Something went wrong..Please Try Again!");
                }
            },
            
            logout: async () => {
             try {
                await auth().signOut();
             } catch (e) {
                alert("Something went wrong..Please Try Again!");
             }
            },
            
            forgotPassword: async (email) => {
             try {
                await auth().sendPasswordResetEmail(email);
                alert(`A reset link has been sent to ${email}.`);
                return "hello";
                } catch (e) { 
                alert("User Not Found.. Try Again!");
                } 
            },
        }} >
        {children}
    </AuthContext.Provider>
 );
};
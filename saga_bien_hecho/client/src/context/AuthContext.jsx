import React, { createContext, useState, useContext, Children } from "react"; // Asegúrate de importar Children de React
import { RegisterRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const signup = async (user) => {
        try {
            const res = await RegisterRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticate(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signup,
                user,
                isAuthenticate
            }}
        >
            {children} {/* Utiliza la prop children para renderizar los componentes hijos */}
        </AuthContext.Provider>
    );
};

import React, { createContext, useState, useContext, useEffect } from "react";
import { RegisterRequest, loginRequest, verifyTokenrequest } from "../api/auth";
import Cookies from 'js-cookie'

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
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) => {
        try {
            const res = await RegisterRequest(user);
            // console.log(res.data);
            setUser(res.data);
            setIsAuthenticate(true);
        } catch (error) {
            // console.log(error.response.data)
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors(error.response.data.msg)
        }

    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            // console.log(res)
            setIsAuthenticate(true)
            setUser(res.data)
        } catch (error) {
            // console.log(error.response)
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors(error.response.data.msg)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticate(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenrequest(cookies.token);
                // console.log(res);
                if (!res.data) return setIsAuthenticate(false);
                setIsAuthenticate(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticate(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                loading,
                user,
                isAuthenticate,
                errors
            }}
        >
            {children} {/* Utiliza la prop children para renderizar los componentes hijos */}
        </AuthContext.Provider>
    );
};

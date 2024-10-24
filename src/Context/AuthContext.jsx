import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    }

    return <AuthContext.Provider value={{ user, login, logout, setUser }}>
        { children }
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider };
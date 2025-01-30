import { createContext, useContext, useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';
import React from "react";
import { useNavigation } from "expo-router";

const authContext = createContext<any>(null);

SplashScreen.preventAutoHideAsync();

export default ({ children }: { children: React.ReactNode }) => {
    const { navigate } = useNavigation();
    const [user, setUser] = useState<any>();
    useEffect(() => {
        (async () => {
            let user = await SecureStore.getItemAsync("user");
            if (user) {
                return setUser(user);
            }
            navigate("login");
            SplashScreen.hide();
        })();
    }, [])
    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(authContext);
}
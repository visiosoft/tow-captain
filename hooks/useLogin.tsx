import SecureStore from "expo-secure-store";
import {useNavigation} from "expo-router"
import { useState } from "react";
export default () => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(false);
    const login = async () => {
        try {
            setLoading(true);
            let response = await fetch("https://cartowing-fefzgsd3huazfmfu.centralus-01.azurewebsites.net/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                let user = await response.json();
                await SecureStore.setItemAsync("user", user);
                navigate("(tabs)/index")
            }    
        } catch (error) {
            console.log("error while logging in",error);
        } finally {
            setLoading(false);
        }
    }
    return { login, loading };
};
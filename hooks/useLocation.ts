import { useEffect, useState } from "react";
import * as Location from 'expo-location';
export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<undefined | string>();
    const [location, setLocation] = useState<undefined | Location.LocationObject>();
    useEffect(() => {
        async function getCurrentLocation() {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError("Permission to access location was denied.This App can't work without accessing Location.");
                    setIsLoading(false);
                    return;
                }
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
                setIsLoading(false);
                setInterval(async () => {
                    let location = await Location.getCurrentPositionAsync({});
                    fetch("http://83.147.243.105/api/Location", {
                        method: "PATCH",
                        headers: {
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify({
                            "id": "",
                            "driverId": "5389",
                            "latitude": location.coords.latitude,
                            "longitude": location.coords.longitude,
                            "timestamp": Date.now().toLocaleString
                        })
                    })
                    setLocation(location);
                }, 5000);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setError("Something went Wrong!")
            }
        }
        getCurrentLocation();
    }, []);
    return { isLoading, location, error };
};
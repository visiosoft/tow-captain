import React, { useRef, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocation from "@/hooks/useLocation";
export default function HomeScreen() {
  const [isFetching, setIsFetching] = useState({status:false,id:-1});
  const [isSearching, setIsSearching] = useState(false);
  const { error, isLoading, location } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const mapRef = useRef<MapView>();

  const fetchSuggestions = async (query) => {
    try {
      setIsSearching(true);
      const apiKey = "AlzaSyg95zr55BhVu304BjQec0x3tQ4c3RVoT1n";
      const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${query}&offset=3&language=en&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data?.predictions) {
        const filteredSuggestions = data.predictions.filter(
          (suggestion) => suggestion.place_id
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    } finally {
      setIsSearching(false);
    }
  };

  const fetchPlaceDetails = async (placeId) => {
    try {
      setIsFetching({status:true,id:placeId});
      const apiKey = "AlzaSygAENtYTogg8TuK_xIMaSaK6zBhIFb0ntX";
      const url = `https://maps.gomaps.pro/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const location = data.result.geometry.location;
      return location;
    } catch (err) {
      console.error("Error fetching place details:", err);
    } finally {
      setIsFetching({status:false,id:-1});
    }
  };

  const handleSuggestionPress = async (placeId) => {
    let location = await fetchPlaceDetails(placeId);
    mapRef.current?.animateToRegion({ latitude: location.lat, longitude: location.lng, latitudeDelta: 0.0975, longitudeDelta: 0.0953 });
  };

  if (isLoading) {
    return (
      <View className="w-full h-full justify-center items-center">
        <ActivityIndicator size="large" animating={true} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="w-full h-full justify-center items-center">
        <Text className="text-red-500">Something went wrong make sure location services are enabled!</Text>
      </View>
    );
  }

  return (
    <View className="h-full w-full bg-white p-7 gap-y-3 justify-evenly items-center">
      <Text className="bg-[#EDF7ED] px-5 py-2 text-[#418944] rounded font-bold">Available</Text>
      <View className="relative items-center w-full">
        {/* Search Input */}
        <View className="relative w-full">
          <TextInput
            value={searchQuery}
            onChangeText={(text) => {
              setSearchQuery(text);
              fetchSuggestions(text);
            }}
            className="w-full border border-gray-300 rounded-lg bg-white p-4 pr-12"
            placeholder="Enter your password"
          />
          {
            isSearching && (
              <View className="absolute right-3 top-1/2 -translate-y-1/2">
                <ActivityIndicator size="small" color="gray" />
              </View>
            )
          }
        </View>

        {suggestions.length > 0 && searchQuery && (
          <View style={{ height: Dimensions.get("screen").height * 0.2 }} className="absolute top-16 w-full bg-white rounded-lg shadow-2xl z-30">
            <ScrollView className="px-3 py-2">
              {suggestions.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => handleSuggestionPress(item.place_id)}
                    className="p-4 active:bg-gray-200 flex-row items-center justify-between"
                  >
                    <Text className="text-lg text-gray-800">{item.description}</Text>
                    {isFetching.status && isFetching.id == item.place_id && (
                      <ActivityIndicator size="small" color="gray" className="ml-2" />
                    )}
                  </TouchableOpacity>
                  {index < suggestions.length - 1 && (
                    <View className="h-[1px] bg-gray-200" />
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
      <View className="w-full h-4/5">
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
            latitudeDelta: 0.09867,
            longitudeDelta: 0.09435
          }}>
          <Marker coordinate={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude
          }} />
        </MapView>
      </View>
    </View>
  );
}
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons,FontAwesome5 } from "@expo/vector-icons";

const menuItems = [
  { title: "Extend Rental", icon: "car-clock", library: MaterialCommunityIcons },
  { title: "Additional Services", icon: "tools", library: MaterialCommunityIcons },
  { title: "Non-Rental Invoice", icon: "file-alt", library: FontAwesome5 },
  { title: "Rental Invoice", icon: "file-invoice", library: FontAwesome5 },
  { title: "Services & Maintenance", icon: "wrench", library: FontAwesome5 },
  { title: "Accident & Breakdown", icon: "car-crash", library: FontAwesome5 },
  { title: "Return My Car", icon: "car-arrow-left", library: MaterialCommunityIcons },
  { title: "Inbox", icon: "inbox", library: FontAwesome5 }
];

const index = () => {
  return (
    <ScrollView contentContainerStyle={{alignItems:"center"}}>
      <Image resizeMode='cover' source={require("@/assets/images/truck-lobby.jpg")} style={{width:wp("100%"),height:hp("40%")}} />
      <View style={{ position:"relative",backgroundColor: "white", height: hp("40%"), width: wp("90%"), marginTop: hp("-10%") }} className='items-center rounded-lg z-10 shadow-md'>
        <View style={{ height: hp("7%"), width: hp("7%"), position: 'absolute', backgroundColor:"#F2F2F2",top:"32%",left:"-7%"}} className='rounded-full'/>
        <View style={{ height: hp("7%"), width: hp("7%"), position: 'absolute', backgroundColor: "#F2F2F2", top: "32%", right: "-7%" }} className='rounded-full' />
        <View style={{ width: "85%", height: 2, borderStyle: "dashed", borderColor: "#d5d7d6",borderWidth: 1,position:"absolute",top:"41%"}} />
        <View style={{ flex:1,justifyContent:"space-evenly",paddingHorizontal: hp("5%"), paddingVertical: hp("1%") }}>
          <View className='w-full flex-row justify-between'>
            <Text style={{ fontSize: hp("2.5%"), color:"#1985E8" }} className='font-semibold'>Sunny 1.5L (2023)</Text>
            <Text style={{ fontSize: hp("2.5%"), color:"#1985E8" }} className='font-semibold'>F367566</Text>
          </View>
          <Text style={{ color:"#6B6A6F",fontSize:hp("2.5%")}}>Car No.</Text>
          <Text style={{ color: "#6B6A6F",fontSize: hp("2.5%"),marginBottom:hp("2%") }}>54656457JHG</Text>
          <View style={{}} className='w-full flex-row justify-between'>
            <Text style={{ fontSize: hp("2.5%"), color:"#6B6A6F" }}>Pickup</Text>
            <Text style={{ fontSize: hp("2.5%"), color:"#6B6A6F" }}>Return</Text>
          </View>
          <View className='w-full flex-row justify-between'>
            <Text style={{ fontSize: hp("2.5%"), color: "#6B6A6F" }} className='font-semibold'>20-Sep-3024</Text>
            <Text style={{ fontSize: hp("2.5%"), color: "#6B6A6F" }} className='font-semibold'>08-Oct-2023</Text>
          </View>
          <View className='w-full flex-row justify-between'>
            <Text style={{ fontSize: hp("2.5%"), color: "#6B6A6F" }}>10:00 AM</Text>
            <Text style={{ fontSize: hp("2.5%"), color: "#6B6A6F" }}>01:36 PM</Text>
          </View>
        </View>
        <TouchableOpacity style={{width:"100%",backgroundColor: "#F94439", paddingVertical: hp("2%"),borderBottomLeftRadius:7,borderBottomRightRadius:7 }}>
          <Text style={{ color:"#FFF3F4",fontSize:hp("2.5%")}} className='font-bold text-center'>Booking Closed</Text>
        </TouchableOpacity>
      </View>
      <View style={{width:wp("90%"),marginTop:hp("5%"),gap:wp("3%"),flexWrap:"wrap"}} className='w-full flex-row'>
        {
          menuItems.map((item,index) => (
            <TouchableOpacity key={index} style={{ alignItems:"center",justifyContent:"center",height: hp("15%"), borderRadius: 10,width:wp("43.5%") }} className='shadow-md bg-white'>
              <item.library name={item.icon} size={30} color="#1985E8" />
              <Text className='text-center p-3'>{item.title}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={{width:wp("90%"),padding:hp("2"),borderRadius:10,marginVertical:hp("4%"),flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"white"}} className='shadow-md'>
        <Text style={{fontSize:hp("2%")}} className='font-semibold'>Reach Us:</Text>
        <View className='flex-row'>
          <FontAwesome5 name="phone" size={24} color="#6B6A6F" />,
          <MaterialCommunityIcons style={{ paddingHorizontal: wp("2%") }} name="message-text" size={24} color="#6B6A6F" />,
          <FontAwesome5 name="whatsapp" size={24} color="#6B6A6F" />
        </View>
      </View>
    </ScrollView>
  )
}

export default index















































































































































// import React, { useRef, useState } from "react";
// import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Dimensions } from "react-native";
// import MapView, { Marker } from "react-native-maps";
// import useLocation from "@/hooks/useLocation";
// export default function HomeScreen() {
//   const [isFetching, setIsFetching] = useState({ status: false, id: -1 });
//   const [isSearching, setIsSearching] = useState(false);
//   const { error, isLoading, location } = useLocation();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const mapRef = useRef<MapView>();

//   const fetchSuggestions = async (query) => {
//     try {
//       setIsSearching(true);
//       const apiKey = "AlzaSyg95zr55BhVu304BjQec0x3tQ4c3RVoT1n";
//       const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${query}&offset=3&language=en&key=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data?.predictions) {
//         const filteredSuggestions = data.predictions.filter(
//           (suggestion) => suggestion.place_id
//         );
//         setSuggestions(filteredSuggestions);
//       } else {
//         setSuggestions([]);
//       }
//     } catch (err) {
//       console.error("Error fetching suggestions:", err);
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   const fetchPlaceDetails = async (placeId) => {
//     try {
//       setIsFetching({ status: true, id: placeId });
//       const apiKey = "AlzaSygAENtYTogg8TuK_xIMaSaK6zBhIFb0ntX";
//       const url = `https://maps.gomaps.pro/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       const location = data.result.geometry.location;
//       return location;
//     } catch (err) {
//       console.error("Error fetching place details:", err);
//     } finally {
//       setIsFetching({ status: false, id: -1 });
//     }
//   };

//   const handleSuggestionPress = async (placeId) => {
//     let location = await fetchPlaceDetails(placeId);
//     mapRef.current?.animateToRegion({ latitude: location.lat, longitude: location.lng, latitudeDelta: 0.0975, longitudeDelta: 0.0953 });
//   };

//   if (isLoading) {
//     return (
//       <View className="w-full h-full justify-center items-center">
//         <ActivityIndicator size="large" animating={true} />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View className="w-full h-full justify-center items-center">
//         <Text className="text-red-500">Something went wrong make sure location services are enabled!</Text>
//       </View>
//     );
//   }

//   return (
//     <View className="h-full w-full bg-white p-7 gap-y-3 justify-evenly items-center">
//       <Text className="bg-[#EDF7ED] px-5 py-2 text-[#418944] rounded font-bold">Available</Text>
//       <View className="relative items-center w-full">
//         {/* Search Input */}
//         <View className="relative w-full">
//           <TextInput
//             value={searchQuery}
//             onChangeText={(text) => {
//               setSearchQuery(text);
//               fetchSuggestions(text);
//             }}
//             className="w-full border border-gray-300 rounded-lg bg-white p-4 pr-12"
//             placeholder="Enter your password"
//           />
//           {
//             isSearching && (
//               <View className="absolute right-3 top-1/2 -translate-y-1/2">
//                 <ActivityIndicator size="small" color="gray" />
//               </View>
//             )
//           }
//         </View>

//         {suggestions.length > 0 && searchQuery && (
//           <View style={{ height: Dimensions.get("screen").height * 0.2 }} className="absolute top-16 w-full bg-white rounded-lg shadow-2xl z-30">
//             <ScrollView className="px-3 py-2">
//               {suggestions.map((item, index) => (
//                 <View key={index}>
//                   <TouchableOpacity
//                     onPress={() => handleSuggestionPress(item.place_id)}
//                     className="p-4 active:bg-gray-200 flex-row items-center justify-between"
//                   >
//                     <Text className="text-lg text-gray-800">{item.description}</Text>
//                     {isFetching.status && isFetching.id == item.place_id && (
//                       <ActivityIndicator size="small" color="gray" className="ml-2" />
//                     )}
//                   </TouchableOpacity>
//                   {index < suggestions.length - 1 && (
//                     <View className="h-[1px] bg-gray-200" />
//                   )}
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         )}
//       </View>
//       <View className="w-full h-4/5">
//         <MapView
//           ref={mapRef}
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: location?.coords.latitude,
//             longitude: location?.coords.longitude,
//             latitudeDelta: 0.09867,
//             longitudeDelta: 0.09435
//           }}>
//           <Marker coordinate={{
//             latitude: location?.coords.latitude,
//             longitude: location?.coords.longitude
//           }} />
//         </MapView>
//       </View>
//     </View>
//   );
// }
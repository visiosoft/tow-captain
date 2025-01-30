import { Stack } from "expo-router";
import "@/global.css";
import AuthContext from "@/contexts/authContext";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <AuthContext>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
      </AuthContext>
    </GluestackUIProvider>
  );
}
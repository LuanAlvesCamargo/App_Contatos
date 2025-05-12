import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "@/theme";
export default function Loading() {
    return (
        <ActivityIndicator style={styles.loading} color={theme.colors.blue} />
    )
}
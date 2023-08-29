import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./config/colors";
import HomeScreen from "./screens/HomeScreen";
import CoffeeDetailsScreen from "./screens/CoffeeDetailsScreen";
export default function App() {
	return (
		<View style={styles.container}>
			<HomeScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.dark,
	},
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
	TextInput,
	SafeAreaView,
	Pressable,
	TouchableOpacity
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


const Login = () => {
	const [ email, onChangeMail ] = React.useState(null);
	const [ password, onChangePassword ] = React.useState(null);
	const [checked, onChange] = useState(false);
	const [focusEmail, setFocusEmail] = useState(false);
	const [focusPassword, setFocusPassword] = useState(false);


	function onCheckmarkPress() {
		onChange(!checked);
	}



  return (
    <View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
				source={require("../assets/logo-white.png")}
				style={{ width: '100%', height: '100%', margin: 'auto', resizeMode: "contain"}}
				/>
			</View>
			<Text style={styles.label}>Email</Text>
      <TextInput 
				style={focusEmail ? styles.inputFocus : styles.input}
        onChangeText={text => onChangeMail(text)}
        /* placeholder="e-mail address" */
        keyboardType="email-address"
 				onFocus={() => setFocusEmail(true)}
				onBlur={() => setFocusEmail(false)} 
      />
			<Text style={styles.label}>Password</Text>
			<TextInput 
				style={focusPassword ? styles.inputFocus : styles.input}
        onChangeText={text => onChangePassword(text)}
        /* placeholder="password" */
        keyboardType="visible-password"
				secureTextEntry={true}
				onFocus={() => setFocusPassword(true)}
				onBlur={() => setFocusPassword(false)}
      />
			<View style={styles.checkboxContainer}>
			<Pressable
				style={[styles.checkboxBase, checked && styles.checkboxChecked]}
				onPress={onCheckmarkPress}>
				{checked && <Ionicons name="checkmark" size={24} color="white" />}
			</Pressable>
			<Text style={styles.label}> Remember me ?</Text>
			</View>
			<TouchableOpacity
			style={styles.button}
					color="#68D0FC"
					onPress=""
					/* disabled={true} */
			>
				<Text style={styles.textButton}>Log in</Text>
			</TouchableOpacity>
			<View style={styles.panda}>
				<Image
				source={require("../assets/ninja-panda-hello.png")}
				style={{ width: 80, height: 60 }}
			/>
			</View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		paddingTop: 91,
		paddingBottom: 91,
		paddingLeft: 50,
		paddingRight: 50,
		backgroundColor: "#292929",
	},
	imageContainer: {
		height: 51,
		marginBottom: 67,
	},
	label: {
		color: "#FFFFFF",
		fontSize: 18
	},
	input: {
		backgroundColor: "#ECEFF1",
		borderRadius: 10,
		height: 53,
		marginBottom: 20,
		padding: 10
	},
	inputFocus: {
		backgroundColor: "#ECEFF1",
		borderRadius: 10,
		height: 53,
		marginBottom: 20,
		borderWidth: 2,
		borderColor: "#FE7F2D",
		padding: 10

	},
	button: {
		backgroundColor: "#68D0FC",
		borderRadius: 10,
		marginBottom: 40,
	},
	textButton: {
		color: "black",
		fontSize: 24,
		textAlign: "center",
		padding: 30,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
	checkboxContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 50,
		marginTop: 10
	},
	checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ECEFF1',
    backgroundColor: '#ECEFF1',
  },

  checkboxChecked: {
		borderColor: '#68D0FC',
    backgroundColor: '#68D0FC',
  },
	panda: {
		display: "flex",
		flexDirection: "row-reverse",
	}
});

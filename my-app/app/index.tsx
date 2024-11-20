import { Link } from 'expo-router'
import { useState } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import Google from '../assets/images/Google'
import Shape from '../assets/images/Shape'

export default function LogIn() {
	const [flag, setFlag] = useState(false)
	const [valueInp, setvalueInp] = useState({
		email: '',
		pwd: '',
	})
	const resp = (value: any, name: string) => {
		setvalueInp({ ...valueInp, [name]: value })
	}
	const checkInps = () => {
		console.log(valueInp)
	}

	return (
		<>
			<View style={styles.wrapper}>
				<Text style={styles.title}>Login</Text>

				<View style={styles.googleBtnWrapper}>
					<TouchableOpacity style={styles.btnGoogle}>
						<Google></Google>
						<Text>Sign in with Google</Text>
					</TouchableOpacity>

					<View style={styles.signin}>
						<View style={styles.line}></View>
						<Text style={styles.signin_text}>or sign in with</Text>
						<View style={styles.line}></View>
					</View>
				</View>

				<View style={styles.inp_wrapper}>
					<Text style={styles.text_inp}>Email Addess</Text>
					<TextInput
						placeholder='Rhebhek@gmail.com'
						placeholderTextColor={'#BABABA'}
						style={styles.inp}
						onChangeText={value => resp(value, 'email')}
					></TextInput>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Text style={styles.text_inp}>Password</Text>
						<Text style={styles.text_forgot}>Forgot Password</Text>
					</View>
					<TextInput
						placeholder='Password'
						secureTextEntry={true}
						placeholderTextColor={'#BABABA'}
						style={styles.inp}
						onChangeText={value => resp(value, 'pwd')}
					></TextInput>

					<View style={styles.containerCheckbox}>
						<TouchableOpacity
							onPress={() => setFlag(!flag)}
							style={styles.checkbox}
						>
							{flag ? (
								<Shape style={styles.checkboxChecked}></Shape>
							) : (
								<View style={styles.checkboxUnchecked} />
							)}
						</TouchableOpacity>
						<Text style={styles.text_signed}>Keep me signed in</Text>
					</View>

					<TouchableOpacity style={styles.btnLogin} onPress={checkInps}>
						<Text style={{ color: '#FEFEFE' }}>Login</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{ flexDirection: 'row', marginTop: 40, alignItems: 'center' }}
				>
					<Text style={styles.text_signed}>Don’t have an Account?</Text>
					<Link href={'/signup'}>
						<Text style={styles.text_signedLink}> Sign up here</Text>
					</Link>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 28,
		gap: 40,
		backgroundColor: '#ffffff',
	},
	googleBtnWrapper: {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		gap: 24,
	},
	title: {
		fontFamily: 'SF Pro Display',
		fontSize: 24,
		fontWeight: 700,
	},
	btnGoogle: {
		backgroundColor: '#F4F7FF',
		flexDirection: 'row',
		gap: 8,
		width: '100%',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
	},
	line: {
		backgroundColor: '#CBD2E0',
		height: 1,
		width: '35%',
	},
	signin: {
		flexDirection: 'row',
		width: '100%',
		gap: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signin_text: {
		fontFamily: 'SF Pro Display',
		fontSize: 14,
		fontWeight: 500,
		color: ' #4B5768',
	},
	inp_wrapper: {
		flexDirection: 'column',
		width: '100%',
		gap: 5,
	},
	text_inp: {
		fontFamily: 'SF Pro Display',
		fontSize: 14,
		fontWeight: 400,
		color: '#000000BF',
	},
	text_forgot: {
		fontFamily: 'SF Pro Display',
		fontSize: 14,
		fontWeight: 400,
		color: '#1443C3',
	},
	text_signed: {
		fontFamily: 'SF Pro Display',
		fontSize: 14,
		fontWeight: 400,
		color: ' #191D23',
	},
	text_signedLink: {
		fontFamily: 'SF Pro Display',
		fontSize: 14,
		fontWeight: 400,
		color: '#1443C3',
	},
	inp: {
		backgroundColor: '#fffff',
		borderColor: '#CBD2E0',
		borderWidth: 1,
		borderStyle: 'solid',
		width: '100%',
		flexDirection: 'row',
		gap: 8,
		padding: 16,
		borderRadius: 6,
	},
	containerCheckbox: {
		width: '90%',
		flexDirection: 'row',
		margin: 20,
		alignItems: 'center',
	},
	checkbox: {
		width: 20,
		height: 20,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	checkboxChecked: {
		width: 18,
		height: 18,
	},
	checkboxUnchecked: {
		borderWidth: 1,
		borderColor: '#12ae97',
		borderRadius: 3,
		width: 18,
		height: 18,
		backgroundColor: '#FFF',
	},
	label: {
		fontSize: 16,
	},
	btnLogin: {
		backgroundColor: '#1443C3',
		color: '#FEFEFE',
		flexDirection: 'row',
		width: '100%',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
	},
})

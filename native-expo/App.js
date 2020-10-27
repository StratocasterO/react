import React, {useState} from 'react';
import { StyleSheet, Text, View , Image, FlatList, StatusBar, Picker, } from 'react-native';

const imagen = require ('./assets/pablo-monteserin.png');

export default function App() {

	const [op, setOp] = useState("opción 1");

	return (
		
		<View style={styles.container}>
		<StatusBar hidden />
		
		<Text style={styles.text}>Me cago en tus muertos</Text>
		
		<FlatList
		data={[{key: 'Elemento 1'}, {key: 'Elemento 2'}]}
		renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
		/>

		<Text style={styles.text}>Se ha seleccionado la {op}</Text>
		
		<Picker selectedValue={op} 
				style={{height: 50, width: "80%", color: "white", borderColor: "white", borderWidth: 1}} 
				onValueChange={(val) => {
					setOp(val);
				}}>
			<Picker.Item label="Opción 1" value="opción 1"/>
			<Picker.Item label="Opción 2" value="opción 2"/>
			<Picker.Item label="Opción 3" value="opción 3"/>
		</Picker>
		
		<Image style={styles.pablo} source={imagen} />
		</View>
		);
	}
	
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: 'black',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white'
		},
		pablo:{
			width: '50%',
			height: '50%',
			bottom: -50
		},
		text:{
			color: 'white'
		}
	});
import { SafeAreaView, StyleSheet, Text, View} from 'react-native-web'
import  { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './src/navigation/NavigationStack'

const LoginScreen = () => {
  return (
    <NavigationContainer>
    <NavigationStack/>
     </NavigationContainer> 
  
  ) 
}
const FlexDimesionsBasics = () => {

  <View style={{flex:1}}>
    <View style ={{ flex : 1, backgroundColor: 'powderblue'}}/>
  </View>

}





    
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroudColor:'#fff',
  alienIntems:'center',
  justifyContent: 'center'
  
},
title: {
  marginTop: 16,
  paddingVertical: 8,
  borderWidth: 4,
  borderColor: '#20232a',
  borderRadius: 6,
  backgroundColor: '#61dafb',
  color: '#20232a',
  textAlign: 'center',
  fontSize: 30,
  fontWeight: 'bold',
},
})
export default LoginScreen

//import LoginForm from './src/component/LoginForm'
//import Saludar from './src/component/saludar'
// <SafeAreaView>
//<View style={styles.container} >
//<Text style={styles.title}> 
//App en blanco </Text>
//<LoginForm />
//<Saludar name='Viviana'/>
//<Saludar name='Juan'/>
//<Saludar />
//</View>
//</SafeAreaView>//
//source={require('./assets/imagen1.jpg')}

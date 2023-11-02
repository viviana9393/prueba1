import { View, Text, Button, SafeAreaView,Image} from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
   const { navigation } = props
    const goToLogin =() => {
    navigation.navigate('Login') 

}
    return (
        <View style={{heigth:'100%', heigth: '50%',backgroundColor: 'powderblue',}}>
    
        
    <Text style ={ {marginTop:16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
     backgroundColor: '#eab0d',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',}}> 
   Ecommerce ADSO </Text>
          

            <Image   
  source={{uri: 'https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg'}}
  style={{width: 393, height: 700,margin:0,left:0}}
    />           
        <Button onPress={goToLogin} title='Ir a Login' />
      
        </View>
    )
}



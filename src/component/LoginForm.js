import {TextInput,Button,Text,Image, View} from 
'react-native'


export default function LoginForm() {
    return (
     <View style={{
        width: 393,
        height: 800,
        backgroundColor: '#fff',
        
      }} >
       <Image   
  source={{uri: 'https://img.freepik.com/vector-premium/mancha-acuarela-rosa_1102-1107.jpg'}}
  style={{width: 150, height: 150,margin:0,left:270}}
    />

<Text style={{fontSize: 30, textAlign: 'center', top:-90,  fontWeight: 'bold', fontFamily:'fantasy'}}> Iniciar Sesion </Text> 

        <Image
  source={{uri: 'https://c0.klipartz.com/pngpicture/971/990/gratis-png-iconos-de-computadora-inicio-de-sesion-persona-usuario-pessoa.png'}}
  style={{width: 40, height: 40,margin:10, borderRadius:50,  top:95}}
/>
    <Text style={{fontSize: 25 ,color: '#20232a', top: -10,  position: 'float', textAlign: 'center', fontFamily:'fantasy',}}>Usuario </Text>   
    <TextInput style={{fontSize: 15,color: '#4b4b4b',textAlign: 'center', 
    borderRadius: 6,lineHeight: 60,  backgroundColor: '#eab0d7', }} placeholder='Ingrese su usuario' />
    <Image
  source={{uri: 'https://e7.pngegg.com/pngimages/684/839/png-clipart-password-computer-icons-unlock-icon-cdr-area.png'}}
  style={{width: 40, height: 40, margin:0, borderRadius:50,  top:85}}
/>
    <Text style={{fontSize: 25 ,color: '#20232a',top: -10, textAlign: 'center', fontFamily:'fantasy'}}>Contraseña</Text>  
    <TextInput  style={{fontSize: 15,color: '#4b4b4b',textAlign: 'center',borderRadius: 6,lineHeight: 60,backgroundColor: '#eab0d7'}} 
    placeholder='Ingrese su contraseña' /><br></br><br></br>
    <Button  title='Entrar' onPress={()=> console.log
    ('Pesionando')
    } />
<br></br><br></br>

<Text style={{fontSize: 20 ,color: '#20232a', top: -10,  position: 'float', textAlign: 'center', fontFamily:'arial',}}> Inicia Sesión Con</Text>  
<Image
  source={{uri: 'https://img.freepik.com/vector-premium/icono-aplicacion-facebook-logotipo-redes-sociales-ilustracion-vectorial-meta_277909-402.jpg'}}
  style={{width: 40, height: 40,margin:10, borderRadius:50, left: 100,   }}
/>
<Image
  source={{uri: 'https://cdn-icons-png.flaticon.com/512/2504/2504739.png'}}
  style={{width: 40, height: 40,margin:10, borderRadius:50, left: 170, top:-60}}
/>
<Image
  source={{uri: 'https://cdn-icons-png.flaticon.com/512/80/80676.png'}}
  style={{width: 40, height: 40,margin:10, borderRadius:50, left: 250, top:-120}}
/>  
     </View>
)
}


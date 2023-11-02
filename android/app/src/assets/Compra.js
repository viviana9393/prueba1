import { View, Image ,} from 'react-native'
import React from 'react'

export default function Compra(){
    return (
        <View>
            <Image
source={{uri:'https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg'}}
style={{ 
width:200, 
heigth: 200, 
marginBottom: 0, 
resizeMode: 'contain',
}}
/>
 
        </View>
    )
    }
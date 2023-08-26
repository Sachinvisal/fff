import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../component/Button';

const Dash = ({ navigation }) => {
  return (
  
       <ImageBackground source={require('../assets/red-chilli.jpg')} style={{height:'100%',width:'100%' }}>
            <View style={{marginVertical:100,alignItems:'center'}}>
                <Text style={{color:'white',fontSize:64, fontWeight:'500',marginVertical:10}}>
                    Let's Start
                </Text>
                <View style={{backgroundColor:'white', height:600, width:500, borderTopLeftRadius:400, paddingTop:100,alignItems:'center'}}>
                    <Text style={{fontSize:35,color:COLORS.primary,fontWeight:'600'}}>HOME</Text>

                    <Button
                    title="Identify Plant Deases"
                    onPress={() => navigation.navigate("Deases")}
                    filled
                    style={{
                        marginTop: 38,
                        marginBottom: 4,
                        width:'50%'
                    }}
                    />

                    <Button
                    title="Chili Price Prediction"
                    onPress={() => navigation.navigate("Price")}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        width:'50%'
                    }}
                    />

                </View>
                
            </View>              
       </ImageBackground>

   

   
    
    
    
  )
}

export default Dash
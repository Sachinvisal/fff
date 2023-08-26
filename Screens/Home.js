import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import Button from '../component/Button';

const Home = ({ navigation }) => {
  return (
    <LinearGradient
    style={{
        flex: 6
    }}
    colors={[COLORS.secondary, COLORS.primary]}>
      <View style={{flex:1}}>
         <View>
            <Image source={require("../assets/bellpeper.jpg")}
            style={{
              height:100,
              width:100,
              borderRadius: 20,
              position: "absolute",
              top: 90,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" }
            ]
            }}
            />

                    <Image
                         source={require("../assets/green-chili-peppers.jpg")}
                         style={{
                         height: 100,
                         width: 100,
                         borderRadius: 20,
                         position: "absolute",
                         top: 10,
                         left: 100,
                         transform: [
                             { translateX: 50 },
                             { translateY: 50 },
                             { rotate: "-65deg" }
                           ]
                           }}
                         />
            
                     <Image
                        source={require("../assets/red-hot-pepper-levitates-white-background.jpg")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 250,
                            left: -30,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-60deg" }
                            ]
                        }}
                      />

                     <Image
                        source={require("../assets/red-chilli-peppers.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 140,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                      /> 
                  <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 430,
                    width: "100%"
                }}>

                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get
                    </Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Started
                    </Text>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{
                            fontSize: 22,
                            color: COLORS.white,
                            marginVertical: 2
                        }}>Agro Diseases  </Text>
                       
                    </View>  

                     <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />        
                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                      <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>

                          <Pressable
                            onPress={() => navigation.navigate("Dash")}
                          >
                              <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                            </Pressable>
                    </View>
    
                  </View> 
         </View>

      </View>
   
    </LinearGradient>
  )
  
}

export default Home
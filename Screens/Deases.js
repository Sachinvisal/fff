import { View, Text,Image, PermissionsAndroid} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../component/Button';
// import { launchCamera } from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';
import  ImagePickerAsset  from 'expo-image-picker';

const Deases = () => {

  const [cameraPhoto, setCameraPhoto]= useState();
  let options={
    saveToPhotos: true,
    mediaType:'photo',
  };
 const openCamera = async () =>{
   const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  
   );
   if (granted === PermissionsAndroid.RESULTS.GRANTED){
     const result = await ImagePickerAsset.launchCamera(options)
     setCameraPhoto(result.assets[0].uri);
   }
 };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View  style={{ flex: 1, marginHorizontal: 22 }}>
      <View style={{ marginVertical: 22 }}>
      <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Identify Plant Prediction
              </Text>
      <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Diseases of chili plants can be identified here!
              </Text>
      </View>
      <View>
      <Text style={{}} >Upload Image:</Text>
      <View style={{
        alignItems:'center'
      }}>
      <Image
        source={{uri:cameraPhoto}}
        style={{
          height:300,
          width:300,
          borderRadius:300,
          borderColor:'black',
          borderWidth:2,
          
        }}
      />
      </View>
      <Button
            onPress={openCamera}
            title="Open Camera"
            filled
            style={{
            marginTop: 18,
            marginBottom: 4,
          }}   
       />
      <Button
            title="Upload"
            filled
            style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          />
      </View>
      </View>  
    </SafeAreaView>
  )
}

export default Deases
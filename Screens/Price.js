import { View, Text,Modal, TextInput, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import Button from '../component/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';

const ModalPopup = ({visible, children}) =>{
  const [showModel, setShowModel] = React.useState(visible);
 
  
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = ()=>{
    if(visible){
          setShowModel(true);
    }else{
      setShowModel(false);
    }
  }
  return(
    <Modal transparent visible={showModel}>
       <View style={styles.modalBackGround}>
        <View style={styles.modalContainer}>
             {children}
        </View>
       </View>
    </Modal>
  );
};

const Price = () => {
  const province=[
    { label:'Western Province',value:'western province'},
    { label:'Central Province',value:'central province'},
    { label:'Southern Province',value:'southern province'},
    { label:'Northern Province',value:'northern province'},
    { label:'Eastern Province',value:'eastern province'},
    { label:'North Western Province',value:'north western province'},
    { label:'North Central Province',value:'north central province'},
    { label:'Uva  Province',value:'uva  province'},
    { label:'Sabaragamuwa Province',value:'sabaragamuwa province'},
  ]
  const [isproOpen,setIsproOpen]=useState(false);
  const[currentproValue,setCurrentproValue]=useState();
  const items =[
    {label:'Bell Papers', value:'Bell papers'},
    {label:'Green Chili', value:'Green chili'},
    {label:'Banana Papers', value:'Banana papers'}
  ]
  const [isOpen,setIsOpen]=useState(false);
  const[currentValue,setCurrentValue]=useState();
  const[visible, setVisible]=React.useState(false);
  

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
                        Chili Price Prediction
              </Text>
              <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Here the future chili price can be predicted!
              </Text>
        </View>
        <View style={{ marginBottom: '5%' }}>   
            <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Chili Type
            </Text>
            <View >
                      <DropDownPicker 

                      items={items} 
                      open={isOpen}
                      setOpen={()=>setIsOpen(!isOpen)} 
                      value={currentValue}
                      setValue={(val)=>setCurrentValue(val)}
                      />  
            </View>
        </View>
            <View style={{ marginBottom: '5%' }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Number of Days</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your number of days '
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "100%"
                            }}
                        />
                  </View>
            </View>
            <View style={{ marginBottom: '5%' }}>   
              <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Province
              </Text>
              <View>
                      <DropDownPicker 
                      items={province} 
                      open={isproOpen}
                      setOpen={()=>setIsproOpen(!isproOpen)} 
                      value={currentproValue}
                      setValue={(val)=>setCurrentproValue(val)}
                      />  
              </View>
           </View>
            <View>
              <ModalPopup visible={visible}>
                <View style={{alignItems:'center'}}>
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                       <Image
                          source={require('../assets/x.png')}
                          style={{height: 30, width: 30}}
                        />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{marginVertical: 10, fontSize: 25, textAlign: 'center',color:COLORS.primary,fontWeight:'600'}}>
                {currentValue}
                </Text>
                <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center',color:COLORS.primary,fontWeight:'500'}}>
                          Rs.300.00
                </Text>
              </ModalPopup>
                <Button
                   onPress={()=> setVisible(true)}
                    title="Submitss"
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
const styles = StyleSheet.create({
  modalBackGround:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalContainer:{
    width:'80%',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:30,
    borderRadius:20,
    elevation:20
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
export default Price
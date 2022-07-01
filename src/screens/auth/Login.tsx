import React from 'react';
import { Button, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { Login } from '../../redux/Actions/authActions';


export type Props = {
  name: string;
  token: string;
};

const LoginScreen: React.FC<Props> = ({
  name,
  token,
}) => {
 
  const [email , setEmail] = React.useState("")
  const dispatch= useDispatch()

 
  const getNewUuid = () => uuid.v4().toLowerCase();

 const SignIn=(channelName:any,uuid:any)=>{
  
  var axios = require('axios');
  var data = '{\n    "channel\n}';
  
  var config = {
    method: 'get',
    url: `http://192.168.0.34:8080/rtc/+${channelName}+/publisher/uid/+${uuid}`,
    headers: { 
      'Content-Type': 'text/plain'
    },
    //data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
dispatch(Login(response.data.rtcToken))
  })
  .catch(function (error) {
    console.log(error);
  });
  
 }


  return (
    <View style={styles.container}>
      
        
      <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<TouchableOpacity style={styles.inputView} onPress={()=>SignIn(email,getNewUuid())}>
  <Text >Login</Text>

  </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }
});

export default LoginScreen;


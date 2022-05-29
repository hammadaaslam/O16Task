import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,Image,TouchableOpacity,KeyboardAvoidingView,ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // email: 'test@test.test',
      // password: 'Abcd1234',
      email: '',
      password: '',
      result: false,
      data: ''
    }
  }



  userLogin = () => {
    var email = this.state.email;
    var password = this.state.password;



    fetch("http://tidy4medevelop-env.eba-izti9tws.us-west-1.elasticbeanstalk.com/users/login", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(async (response) => {
        // alert(JSON.stringify(response))
        this.setState({ data: response })
        if (response?.status === 200) {
          alert('Login Success!')
        } else {
          alert('unauthorized')
        }

      })

  }




  render() {
    return (
    
       <>
      <View style={styles.parent}>
       <View style={styles.child}>
       <Image style={styles.logos} source={require("./assets/logo.png")}/>
       </View>
  </View>
  <View style={{alignContent:'center',alignItems:'center',marginTop:20}}>
    <Text style={{fontSize:20}}>Log in with: </Text>
  </View>
  <View style={{flexDirection:'row',marginLeft:20,marginTop:30}}>
    
  <TouchableOpacity style={styles.button}>
  
  <Image style={{height:30,width:30}} source={require("./assets/facebook.png")}/>
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
          <Image style={{height:30,width:30}} source={require("./assets/Google.png")}/>
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
  </View>
  <View style={{alignItems:'center',marginTop:20}}>
    <Text style={{color:'lightgrey'}}>-------------------------------          Or          -------------------------------</Text>
  </View>
  <View style={{marginTop:20}}>
    <Text style={{marginLeft:10}}>Email or phone</Text>
    <TextInput
            style={styles.textInputEmail}
            placeholder=" Enter your email address or phone number"
            placeholderTextColor={'black'}
            // maxLength={20}
            onChangeText={(text) => this.setState({ email: text })} 
            
            
          />
          <Text style={{marginLeft:10,marginTop:20}}>Password</Text>
    <TextInput
            style={styles.textInputEmail}
            placeholder=" Enter your password"
            placeholderTextColor={'black'}
            // maxLength={20}
            onChangeText={(pas) => this.setState({ password: pas })}
            
          />
          <Text style={{textAlign:'right',marginTop:20,marginRight:5,color:'lightgrey'}}>Forgot Password?</Text>
  </View>
  <View style={{alignItems:'center'}}>
  <TouchableOpacity onPress={this.userLogin} style={styles.buttonbottom1}>
            <Text style={styles.buttonbottomText1}>Log in</Text>
          </TouchableOpacity  >
          <TouchableOpacity style={styles.buttonbottom2}>
            <Text style={styles.buttonbottomText2}>Sign up</Text>
          </TouchableOpacity>
  </View>
  
  </>

    );
  }
}
const styles = StyleSheet.create({
  parent : {
    height : '30%',
    width : '100%',
    
    borderBottomStartRadius : 165,
    borderBottomEndRadius : 165,
    overflow : 'hidden',
},
child : {
    flex : 1,
    backgroundColor : '#EBECF0',
    alignItems : 'center',
    justifyContent : 'center'
},
logos: {
  width: 182,
  height: 93,
  position: 'absolute',
  top: 60,
},
button: {
  width: '45%',
  height: 50,
  backgroundColor: '#F5f5f5',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight:15,
  flexDirection:'row',
  
},
buttonText: {
  color: 'black',
  marginLeft:10
},
textInputEmail: {
  top: 10,
  borderRadius:10,
  height: 50,
  fontSize: 15,
  color: 'black',
  textAlign: 'left',
  width: 320,
  backgroundColor:'#EBECF0',
  marginLeft:20
},
buttonbottom1: {
  width: '90%',
  height: 50,
  backgroundColor: '#86C29C',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  
  flexDirection:'row',
  marginTop:10
  
  
},
buttonbottomText1: {
  color: 'white',
  
},
buttonbottom2: {
  width: '90%',
  height: 50,
  backgroundColor: '#F5f5f5',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  
  flexDirection:'row',
  marginTop:10
  
},
buttonbottomText2: {
  color: 'black',

},
})
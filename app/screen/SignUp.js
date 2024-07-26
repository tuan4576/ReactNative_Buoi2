// import { StyleSheet, Text, View, Button } from 'react-native'
// import React from 'react'

// const SignIn = ({ navigation }) => {
//   return (
//     <View style = {styles.container}>
//      <Button
  // onPress={() => {
  //   navigation.replace('SignIn')
  // }}
//   title="SignUp"
// />
//     </View>
//   )
// }

// export default SignIn

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = ({ navigation }) => {
  return (
    <View style = {styles.background}>
      <View>
          <View style={styles.containervecter}>
            <Image style={styles.vector} source={require('../../assets/images/Vectorr.png')} />
          </View>
         <View style = {styles.GroupInput}>
          <View style = {styles.InputUser}>
            <View style={styles.inputContainer}>
            <Image
            source={require('../../assets/images/Profile.png')}
            style= {styles.icon}/>
              <TextInput style={styles.input}  
            placeholder="Tên đăng nhập"
            keyboardType="name-phone-pad"
            autoCapitalize="none" />
            </View>
            <View style={styles.inputContainer}>
            <Image
            source={require('../../assets/images/Email.png')}
            style= {styles.icon}/>
              <TextInput style={styles.input}  
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none" />
            </View>
            <View style={styles.inputContainer}>
            <Image
            source={require('../../assets/images/Lock.png')}
            style= {styles.icon}/>
              <TextInput style={styles.input}  
            placeholder="Mật khẩu"
            keyboardType="visible-password"
            autoCapitalize="none" />
            <Image
            source={require('../../assets/images/Hide-Password.png')}
            style= {styles.icon1}/>
            </View>
            <View style={styles.inputContainer}>
            <Image
            source={require('../../assets/images/Lock.png')}
            style= {styles.icon}/>
              <TextInput style={styles.input}  
            placeholder="Nhập lại mật khẩu"
            keyboardType="visible-password"
            autoCapitalize="none" />
            <Image
            source={require('../../assets/images/Hide-Password.png')}
            style= {styles.icon1}/>
            </View>
            <View style={styles.inputContainer}>
            <Image
            source={require('../../assets/images/phone.png')}
            style= {styles.icon}/>
              <TextInput style={styles.input}  
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            autoCapitalize="none" />
            </View>
          </View>
         </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}   
          onPress={() => {
          navigation.replace('SignIn')}}>Đăng Kí</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#fff',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
   vector:{
    marginTop:6,
    width: 15, 
    height: 15,
    alignSelf:'center',
    
  },
  containervecter:{
    borderColor: '#4EA972',
    borderWidth: 2,
    width: 30, height: 30,
    marginTop:100,
    borderRadius:100,
    backgroundColor:'#56bf80',
    marginRight:20,
    marginBottom:40,
  },
  GroupInput:{
    flexDirection:'column',
    justifyContent:'space-around',
    marginBottom:20
    
  },
  InputUser:{
    

  },
    input: {
    width:260,
    borderWidth: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    padding: 10,
    marginTop:20,
 
    backgroundColor: '#F7F8F8',
    elevation: 1,
    borderRadius:15,
    // borderColor:'#E9EDF3',
    height:50,
  },
  icon:{
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft:5
  },
  icon1:{
    marginRight:20
  },
   button: {
    width:330,
    height:50,
    backgroundColor: '#66b3ff', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35, // Bo tròn góc của button
    marginBottom:100,
    marginTop:100
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

})
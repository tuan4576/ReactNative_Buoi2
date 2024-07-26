
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.header}> 
        <View style={styles.containervecter}>
          <Image style={styles.vector} source={require('../../assets/images/Vectorr.png')} />
        </View>
        <View style={styles.containervecter1}>
          <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
          <Text style={styles.innerText}>
            Shop Fashion
          </Text>
        </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
          <Image
          source={require('../../assets/images/icon1.png')}
          style= {styles.icon}
        />
            <TextInput style={styles.input}  
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none" />
          </View>
          <View style={styles.inputContainer}>
          <Image
          source={require('../../assets/images/icon2.png')}
          style= {styles.icon}
          />
            <TextInput style={styles.input}  
          placeholder="Enter password"
          keyboardType='visible-password'
          autoCapitalize="none" />
          <Image
          source={require('../../assets/images/Hide-Password.png')}
          style= {styles.iconhide}
          />
          </View>
          <Text style = {styles.text1}>Quên mật khẩu</Text>
          <TouchableOpacity 
            onPress={() => {
           navigation.replace('MyTabs')
           }}
          style={styles.button}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <Text style = {styles.text2}>Hoặc</Text>
          <View style = {styles.footericon}>
          
            <Image
            source={require('../../assets/images/Facbook.png')}
            style= {styles.iconfooter}
            />
            <Image
            source={require('../../assets/images/Google.png')}
            style= {styles.iconfooter}
            />
            <Image
            source={require('../../assets/images/Group.png')}
            style= {styles.iconfooter}
            />
          </View>
        </View>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#68DF98',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    logo:{
    width: 150, height: 150,
    borderRadius:10,
    marginTop:100,
    marginRight:100
  },
  header:{
    flex:1,
    flexDirection:'row',
    marginBottom:100
  },
    vector:{
    marginTop:7,
    width: 15, 
    height: 15,
    alignSelf:'center',
    
  },
  containervecter:{
    borderColor: '#4EA972',
    borderWidth: 1,
    width: 30, height: 30,
    marginTop:100,
    borderRadius:100,
    backgroundColor:'#56bf80',
    marginRight:30
  },
  containervecter1:{
    flexDirection:'column',
    marginLeft:50
  },
  innerText:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    marginTop:20,
    marginLeft:15
  },
  footer:{
    backgroundColor:'#fff',
    width:420,
    height:450,
    borderTopLeftRadius:80,
    borderTopRightRadius:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width:250,
    borderWidth: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius:50,
    borderColor:'#E9EDF3',
    height:50,
    marginTop:15
  },
  icon:{
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft:5
  },
  text1:{
    marginTop:20,
    marginLeft:230,
  },
    button: {
    width:330,
    height:50,
    backgroundColor: '#66b3ff', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35, // Bo tròn góc của button
    marginBottom:20,
    marginTop:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  text2:{

  },
  footericon:{
    flexDirection:'row',
    marginTop:20
  },
  iconfooter:{
    marginRight:15,
    marginLeft:10

  },
  iconhide:{
    marginRight:20
  }
})
// import { StyleSheet, Text, View, Button } from 'react-native'
// import React from 'react'

// const SignIn = ({ navigation }) => {
//   return (
//     <View style = {styles.container}>
//      <Button
//   onPress={() => {
//     navigation.replace('MyTabs')
//   }}
//   title="SignIn"
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
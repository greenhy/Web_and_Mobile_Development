import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from "./assets/icon.png";
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [selectedImage, setSeletedImage] = useState(null);
  
  return (
    <View style={styles.container}>
      <Headline/>
      <BodyText>To share a photo from your phone with a friend. just proess the button below.</BodyText>
      <StatusBar style="auto" />
      <ImageHandler selectedImage={selectedImage} setSeletedImage={setSeletedImage}>

      </ImageHandler>
    </View>
  );
}


function ImageDisplay(props){
  if(props.selectedImage !== null){
    return(
      <Image
      source={{uri: props.selectedImage}}
      style={{width:305, height: 159}}
      />
    );
  }else{
    return null;
  }
  
}

function ImageButton(props){
  let openImagePickerAsync = async()=>{
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if(permissionResult.granted === false){
      alert("Permission to access camera roll is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if(pickerResult.cancelled===true){
      return;
    }

    props.setSeletedImage(pickerResult.uri);
  }
  return (
    <TouchableOpacity
    style={{
      backgroundColor: "blue"
    }}
    onPress={openImagePickerAsync}
    >
      <Text
        style={{fontSize:20, color:"#fff"}}
      >Pick a Photo</Text>
    </TouchableOpacity>
  );
}

function ImageHandler(props){
  return (
    <View>
      <ImageDisplay selectedImage={props.selectedImage} setSeletedImage={props.setSeletedImage}/>
      <ImageButton setSeletedImage={props.setSeletedImage}/>
    </View>
  );
}

function HeadlineImage(props){
  return(
    <Image 
      source={logo}
      style={{width:200, height:200}}
    />
  );
}

function HeadlineText(props){
  return(
    <Text style={styles.headlinetext}>{props.text}</Text>
  )
  ;
}

function Headline(props){
  return(
    <View>
      <HeadlineImage/>
      <HeadlineText text="photo share"/>
    </View>
  );

}
function BodyText(props){
  return(
    <Text style={styles.bodytext}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodytext:{
    color:'#888',
    fontSize: 18,

  },
  headlinetext:{
    color:"#342",
    fontSize: 28,
  }
});

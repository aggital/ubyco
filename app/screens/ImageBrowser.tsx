import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import {ImageBrowser} from 'expo-image-picker-multiple';
import * as Element from 'react-native-elements'

export default function ImageBrowserScreen({navigation, route}){
  const {screen} = route.params
  const {max} = route.params
  const [done, setDone] = React.useState(null)
  const [title, setTitle]= React.useState('Select a file')
  const getHeaderLoader = () => (
    <ActivityIndicator size='small' color={'#0580FF'}/>
  );

  const imagesCallback = (callback) => {
    callback.then(async (photos) => {
      const cPhotos = [];
      for(let photo of photos) {
        const pPhoto = await processImageAsync(photo.uri);
        cPhotos.push({
          uri: pPhoto.uri,
          name: photo.filename,
          type: 'image/jpg'
        })
      }
      navigation.navigate(screen, {photos: cPhotos});
    })
    .catch((e) => console.log(e));
  };

  const processImageAsync = async(uri) => {
    const file = await ImageManipulator.manipulateAsync(
      uri,
      [{resize: { width: 1000 }}],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );
    return file;
  };

  const RenderDoneButton = (count, onSubmit) => {
    if (!count) return null;
    return ( 
            <Element.Button
            title="Done"
            type="outline"
            onPress={onSubmit}
            buttonStyle={{
              borderColor:'red'
            }}
            titleStyle={{
              color: 'red'
            }}
            containerStyle={{
              alignContent:'flex-end',
              marginHorizontal: 100,
              marginTop: 10,
            }}

        />
      )
   
  }

  const updateHandler = (count, onSubmit) => {
    setTitle(`Selected ${count} files`)
    setDone(RenderDoneButton(count, onSubmit))
   
  };

  const renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;

    return (
      <View style={[styles.flex, styles.container]}>
         <View style={{ flexDirection: 'row',  }}>
                <Element.Icon
                    type='material'
                    name='arrow-back'
                    containerStyle={{ alignSelf: 'flex-start', margin: 20 }}
                    onPress={() => navigation.goBack()}
                />
                <Element.Text style={{
                    alignSelf: 'center',
                    fontSize: 19,
                    color: '#f63757',
                    fontWeight: 'bold'
                }}>
                  {title}
                </Element.Text>
              
              {done}
    
                
            </View>
        <ImageBrowser
          max={max}
          onChange={updateHandler}
          callback={imagesCallback}
          renderSelectedComponent={renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    marginTop: 20
  },
  emptyStay:{
    textAlign: 'center',
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});

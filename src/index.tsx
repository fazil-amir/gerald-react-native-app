import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Tab ICons...
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';

// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';

// Photo
import photo from '../assets/photo.jpg';
import profile from '../assets/profile.png';

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...
  const offsetValueX = useRef(new Animated.Value(0)).current;
  const offsetValueY = useRef(new Animated.Value(0)).current;

  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  // Animation value for the drawer
  const drawerAnimValue = useRef(new Animated.Value(100)).current;
  // Rotation value for the white content area
  const rotateValue = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      {/* Custom Drawer */}
      <Animated.View style={{ 
        justifyContent: 'flex-start', 
        padding: 15, 
        backgroundColor: '#211030', 
        flexGrow: 1, 
        width: '100%', 
        borderTopLeftRadius: 30, 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        transform: [{
          translateY: drawerAnimValue
        }]
      }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Jenna Ezarik</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        {/* <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}

        </View> */}

        {/* <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View> */}

      </Animated.View>

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 25,
        borderTopLeftRadius: 30,
        transform: [
          { scale: scaleValue },
          { translateX: offsetValueX },
          { translateY: offsetValueY },
          { rotate: rotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '-6deg']
            })
          }
        ]
      }}>
        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 30,
          }}>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.90,
                  duration: 300,
                  useNativeDriver: true
                }).start()

                Animated.timing(offsetValueX, {
                  toValue: showMenu ? 0 : Dimensions.get('window').width / 1.8,
                  duration: 300,
                  useNativeDriver: true
                }).start()

                Animated.timing(offsetValueY, {
                  toValue: showMenu ? 0 : 15,
                  duration: 300,
                  useNativeDriver: true
                }).start()

                Animated.timing(closeButtonOffset, {
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true
                }).start()

                Animated.timing(drawerAnimValue, {
                  toValue: showMenu ? 0 : 40,
                  duration: 300,
                  useNativeDriver: true
                }).start()

                Animated.timing(rotateValue, {
                  toValue: showMenu ? 0 : 1,
                  duration: 300,
                  useNativeDriver: true
                }).start()

                setShowMenu(!showMenu);
              }}
            >
              <Image source={showMenu ? close : menu} style={{
                width: 20,
                height: 20,
                tintColor: '#b3b3bf',
              }} />
            </TouchableOpacity>
            <Text style={{
              paddingLeft: 20,
              color: '#b3b3bf',
              fontSize: 22,
              letterSpacing: 2
            }}>START</Text>
          </View>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>

        </Animated.View>
      </Animated.View>

    </SafeAreaView>
  );
}

// // For multiple Buttons...
// const TabButton = (currentTab, setCurrentTab, title, image) => {
//   return (

//     <TouchableOpacity onPress={() => {
//       if (title == "LogOut") {
//         // Do your Stuff...
//       } else {
//         setCurrentTab(title)
//       }
//     }}>
//       <View style={{
//         flexDirection: "row",
//         alignItems: 'center',
//         paddingVertical: 8,
//         backgroundColor: currentTab == title ? 'white' : 'transparent',
//         paddingLeft: 13,
//         paddingRight: 35,
//         borderRadius: 8,
//         marginTop: 15
//       }}>

//         <Image source={image} style={{
//           width: 25, height: 25,
//           tintColor: currentTab == title ? "#5359D1" : "white"
//         }}></Image>

//         <Text style={{
//           fontSize: 15,
//           fontWeight: 'bold',
//           paddingLeft: 15,
//           color: currentTab == title ? "#5359D1" : "white"
//         }}>{title}</Text>

//       </View>
//     </TouchableOpacity>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
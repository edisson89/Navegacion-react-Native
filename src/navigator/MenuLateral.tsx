import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


export const MenuLateral  = () => {

  const { width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    //drawerType= { width >= 768 ? 'permanent' : 'front'}
    drawerContent={(props) => <MenuInterno {...props } />} 

    >
      <Drawer.Screen name="StackNavigator" options={{title:'Titulo'}}  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}  

const MenuInterno  = ({ navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image 
        source={{
          uri:'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01.png'
       }}
       style={styles.avatar}
                 
                 
        />
      </View>
      {/* opciones de menu */}
      <View style={styles.menuContainer} >
        <TouchableOpacity         
        style={ styles.menuBoton}
         onPress={() => navigation.navigate('StackNavigator')} 
        >
          <Text style={ styles.menuTexto}
          
          >Navegacion</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={ styles.menuBoton}
        onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={ styles.menuTexto}
          >Ajustes</Text>
        </TouchableOpacity>

      </View>
      
      

    </DrawerContentScrollView>
  );
}   
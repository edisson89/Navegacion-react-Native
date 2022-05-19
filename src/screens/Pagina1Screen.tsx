import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Text, Button,TouchableOpacity  } from 'react-native';
//import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


//interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};


export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: ()=>(
        <Button 
          title='Menu'
          onPress={()=> navigation.toggleDrawer()}
          />
      )

    })
  
  
  }, [])
  
  return (
   <View style={styles.globlalMargin}>
       <Text style={ styles.title}>Pagina1Screen</Text>

       <Button
       title= 'Ir pagina 2'
       onPress={ () => navigation.navigate('Pagina2Screen')} >
       </Button>

       <Text  style={{
         marginVertical:20,
         fontSize:20
       }}
       
       >Navegar con Argumentos</Text>

       <View style={{flexDirection:'row'}}>

         <TouchableOpacity
           style={{
                ...styles.botonGrande,
                backgroundColor:'#558556D6'

           }             
            }
           onPress={ () => navigation.navigate('PersonaScreen',{
            id: 1,
            nombre: 'Michell'

          })}
       >
         <Text style={styles.botonGrandeTexto}>Marce</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={{
          ...styles.botonGrande,
          backgroundColor:'#FF9427'

     }             
      }
          onPress={ () => navigation.navigate('PersonaScreen',{
            id: 2,
            nombre: 'Marcela '

          })}
       >
         <Text style={styles.botonGrandeTexto}>Michelle</Text>
       </TouchableOpacity>
       </View>

       
   </View>
  )
}


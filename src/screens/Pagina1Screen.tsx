import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
   <View style={styles.globlalMargin}>
       <Text style={ styles.title}>Pagina1Screen</Text>

       <Button
       title= 'Ir pagina 2'
       onPress={ () => navigation.navigate('Pagina2Screen')} >
       </Button>

       <Text>Navegar con Argumentos</Text>

       <View style={{flexDirection:'row'}}>

         <TouchableOpacity
           style={{
                ...styles.botonGrande,
                backgroundColor:'#558556D6'

           }             
            }
           onPress={ () => navigation.navigate('PersonaScreen',{
            id: 1,
            nombre: 'Pedro'

          })}
       >
         <Text style={styles.botonGrandeTexto}>Pedro</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={{
          ...styles.botonGrande,
          backgroundColor:'#FF9427'

     }             
      }
          onPress={ () => navigation.navigate('PersonaScreen',{
            id: 2,
            nombre: 'Maria'

          })}
       >
         <Text style={styles.botonGrandeTexto}>Maria</Text>
       </TouchableOpacity>
       </View>

       
   </View>
  )
}


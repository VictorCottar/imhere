import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'


export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Victor Cottar
      </Text>
      <TouchableOpacity style={styles.button} >
        <MaterialIcons name="remove" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}
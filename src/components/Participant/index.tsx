import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

type ParticipantProps = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove} >
        <MaterialIcons name="remove" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}
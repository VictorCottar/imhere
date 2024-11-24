import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { Participant } from '@/components/Participant'

export function Home() {

  function handleParticipantAdd() {
    console.log('Adicionando participante');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}> Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Participant />
      
      <Participant />
    </View>
  )
}

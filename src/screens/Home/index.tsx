import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { Participant } from '@/components/Participant'

export function Home() {
  const participants = ['Victor Cottar', 'Diego', 'Rafael', 'Pedro', 'Gustavo', 'Lucas', 'João', 'Maria', 'José', 'Ana', 'Afonso', 'Joaquim', 'Fernando', 'Mariana', 'Carla', 'Juliana', 'Marta', 'Cristina', 'Sofia', 'Miguel', 'Ricardo',]

  function handleParticipantAdd() {

    if (participants.includes('Victor Cottar')) {
      return Alert.alert('Participante', 'Já existe um participante na lista com esse nome.')
    }

  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyComponent}>
            Ninguém chegou no evento ainda?{'\n'} Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UserItem({ user, onEdit, onDelete }) {
  return (
    <View style={styles.item}>
      <Text>{user.nombre} - {user.email}</Text>
      <View style={styles.botones}>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.boton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(user.id)}>
          <Text style={styles.boton}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#007B',
  },
  botones: {
    flexDirection: 'row',
  },
  boton: {
    padding: 5,
    marginLeft: 10,
    color: '#007BFF',
  },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import UserItem from '../components/UserItem';

export default function HomeScreen({ navigation }) {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    
    const usuarios = [
      { id: 1, nombre: 'Alexis', email: 'alexis@gmail.com' },
      { id: 2, nombre: 'Pedro', email: 'pedro007@gmail.com' },
    ];
    setUsuarios(usuarios);
  }, []);

  
  const eliminarUsuario = (id) => {
    setUsuarios(prevUsuarios => prevUsuarios.filter(user => user.id !== id));
  };

  const agregarOEditarUsuario = (usuario) => {
    if (usuario.id) {
      setUsuarios(prevUsuarios => prevUsuarios.map(u => u.id === usuario.id ? usuario : u));
    } else {
      usuario.id = Math.floor(Math.random() * 1000); 
      setUsuarios(prevUsuarios => [...prevUsuarios, usuario]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Usuarios</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserForm', { agregarOEditarUsuario })}>
        <Text style={styles.buttonText}>Agregar Usuario</Text>
      </TouchableOpacity>

      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            onEdit={() => navigation.navigate('UserForm', { user: item, agregarOEditarUsuario })}
            onDelete={eliminarUsuario}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

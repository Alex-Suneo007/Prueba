import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export default function UserFormScreen({ route, navigation }) {
  const { user, agregarOEditarUsuario } = route.params || {}; 
  const [nombre, setNombre] = useState(user ? user.nombre : ''); 
  const [email, setEmail] = useState(user ? user.email : ''); 
  const [idEditar, setIdEditar] = useState(user ? user.id : null); 

  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setEmail(user.email);
      setIdEditar(user.id);
    }
  }, [user]);

  const esCorreoValido = (correo) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
  };

  const mostrarAlerta = (mensaje) => {
    Alert.alert('Error', mensaje, [{ text: 'OK' }]);
  };

  const guardarUsuario = () => {
    if (!nombre || !email) {
      mostrarAlerta('Todos los campos son obligatorios.');
      return;
    }

    if (!esCorreoValido(email)) {
      mostrarAlerta('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    const usuario = { id: idEditar, nombre, email };
    agregarOEditarUsuario(usuario);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title={idEditar ? "Actualizar Usuario" : "Agregar Usuario"}
        onPress={guardarUsuario}
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
  input: {
    height: 40,
    borderColor: '#007B',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
  },
});

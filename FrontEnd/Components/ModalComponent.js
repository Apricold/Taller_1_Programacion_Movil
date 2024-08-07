import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";

export default function ModalComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Componente Modal</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.Texto_esconder}>Esconder Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.modal_container}>
          <Text>Mostrar Modal</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  modal_container: {
    backgroundColor: "white",
    padding: 60,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#5B99C2",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  Texto_esconder: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

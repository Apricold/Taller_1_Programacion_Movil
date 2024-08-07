import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function CardComponent() {
  const data = [
    {
      id: 1,
      header: "Item 1",
      description: "Informacion  sobre el item 1",
    },
    {
      id: 2,
      header: "Item 2",
      description: "Informacion  sobre el item 2",
    },
    {
      id: 3,
      header: "Item 3",
      description: "Informacion  sobre el item 3",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardHeader}>{item.header}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
});

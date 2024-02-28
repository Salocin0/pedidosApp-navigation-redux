import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./../Styles/Styles";
import { Counter } from "../features/couter/Counter";

const Detalle = () => {
  const route = useRoute();
  const producto = route.params.producto;

  const handleCompra = () => {
    console.log("Producto comprado:", producto);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: producto.img }} style={styles.imagenProducto} />
      <Text style={styles.nombreProducto}>{producto.nombre}</Text>
      <Text style={styles.descripcionProducto}>{producto.descripcion}</Text>
      <Text style={styles.precioProducto}>
        Precio Unitario: ${producto.precio}
      </Text>
      <View style={styles.centerVertically}>
        <Text style={styles.tituloCantidad}>Cantidad: </Text>
        <View style={styles.tituloCantidad}>
          <Counter />
        </View>
      </View>
      <TouchableOpacity style={styles.botonCompra} onPress={handleCompra}>
        <Text style={styles.textoBoton}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detalle;

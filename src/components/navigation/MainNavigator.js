import { StyleSheet,View,Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PedidoStack from "./PedidoStack";
import CompraStack from "./CompraStack";
import CarritoStack from "./CarritoStack";
import { Colors } from '../../Styles/Colors';
import TabBarIcon from '../TabBarIcon';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
      <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar }}>
        <Tab.Screen name="CompraStack" component={CompraStack} options={{ tabBarLabel: "", headerShown: false, tabBarIcon: ({focused}) => <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>}} />
        <Tab.Screen name="CarritoStack" component={CarritoStack} options={{ tabBarLabel: "", headerShown: false, tabBarIcon: ({focused}) => <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused}/> }}/>
        <Tab.Screen name="PedidoStack" component={PedidoStack} options={{ tabBarLabel: "", headerShown: false, tabBarIcon: ({focused}) => <TabBarIcon title="Ordenes" nameIcon="list" focused={focused}/> }}/>
      </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:Colors.Blanco,
        height:60,
        paddingTop:15
    }
})
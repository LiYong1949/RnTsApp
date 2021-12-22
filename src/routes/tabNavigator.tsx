
import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import HomeScreen from '@/pages/home';
import CategoryScreen from '@/pages/category';
import ShoppingCartScreen from '@/pages/shoppingCart';
import MyScreen from '@/pages/user';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    title: '首页',
    icon: 'home',
    screen: HomeScreen,
    headerShown: true,
  },
  {
    name: 'Category',
    title: '分类',
    icon: 'bars',
    screen: CategoryScreen,
    headerShown: false,
  },
  {
    name: 'ShoppingCart',
    title: '购物车',
    icon: 'shoppingcart',
    screen: ShoppingCartScreen,
    headerShown: false,
  },
  {
    name: 'My',
    title: '我的',
    icon: 'user',
    screen: MyScreen,
    headerShown: true,
  },
];

const TabNavigator = () => {

  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='none'
    >
      {
        tabs.map((tab: any, index: number) => {
          return <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.screen}
            options={{
              tabBarLabel: tab.title,
              headerTitle: tab.title,
              headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
              headerShown: tab.headerShown,
              tabBarIcon: ({ focused }) => (
                <AntDesignIcons name={tab.icon} size={26} color={focused ? '#ff3141' : (colorScheme === 'dark' ? '#ffffff' : '#000000')} />
              ),
              tabBarActiveTintColor: '#ff3141',
              tabBarInactiveTintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
            }}
          />;
        })
      }
    </Tab.Navigator>
  );
};

export default TabNavigator;

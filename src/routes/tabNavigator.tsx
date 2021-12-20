
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
//主导航页面
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
    headerShown: true,
  },
  {
    name: 'ShoppingCart',
    title: '购物车',
    icon: 'shoppingcart',
    screen: ShoppingCartScreen,
    headerShown: true,
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
  return (
    <Tab.Navigator
      initialRouteName='ShoppingCart'
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
              headerShown: tab.headerShown,
              tabBarIcon: ({ focused }) => (
                <AntDesignIcons name={tab.icon} size={26} color={focused ? '#ff3141' : '#000000'} />
              ),
              tabBarActiveTintColor: '#ff3141',
              tabBarInactiveTintColor: '#000000',
            }}
          />;
        })
      }
    </Tab.Navigator>
  );
};

export default TabNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import TabNavigator from './tabNavigator';
import AddressManagerScreen from '../pages/user/adress';
import OrderScreen from '../pages/user/order';
// import SettingSreen from '@/pages/user/setting';

const Stack = createStackNavigator();

const router = [
  {
    name: "/",
    title: "东东商城",
    component: TabNavigator,
    headerShown: false,
  },
  //下面只需要配置非tabbar页面路径
  {
    name: "AddressManager",
    title: "地址管理",
    component: AddressManagerScreen,
    headerShown: true,
  },
  {
    name: "Order",
    title: "我的订单",
    component: OrderScreen,
    headerShown: true,
  },
];

const StackNavigator = () => {

  //从子导航器获取路由名称
  const getChildTitle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='/'
      >
        {
          router.map((item, index) => {
            return (
              <Stack.Screen key={index} name={item.name} component={item.component} options={({ route }) => ({
                title: getChildTitle(route) || item.title,
                headerTitle: getChildTitle(route) || item.title,
                headerLeftLabelVisible: false,
                headerShown: item.headerShown, //不显示头部标题
              })} />
            );
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

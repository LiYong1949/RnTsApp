import React, { Component } from "react";
import { View, Text } from 'react-native';


export interface IStates {

}

class Home extends Component<any, IStates>{
  constructor(props: any) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text>地址</Text>
      </View>
    );
  }

}

export default Home;

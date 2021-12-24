import React from "react";
import { Provider } from '@ant-design/react-native';

const Home = (props: any) => {

  const { children, colorScheme } = props;
  console.log(colorScheme);

  return (
    <Provider theme={{
      'color_text_base': colorScheme === 'dark' ? 'white' : 'black',
      'color_text_base_inverse': colorScheme === 'dark' ? 'black' : 'white',
      'fill_base': colorScheme === 'dark' ? 'black' : 'white',
      'switch_fill': 'red'
    }}>
      {children}
    </Provider>
  );
};

export default Home;

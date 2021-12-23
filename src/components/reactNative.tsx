/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Text as DefaultText,
  TextProps,
  useColorScheme
} from 'react-native';

const Text: React.FC<TextProps> = (props) => {
  const colorScheme = useColorScheme();
  const { style, ...otherProps } = props;
  if (style && Object.keys(style).includes('color')) {
    console.log(style);

    return <DefaultText {...props} />;
  } else {
    return <DefaultText style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}  {...otherProps} />;
  }
};

export { Text };

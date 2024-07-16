// ThemeSelection.js
import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setThemeColor } from '../redux/themeSlice';

const ThemeSelection = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (color) => {
    dispatch(setThemeColor(color));
  };

  return (
    <View>
      <Button key={red} title='Red Theme' onPress={() => handleThemeChange('red')} />
      <Button key={blue} title='Blue Theme' onPress={() => handleThemeChange('blue')} />
      <Button key={green} title='Green Theme' onPress={() => handleThemeChange('green')} />
      <Button key={black} title='Black Theme' onPress={() => handleThemeChange('black')} />
    </View>
  );
};

export default ThemeSelection;

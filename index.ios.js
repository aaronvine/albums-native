import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import RecipeList from './src/components/RecipeList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Recipes'} />
    <RecipeList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);

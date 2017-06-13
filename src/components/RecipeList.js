import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class RecipeList extends React.Component {
  state = { recipes: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
      this.setState({ recipes: res.data });
    });
  }

  renderRecipes() {
    return this.state.recipes.map(recipe => <Text key={recipe.title}>{recipe.title}</Text>);
  }

  render() {
    return (
      <View>
        {this.renderRecipes()}
      </View>
    );
  }
}

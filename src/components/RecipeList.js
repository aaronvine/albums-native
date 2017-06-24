import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';

export default class RecipeList extends React.Component {

  state = {
    recipes: []
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
      this.setState({ recipes: res.data });
    });
  }

  renderRecipes() {
    return this.state.recipes.map(recipe => <RecipeDetail key={recipe.title} recipe={recipe} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderRecipes()}
      </ScrollView>
    );
  }
}

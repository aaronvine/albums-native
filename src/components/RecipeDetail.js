import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const RecipeDetail = (props) => (
  <View>
    <Text>{props.recipe.title}</Text>
  </View>
);

RecipeDetail.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeDetail;

import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const RecipeDetail = (props) => (
  <Card>
    <CardSection>
      <Text>{props.recipe.title}</Text>
    </CardSection>
  </Card>
);

RecipeDetail.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeDetail;

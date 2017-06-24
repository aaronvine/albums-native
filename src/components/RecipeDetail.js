import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

const RecipeDetail = ({ recipe }) => {
  const { thumbnail_image, title, artist, image } = recipe;
  const {
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>
    </Card>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeDetail;

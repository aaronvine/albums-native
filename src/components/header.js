import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
  },
};

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;

import 'react-native';
import React from 'react';
import HomeScreen from '../view/HomeScreen';

// Note: __tests__ renderer must be required after react-native.
import renderer from 'react-test-renderer';
import it from "react-native";


it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
})
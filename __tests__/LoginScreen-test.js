import 'react-native';
import React from 'react';

// Note: __tests__ renderer must be required after react-native.
import renderer from 'react-test-renderer';
import it from "react-native";
import LoginScreen from "../view/LoginScreen";

it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
})
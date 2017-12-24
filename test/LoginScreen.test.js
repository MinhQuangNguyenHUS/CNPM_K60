import 'react-native';
import React from 'react';
import LoginScreen from '../view/LoginScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import * as jest from "react-native";

jest.mock('react-native-google-signin', () => {});
jest.mock('react-native', () => {});
jest.mock('react-native-linear-gradient', () => {});
// jest.mock('react-native-vector-icons', () => {});
test('renders correctly', () => {
    const tree = renderer.create(<LoginScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
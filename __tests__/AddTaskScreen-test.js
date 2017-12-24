import 'react-native';
import React from 'react';
import AddTaskScreen from '../view/AddTaskScreen';

// Note: __tests__ renderer must be required after react-native.
import renderer from 'react-test-renderer';
import it from "react-native";

it('renders correctly', () => {
    const tree = renderer.create(<AddTaskScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
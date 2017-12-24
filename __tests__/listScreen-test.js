import 'react-native';
import React from 'react';

// Note: __tests__ renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ListView from "../view/ListView";

it('renders correctly', () => {
    const tree = renderer.create(<ListView/>).toJSON();
    expect(tree).toMatchSnapshot();
})
// Test away!
import React from 'react';
import Display from './Display';
import { render, getByText, queryByText, } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/react/cleanup-after-each';

describe(`<Display/> tests`, () => {
    it(`1)  verifies that <Display /> is rendered correctly`, () => {
        const testDOM = render(<Display/>);
        expect(testDOM).toBeTruthy();
    })
    it('2) matches <Display /> snapshot ', () => {
        const tree = renderer.create(<Display/>).toJSON();
        expect(tree).toMatchSnapshot();
    })




    
}) 
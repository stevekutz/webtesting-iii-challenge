// Test away!
import React from 'react';
import Controls from './Controls';
import { render, getByText, queryByText, } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/react/cleanup-after-each';

describe(`<Controls/> tests`, () => {
    it(`verifies that <Controls /> is rendered correctly`, () => {
        const testDOM = render(<Controls/>);
        expect(testDOM).toBeTruthy();
    })
    
    it('2) matches <Controls /> snapshot ', () => {
        const tree = renderer.create(<Controls/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    

    
})
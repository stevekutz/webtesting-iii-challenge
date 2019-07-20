// Test away
import React from 'react';
import Dashboard from './Dashboard';
import { render, getByText, queryByText, } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/react/cleanup-after-each';

describe('<Dashboard /> UI', () => {
    it(`1) renders <Dashboard/> and child components`, () => {
        const testDOM = render(<Dashboard/>)
        expect(testDOM).toBeTruthy();
    })

    it('2) matches snapshot ', () => {
        const tree = renderer.create(<Dashboard/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});


// Test away!
import React from 'react';
import Controls from './Controls';
import { render, getByText, queryByText, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/react/cleanup-after-each';
import { fireEvent } from '@testing-library/react/dist';

describe(`<Controls/> tests`, () => {
    it(`verifies that <Controls /> is rendered correctly`, () => {
        const testDOM = render(<Controls/>);
        expect(testDOM).toBeTruthy();
    })
    
    it('2) matches <Controls /> snapshot ', () => {
        const tree = renderer.create(<Controls/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it(`3) Close Gate button is present"`, () => {
        const {getByText, queryByText} = render(<Controls  locked = {false} closed = {false} />);
        
        expect(queryByText(/Close Gate/)).toBeInTheDocument();

        const button = getByText(/Close Gate/);
        expect(button).toBeTruthy();
        fireEvent.click(button);    

    })

    it(`4) Lock Gate button is present`, () => {
        const {getByText, queryByText} = render(<Controls  locked = {false} closed = {true} />);
        
        expect(queryByText(/Lock Gate/)).toBeInTheDocument();

        const button = getByText(/Open Gate/);
        expect(button).toBeTruthy();
        fireEvent.click(button);    

    })

    it(`5) Should mock call toggleClosed with onClick`, () => {
        // mock a toggle closed from false to true
        const toggleClosedMock = jest.fn( () => render( <Controls  locked = {false} closed = {true} /> ));
      
        const {getByText, queryByText} = render(<Controls  locked = {false} closed = {false} toggleClosed = {toggleClosedMock}/>);
 
        // Close Gate should be present
         const button_CloseGate = getByText(/Close Gate/);
         expect(button_CloseGate).toBeTruthy();
         fireEvent.click(button_CloseGate);   

         expect(toggleClosedMock).toHaveBeenCalled();
 
         // Open Gate should be now be present
         const button_OpenGate = getByText(/Open Gate/);
         expect(button_OpenGate).toBeTruthy();
         fireEvent.click(button_OpenGate);
     })

/*
    it(`6) Should call toggleClosed with onClick`, () => {

       const {getByText, queryByText} = render(<Controls  locked = {false} closed = {false} />);

        const button_CloseGate = getByText(/Close Gate/);
        // console.log('button_CloseGate is ', button_CloseGate);
        const toggleClosedMock = jest.fn( () => {
            button_CloseGate
            ? render( <Controls  locked = {false} closed = {true} /> )
            : render( <Controls  locked = {false} closed = {false} /> )


        });
        toggleClosedMock();
    
        expect(button_CloseGate).toBeTruthy();
        fireEvent.click(button_CloseGate);    
        expect(toggleClosedMock).toHaveBeenCalled();

        const button_OpenGate = getByText(/Open Gate/);
        
        fireEvent.click(button_OpenGate);
        toggleClosedMock();
        expect(button_CloseGate).toBeTruthy();
        expect(button_OpenGate).not.toBeTruthy();

    })
*/

    
})
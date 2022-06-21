import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react";
import Meteorologia from "./Meteorologia";

//test Meteorologia
test("Vista de Meteorologia", () => {
// render the component on virtual dom
const component = render(<Meteorologia />);
console.log(component)

component.getByText('Check Your City')

});

//click button
test("Click button", () => {
    // render the component on virtual dom
    const mockHandler = jest.fn()
    const { getByText, getByTestId } = render(<Meteorologia />);
    fireEvent.click(getByText("Select a city"));
    expect(mockHandler).toHaveBeenCalled(1);   
});
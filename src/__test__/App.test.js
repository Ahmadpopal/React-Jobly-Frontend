import React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../App';

// SMOKE TEST 
test('Component Render without crashing', () => {
  render(<App />)
})


// SNAPSHOT TEST 
test('it matches the snapshot', () =>{
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})


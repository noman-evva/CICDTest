import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const EVVANAME = process.env.EVVA_NAME
  console.log('EVVA_NAME', EVVANAME)
});

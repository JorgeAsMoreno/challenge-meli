import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('El componente Header esta en el documento', () => {
  const { container } = render(<Header />);
  
  const logoElement = container.querySelector('.header_logo img');
  const inputElement = container.querySelector('input[placeholder="Buscar productos, marcas y más…"]');

  expect(logoElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
})
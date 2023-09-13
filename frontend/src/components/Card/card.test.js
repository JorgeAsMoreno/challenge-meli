import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'

test('Card muestra correctamente las props', () => {
  const item = {
    title: 'Producto de prueba',
    picture: 'image.jpg',
    price: {
      amount: 100,
      currency: 'ARG',
    },
    free_shipping: true,
    condition: 'new',
  }

  render(<Card item={item} />)

  const titleElement = screen.getByText('Producto de prueba')
  expect(titleElement).toBeInTheDocument()
})

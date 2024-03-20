// HomePage.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { CartProvider } from '../../contexts/CartContext';
import HomePage from '../HomePage';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders Header, ProductList, and Footer', async () => {
  fetch.mockResponseOnce(JSON.stringify([
    { id: 1, name: 'Product 1', quantity: 1 },
    { id: 2, name: 'Product 2', quantity: 2 },
  ]));

  render(
    <CartProvider>
      <HomePage />
    </CartProvider>
  );

  // Check that the Header, ProductList, and Footer components are rendered
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('product-list')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toBeInTheDocument();

  // Check that the products are fetched and displayed
  await waitFor(() => expect(screen.getByText('Product 1')).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText('Product 2')).toBeInTheDocument());
});
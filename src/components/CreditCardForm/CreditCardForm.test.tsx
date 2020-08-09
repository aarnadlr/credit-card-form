import React from 'react';
import { render } from '@testing-library/react';
import {CreditCardForm} from './CreditCardForm';

test('CreditCardForm component is in the document', () => {
  const { container } = render(<CreditCardForm />);
  expect(container.firstChild).toBeInTheDocument();
});

test('CreditCardForm component is visible', () => {
  const { container } = render(<CreditCardForm />);
  expect(container.firstChild).toBeVisible();
});

test('CreditCardForm component has class "CreditCardForm"', () => {
  const { container } = render(<CreditCardForm />);
  expect(container.firstChild).toHaveClass('CreditCardForm');
});

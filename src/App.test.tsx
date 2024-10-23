/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Application tests', () => {
  it('renders learn react link', () => {
    render(<App />);
    const selectElement = screen.getByLabelText('brand');
    expect(selectElement).toBeInTheDocument();
  });
});

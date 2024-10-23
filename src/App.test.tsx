import { render, screen } from '@testing-library/react';
import App from './App';

describe('Application tests', () => {
  it('renders select element', () => {
    render(<App />);
    const selectElement = screen.getByLabelText('brand');
    expect(selectElement).toBeInTheDocument();
  });
});

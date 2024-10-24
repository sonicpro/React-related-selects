import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('Application tests', () => {
  it('renders select element', async () => {
    render(<App />);
    const selectElement = await screen.findByLabelText(/brand/i);
    expect(selectElement).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});

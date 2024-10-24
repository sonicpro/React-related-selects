import { render, screen, fireEvent, cleanup, within, waitFor } from '@testing-library/react';
import { RelatedSelects } from './related-selects';
import { SelectChangeEvent } from '@mui/material';

describe('related-selects tests', () => {
  let capabilities: { [ key: string ]: string[] };
  let label1: string;
  let label2: string;
  let parentValue: string;
  let childValue: string;
  let handleChangeChild: (event: SelectChangeEvent) => void;

  beforeEach(() => {
    capabilities = {
      '(None)': [],
      'Volvo': ['C60', 'C90'],
      'Lancia': ['Delta'],
      'Undefined': []
    };
    label1 = 'brand';
    label2 = 'model';
    parentValue = '(None)';
    childValue = '';
    handleChangeChild = _ => {};
  });

  it('select must handle change', async () => {
    const spyOnSelectChange = jest.fn();
    const newParentValue = 'Lancia';
    render(<RelatedSelects capabilities={capabilities}
      label1={label1}
      label2={label2}
      parentValue={parentValue}
      childValue={childValue}
      handleParentChange={(evt) => spyOnSelectChange(evt.target.value)}
      handleChildChange={handleChangeChild}
    />);
    const brandDropdown = await screen.findByLabelText(label1);
    expect(brandDropdown).toBeInTheDocument();
    // Check the old state.
    expect(screen.getByText(parentValue)).toBeTruthy();
    expect(screen.queryByText(newParentValue)).not.toBeTruthy();

    // Simulate change.
    fireEvent.mouseDown(brandDropdown);
    const listbox = await within(screen.getByRole('presentation')).findByRole(
      'listbox'
    );
    expect(listbox).toBeInTheDocument();
    const options = within(listbox).getAllByRole('option');
    expect(options[2].getAttribute('data-value')).toEqual('Lancia');
    fireEvent.click(options[2]);
    // Check if onChange was called
    expect(spyOnSelectChange).toHaveBeenCalledTimes(1);
    expect(spyOnSelectChange).toHaveBeenCalledWith('Lancia');

    // Check the new state. This does not implemented,
    // because our component is dumb, and we should change parentValue prop by some means
    // to make the state change.
    // await waitFor(() => screen.findByText(newParentValue));
    // expect(screen.getByText(newParentValue)).toBeTruthy();
    // expect(screen.queryByText(parentValue)).not.toBeTruthy();
  });

  afterEach(() => {
    cleanup();
  });
});
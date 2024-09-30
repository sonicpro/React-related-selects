import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function RelatedSelects() {
  const [brand, setBrand] = React.useState('');
  const [model, setModel] = React.useState('');
  const capabilities = {
    'Volvo': ['C60', 'C90'],
    'Lancia': ['Delta']
  }
  const handleChangeBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
  };
  const handleChangeModel = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={brand}
          onChange={handleChangeBrand}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={model}
          onChange={handleChangeModel}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
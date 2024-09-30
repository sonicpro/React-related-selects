import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const RelatedSelects: React.FC<{ capabilities: { [key: string]: string[] } }> = ({ capabilities }) =>  {
  const [brand, setBrand] = React.useState('(None)');
  const [model, setModel] = React.useState('');
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
          {Object.getOwnPropertyNames(capabilities).map((brand) => (
            <MenuItem value={brand} key={brand}>{brand}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" disabled={capabilities[brand].length === 0}>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={model}
          onChange={handleChangeModel}
        >
          {capabilities[brand].map((model) => (
            <MenuItem value={model} key={model}>{model}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
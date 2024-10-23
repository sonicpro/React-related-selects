import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, MenuItem } from '@mui/material';

export const RelatedSelects: React.FC<{ capabilities: { [key: string]: string[] }, label1: string, label2: string }> = ({ capabilities, label1, label2 }) =>  {
  const [brand, setBrand] = React.useState('(None)');
  const [model, setModel] = React.useState('');
  const handleChangeBrand = (event: SelectChangeEvent) => {
    console.log(event.target.name);
    setBrand(event.target.value);
  };
  const handleChangeModel = (event: SelectChangeEvent) => {
    console.log(event.target.name);
    setModel(event.target.value);
  }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label" htmlFor="demo-simple-select">{label1}</InputLabel>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          value={brand}
          name="brand"
          onChange={handleChangeBrand}
        >
          {Object.getOwnPropertyNames(capabilities).map((brand) => (
            <MenuItem value={brand} key={brand}>{brand}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" disabled={capabilities[brand].length === 0}>
        <InputLabel id="demo-select-small-label" htmlFor="demo-select-small">{label2}</InputLabel>
        <Select
          id="demo-select-small"
          labelId="demo-select-small-label"
          value={model}
          name="model"
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
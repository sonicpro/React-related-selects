import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, MenuItem } from '@mui/material';

export const RelatedSelects: React.FC<{ capabilities: { [key: string]: string[] },
    label1: string,
    label2: string,
    parentValue: string,
    childValue: string,
    handleParentChange: (event: SelectChangeEvent) => void,
    handleChildChange: (event: SelectChangeEvent) => void
  }> = ({ capabilities, label1, label2, parentValue, childValue, handleParentChange, handleChildChange }) =>  {
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label" htmlFor="demo-simple-select">{label1}</InputLabel>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          value={parentValue}
          name={label1}
          onChange={handleParentChange}
        >
          {Object.getOwnPropertyNames(capabilities).map((brand) => (
            <MenuItem value={brand} key={brand}>{brand}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" disabled={capabilities[parentValue].length === 0}>
        <InputLabel id="demo-select-small-label" htmlFor="demo-select-small">{label2}</InputLabel>
        <Select
          id="demo-select-small"
          labelId="demo-select-small-label"
          value={childValue}
          name={label2}
          onChange={handleChildChange}
        >
          {capabilities[parentValue].map((model) => (
            <MenuItem value={model} key={model}>{model}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
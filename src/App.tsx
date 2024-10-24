import { SelectChangeEvent } from '@mui/material';
import { RelatedSelects } from './Components/related-selects';
import { FC, useState } from 'react';
// import './App.css';

const App: FC = () => {
  const capabilities: Record<string, string[]> = {
    '(None)': [],
    'Volvo': ['C60', 'C90'],
    'Lancia': ['Delta']
  }

  const [brand, setBrand] = useState('(None)');
  const [model, setModel] = useState('');
  const handleChangeBrand = (event: SelectChangeEvent) => {
    console.log(event.target.name);
    setBrand(event.target.value);
  };
  const handleChangeModel = (event: SelectChangeEvent) => {
    console.log(event.target.name);
    setModel(event.target.value);
  }
  
  return (
    <div className="App">
      <RelatedSelects capabilities={capabilities}
        label1="brand"
        label2="model"
        parentValue={brand}
        childValue={model}
        handleParentChange={handleChangeBrand}
        handleChildChange={handleChangeModel } />
    </div>
  );
}

export default App;
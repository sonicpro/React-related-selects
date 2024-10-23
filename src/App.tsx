import { RelatedSelects } from './Components/related-selects';
// import './App.css';

function App() {
  const capabilities: Record<string, string[]> = {
    '(None)': [],
    'Volvo': ['C60', 'C90'],
    'Lancia': ['Delta']
  }

  return (
    <div className="App">
      <RelatedSelects capabilities={capabilities} label1="brand" label2="model" />
    </div>
  );
}

export default App;
import { RelatedSelects } from './Components/related-selects';
import './App.css';

function App() {
  const capabilities: { [key: string]: string[] } = {
    '(None)': [],
    'Volvo': ['C60', 'C90'],
    'Lancia': ['Delta']
  }

  return (
    <div className="App">
      <RelatedSelects capabilities={capabilities} />
    </div>
  );
}

export default App;
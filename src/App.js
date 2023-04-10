import './App.css';
import useToggle from './components/useToggle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cat from './components/Cat.js';
import useCount from './components/useCount';

function App() {
  const [isVisible, toggle] = useToggle();

  // counter hook
  const { count, increase, decrease, reset } = useCount();

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />

        <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
        <br />
        {isVisible && <h1>Hidden Text</h1>}

        {/* Counter Hook */}
        <hr />
        <h3>Conter Hook</h3>
        {count}
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </QueryClientProvider>
    </div>
  );
}

export default App;

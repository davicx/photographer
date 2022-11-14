import { QueryClientProvider, QueryClient } from 'react-query';
import PhotoApp from './components/PhotoApp';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
         <p> app</p> 
      </div>
    </QueryClientProvider>
  );
}

export default App;


/*

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
         <PhotoApp />
      </div>
    </QueryClientProvider>
  );
}
*/
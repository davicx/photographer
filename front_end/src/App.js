import { QueryClientProvider, QueryClient } from 'react-query';
import PhotoApp from './components/PhotoApp';
//import Simple from './components/Simple';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
         <PhotoApp />
      </div>
    </QueryClientProvider>
  );
}

export default App;

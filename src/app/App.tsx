import { Layout } from 'app/layout';
import { Providers } from 'app/providers';
import './styles/index.scss';

function App() {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
}

export default App;

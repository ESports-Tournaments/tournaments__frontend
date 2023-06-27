import Routing from './pages';
import { withProviders } from './providers/withProviders';

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default withProviders(App);

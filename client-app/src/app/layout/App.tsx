import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  const location = useLocation();
  return (
    <>
      {
        location.pathname === '/' ? <HomePage /> : (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              {/* It will load actual component and outlet will be swapped with that routed component */}
              <Outlet />
            </Container>
          </>
        )
      }
    </>
  );
}

//observe the observables in our store
export default observer(App);

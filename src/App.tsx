import React from 'react';
import GlobalStyle from './styles/global';
import SignIN from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignIN />
    <GlobalStyle />
  </>
);

export default App;

import React from 'react';
import { Container } from 'common/layout';
import AppRoutes from 'appRoutes';

const App = () => {
  console.log('#APP is Rendering');
  return (
    <Container
      className="App"
      data-testid="appRoot"
      maxWidth={'100vw'}
      sx={{
        backgroundColor: 'primary.default'
      }}
    >
      <AppRoutes />
    </Container>
  );
};

export default App;

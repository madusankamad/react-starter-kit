import { Button } from './common/button';
import React from 'react';
import { useUserContext } from './contexts/userContext';
import { useThemeContext } from './contexts/themeContext';
import { Container } from './common/layout';

function App() {
  const { theme, userId, dispatch } = useUserContext();
  const { activeTheme, setTheme } = useThemeContext();
  return (
    <Container
      className="App"
      data-testid="appRoot"
      maxWidth={'100vw'}
      sx={{
        backgroundColor: 'primary.default'
      }}
    >
      <h1>Logged In User: {userId}</h1>
      <h1>theme UserStore: {theme}</h1>
      <Button
        onClick={() => {
          dispatch({
            type: 'SET_USER_ID',
            data: { userId: `uID${Math.floor(Math.random() * 10)}` }
          });
        }}
      >
        UPDATE USER ID
      </Button>

      <h1>theme UserStore: {activeTheme}</h1>
      <Button
        variant="contained"
        onClick={() => {
          setTheme(activeTheme === 'dark' ? 'light' : 'dark');
        }}
      >
        Toggle Theme
      </Button>
    </Container>
  );
}

export default App;

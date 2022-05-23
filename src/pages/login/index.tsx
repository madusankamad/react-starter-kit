import React, { ReactElement } from 'react';
import { Button } from 'common/button';
import { useUserContext } from 'contexts/userContext';
import { useThemeContext } from 'contexts/themeContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'appRoutes/routeConfig';
import { INIT_USER_STORE } from 'contexts/actions/userActions';

const Login = (props: any): ReactElement => {
  const { theme, userId, userName, initUser } = useUserContext();
  const { activeTheme, setTheme } = useThemeContext();
  const navigate = useNavigate();
  const handleLogin = () => {
    initUser({
      userId: `uID${Math.floor(Math.random() * 1000)}`,
      isLoggedin: true,
      theme: activeTheme,
      userName: 'Madusanka'
    });

    navigate(`/${ROUTES.postLogin}`);
  };
  return (
    <div>
      Login Page
      <h1>Logged In User Id: {userId}</h1>
      <h1>User Theme: {theme}</h1>
      <h1>User Name: {userName}</h1>
      <Button
        variant="contained"
        onClick={() => {
          setTheme(activeTheme === 'dark' ? 'light' : 'dark');
        }}
      >
        Toggle Theme
      </Button>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;

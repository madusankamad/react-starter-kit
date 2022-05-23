/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from 'common/button';
import { RouteRender } from 'appRoutes';
import { useNavigate } from 'react-router-dom';

const PostLogin = ({ routes: subPageRoutes }: any): ReactElement => {
  const [defaultPath, setDefaultRoute] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/prelogin');
  };
  useEffect(() => {
    if (subPageRoutes && subPageRoutes.length > 0) {
      console.log('PostLogin');
      const defaultPagePath = subPageRoutes[0].path.replace('/', '');
      setDefaultRoute(defaultPagePath);
    }
  }, [subPageRoutes]);
  return (
    <>
      Post Login Page
      <Button onClick={handleLogout}>Logout </Button>
      {defaultPath ? (
        <RouteRender routes={subPageRoutes} defaultPath={defaultPath} />
      ) : (
        <>Default Page Not Found</>
      )}
    </>
  );
};

export default PostLogin;

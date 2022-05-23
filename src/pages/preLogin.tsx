/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement } from 'react';
import { RouteRender } from 'appRoutes';
import { ROUTES } from 'appRoutes/routeConfig';
const PreLogin = React.memo(({ routes: subPageRoutes }: any): ReactElement => {
  console.log('#PreLogin', subPageRoutes);

  return (
    <>
      Pre Login Page
      {<RouteRender routes={subPageRoutes} defaultPath={`/${ROUTES.preLogin}/${ROUTES.login}`} />}
    </>
  );
});

export default PreLogin;

import React, { ReactElement } from 'react';
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RouteConfig, RouteInterface, ROUTES } from './routeConfig';

interface ChildWrapperProps {
  routes?: RouteInterface[];
  children: any;
}
export const ChildWrapper = ({
  routes: subRoutes,
  children: ChildrenComp
}: ChildWrapperProps): ReactElement => {
  console.log('#ChildWrapper');
  if (subRoutes && subRoutes.length > 0) {
    return <ChildrenComp routes={subRoutes} />;
  }
  return <ChildrenComp />;
};

interface RouteRenderProps {
  routes: RouteInterface[];
  defaultPath?: string;
}
export const RouteRender = ({ routes: _routes, defaultPath }: RouteRenderProps): ReactElement => {
  console.log('#RouteRender');
  return (
    <Routes>
      {_routes && _routes.length > 0 ? (
        _routes.map(
          (
            { path, routes: subRoutes, component: RenderComponent }: RouteInterface,
            index: number
          ): ReactElement => {
            return (
              <Route
                key={index}
                path={path}
                element={<ChildWrapper routes={subRoutes} children={RenderComponent} />}
              />
            );
          }
        )
      ) : (
        <></>
      )}
      {defaultPath ? <Route path="*" element={<Navigate to={defaultPath} />} /> : <></>}
    </Routes>
  );
};

const AppRoutes = (): ReactElement => {
  console.log('#AppRouts');
  return (
    <Router>
      <RouteRender routes={RouteConfig} defaultPath={`/${ROUTES.preLogin}`} />
    </Router>
  );
};

export default AppRoutes;

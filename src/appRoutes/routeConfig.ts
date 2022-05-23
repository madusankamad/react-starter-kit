import Login from 'pages/login';
import PreLogin from 'pages/preLogin';
import PostLogin from 'pages/postLogin';
import Today from 'pages/today';
import Setting from 'pages/setting';
import React from 'react';

interface RouteModal {
  path: string;
  component: React.FC;
  isProtected?: boolean;
}

export interface RouteInterface {
  path: string;
  component: React.FC;
  isProtected?: boolean;
  routes?: RouteModal[];
}

export const ROUTES = {
  preLogin: 'preLogin',
  login: 'login',
  today: 'today',
  postLogin: 'postLogin',
  setting: 'setting'
};
const PRE_LOGIN = {
  path: `/${[ROUTES.preLogin]}/*`,
  component: PreLogin,
  isProtected: false,
  routes: [
    {
      path: `/${[ROUTES.login]}`,
      component: Login,
      isProtected: false
    }
  ]
};

const POST_LOGIN = {
  path: `/${[ROUTES.postLogin]}/*`,
  component: PostLogin,
  isProtected: true,
  routes: [
    {
      path: `/${[ROUTES.today]}`,
      component: Today,
      isProtected: true
    },
    {
      path: `/${[ROUTES.setting]}`,
      component: Setting,
      isProtected: true
    }
  ]
};

/**
 * Main Route Config For Default User
 * TODO: Select the route config based on the user Type
 */
export const RouteConfig = [PRE_LOGIN, POST_LOGIN];

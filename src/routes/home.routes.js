import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
// layouts
import HomeLayout from '../layouts/home';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('../views/LandingPage'))
    },
    {
      exact: true,
      path: '/aboutus',
      component: lazy(() => import('../views/AboutusPage'))
    },
    {
      exact: true,
      path: '/howitworks',
      component: lazy(() => import('../views/HowitworksPage'))
    },

    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;

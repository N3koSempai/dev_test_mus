import App from '../App'
import DashboardPage from '../pages/dashboard'
import {
  createRouter,
  createRoute,
  RootRoute
} from '@tanstack/react-router'
import LandingPage from '../pages/landing/landing'

const rootRoute = new RootRoute({})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index () {
    return (
      <App />
    )
  }
})

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Landing',
  component: function Index () {
    return (
      <LandingPage />
    )
  }
})

const DashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Dashboard',
  component: function About () {
    return (<DashboardPage />)
  }
})

const routeTree = rootRoute.addChildren([indexRoute, DashboardRoute, landingRoute])

export const router = createRouter({ routeTree })

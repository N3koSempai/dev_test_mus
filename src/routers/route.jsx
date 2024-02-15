import App from '../App'
import DashboardPage from '../pages/dashboard'
import {
  createRouter,
  createRoute,
  RootRoute
} from '@tanstack/react-router'
import LandingPage from '../pages/landing/landing'
import BadRequest from '../pages/errorPage/badRequest'
import PreLanding from '../pages/landing/preLanding'
const rootRoute = new RootRoute({})

const BadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/BadRequest',
  component: function Index () {
    return (
      <BadRequest />
    )
  }
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: function Index () {
    return (
      <App />
    )
  }
})

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index () {
    return (
      <PreLanding />
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

const routeTree = rootRoute.addChildren([indexRoute, DashboardRoute, landingRoute, BadRoute])

export const router = createRouter({ routeTree })

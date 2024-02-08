import App from '../App'
import DashboardPage from '../pages/dashboard'
import {
  createRouter,
  createRoute,
  RootRoute
} from '@tanstack/react-router'

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

const DashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/Dashboard',
  component: function About () {
    return (<DashboardPage />)
  }
})

const routeTree = rootRoute.addChildren([indexRoute, DashboardRoute])

export const router = createRouter({ routeTree })

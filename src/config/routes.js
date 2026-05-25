
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import NotFound from '../pages/NotFound'

export const routes = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    element: HomePage,
    showInNav: true,
  },
  {
    id: 'projects',
    path: '/projects',
    label: 'Projects',
    element: ProjectsPage,
    showInNav: true,
  },
  {
    id: 'about',
    path: '/about',
    label: 'About',
    element: AboutPage,
    showInNav: true,
  },
  {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    element: ContactPage,
    showInNav: true,
  },
  {
    id: 'notfound',
    path: '*',
    label: 'Not Found',
    element: NotFound,
    showInNav: false,
  },
]

export const navLinks = routes.filter((route) => route.showInNav)


export const getRouteByPath = (path) => {
  return routes.find((route) => route.path === path)
}

export const getRouteById = (id) => {
  return routes.find((route) => route.id === id)
}


export const routeConfig = routes.map((route) => ({
  path: route.path,
  element: route.element,
  id: route.id,
}))
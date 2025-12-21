import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

import Homepage from './pages/Homepage/Homepage.jsx'
import About from './pages/About/About.jsx'
import Notes from './pages/Notes/Notes.jsx'
import Workflow from './pages/Workflow/Workflow.jsx'
import Tech from './pages/Tech/Tech.jsx'
import Contact from './pages/Contact/Contact.jsx'

function App() {
  const element = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/about', element: <About /> },
    { path: '/notes', element: <Notes /> },
    { path: '/workflow', element: <Workflow /> },
    { path: '/tech', element: <Tech /> },
    { path: '/contact', element: <Contact /> },

    // Any files in /posts will be handled here automatically
    ...routes,
  ])

  return (
    <Suspense fallback={<></>}>
      {element}
    </Suspense>
  )
}

export default App

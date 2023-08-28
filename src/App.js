import './App.css';

import { BrowserRouter as Router, RouterProvider, Switch  } from 'react-router-dom';
import { route } from './Components/Friend/Router';

function App() {

  return (
    <RouterProvider router={route}>

    </RouterProvider>
  );
}

export default App;

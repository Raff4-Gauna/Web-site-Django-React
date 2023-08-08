import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';



import Home from 'containers/pages/Home';
import Error404 from 'containers/Errors/Error404';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import Blog from 'containers/pages/Blog';
import About from 'containers/pages/About';
import Contact from 'containers/pages/Contact';


function App() {
  return (
    <Provider store={store}>

        <Router>
              <Routes>
                  {/* Error Display*/}
                  <Route path='*' element={<Error404/>} />

                  {/* Home Display/ llamamos a las rutas definidas del navbar*/}
                  <Route path='/' element={<Home/>} />
                  <Route path='/casos' element={<Cases/>} />
                  <Route path='/servicios' element={<Services/>} />
                  <Route path='/blog' element={<Blog/>} />
                  <Route path='/nosotros' element={<About/>} />
                  <Route path='/contactos' element={<Contact/>} />
              </Routes> 
        </Router>
        
    </Provider>
  );
}

export default App;
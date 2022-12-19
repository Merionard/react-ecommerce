
import './category.style.scss';
import Home from './components/routes/home/home-component';
import {Routes,Route} from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';


const Shop = () =><h1>SHOP PAGE</h1>;

const App = () => {return( 
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='sign-in' element={<Authentication/>}/>
    </Route>
  </Routes>)
}



export default App;

import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import AddCar from './Components/AddCar/AddCar';
import Home from './Components/Home/Home/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails/ProductDetails';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import NotFound from './NotFound/NotFound';

export const SearchContext = createContext();
function App() {
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/car/detail' component={ProductDetails} />
          <Route path='/car/details/:carId' component={ProductDetails} />
          <Route path='/addCar' component={AddCar} />
          <Route path='/cars/update/:id' component={UpdateProduct} />
          <Route exact path='/' component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </SearchContext.Provider>
  );
}

export default App;

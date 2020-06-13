import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Row} from 'reactstrap';
import * as serviceWorker from './serviceWorker';
import ProductTable from './Components/ProductTable';
const products = [
  {name: 'Coffee maker', category: 'Electronics', price: 200},
  {name:'Desktop', category:  'Electronics', price: 1000}, 
  {name: 'Dress', category: 'Clothes', price: 55.77},  
  {name: 'T-shirt', category: 'Clothes', price: 17}
];
ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

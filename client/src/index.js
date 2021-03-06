import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SimpleReactLightbox from 'simple-react-lightbox';


import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  
  <Provider store={store}> 
    <React.StrictMode>
      <SimpleReactLightbox>
        
          <App />
       
      </SimpleReactLightbox>
    </React.StrictMode>
  </Provider >  
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
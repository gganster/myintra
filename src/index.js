import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from "./hydrogen/core/init";

//import { ToastContainer } from 'react-toastify';
//import Router from "./lib/internal/Router";
//import moment from "moment";

/*const App = () => {
  return (
    <>
      <ToastContainer pauseOnFocusLoss={false}
                      theme="colored" />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  )
}*/

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();

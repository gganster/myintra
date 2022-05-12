import React, {useEffect} from "react";
import 'moment/locale/fr';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "react-datepicker/dist/react-datepicker.css";

import "../styles/index.css";

import moment from "moment";

import config from "../../config";

if (config.driver === "firebase") {
  const firebase = require("firebase");
  if (firebase.default.apps.length === 0) {
    firebase.default.initializeApp(config.firebase);
    firebase.default.firestore().settings({ignoreUndefinedProperties: true});
    firebase.default.firestore().settings({enablePersistence: config.firebase.enablePersistence});
  }
}

const App = (props) => {
  const {children} = props;

  useEffect(() => {moment.updateLocale(config.lang);})

  return (
    <>
      hello world
    </>
  )
}

export default App;
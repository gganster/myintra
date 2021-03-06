import config from "config";

import useNoAuth from "./_useNoAuth";
import useFirebaseAuth from "./_useFirebaseAuth";

const useAuthProvider = config.driver === "firebase" ? useFirebaseAuth
                                                     : useNoAuth;

// interface
// isHandler:bool, set true if this instance of usAuth handle the login/logout process 
// (only one instance of usAuth can handle the login/logout process, default instance in hydrogen/core/Router.js)
const useAuth = (isHandler = false) => {
  const {register, login, logout, changePassword, forgotPassword} = useAuthProvider(isHandler);
  return {register, login, logout, changePassword, forgotPassword}
}

export default useAuth;
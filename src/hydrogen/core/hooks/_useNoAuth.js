import {useEffect} from "react";
import useUI from "contexts/ui";

const useNoAuth = (isHandler = false) => {
  const [ui, setUI] = useUI();

  useEffect(() => {
    if (isHandler)
      setUI({...ui, loading: false});
  }, [isHandler]);

  const register = async () => {}
  const login = async () => {}
  const logout = () => {}
  const changePassword = async () => {}
  const forgotPassword = async () => {}

  return {register, login, logout, changePassword, forgotPassword}
}

export default useNoAuth;
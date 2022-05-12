import {useState, useEffect} from "react";
import useUI from "contexts/ui";

//interface
const useAuth = (isHandler = false) => {
  const [ui, setUI] = useUI();

  useEffect(() => {setUI({...ui, loading: false});}, []);

  const register = async (method, args) => {

  }

  const login = async (method, args) => {

  }

  const logout = () => {

  }

  const changePassword = async (oldPassword, newPassword) => {

  }

  const forgotPassword = async (email) => {

  }

  return {register, login, logout, changePassword, forgotPassword}
}

export default useAuth;
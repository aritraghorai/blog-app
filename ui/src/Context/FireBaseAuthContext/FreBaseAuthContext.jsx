import { useState, useEffect } from "react";
import { createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useContext } from "react";

const FirebaseAuth = createContext();

const FireBaseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(undefined);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        setUser(user);
        setToken(await user.getIdToken());
      } else {
        setUser(null);
        setToken(undefined);
      }
      setIsLoading(false);
    });
    return unSubscribe;
  }, []);
  const value = { user, isloading, token };
  return (
    <FirebaseAuth.Provider value={value}>{children}</FirebaseAuth.Provider>
  );
};

export default FireBaseContext;

export const useAuthContext = () => useContext(FirebaseAuth);

export const useAuthToken = () => useContext(FirebaseAuth).token;

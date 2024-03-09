import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { AuthContextProps, IAuthProviderProps } from '../types/types';
import auth from '../firebase/firebase.config';
import { axiosBase } from '../hooks/useAxiosSecure';

export const AuthContext = createContext<AuthContextProps | null | any>(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState<string | undefined | null>('');
  const [photo, setPhoto] = useState<string | undefined | null>('');
  const [role, setRole] = useState<string | undefined | null>('');
  const [loading, setLoading] = useState(true);
  const [roleLoading, setRoleLoading] = useState(true);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setName('');
    setPhoto('');
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setPhoto(currentUser?.photoURL);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      axiosBase.get(`/users/role/${user?.email}`).then((response) => {
        const role = response.data.role;
        setRole(role);
        setRoleLoading(false);
      });
    } else {
      setRoleLoading(false);
    }
  }, [user, setLoading]);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logOut,
    setLoading,
    name,
    setName,
    photo,
    setPhoto,
    role,
    setRole,
    roleLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

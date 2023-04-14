import { useContext } from 'react';

import UseAsyncStorage from './asyncStorageContext';
import AuthorisationContext from './authorisationContext';

const UserContext = () => {
  const { user, setUser } = useContext(AuthorisationContext);
  const { setItem } = UseAsyncStorage();

  const addUser = (u) => {
    setUser(u);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
  };

  return { user };
};

export default UserContext;

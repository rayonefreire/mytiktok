import { useContext } from 'react';

import { Context } from "../context"
import { SingIn } from '../screens/SingIn';
import { Routes } from './index.routes';

export function AppRoutes() {
  const { signed } = useContext(Context);

  return !signed ? <SingIn /> : <Routes />
}
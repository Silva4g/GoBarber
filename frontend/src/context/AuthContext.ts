import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // hack para inicializar sem nenhum dado

export default AuthContext;

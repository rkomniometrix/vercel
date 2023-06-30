import { createContext } from 'react';

const VerifyToken = createContext();

const TokenProvider = VerifyToken.Provider
const TokenConsumer = VerifyToken.Consumer

export { TokenConsumer, TokenProvider };

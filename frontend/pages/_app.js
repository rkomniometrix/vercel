import { useState } from 'react';
import '../styles/_global.scss';
import { TokenProvider } from "@/context/VerifyToken";

export default function MyApp({ Component, pageProps }) {
  const [contextValue, setContextValue] = useState(false);

  const updateContextValue = (newValue) => {
    setContextValue(newValue);
  };

  return(
    <TokenProvider value={{ contextValue, updateContextValue }}>
      <Component {...pageProps} />
    </TokenProvider>
  );
}
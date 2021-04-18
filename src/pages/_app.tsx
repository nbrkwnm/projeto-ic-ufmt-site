import React, { FC } from 'react';

import '../styles/globals.css';

import { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default App;

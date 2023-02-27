import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from './_layout';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Walletsbox</title>
					<meta
						name='description'
						content='Walletsbox | Easy All-in-one crypto wallet'
					/>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<CssBaseline />
				<SessionProvider session={session}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SessionProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

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
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

export default function App({ Component }: AppProps<any>) {
	const host = typeof window !== "undefined" ? window.location.host : "defaultHost";
	return (
		<StyledEngineProvider injectFirst>
			<MetaMaskUIProvider
				debug={false}
				sdkOptions={{
					dappMetadata: {
						name: "Commit Zone",
						url: host,
					},
					// Other options
				}}
			>
				<ThemeProvider theme={theme}>
					<Head>
						<title>CommitZone</title>
						<meta
							name='description'
							content='CommitZone | Solidify Your Promises: Smart Contracts Redefining Commitment.'
						/>
						<meta name='viewport' content='width=device-width, initial-scale=1' />
						<link rel='icon' href='/favicon.ico' />
					</Head>
					<CssBaseline />
					<Layout>
						<Component />
					</Layout>
				</ThemeProvider>
			</MetaMaskUIProvider>
		</StyledEngineProvider>
	);
}

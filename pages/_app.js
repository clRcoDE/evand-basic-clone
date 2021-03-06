import "../styles/globals.scss"
import { Provider } from "react-redux"
import { useStore } from "../redux/store"
import { ThemeProvider } from "styled-components"
import Head from "next/head"

const theme = {
	colors: {
		primary: "#0060ff",
		foreground: "#00ff95",
		magnolia: "rgba(255, 250, 255, 1)",
		jet: "rgba(43, 43, 43, 1)",
		deepDark: "rgba(7,7,7,1)",
		royalbluedark: " rgba(10, 36, 99, 1)",
		cyberyellow: "rgba(255, 208, 0, 1)",
		mediumaquamarine: " rgba(2, 227, 167, 1)",
		purplex11: "rgb(117, 26, 237)",
		rosemadder: "rgba(232, 9, 54, 1)",
		gradone: "linear-gradient(109deg, #4158D0 0%, #C850C0 46%, #FFCC70 90%)",
		gradtwo: "linear-gradient(45deg, #09009f, #00ff95 80%)",
		gradthree: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
		gradfour: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
		gradfive: "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
		gradsix:
			"background-image: radial-gradient( circle 929px at 0.6% 1.3%,  rgba(248,251,10,1) 0%, rgba(248,47,47,1) 82.6% )",
		gradcircleone:
			"linear-gradient(white, white),radial-gradient(circle at top left, #09009f, #00ff95 80%)",
		gradcircletwo:
			" linear-gradient(white, white),radial-gradient(circle at top left, #4158d0 0%, #c850c0 46%, #ffcc70 90%)",
		dark: "#323232",
		calm: "#e6e6e6",
		bright: "#fff",
		polkadot: {
			backgroundimage:
				"radial-gradient(#333 2%, transparent 2%), radial-gradient(#333 2%, transparent 2%)",
			backgroundcolor: "#fff",
			backgroundposition: "0 0, 50px 50px",
			backgroundsize: "100px 100px",
		},
	},

	shadows: {
		primary: "0 0px 14px -1px rgba(0,0,0,0.2)",
		secondry: "0 4px 14px 0 rgba(0,0,0,0.5)",
		deepsmooth:
			"0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
		smoothShadow:
			"0 1.8px 2.1px rgba(0, 0, 0, 0.076),0 3.5px 5px rgba(0, 0, 0, 0.079),0 5.2px 9.4px rgba(0, 0, 0, 0.078),0 6.8px 16.8px rgba(0, 0, 0, 0.076),0 8.8px 32.6px rgba(0, 0, 0, 0.073),0 19px 80px rgba(0, 0, 0, 0.07)",
		packshadow: "0px 3px 15px 0px rgba(40,142,217,0.4)",
	},
	fonts: {
		size: {
			header: "2rem",
			semiBig: "1.5rem",
			standard: "1.2rem",
			regular: "0.9rem",
			desc: "0.6rem",
		},
	},
	screen: {
		phone: "560px",
		tablet: "768px",
		desktop: "1024px",
	},
}
function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)
	return (
		<Provider store={store}>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap"
					rel="stylesheet preload prefetch"
					as="style"
				/>

				<link
					as="style"
					href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
					rel="stylesheet preload prefetch"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp

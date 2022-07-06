import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/navbar.css";
import { SessionProvider, getSession} from "next-auth/react";
import Authentication from "../components/Authentication";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Authentication Component={() => <Component {...pageProps} />} />
    </SessionProvider>
  );
}

export default MyApp;
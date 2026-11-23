import { ClerkProvider, Show, SignOutButton } from '@clerk/nextjs';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Show when="signed-in">
        <header className="top-bar">
          <SignOutButton redirectUrl="/">
            <button>Sign out</button>
          </SignOutButton>
        </header>
      </Show>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

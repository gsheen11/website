import { ClerkProvider, Show, SignOutButton } from '@clerk/nextjs';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <header className="top-bar">
        <Show when="signed-out">
          <a href="/files">Sign in</a>
        </Show>
        <Show when="signed-in">
          <SignOutButton redirectUrl="/">
            <button>Sign out</button>
          </SignOutButton>
        </Show>
      </header>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

import { useNDK } from "@nostr-dev-kit/ndk-react";
import logo from './logo.svg';
import './App.css';

function App() {

  const {
    ndk,
    signer,
    fetchEvents,
    fetchEventsEOSE,
    loginWithNip07,
    loginWithNip46,
    loginWithSecret,
    signPublishEvent,
  } = useNDK();

  const user = await loginWithNip46('foo');

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;

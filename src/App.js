import { useNDK } from "@nostr-dev-kit/ndk-react";
import './App.css';
import {Button} from "react-bootstrap";
import {useState} from "react";
import Content from "./components/Content"

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

  const [user, setUser] = useState(null)

  const handleConnectClicked = async function () {
    const user = await loginWithNip07();
    setUser(user)
  }

  return (
      <div className="App">
        <header className="App-header">
          {
            user == null ? <Button onClick={handleConnectClicked}>Connect</Button> : <Content user={user}/>
          }
        </header>
      </div>
  );
}

export default App;

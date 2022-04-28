import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have authentication! Rejoice!!</h1>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Hello { user.username }</h1>
              <button onClick={signOut}></button>
            </main>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

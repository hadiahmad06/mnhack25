// import logo from './logo.svg'
import './App.css';
import { Location, Profile } from './Models/Profile'
import { ProfileCard } from './Components/ProfileCard'

const LA: Location = {
  latitude: 0,
  longitude: 0,
  address: "5128, Washington Ave",
}

const userProfile: Profile = {
  name: "John Doe",
  age: 28,
  gender: 'male',
  verification: true,
  up: 120,
  down: 5,
  ratings: [],
  origin: LA,
  destinations: [LA]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ProfileCard user={userProfile} />
        <p>
          
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

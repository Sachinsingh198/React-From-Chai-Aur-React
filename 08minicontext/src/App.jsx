import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {


  return (
      <UserContextProvider>
          <h1>React with Hitesh</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
  )
}

export default App;

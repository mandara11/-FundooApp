import './App.css';
import Dashboard from './components/dashboard/dashboard';
import ColorPopper from './pages/colorpopper/ColorPopper';
import Drawer1 from './pages/drawer/drawer';
import Header from './pages/header/Header';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import TakeNote1 from './pages/takenote1/TakeNote1';
import TakeNote2 from './pages/takenote2/TakeNote2';
import TakeNote3 from './pages/takenote3/TakeNote3';
import store from './components/redux/store'
import { Provider } from 'react-redux';
import Routerone from './components/router/router';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routerone />
        {/* <Dashboard /> */}
      </Provider>
      {/* <Drawer1 /> */}
      {/* <ColorPopper /> */}
      {/* <Dashboard /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Header />
      <TakeNote1 />
      <TakeNote2 />
      <TakeNote3 />  */}

    </div>
  );
}

export default App;

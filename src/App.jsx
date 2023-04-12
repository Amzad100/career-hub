import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
      <Header></Header>
      <div>{navigation.state === 'loading' && 'loading...'}</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App

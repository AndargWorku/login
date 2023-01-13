import Login from "./component/Login"
 import Logout from "./component/Logout"
import './App.css';
import {selectUser} from "./features/userSlice"
import {useSelector} from "react-redux"
function App() {
  const user=useSelector(selectUser)
  return (
    <div >
      {
        user?<Logout/>:<Login/>
      }
    </div>
  );
}

export default App;

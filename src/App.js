
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Loginpage from './Pages/Loginpage';
import Loader from './components/common/Loader';
import Home from './Pages/Home';
import NewCourt from './Pages/NewCourt';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { success } from './utils/toast';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourtList from './Pages/CourtList';
import Details from './Pages/Details';
import MyBokkings from './Pages/MyBokkings';


function App() {
success()
toast.success('🦄 Wow so easy!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
  });
  return (

<>
  <div>
  <Router>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/home" element={  <Home/>} />
        <Route path="/addnewcourt" element={ <NewCourt/>} />
        <Route path="/court">
        <Route path="courtlist" element={ <CourtList/>} />
        <Route path="details/:id" element={ <Details/>} />
       
        </Route>
        <Route path="/mybookings" element={ <MyBokkings/>} />
     
      </Routes>
      </Router>
{/* <ToastContainer /> */}
{/* <Loader/> */}
</div>
</>


  )
}

export default App;

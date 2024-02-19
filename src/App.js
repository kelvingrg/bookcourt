
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Loginpage from './Pages/Loginpage';
import Loader from './components/common/Loader';
import Home from './Pages/Home';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { success } from './utils/toast';


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
<div>
<ToastContainer />
  {/* <Home/> */}
<Loginpage/>
{/* <Loader/> */}
</div>
  );
}

export default App;

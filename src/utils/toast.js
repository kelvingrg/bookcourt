
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Alert(){
    toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
}

export  function success(){
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
    }

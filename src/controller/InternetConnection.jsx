
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

const InternetConnection = () => {

    
    // Internet connection check
    const handleNetworkStatusChange = (isOnline) => {
        toast.dismiss();

        const message = isOnline ? 'Internet connection restored 🚀' : 'No/Bad internet connection 😭';
        const theme = isOnline ? 'info' : 'danger';
        const autoclose = isOnline ? 2500 :3500;

        toast(message, {
        toastId: 'netwrkstatus',
        position: 'bottom-center',
        autoClose: autoclose,
        transition: Slide,
        hideProgressBar: true,
        theme: theme,
        });
    };
    

    useEffect(() => {
        const onlineHandler = () => handleNetworkStatusChange(true);
        const offlineHandler = () => handleNetworkStatusChange(false);

        window.addEventListener('online', onlineHandler);
        window.addEventListener('offline', offlineHandler);

        return () => {
        window.removeEventListener('online', onlineHandler);
        window.removeEventListener('offline', offlineHandler);
        };
    }, []);



  return (

    <> <ToastContainer /></>
  )
}

export default InternetConnection
import { toast, ToastContainer, Slide } from 'react-toastify';

const showNotification = (isSuccess, message) => {
  toast.dismiss();

  const notificationMessage = isSuccess ? message.success : message.error;
  const theme = isSuccess ? 'info' : 'danger';
  const autoClose = isSuccess ? 1500 : 1500;

  toast(notificationMessage, {
    toastId: 'notificationStatus',
    position: 'top-center',
    autoClose: autoClose,
    transition: Slide,
    hideProgressBar: true,
    theme: theme,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export { showNotification, ToastContainer };

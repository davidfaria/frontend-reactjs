import { toast } from 'react-toastify';

const toastError = message => {
  toast.error(message);
};
const toastSuccess = message => {
  toast.success(message);
};
const toastWarning = message => {
  toast.warning(message);
};
const toastInfo = message => {
  toast.info(message);
};

export { toastError, toastSuccess, toastWarning, toastInfo };

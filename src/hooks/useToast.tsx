import { ToastProsp } from 'components/Toast';
import useUIStore from 'store/useUIStore';

export default function useToast() {
  const { toast, openToast, clearToast, closeToast } = useUIStore((state) => state);

  const HandleOpenToast = (params: ToastProsp) => {
    openToast(params);
  };

  const HandlecloseToast = () => {
    closeToast();
    setTimeout(() => {
      clearToast();
    }, 100);
  };

  return {
    state: toast,
    openToast: HandleOpenToast,
    closeToast: HandlecloseToast,
  };
}

import { ToastProsp } from 'components/Toast';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { uiAction } from 'store/slice/Ui';

export default function useToast() {
  const dispatch = useAppDispatch();
  const toast = useAppSelector((state) => state.ui.toast);

  const openToast = (params: ToastProsp) => {
    dispatch(uiAction.openToast(params));
  };

  const closeToast = () => {
    dispatch(uiAction.closeToast());
    setTimeout(() => {
      dispatch(uiAction.clearToast());
    }, 100);
  };

  return {
    state: toast,
    openToast,
    closeToast,
  };
}

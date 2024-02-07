// import { EditProfile } from 'components/EditProfile';
import { Header } from 'components/Header';
// import ModalComponent from 'components/Modal/ModalComponent/ModalComponent';
// import { RoutesComp } from 'components/Routes/RoutesComp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authSlice/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
    <Header/>
    {/* <EditProfile/> */}
      {/* <RoutesComp /> */}
    </>
  );
};

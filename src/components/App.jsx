import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,  lazy, Suspense } from 'react';
import authOperetions from 'redux/auth/authOperations';
import { Loader } from './Loader/Loader';
// import  NotFound  from '../components/NotFound/NotFound';


const Layout = lazy(() => import('./Layout')) ;
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(authOperetions.refreshCurrentUser());
  }, [dispatch])

  return (
    <>
      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Route>
      </Routes>
        ) }
        
      </Suspense>
    </>  
)
  
}; 

  
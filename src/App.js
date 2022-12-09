import { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import React from 'react'

import Loading from './component/loading/Loading';
import SignOut from './component/signout/SignOut';
const SignUp= React.lazy(()=> import("./pages/signup/SignUp"))
const LogIn= React.lazy(()=>import("./pages/login/LogIn"))
const Home= React.lazy(()=>import("./pages/home/Home"))
const Profile= React.lazy(()=>import("./pages/profile/Profile"))
const Nav= React.lazy(()=>import("./component/nav/Nav"))




function App() {

  return (
    <>  
      <Routes>
      <Route path='/' element={<Suspense fallback={<Loading/>}><SignUp/></Suspense>}/>
      <Route path='/home' element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
      <Route path='/login' element={<Suspense fallback={<Loading/>}><LogIn/></Suspense>}/>
      <Route path='/signout' element={<Suspense fallback={<Loading/>}><SignOut/></Suspense>}/>
      <Route path='/profile' element={<Suspense fallback={<Loading/>}><Profile/></Suspense>}/>
      </Routes>

      </>

    
  );
}

export default App;

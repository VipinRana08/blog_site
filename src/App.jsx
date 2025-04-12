import React, { useEffect, useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import service from './springboot backend/auth';
import {login, logout} from './store/authSlice';
import { Header, Footer} from './components/index';
import {Outlet} from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => {
        service.getCurrentUser()
        .then((userData) => {
            if(userData){
                dispatch(login({userData}));
            }else{
                dispatch(logout());
            }
        })
        .finally(() => setLoading(false));
    }, []);
    return !loading ? (
        <div className='min-h-screen flex flex-wrap 
        content-between bg-gray-600'>
            <div className='w-full block'>
                <Header/>
                <main className='h-screen text-center'>
                    <h1 className='font-bold italic'> Hello !!! 😎</h1> <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    ) : null;
}

export default App

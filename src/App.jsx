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
        <div className='flex flex-col min-h-screen bg-gray-600'>
            <Header/>
            <main className='flex-grow text-center p-4'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    ) : null;
}

export default App

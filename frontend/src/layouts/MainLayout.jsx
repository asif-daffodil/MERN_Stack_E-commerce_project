import Header from '../components/common/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/common/Footer';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    const location = useLocation();
    const { data } = useQuery({
        queryKey: ['companyInfo'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:4000/api/v1.0.0/company-details');
            return response.data;
        },
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Header data={data} />
            <ToastContainer autoClose={3000} style={{top: "100px"}} />
            <Outlet />
            <Footer data={data} />
        </>
    );
};

export default MainLayout;
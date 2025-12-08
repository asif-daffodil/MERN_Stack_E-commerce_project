import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const useAuthRedirect = (path = "/") => {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            if (token) {
                try {
                    const response = await axios.get('http://localhost:4000/api/v1.0.0/check-auth', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (response.data.message === "Authorized") {
                        navigate(path);
                    }
                } catch (error) {
                    console.error('Error during authorization check:', error);
                }
            }else{
                navigate('/sign-in');
            }
        };

        checkAuth();
    }, [token, navigate]);
};

export default useAuthRedirect;

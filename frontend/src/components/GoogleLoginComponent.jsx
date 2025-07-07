import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from '../stores/user.store.js';
import { useNavigate } from 'react-router-dom';

const GoogleLoginComponent = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate()

  return (
    <div className='basic-page-container'>
        <GoogleLogin
        onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            setUser(decoded);
            navigate('/home');
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        />
    </div>
  );
};

export default GoogleLoginComponent;

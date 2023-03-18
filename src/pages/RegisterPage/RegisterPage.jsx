import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(register(data));
  };

  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;

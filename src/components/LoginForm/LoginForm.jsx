import useForm from 'shared/hooks/useForm';
import PropTypes from 'prop-types';

import TextField from 'shared/TextField/TextField';
import Button from 'shared/Button/Button';

import fields from './fields';
import initialState from './initialState';
import css from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;

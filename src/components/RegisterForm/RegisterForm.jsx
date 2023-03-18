import useForm from 'shared/hooks/useForm';
import PropTypes from 'prop-types';

import TextField from 'shared/TextField/TextField';
import Button from 'shared/Button/Button';

import fields from './fields';
import initialState from './initialState';
import css from './register-form.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const {name, email, password} = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={password} handleChange={handleChange} {...fields.password} />
      <Button>Register</Button>
    </form>
  );
};

RegisterForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
  };
  
export default RegisterForm;

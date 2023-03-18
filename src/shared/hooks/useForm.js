import { useState, useCallback } from 'react';

const useForm = ({ inititialState, onSubmit }) => {
  const [state, setState] = useState({ ...inititialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...inititialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;

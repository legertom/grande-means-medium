export const createClearError = setErrors => field => {
    setErrors(state => {
      return clearFieldError(state, field);
    });
  };
  
  export const createSetValue = setValues => setErrors => errors => (
    field,
    value
  ) => {
    setValues(state => ({
      ...state,
      [field]: value,
    }));
  
    if (errors[field]) {
      setErrors(state => {
        return clearFieldError(state, field);
      });
    }
  };
  
  const clearFieldError = (state, field) => {
    const errors = { ...state };
    delete errors[field];
    return errors;
  };
  
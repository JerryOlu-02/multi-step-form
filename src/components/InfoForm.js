import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import FormContext from '../context/formdata';

const InfoForm = function () {
  const { setPath } = useContext(FormContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: { name: '', tel: '', email: '' } });

  const onSubmit = function (data) {
    console.log(data);
    setPath(2);
  };

  return (
    <div className="info-form">
      <div>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <label className="error-label">{errors.name?.message}</label>
          <input
            type="text"
            {...register('name', { required: 'This field is required' })}
            placeholder="e.g. Stephen King"
          />
        </div>

        <div>
          <label>Email Address</label>
          <label className="error-label">{errors.email?.message}</label>
          <input
            type="email"
            {...register('email', { required: 'This field is required' })}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <label className="error-label">{errors.tel?.message}</label>
          <input
            type="text"
            {...register('tel', { required: 'This field is required' })}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>

      <div className="form-button-div">
        <button onClick={handleSubmit(onSubmit)} type="submit">
          Next Step
        </button>
      </div>
    </div>
  );
};
export default InfoForm;

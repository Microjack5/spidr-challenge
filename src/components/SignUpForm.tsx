import React, { useState } from 'react';

const SignUpForm: React.FC = () => {

  const blankForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cost: '',
    pin: '',
  };

  const [formData, setFormData] = useState(blankForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'pin') {
      const digits = value.replace(/\D/g, '').slice(0, 16);
      const formatted = digits.match(/.{1,4}/g)?.join('-') ?? '';
      setFormData({ ...formData, pin: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const pinDigits = formData.pin.replace(/-/g, '');
    if (pinDigits.length !== 16) {
        alert('Please enter a full 16-digit PIN.');
        return;
    }

    console.log(`Form submitted:`, formData);
    alert('Form submitted! Check the console for details.');
    setFormData(blankForm);
  };

  return (
    <form className="sign-up-form p-4" onSubmit={handleSubmit}>
      <h1 className="card-title">Sign Up</h1>
      <hr className="card-hr mx-auto my-4"/>

      <div className="mb-3">
        <label className="card-title">First Name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="card-title">Last Name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="card-title">Phone Number</label>
        <input
          type="tel"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="card-title">Email Address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="card-title">Price Prediction</label>
        <div className='input-group'>
            <span className="input-group-text">$</span>
            <input
                type="text"
                name="cost"
                className="form-control"
                value={formData.cost}
                onChange={handleChange}
                required
            />
        </div>
      </div>

      <div className="mb-3">
        <label className="card-title">Spidr Members PIN</label>
        <input
          type="password"
          name="pin"
          className="form-control"
          value={formData.pin}
          onChange={handleChange}
          inputMode="numeric"
          maxLength={19}
          required
        />
      </div>

      <button type="submit" className="btn btn-outline-light mt-3 w-100">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;

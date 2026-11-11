import React, { useState } from 'react';

const initialValues = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

/** A controlled five-field sign-up form. Pass an onRegister handler from the app. */
export default function Register({ onRegister, submitting = false, error = '' }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (typeof onRegister === 'function') onRegister(values);
  }

  return (
    <main className="register-page">
      <section className="register-card" aria-labelledby="register-heading">
        <h1 id="register-heading">Sign-up</h1>
        <p>Create an account to share your dealership experience.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="register-username">Username</label>
          <input id="register-username" name="username" autoComplete="username" value={values.username} onChange={handleChange} required />

          <label htmlFor="register-first-name">First Name</label>
          <input id="register-first-name" name="firstName" autoComplete="given-name" value={values.firstName} onChange={handleChange} required />

          <label htmlFor="register-last-name">Last Name</label>
          <input id="register-last-name" name="lastName" autoComplete="family-name" value={values.lastName} onChange={handleChange} required />

          <label htmlFor="register-email">Email</label>
          <input id="register-email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} required />

          <label htmlFor="register-password">Password</label>
          <input id="register-password" name="password" type="password" autoComplete="new-password" value={values.password} onChange={handleChange} required />

          {error && <p role="alert" className="register-error">{error}</p>}
          <button type="submit" disabled={submitting}>{submitting ? 'Registering…' : 'Register'}</button>
        </form>
      </section>
    </main>
  );
}

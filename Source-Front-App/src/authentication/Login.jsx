import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";

import './login.css'

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = UseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  // const handleGoogleSignin = async () => {
  //   try {
  //     await loginWithGoogle();
  //     navigate("/");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // const handleResetPassword = async (e) => {
  //   e.preventDefault();
  //   if (!user.email) return setError("Write an email to reset password");
  //   try {
  //     await resetPassword(user.email);
  //     setError('We sent you an email. Check your inbox')
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <>

      <div className='login-container-principal'>
        <header className='title'>Gestión Lógistica: Laboratories FISI</header>
        <section className='login-container'>
          <div className='login'>
            <h2 className='title-login'>Iniciar sesión</h2>
            <p>Inicia sesión en tu cuenta usando tu correo electrónico.</p>
            <form className='login-content' onSubmit={handleSubmit}>
              <fieldset>
                <legend className='legend-login'>Correo electrónico</legend>
                <input className='input-login' type="email" placeholder='ejemplo@unmsm.edu.pe' name="email" id="email" onChange={handleChange} required />
              </fieldset>
              <fieldset>
                <legend className='legend-login'> Contraseña</legend>
                <input className='input-login' name="password" id="password" type="password" onChange={handleChange} required />
              </fieldset>
              <button className='button-login' type='submit'>Iniciar sesión</button>
            </form>
          </div>
          {error && <Alert message={error} />}
        </section>
      </div>
      {/* <div>
        {error && <Alert message={error} />}

        <form
          onSubmit={handleSubmit}
        >
          <div >
            <label
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="youremail@company.tld"
            />
          </div>
          <div >
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="*************"
            />
          </div>

          <div>
            <button
              type="submit"
            >
              Sign In
            </button>
            <a
              href="#!"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <button
          onClick={handleGoogleSignin}
        >
          Google login
        </button>
        <p >
          Dont have an account?
          <Link to="/register">
            Register
          </Link>
        </p>
      </div> */}
    </>
  );
}

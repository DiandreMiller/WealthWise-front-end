import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const LoginComponent = ({
  formik,
  userError,
  togglePasswordVisibility,
  showPassword,
  toggleAuthState,
  isLogin
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {userError && <p className="text-red-500 mb-4">{userError}</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email:</label>
            <input
              required
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border border-gray-600 rounded p-3 w-full bg-gray-700 text-white"
              placeholder="Enter your email"
            />
            {formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-300 mb-2">Password:</label>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border border-gray-600 rounded p-3 w-full bg-gray-700 text-white"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            {formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
          </div>
          <div className="mb-4">
            <Link to="/forgot-password" className="text-blue-400 hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={toggleAuthState}
              className="text-blue-400 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

LoginComponent.propTypes = {
  formik: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    }).isRequired,
    errors: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string
    })
  }).isRequired,
  userError: PropTypes.string,
  togglePasswordVisibility: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  toggleAuthState: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired
};

export default LoginComponent;
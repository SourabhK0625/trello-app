import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-start text-2xl font-extrabold leading-9 tracking-tight text-blue-600">
            Login
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm border-[3px] border-blue-400 p-4 rounded-lg">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [email]: e.target.value,
                    }))
                  }
                  value={formData?.email}
                  className="block w-full px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  placeholder="Passsword"
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            {`Don't have an account? `}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="flex w-50 rounded-md justify-center bg-blue-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

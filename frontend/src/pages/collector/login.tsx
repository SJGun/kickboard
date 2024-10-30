import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import BlueButton from '../../components/blueButton';
import { collectorLogin } from '../../services/api';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 로그인 함수 나중에 만들기
  const onClick = async () => {
    try {
      const data = await collectorLogin(id, password);
      console.log('로그인 성공: ', data);
    } catch (error) {
      console.error('로그인 실패: ', error);
      setErrorMessage(
        '로그인에 실패했습니다. 아이디나 패스워드를 다시 확인해주세요'
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mb-12 text-center">
        <p className="text-2xl">수거업체신가요?</p>
        <p className="text-2xl">로그인을 먼저 해주세요.</p>
      </div>

      {/* Error message container */}
      {errorMessage && (
        <div className="mb-4 text-center font-bold text-red-600">
          <div className="mb-4 text-center font-bold text-red-600">
            <span>로그인에 실패했습니다.</span>
            <br />
            <span>아이디나 패스워드를 다시 확인해주세요.</span>
          </div>
        </div>
      )}

      <div className="flex w-full max-w-xs flex-col items-center border border-black bg-[rgba(220,220,220,0.4)] p-5">
        <div className="w-full sm:max-w-sm">
          <form className="w-full space-y-6">
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-bold text-gray-900"
              >
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="text"
                  required
                  autoComplete="username" // Changed autocomplete to match a generic username
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-900"
                >
                  비밀번호
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    비밀번호를 잊으셨나요?
                  </a>
                </div> */}
              </div>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                  aria-label="Toggle password visibility"
                >
                  {!showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" /> // Closed eye icon for "hide"
                  ) : (
                    <EyeIcon className="h-5 w-5" /> // Open eye icon for "show"
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-6">
            <BlueButton
              width="100%"
              height="36px"
              text="로그인"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

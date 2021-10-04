import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Pulse from 'react-reveal/Pulse';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { setLogin } from '../../../services/auth';
import Cookies from 'js-cookie';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) toast.error('Email dan Password  Wajib diisi!!');
    else {
      const response = await setLogin(data);
      if (response.error) toast.error(response.message);
      else {
        toast.success('Login berhasil');
        const token = response.data.token;
        const tokenBase64 = window.btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });
        router.push('/');
      }
    }
  };
  return (
    <Pulse>
      <div className="w-full flex flex-col items-center pt-2 pb-4 mt-4 bg-gray-900 h-auto shadow-xlbold">
        <Input
          type="email"
          text="Email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          text="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col mt-4 space-y-2">
          <Button text="Sign in" onClick={handleSubmit} />
          <div className="flex flex-row">
            <p className="text-white">didn't have an account ? &nbsp;</p>
            <Button isLink text="Sign up" href="/sign-up" />
          </div>
        </div>
      </div>
    </Pulse>
  );
}

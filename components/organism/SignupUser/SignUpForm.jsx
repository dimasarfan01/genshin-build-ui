import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Pulse from 'react-reveal/Pulse';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SignUpForm({ setNextForm }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleSubmit = () => {
    if (
      formData.username === '' ||
      formData.email === '' ||
      formData.password === ''
    ) {
      toast.error('Please fill every data');
    } else {
      localStorage.setItem('user-form', JSON.stringify(formData));
      setNextForm(true);
    }
  };
  useEffect(() => {
    const getLocalForm = localStorage?.getItem('user-form');
    if (getLocalForm) {
      const form = JSON.parse(getLocalForm);
      setFormData({
        username: form.username,
        email: form.email,
        password: form.password,
      });
    }
  }, []);
  return (
    <Pulse>
      <div className="w-full flex flex-col items-center pt-2 pb-4 mt-4 bg-gray-900 h-auto shadow-xlbold">
        <Input
          type="name"
          text="Username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <Input
          type="email"
          text="Email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="password"
          text="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <div className="flex flex-col mt-4 space-y-2">
          <Button text="Submit" onClick={handleSubmit} />
          <div className="flex flex-row">
            <p className="text-white">Already have an account ? &nbsp;</p>
            <Button isLink text="Sign in" href="/sign-in" />
          </div>
        </div>
      </div>
    </Pulse>
  );
}

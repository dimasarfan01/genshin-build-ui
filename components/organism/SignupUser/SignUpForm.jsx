import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Pulse from 'react-reveal/Pulse';

export default function SignUpForm() {
  return (
    <Pulse>
      <div className="w-full flex flex-col items-center pt-2 pb-4 mt-4 bg-gray-900 h-auto shadow-xlbold">
        <Input type="name" text="Username" placeholder="Enter your username" />
        <Input
          type="email"
          text="Email"
          placeholder="Enter your email address"
        />
        <Input
          type="password"
          text="Password"
          placeholder="Enter your password"
        />
        <div className="flex flex-col mt-4 space-y-2">
          <Button text="Submit" />
          <div className="flex flex-row">
            <p className="text-white">Already have an account ? &nbsp;</p>
            <Button isLink text="Sign in" href="/sign-in" />
          </div>
        </div>
      </div>
    </Pulse>
  );
}

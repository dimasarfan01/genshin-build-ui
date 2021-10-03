import AuthIcon from '../../atoms/AuthIcon';
import SignInForm from './SignInForm';
import Fade from 'react-reveal/Fade';

export default function SigninUser() {
  return (
    <div className="bg-gray-900 w-full h-full min-h-screen flex justify-center p-4">
      <Fade delay={200}>
        <div className="flex flex-col items-center lg:w-1/3 w-full bg-gray-800 rounded-xl shadow-xlsignin">
          <AuthIcon text="Sign in" />
          <img
            src="/icons/hutao2.png"
            alt="signin-icon"
            className="rounded-full mt-4 w-32 bg-gray-800 shadow-xlbold"
          />
          <SignInForm />
          <img src="/icons/qiqi2.png" alt="signin-icon" className="w-24 mt-4" />
        </div>
      </Fade>
    </div>
  );
}

import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Flip from 'react-reveal/Flip';
import { toast } from 'react-toastify';
import toBase64 from '../../../function/toBase64';
import { setSignUp } from '../../../services/auth';
import Button from '../../atoms/Button';

export default function AvatarForm({ setNextForm }) {
  const router = useRouter();
  const [imgPreview, setImgPreview] = useState(null);
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    const getLocalForm = localStorage.getItem('user-form');
    const form = JSON.parse(getLocalForm);
    const data = new FormData();
    data.append('avatar', image);
    data.append('email', form.email);
    data.append('password', form.password);
    data.append('username', form.username);
    data.append('role', 'user');
    data.append('status', 'Y');
    const result = await setSignUp(data);
    if (result?.error) toast.error(result.message);
    else {
      toast.success('Register Berhasil');
      router.push('/');
    }
  };
  return (
    <Flip right>
      <div className="w-full flex flex-col items-center pt-2 pb-4 mt-4 bg-gray-900 h-auto shadow-xlbold">
        <div className="w-auto h-auto py-4 flex flex-col items-center space-y-4">
          <img
            src={imgPreview ? imgPreview : '/icons/upload.svg'}
            alt="preview"
            className="w-36 h-36 rounded-full"
          />
          <input
            className="w-24 cursor-pointer rounded-lg fill-current text-blue-500"
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={async (e) => {
              const img = e.target.files[0];
              setImgPreview(URL.createObjectURL(img) || null);
              return setImage(await toBase64(img));
            }}
          />
          <p className="text-white">*Max image size 1 MB</p>
        </div>
        <div className="flex flex-row mt-1 space-x-2">
          <Button text="Back" onClick={() => setNextForm(false)} />
          <Button text="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </Flip>
  );
}

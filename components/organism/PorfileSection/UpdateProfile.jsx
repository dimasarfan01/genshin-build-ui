import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Flip from 'react-reveal/Flip';
import { toast } from 'react-toastify';
import { updateMyUserDataAPI } from '../../../services/post-data';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

export default function UpdateProfile({
  myDataProfile,
  setUpdateMenu,
  paramsId,
}) {
  const [formData, setFormData] = useState({
    username: myDataProfile.username,
    email: myDataProfile.email,
    password: '',
  });
  const router = useRouter();
  const [imgPreview, setImgPreview] = useState(
    myDataProfile.avatar ? myDataProfile.avatar : null
  );
  const [imager, setImager] = useState('');
  const handleSubmit = async () => {
    const data = new FormData();
    data.append('avatar', imager);
    data.append('password', formData.password);
    data.append('username', formData.username);
    const result = await updateMyUserDataAPI(paramsId, data);
    if (result?.error) toast.error(result.message);
    else {
      toast.success('Update Berhasil');
      setUpdateMenu(false);
      router.push(`/profile/${myDataProfile._id}`);
    }
  };
  return (
    <Flip right>
      <div className="flex flex-col items-center p-4">
        <Input
          type="email"
          text="Email"
          placeholder="Enter your email address"
          value={formData.email}
          disabled
        />
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
          type="password"
          text="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <span className="text-white text-sm">
          *fill empty if you don't wanna to change it
        </span>
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
              var reader = new FileReader();
              reader.onloadend = function () {
                return setImager(reader.result);
              };
              reader.readAsDataURL(img);
            }}
          />
          <p className="text-white">*Max image size 1 MB</p>
        </div>
        <div className="mt-4 flex flex-row space-x-4">
          <Button text="Cancel" onClick={() => setUpdateMenu(false)} />
          <Button text="Update" onClick={handleSubmit} />
        </div>
      </div>
    </Flip>
  );
}

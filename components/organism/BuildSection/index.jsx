import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { postDataTeamAPI } from '../../../services/post-data';
import AuthIcon from '../../atoms/AuthIcon';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import DataCharacter1 from './DataCharacter1';
import DataCharacter2 from './DataCharacter2';
import DataCharacter3 from './DataCharacter3';
import DataCharacter4 from './DataCharacter4';

export default function BuildSection({
  dataCharacters,
  dataArtifacts,
  dataWeapon,
}) {
  const router = useRouter();
  const findName = (id) => dataCharacters.findIndex((nama) => nama._id === id);
  const [form, setForm] = useState({
    teamName: '',
    video: '',
    desc: '',
    dataCharacter1: dataCharacters[0]._id,
    dataWeapon1: dataWeapon[0]._id,
    dataArtifact1_1: dataArtifacts[0]._id,
    dataArtifact2_1: dataArtifacts[0]._id,
    flower1: 'HP',
    plume1: 'ATK',
    sands1: 'ATK%',
    goblet1: 'Hydro DMG%',
    circlet1: 'CRIT Rate%',
    dataCharacter2: dataCharacters[0]._id,
    dataWeapon2: dataWeapon[0]._id,
    dataArtifact1_2: dataArtifacts[0]._id,
    dataArtifact2_2: dataArtifacts[0]._id,
    flower2: 'HP',
    plume2: 'ATK',
    sands2: 'ATK%',
    goblet2: 'Hydro DMG%',
    circlet2: 'CRIT Rate%',
    dataCharacter3: dataCharacters[0]._id,
    dataWeapon3: dataWeapon[0]._id,
    dataArtifact1_3: dataArtifacts[0]._id,
    dataArtifact2_3: dataArtifacts[0]._id,
    flower3: 'HP',
    plume3: 'ATK',
    sands3: 'ATK%',
    goblet3: 'Hydro DMG%',
    circlet3: 'CRIT Rate%',
    dataCharacter4: dataCharacters[0]._id,
    dataWeapon4: dataWeapon[0]._id,
    dataArtifact1_4: dataArtifacts[0]._id,
    dataArtifact2_4: dataArtifacts[0]._id,
    flower4: 'HP',
    plume4: 'ATK',
    sands4: 'ATK%',
    goblet4: 'Hydro DMG%',
    circlet4: 'CRIT Rate%',
  });
  const nameCharacter1 =
    dataCharacters[findName(form.dataCharacter1)].nameCharacter.toLowerCase();
  const nameCharacter2 =
    dataCharacters[findName(form.dataCharacter2)].nameCharacter.toLowerCase();
  const nameCharacter3 =
    dataCharacters[findName(form.dataCharacter3)].nameCharacter.toLowerCase();
  const nameCharacter4 =
    dataCharacters[findName(form.dataCharacter4)].nameCharacter.toLowerCase();

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('teamName', form.teamName);
    data.append('tagCharacters', nameCharacter1);
    data.append('tagCharacters', nameCharacter2);
    data.append('tagCharacters', nameCharacter3);
    data.append('tagCharacters', nameCharacter4);
    data.append('dataCharacter1', form.dataCharacter1);
    data.append('dataWeapon1', form.dataWeapon1);
    data.append('dataArtifact1_1', form.dataArtifact1_1);
    data.append('dataArtifact2_1', form.dataArtifact2_1);
    data.append('flower1', form.flower1);
    data.append('plume1', form.plume1);
    data.append('sands1', form.sands1);
    data.append('goblet1', form.goblet1);
    data.append('circlet1', form.circlet1);
    data.append('dataCharacter2', form.dataCharacter2);
    data.append('dataWeapon2', form.dataWeapon2);
    data.append('dataArtifact1_2', form.dataArtifact1_2);
    data.append('dataArtifact2_2', form.dataArtifact2_2);
    data.append('flower2', form.flower2);
    data.append('plume2', form.plume2);
    data.append('sands2', form.sands2);
    data.append('goblet2', form.goblet2);
    data.append('circlet2', form.circlet2);
    data.append('dataCharacter3', form.dataCharacter3);
    data.append('dataWeapon3', form.dataWeapon3);
    data.append('dataArtifact1_3', form.dataArtifact1_3);
    data.append('dataArtifact2_3', form.dataArtifact2_3);
    data.append('flower3', form.flower3);
    data.append('plume3', form.plume3);
    data.append('sands3', form.sands3);
    data.append('goblet3', form.goblet3);
    data.append('circlet3', form.circlet3);
    data.append('dataCharacter4', form.dataCharacter4);
    data.append('dataWeapon4', form.dataWeapon4);
    data.append('dataArtifact1_4', form.dataArtifact1_4);
    data.append('dataArtifact2_4', form.dataArtifact2_4);
    data.append('flower4', form.flower4);
    data.append('plume4', form.plume4);
    data.append('sands4', form.sands4);
    data.append('goblet4', form.goblet4);
    data.append('circlet4', form.circlet4);
    data.append('video', form.video);
    data.append('desc', form.desc);
    const result = await postDataTeamAPI(data);
    if (result.error) toast.error(result.message);
    else {
      toast.success('Build Team Success!');
      router.push('/');
    }
  };
  return (
    <section className="h-auto w-full min-h-screen bg-gray-900 justify-center flex p-4">
      <div className="flex flex-col items-center lg:w-5/12 w-full bg-gray-800 rounded-xl shadow-xlsignin">
        <AuthIcon text="Build Team" />
        <div className="flex flex-col w-full items-center my-4 space-y-4">
          <Input
            text="Team Name"
            type="name"
            placeholder="Enter your team name"
            value={form.teamName}
            onChange={(e) => setForm({ ...form, teamName: e.target.value })}
          />
          <DataCharacter1
            dataCharacters={dataCharacters}
            dataArtifacts={dataArtifacts}
            dataWeapon={dataWeapon}
            form={form}
            setForm={setForm}
          />
          <DataCharacter2
            dataCharacters={dataCharacters}
            dataArtifacts={dataArtifacts}
            dataWeapon={dataWeapon}
            form={form}
            setForm={setForm}
          />
          <DataCharacter3
            dataCharacters={dataCharacters}
            dataArtifacts={dataArtifacts}
            dataWeapon={dataWeapon}
            form={form}
            setForm={setForm}
          />
          <DataCharacter4
            dataCharacters={dataCharacters}
            dataArtifacts={dataArtifacts}
            dataWeapon={dataWeapon}
            form={form}
            setForm={setForm}
          />
          <Button text="Submit" onClick={handleSubmit} />
        </div>
      </div>
    </section>
  );
}

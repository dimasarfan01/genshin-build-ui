import CharacterIcon from '../../atoms/CharacterIcon';
import SelectItem from './SelectItem';

export default function DataCharacter2({
  dataCharacters,
  dataArtifacts,
  form,
  setForm,
  dataWeapon,
}) {
  const findData = (id, dataId) => dataId.findIndex((find) => find._id === id);
  const Character =
    dataCharacters[findData(form.dataCharacter2, dataCharacters)];
  const Weapon = dataWeapon[findData(form.dataWeapon2, dataWeapon)];
  const Artifact1 =
    dataArtifacts[findData(form.dataArtifact1_2, dataArtifacts)];
  const Artifact2 =
    dataArtifacts[findData(form.dataArtifact2_2, dataArtifacts)];
  return (
    <div className="w-11/12 p-2 bg-gray-700 rounded-lg items-center flex flex-col">
      <div className="w-full h-auto flex flex-row p-2 bg-gray-900 lg:rounded-lg rounded-t-lg space-x-2 justify-between">
        <CharacterIcon
          icon={Character.imageUrl}
          name={Character.nameCharacter}
        />
        <CharacterIcon icon={Weapon.imageUrl} name={Weapon.nameWeapon} />
        <CharacterIcon
          icon={Artifact1.imageUrl}
          name={Artifact1.nameArtifact}
        />
        <CharacterIcon
          icon={Artifact2.imageUrl}
          name={Artifact2.nameArtifact}
        />
      </div>
      <SelectItem
        name="Character 2"
        value={form.dataCharacter2}
        onChange={(e) => setForm({ ...form, dataCharacter2: e.target.value })}
        dataItem={dataCharacters}
        isCharacter
        hasData
      />
      <SelectItem
        name="Weapon"
        value={form.dataWeapon2}
        onChange={(e) => setForm({ ...form, dataWeapon2: e.target.value })}
        dataItem={dataWeapon}
        isWeapon
        hasData
      />
      <p className="text-white font-gemunu text-lg">Artifacts</p>
      <div className="flex flex-row items-center">
        <SelectItem
          value={form.dataArtifact1_2}
          onChange={(e) =>
            setForm({ ...form, dataArtifact1_2: e.target.value })
          }
          dataItem={dataArtifacts}
          isAritfact
          hasData
        />
        <SelectItem
          value={form.dataArtifact2_2}
          onChange={(e) =>
            setForm({ ...form, dataArtifact2_2: e.target.value })
          }
          dataItem={dataArtifacts}
          isAritfact
          hasData
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <div className="flex flex-row">
          <SelectItem
            name="Flower"
            value={form.flower2}
            onChange={(e) => setForm({ ...form, flower2: e.target.value })}
          >
            <option value="HP">HP</option>
          </SelectItem>
          <SelectItem
            name="Plume"
            value={form.plume2}
            onChange={(e) => setForm({ ...form, plume2: e.target.value })}
          >
            <option value="ATK">ATK</option>
          </SelectItem>
        </div>
        <div className="flex flex-row">
          <SelectItem
            name="Sands"
            value={form.sands2}
            onChange={(e) => setForm({ ...form, sands2: e.target.value })}
          >
            <option value="HP%">HP%</option>
            <option value="ATK%">ATK%</option>
            <option value="DEF%">DEF%</option>
            <option value="Elemental Mastery">Elemental Mastery</option>
            <option value="Energy Recharge%">Energy Recharge%</option>
          </SelectItem>
          <SelectItem
            name="Goblet"
            value={form.goblet2}
            onChange={(e) => setForm({ ...form, goblet2: e.target.value })}
          >
            <option value="ATK%">ATK%</option>
            <option value="HP%">HP%</option>
            <option value="DEF%">DEF%</option>
            <option value="Elemental Mastery">Elemental Mastery</option>
            <option value="Physical DMG%">Physical DMG%</option>
            <option value="Anemo DMG%">Anemo DMG%</option>
            <option value="Hydro DMG%">Hydro DMG%</option>
            <option value="Electro DMG%">Electro DMG%</option>
            <option value="Pyro DMG%">Pyro DMG%</option>
            <option value="Cryo DMG%">Cryo DMG%</option>
            <option value="Geo DMG%">Geo DMG%</option>
            <option value="Dendro DMG%">Dendro DMG%</option>
          </SelectItem>
        </div>
        <SelectItem
          name="Circlet"
          value={form.circlet2}
          onChange={(e) => setForm({ ...form, circlet2: e.target.value })}
        >
          <option value="HP%">HP%</option>
          <option value="ATK%">ATK%</option>
          <option value="DEF%">DEF%</option>
          <option value="Elemental Mastery">Elemental Mastery</option>
          <option value="CRIT Rate%">CRIT Rate%</option>
          <option value="CRIT DMG%">CRIT DMG%</option>
          <option value="Healing Bonus%">Healing Bonus%</option>
        </SelectItem>
      </div>
    </div>
  );
}

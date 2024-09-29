interface Field {
  name: string;
  value: string;
}

export interface MetaDetailsCardProps {
  label: string;
  fields: Array<Field>;
}

const MetaDetailsCard: React.FC<MetaDetailsCardProps> = ({ label, fields }) => (
  // <div className="bg-white rounded-lg">
  <>
    <div>
      <h1 className="py-2 font-medium text-base">{label}</h1>
    </div>
    <div className="flex justify-between">
      {fields.map(({ name, value }) => (
        <div className="flex flex-col" key={name}>
          <div>{name}</div>
          <div className="text-center">{value}</div>
        </div>
      ))}
    </div>
  </>
  // </div>
);

export default MetaDetailsCard;

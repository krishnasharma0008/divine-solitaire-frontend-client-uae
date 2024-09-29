interface DetailsTableProps {
  rows: Array<Array<string | number>>;
  title?: string;
  headings: Array<string>;
  growth?: number;
}

const DetailsTable: React.FC<DetailsTableProps> = ({
  rows,
  title,
  growth,
  headings,
}) => {
  const allColumns: Array<Array<string | number>> = [];

  headings.forEach((heading, idx) => {
    allColumns[idx] = [heading];
  });
  rows.forEach((row) => row.forEach((cell, idx) => allColumns[idx].push(cell)));

  return (
    <div className="text-sm leading-5 font-normal flex flex-col !px-0">
      {title && (
        <div className="text-base bg-[#F4F4F4] leading-5 p-4 font-medium md:rounded-md">
          <span>{title}</span>
          {growth && (
            <span
              className={`float-right ${
                growth > 0 ? "text-green" : "text-rose-600"
              }`}
            >
              {growth.toFixed(2)} %
            </span>
          )}
        </div>
      )}
      <div className="flex flex-row justify-between p-6 pb-0">
        {allColumns.map((column, idx) => (
          <div className="flex flex-col justify-between" key={idx}>
            {column.map((cell, cellIdx) => (
              <span key={cellIdx}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTable;
export { type DetailsTableProps };

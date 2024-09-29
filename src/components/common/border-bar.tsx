interface BorderBarProps {
  className?: string;
}

const BorderBar: React.FC<BorderBarProps> = ({ className }) => (
  <div className={`border-[#F4F4F4] border-4 ${className}`} />
);

export default BorderBar;
export { type BorderBarProps };

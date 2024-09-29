const TabHeader: React.FC<{ text: string }> = ({ text }) => (
  <span className="text-xl md:text-2xl font-semibold md:font-normal md:leading-8 font-montserrat uppercase md:capitalize text-gold md:text-gray-900">
    {text}
  </span>
);

export default TabHeader;

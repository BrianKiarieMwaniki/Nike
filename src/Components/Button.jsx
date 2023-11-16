const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-4 
    text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "text-white bg-coral-red border-coral-red"
    }
     border rounded-full px-7
     font-montserrat `}
    >
      {label}

      {iconUrl && (
        <img src={iconUrl} alt="icon" className="w-5 h-5 ml-2 rounded-full" />
      )}
    </button>
  );
};

export default Button;

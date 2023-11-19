import { Link } from "react-router-dom";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  isLink,
  href,
}) => {
  // Common styling for button and link
  const commonStyles = `flex items-center justify-center gap-2 py-4 text-lg leading-none ${
    backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : "text-white bg-coral-red border-coral-red"
  } border rounded-full px-7 font-montserrat ${fullWidth && "w-full"}`;

  // Decide whether to render a button or a link
  if (isLink && href) {
    return (
      <Link to={href} className={commonStyles}>
        {label}
        {iconUrl && (
          <img src={iconUrl} alt="icon" className="w-5 h-5 ml-2 rounded-full" />
        )}
      </Link>
    );
  } else {
    return (
      <button className={commonStyles}>
        {label}
        {iconUrl && (
          <img src={iconUrl} alt="icon" className="w-5 h-5 ml-2 rounded-full" />
        )}
      </button>
    );
  }
};

export default Button;
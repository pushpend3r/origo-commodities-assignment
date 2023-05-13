/* eslint-disable react/prop-types */
const Button = ({ flag = true, text, className = "" }) => {
  const bgColor = flag ? "bg-color-2" : "bg-color-1";
  const fontColor = flag ? "font-color-1" : "font-color-2";
  return (
    <button
      type="button"
      className={`${bgColor} ${fontColor} uppercase font-bold px-8 py-3 rounded-full no-underline ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

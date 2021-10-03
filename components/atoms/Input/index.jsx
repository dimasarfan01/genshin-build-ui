export default function Input({ type, text, placeholder, ...props }) {
  return (
    <div className="flex flex-col items-center min-w-full">
      <p className="font-gemunu text-white text-2xl">{text}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="lg:w-3/4 w-11/12 p-2 rounded-lg"
        {...props}
      />
    </div>
  );
}

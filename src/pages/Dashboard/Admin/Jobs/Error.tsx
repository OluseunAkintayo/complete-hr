interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <p className="text-red-600 text-xs">{message}</p>
  );
};

export default Error;

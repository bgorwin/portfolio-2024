import Link from 'next/link';

const Button = ({ href, buttonText }) => {
  return (
    <Link href={href} className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-3 px-6 rounded-full">
        {buttonText}
    </Link>
  );
};

export default Button;

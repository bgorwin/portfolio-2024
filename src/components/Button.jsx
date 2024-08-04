import Link from 'next/link';

const Button = ({ href, buttonText, classes }) => {
  return (
    <>
      <Link href={href} className={`${classes} relative px-4 py-2 border-2 border-x-gray-900 text-black rounded-full hover:bg-black hover:text-white hover:border-gray-900 transition-colors duration-300`}>
        {buttonText} <span className="absolute right-[-45px] transition-transform duration-300 hover:rotate-45 bottom-0 rounded-full bg-blue-900 inline-block align-middle ms-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-9 p-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </span>
      </Link>
      
    </>
  );
};

export default Button;

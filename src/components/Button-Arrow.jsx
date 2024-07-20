import Link from 'next/link';

const ButtonArrow = ({ href }) => {
  return (
    <>
      <Link href={href} className="transition-transform duration-300 hover:rotate-45 bottom-0 rounded-full bg-blue-900 inline-block align-middle ms-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-9 p-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </Link>
      
    </>
  );
};

export default ButtonArrow;
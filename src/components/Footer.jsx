import SocialMediaIcons from "./Social-Media-Icons";

export default function Footer() {
  return (
    <footer className="py-5 bg-black text-white flex justify-center items-center">
        <div className="container">
            <p className="text-sm text-gray-500 border-t border-gray-600 py-3">Social Media</p>
            <SocialMediaIcons />
            <p className="text-base py-5">© 2024 Brent Gorwin</p>
            
        </div>
    </footer>
  );
}
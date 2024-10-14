import { footer } from "../constants";

const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a className="social-icon" href="https://github.com/nikhilkushawaha" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/nikhil-kushawaha-470071270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                </a>
                <a className="social-icon" href="https://x.com/NikhilKn402?t=Na4giMJ8d8M3_QVEZB0dQg&s=08 " target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                </a>
                <a className="social-icon" href="https://www.instagram.com/nikhil.kushawaha_?igsh=MWp4bmxrdGQ1a3EwOQ==" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© 2024 Nikhil Kushawaha. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
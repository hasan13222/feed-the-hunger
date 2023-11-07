import { Link } from "react-router-dom";
import { images } from "../../assets";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {FaYoutube,FaTelegramPlane} from 'react-icons/fa'
import { navlinks } from "../../utils/navlinks";

const Footer = () => {
  return (
    <>
      <div className="bg-[#688f54] py-6 text-white">
        <div className="container mx-auto">
          <div className="footer__items flex justify-between">
            <div className="footer__single flex-1">
              <Link to={"/"}>
                <img className="w-[100px] h-24 object-contain" src={images.logo} alt="logo" />
              </Link>
              <p className="mt-2 pr-4">FeedTheHunger helps to reduce food waste by redistributing surplus or unused food to those who need it</p>
              <ul>
                <li className="flex gap-2 items-center p-2"><BsFillTelephoneFill/> <span>+387643932728</span></li>
                <li className="flex gap-2 items-center p-2"><ImLocation2/> <span>Eighth Avenue 487, New York</span></li>
              </ul>
            </div>
            <div className="footer__single flex-1 flex flex-col items-center pl-14">
                <h3 className="text-lg font-bold w-[200px] pl-16">Sitemap</h3>
                <ul className="w-[200px] pl-16">
                    {navlinks.map(item => (
                        <>
                        <li>
                            <Link className="text-sm hover:underline" to={item.path}>{item.title}</Link>
                        </li>
                        </>
                    ))}
                </ul>
            </div>
            <div className="footer__single flex-1 text-center">
                <h3 className="font-bold text-lg">Social Media</h3>
                <ul className="flex justify-center gap-4 mt-4">
                    <li>
                        <Link to={'/'}><BiLogoFacebook/></Link>
                    </li>
                    <li>
                        <Link to={'/'}><FaYoutube/></Link>
                    </li>
                    <li>
                        <Link to={'/'}><BsTwitter/></Link>
                    </li>
                    <li>
                        <Link to={'/'}><FaTelegramPlane/></Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#405e32] py-6">
        <p className="text-white">
          &copy;FeedTheHunger, All Rights Reserved 2023.
        </p>
      </div>
    </>
  );
};

export default Footer;

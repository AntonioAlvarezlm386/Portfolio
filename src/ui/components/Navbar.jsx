import { useTranslation } from "react-i18next";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [ t, i18n ] = useTranslation()

  return (
    <nav className="bg-accent h-10 fixed z-50 w-screen flex justify-between text-primary-text">
      <div>
        {
          navLinks.map( (link, index)=> (
            <p key={index}>{t(link.title)}</p>
          ))
        }
      </div>
      <div>
        Controls
      </div>
    </nav>
  );
};

export default Navbar;

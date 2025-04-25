import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer
      className="bg-secondary text-black text-center py-3 position-relative d-flex align-items-center"
      style={{ height: "80px" }}
    >
      <div className="container">
        <Link to="/contact" className="text-decoration-none text-black">
          <p>&copy; {new Date().getFullYear()} Max Delissen.</p>
        </Link>
        <button
          className="btn btn-sm btn-light position-absolute"
          style={{ top: "10px", right: "10px", fontSize: "2rem" }}
          onClick={() => changeLanguage(i18n.language === "en" ? "nl" : "en")}
        >
          {i18n.language === "nl" ? "🇬🇧" : "🇳🇱"}
        </button>
      </div>
    </footer>
  );
}

export default Footer;

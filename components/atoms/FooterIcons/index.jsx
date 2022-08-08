import Image from "next/image";

const FooterIcons = () => {
  return (
    <div className="footer__socialMedia">
      <Image
        className="footer__icon"
        src="/linkedin-icon.svg"
        alt="Linkedin Icon"
        width="32"
        height="32"
      />
      <Image
        className="footer__icon"
        src="/github-icon.svg"
        alt="GitHub Icon"
        width="32"
        height="32"
      />
    </div>
  );
};

export default FooterIcons;

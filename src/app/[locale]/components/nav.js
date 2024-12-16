import Image from 'next/image';
import {useTranslations} from 'next-intl';

const Nav = () => {
  const t = useTranslations('nav');
  return (
    <nav>
      <div className="logo" data-onclick="getHomePage">
        <Image
          src="/images/first_section/logo.png"
          alt="GAD"
          width={101}
          height={48}
        />
      </div>
      <ul className="navSections">
        <li className="clients">
          <a href="#third_section"></a>
          <span>{t('clients')}</span>
          <div className="point"></div>
        </li>
        <li className="services focus">
          <a href="#fourth_section"></a>
          <span>{t('services')}</span>
          <div className="point"></div>
        </li>
        <li className="feedback">
          <a href="#fifth_section"></a>
          <span>{t('feedback')}</span>
          <div className="point"></div>
        </li>
        <li className="contactUs">
          <a href="#last_section"></a>
          <span>{t('contactUs')}</span>
          <div className="point"></div>
        </li>
      </ul>
      <div className="button" data-onclick="showFormWindow">
        <button>{t('button')}</button>
      </div>
    </nav>
  );
};

export default Nav;

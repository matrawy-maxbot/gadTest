import Image from 'next/image';
import {useTranslations} from 'next-intl';

const brands = [
  { src: '/images/second_section/brand_1.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_2.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_3.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_4.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_5.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_6.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_7.png', alt: 'gad client brand', className: 'brand' },
  { src: '/images/second_section/brand_8.png', alt: 'gad client brand', className: 'brand maxLogo' },
];

const SecondSection = () => {
  const t = useTranslations('secondSection');
  return (
    <>
      <div id="second_section" className="s-section">
        <div className="background"></div>
        <h2><span>{t('proudly')}</span> {t('serving')}</h2>
        <div className="brands">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.alt}
              className={brand.className}
              width={70} // Adjust width
              height={70} // Adjust height
              priority={false} // Optional: Set true for non-lazy loading
              style={{ width: 'auto' }}
            />
          ))}
        </div>
    </div>
    </>
  );
}

export default SecondSection;
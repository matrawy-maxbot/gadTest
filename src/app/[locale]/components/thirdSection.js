import Image from 'next/image';
import {useTranslations} from 'next-intl';

const clients = [
  { src: '/images/third_section/user_1.jpg', alt: 'GAD client image', className: 'top-left' },
  { src: '/images/third_section/user_2.png', alt: 'GAD client image', className: 'bottom-left' },
  { src: '/images/third_section/user_3.png', alt: 'GAD client image', className: 'center' },
  { src: '/images/third_section/user_4.avif', alt: 'GAD client image', className: 'top-right' },
  { src: '/images/third_section/user_5.avif', alt: 'GAD client image', className: 'bottom-right' },
];

const ThirdSection = () => {
  const t = useTranslations('thirdSection');
  return (
    <>
      <div id="third_section" className="th-section">
        <h1 className="title">{t('title1')}<br />{t('title2')}</h1>
        <h2 className="sub-title">{t('subTitle1')}<br/>{t('subTitle2')}</h2>
        <div className="counter">
            <div className="counter-num">
                <div className="c-num-container" data-target="1">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="counter-comma">,</div>
            <div className="counter-num">
                <div className="c-num-container" data-target="2">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="counter-num">
                <div className="c-num-container" data-target="5">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="counter-num">
                <div className="c-num-container" data-target="8">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="text-line">
                <Image
                  src="/images/third_section/line.png"
                  alt="text line"
                  width={722} // Adjust as per your design
                  height={310} // Adjust as per your design
                  priority={false} // Optional for lazy loading
                />
                <p className="text">{t('noteP1')}<br/>{t('noteP2')}</p>
            </div>
        </div>
        <h3>{t('header3p1')} <span>{t('header3p2')}</span> {t('header3p3')} <span>{t('header3p4')}</span><br/>{t('header3p5')}</h3>
        <button data-onclick="showFormWindow">
          <span>{t('button')}</span>
          <span className="arrow">
            <Image
              src="/images/third_section/arrow.png"
              alt="start-arrow"
              width={12} // Adjust as per your design
              height={10.5} // Adjust as per your design
              priority={false} // Optional for lazy loading
            />
          </span>
        </button>
        <div className="client-images">
          {clients.map((client, index) => (
              <div key={index} className={`client-img ${client.className}`}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  priority={false} // Optional for lazy loading
                />
              </div>
          ))}
        </div>
    </div>
    </>
  );
}

export default ThirdSection;
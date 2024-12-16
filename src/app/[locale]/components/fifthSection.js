import Image from 'next/image';
import {useTranslations} from 'next-intl';

const FifthSection = () => {
  const t = useTranslations('fifthSection');
  return (
    <div id="fifth_section" className="fi-section">
      <h1>{t('title')}</h1>
      <h2>{t('subTitle')}</h2>
      <div className="feedbacks">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} id={`feedback-${index + 1}`} className={`feedback f${index + 1} fStart`}>
            <Image
              className="arch"
              src="/images/fifth_section/feedback_loading.svg"
              alt="loading feedback"
              width={148}
              height={150}
            />
            <div className="content">
              <div className="header">
                <h2 className="username">Mohammed Hamada</h2>
                <div className="ratings">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Image
                      key={starIndex}
                      src="/images/fifth_section/star.svg"
                      alt="star"
                      width={18}
                      height={17.5}
                    />
                  ))}
                </div>
              </div>
              <div className="f-content-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                  ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                  tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="country">
                <Image
                  src="/images/fifth_section/egypt_flag.png"
                  alt="country flag"
                  width={25}
                  height={23}
                />
                <span>Egypt</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="circles">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className={`circle ${index === 3 ? 'active' : ''}`}></div>
        ))}
        <div className="feedback-line-icon">
          <div className="img-parent">
            <Image
              loading="lazy"
              className="feedback-line"
              src="/images/fifth_section/feedback_line.svg"
              alt="feedback line"
              width={567}
              height={750}
            />
          </div>
          <Image
            loading="lazy"
            className="feedback-icon"
            src="/images/fifth_section/feedback_icon.svg"
            alt="feedback icon"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="user-images">
        <div className="user-img top-right">
          <Image
            loading="lazy"
            src="/images/fifth_section/user_4.avif"
            alt="GAD user image"
            width={130}
            height={130}
          />
        </div>
        <div className="user-img left">
          <Image
            loading="lazy"
            src="/images/fifth_section/user_5.avif"
            alt="GAD user image"
            width={200}
            height={133}
          />
        </div>
        <div className="user-img bottom-right">
          <Image
            loading="lazy"
            src="/images/fifth_section/user_2.png"
            alt="GAD user image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
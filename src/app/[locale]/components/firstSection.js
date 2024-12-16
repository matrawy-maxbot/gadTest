import Image from 'next/image';
import {useTranslations} from 'next-intl';

const linesData = [
  {
    lineId: "f-line",
    circleId: "fl",
    circles: [
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 1" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 2" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 3" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 4" },
    ],
  },
  {
    lineId: "s-line",
    circleId: "sl",
    circles: [
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 5" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 6" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 7" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 8" },
    ],
  },
  {
    lineId: "th-line",
    circleId: "thl",
    circles: [
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 9" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 10" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 11" },
      { imgSrc: "/images/first_section/project_1.png", altText: "Project 12" },
    ],
  },
];

const ProjectCircle = ({ id, parentId, imgSrc, altText }) => {
    return (
      <div id={id} className="circle">
        <div id={parentId} className="project">
            <svg viewBox="0 0 335.81 394.32" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="inherit"
                    d="m28.35,375.6s140.15,42.12,279.12,0c14.98-4.54,28.35-12.69,28.35-28.35V28.35c0-15.66-12.69-28.35-28.35-28.35H28.35C12.69,0,0,12.69,0,28.35v318.9c0,15.66,12.69,28.35,28.35,28.35Z"
                />
            </svg>
            <Image
                src={imgSrc}
                alt={altText}
                width={232.5}
                height={255.88}
                loading="lazy"
            />
        </div>
      </div>
    );
  };

const Line = ({ lineId, circles, circleId }) => {
    return (
      <div className={`${lineId}`}>
        <div className="circles">
          {circles.map((circle, index) => (
            <ProjectCircle
              key={index}
              parentId={`${circleId}-${index + 1}-project`}
              id={`${circleId}-circle${index + 1}`}
              imgSrc={circle.imgSrc}
              altText={circle.altText}
            />
          ))}
        </div>
      </div>
    );
  };

const Lines = () => {
    return (
      <div className="lines">
        <div className='linesIMGContainer'>
          <Image
            className="projects-lines"
            src="/images/first_section/lines.png"
            alt="gad projects line"
            width={1950} // Set the appropriate width
            height={504} // Set the appropriate height
            style={{ height: 'auto' }}
            priority
          />
          <div className='leftAnimationLine'></div>
          <div className='rightAnimationLine'></div>
        </div>
        {linesData.map((line, index) => (
          <Line key={index} lineId={line.lineId} circleId={line.circleId} circles={line.circles} />
        ))}
      </div>
    );
};

const FirstSection = () => {
  const t = useTranslations('firstSection');
  return (
    <>
        <div id="first_section" className="f-section">
            <div className="content">
                <h1 className="title"><span className="special">{t('creative')}</span> <span>{t('solutions')}</span><br/><span className="title-bottom"><span>{t('forYour')}</span> <span className="special">{t('business')}</span></span></h1>
                <h2 className="sub-title">{t('subTitle')}</h2>
                <h3 className="description">
                {t('crafting')} <span>{t('websites')}</span> {t('execute')}<br />
  <span>{t('printing')}</span> {t('strategies')} <span>{t('designing')}</span> {t('impactful')}<br />
  {t('pagesWeHelp')} <span className="dark-color">{t('goals')}</span>
                </h3>
                <button className="start-button" data-onclick="showFormWindow">
                    <span>{t('button')}</span>
                </button>
            </div>
            <div className="background">
                <Lines />
            </div>
        </div>
    </>
  );
}

export default FirstSection;
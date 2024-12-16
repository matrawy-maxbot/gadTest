import Image from 'next/image';
import {useTranslations} from 'next-intl';

const SectionWindow = () => {
    const t = useTranslations('sectionWindow');
  return (
    <div className="section-window-parent">
        <div className="section-window-container">
            <div className="header">
                <div className="background"></div>
                <div className="close" data-onclick="closeSectionWindow">
                    <svg viewBox="0 0 24 24">
                        <path d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"></path>
                    </svg>
                </div>
                <div className="title design-title">{t('designTitle')}</div>
                <div className="title programming-title">{t('programmingTitle')}</div>
                <div className="title printing-title">{t('printingTitle')}</div>
                <div className="contact-us" data-onclick="getWhatsappAccount">
                    <svg viewBox="0 0 512 512">
                        <path d="M307.66 465.229c0-17.696-14.346-32.042-32.042-32.042h-39.236a32.042 32.042 0 0 0-32.042 32.042c0 17.696 14.346 32.042 32.042 32.042h39.236c17.696 0 32.042-14.346 32.042-32.042zM67.361 382.606c5.352.409 11.827.644 18.331.263a90.96 90.96 0 0 0 89.238 73.36h12.226a50.247 50.247 0 0 0-.008 18H174.93a108.957 108.957 0 0 1-107.569-91.623zm-9.156-19.153A69.812 69.812 0 0 1 0 294.613V252.07a69.812 69.812 0 0 1 69.811-69.812h4.647C81.886 88.502 160.328 14.729 256 14.729s174.114 73.773 181.542 167.529h4.647A69.812 69.812 0 0 1 512 252.07v42.543a69.812 69.812 0 0 1-69.811 69.812h-20.601c-8.544 0-15.47-6.927-15.47-15.47V196.847c0-82.908-67.21-150.118-150.118-150.118s-150.118 67.21-150.118 150.118v152.108c0 6.032-3.453 11.259-8.491 13.81-13.868 4.812-35.375 1.331-39.186.688z"></path>
                    </svg>
                    <span>{t('contactUs')}</span>
                </div>
            </div>
            <div className="content-container">
                <div className="content">
                    <h2 className="design-content">
                    {t('designDescriptionP1')} 
                        <span> {t('designDescriptionP2')}</span>{t('designDescriptionP3')}<span>{t('designDescriptionP4')}</span>{t('designDescriptionP5')} 
                        <span>{t('designDescriptionP6')}</span>{t('designDescriptionP7')}<span>{t('designDescriptionP8')}</span>{t('designDescriptionP9')}
                    </h2>
                    <h2 className="programming-content">
                        {t('programmingDescriptionP1')}<span>{t('programmingDescriptionP2')}</span>{t('programmingDescriptionP3')}<span>{t('programmingDescriptionP4')}</span>{t('programmingDescriptionP5')}
                    </h2>
                    <h2 className="printing-content">
                        {t('printingDescriptionP1')}<span>{t('printingDescriptionP2')}</span>{t('printingDescriptionP3')}<span>{t('printingDescriptionP4')}</span>{t('printingDescriptionP5')}
                    </h2>
                    <div className="range part1">
                        {[t('small'), t('medium'), t('large')].map((size, index) => (
                            <div
                                className={`range-line line${index + 1}`}
                                key={index}
                                data-onclick="projectRange"
                                data-params={`event,part${index + 1}`}
                            >
                                <div className="line"></div>
                                <h2>{size} {t('projects')}</h2>
                            </div>
                        ))}
                        <div className="progress p1">
                            <span className="part1-min-price">$3000</span>
                            <span className="part2-min-price">$10000</span>
                            <span className="part3-min-price">$35000</span>
                        </div>
                        <div className="progress p2">
                            <span className="part1-max-price">$10000</span>
                            <span className="part2-max-price">$30000</span>
                            <span className="part3-max-price">$120000</span>
                        </div>
                    </div>
                    <button data-onclick="closeSectionWindow,showFormWindow">
                        {t('button1')}
                    </button>
                    <div className="image-gallery">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <div className={`image changing i${index + 1}`} key={index}>
                                <Image
                                    loading="lazy"
                                    src={`/images/design_gallery/i1.webp`}
                                    alt="Design Gallery Image"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="explore" data-onclick="exploreProjects">
                        {t('button2')}
                        <svg viewBox="0 0 548.244 548.244">
                            <path fill="inherit" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SectionWindow;
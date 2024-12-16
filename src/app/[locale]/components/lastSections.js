import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link';

const LastSection = () => {
    const t = useTranslations('lastSection');
    const locale = useTranslations('lang');
    return (
        <div id="last_section" className="last-section">
            <h1>
                {t('title1')} <span>{t('title2')}</span> ..{t('titleIndex')}
            </h1>
            <h3>{t('description')}</h3>
            <div className="support-design">
                <div className="small-design">
                    <div className="row call-whatsapp">
                        <div className="call">
                            <div className="line-parent">
                                <Image
                                    loading="lazy"
                                    className="call-line"
                                    src="/images/last_section/call_line_small.svg"
                                    alt="call line"
                                    width={50}
                                    height={50}
                                    style={{ width: 'auto' }}
                                />
                                <div className="line-point"></div>
                            </div>
                            <div className="icon-parent">
                                <Image
                                    loading="lazy"
                                    className="call-icon"
                                    src="/images/last_section/call_icon.svg"
                                    alt="call icon"
                                    width={36}
                                    height={36}
                                    style={{ height: 'auto' }}
                                />
                                <h5>
                                    <span>{t('callUs1')}</span><br />{t('callUs2')}
                                </h5>
                            </div>
                        </div>
                        <div className="phone-numbers">
                            <div className="phone-number">
                                <span>+201120327504</span>
                            </div>
                            <div className="phone-number">
                                <span>+201284896722</span>
                            </div>
                        </div>
                        <div className="whatsapp">
                            <div className="line-parent">
                                <Image
                                    loading="lazy"
                                    className="whatsapp-line"
                                    src="/images/last_section/whatsapp_line_small.svg"
                                    alt="whatsapp line"
                                    width={50}
                                    height={50}
                                    style={{ width: 'auto' }}
                                />
                                <div className="line-point"></div>
                            </div>
                            <div className="icon-parent" data-onclick="getWhatsappAccount">
                                <Image
                                    loading="lazy"
                                    className="whatsapp-icon"
                                    src="/images/last_section/whatsapp_icon.svg"
                                    alt="whatsapp icon"
                                    width={50}
                                    height={50}
                                    style={{ height: 'auto' }}
                                />
                                <h5>
                                    {t('whatsappP1')} <span>{t('whatsappP2')}</span>
                                    <span className="long-term"> {t('whatsappP3')}<br />{t('whatsappP4')} <span>{t('whatsappP5')}</span>
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="row behance-facebook">
                        <div className="behance" data-onclick="getBehanceAccount">
                            <Image
                                loading="lazy"
                                className="behance-icon"
                                src="/images/last_section/behance_icon.svg"
                                alt="behance icon"
                                width={43}
                                height={43}
                                style={{ height: 'auto' }}
                            />
                            <h5>
                                Explore our projects in <span>Behance</span>
                            </h5>
                            <h6>overview of our projects</h6>
                        </div>
                        <div className="facebook" data-onclick="getFacebookPage">
                            <Image
                                loading="lazy"
                                className="facebook-icon"
                                src="/images/last_section/facebook_icon.svg"
                                alt="facebook icon"
                                width={43}
                                height={43}
                                style={{ height: 'auto' }}
                            />
                            <h5>
                                Follow us on <span>Facebook</span> page
                            </h5>
                            <h6>to see last news</h6>
                        </div>
                    </div>
                </div>

                {/* Support Image */}
                <Image
                    className="support-img"
                    src="/images/last_section/support_design.png"
                    alt="support img"
                    width={530}
                    height={353}
                    priority={false}
                    style={{ height: 'auto' }}
                    quality={100}
                />

                {/* Top Left */}
                <div className="top-left">
                    <div className="lastSection-line-container">
                        <Image
                            loading="lazy"
                            className="line"
                            src="/images/last_section/behance_line.svg"
                            alt="line"
                            width={289}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="behance" data-onclick="getBehanceAccount">
                        <Image
                            loading="lazy"
                            className="behance-icon"
                            src="/images/last_section/behance_icon.svg"
                            alt="behance icon"
                            width={43}
                            height={43}
                            style={{ height: 'auto' }}
                        />
                        <h5>
                        {t('behanceP1')} <span>{t('behanceP2')}</span>
                            <span className="behance-text-line-container">
                                <Image
                                    src="/images/last_section/behance_text_line.svg"
                                    alt="behance text line"
                                    width={92}
                                    height={4.2}
                                />
                            </span>
                        </h5>
                    </div>
                </div>

                {/* Bottom Left */}
                <div className="bottom-left">
                    <div className="lastSection-line-container">
                        <Image
                            loading="lazy"
                            className="line"
                            src="/images/last_section/facebook_line.svg"
                            alt="line"
                            width={300}
                            height={45}
                            style={{ height: 'auto' }}
                        />
                    </div>
                    <div className="facebook" data-onclick="getFacebookPage">
                        <Image
                            loading="lazy"
                            className="facebook-icon"
                            src="/images/last_section/facebook_icon.svg"
                            alt="facebook icon"
                            width={43}
                            height={43}
                            style={{ height: 'auto' }}
                        />
                        <h5>
                            {t('facebookP1')} <span>{t('facebookP2')}</span> {t('facebookP3')}
                        </h5>
                        <h6>{t('facebookSubtitle')}</h6>
                    </div>
                </div>

                {/* Top Right */}
                <div className="top-right">
                    <div className="lastSection-line-container">
                        <Image
                            loading="lazy"
                            className="line"
                            src="/images/last_section/call_line.svg"
                            alt="line"
                            width={184}
                            height={150}
                            style={{ height: 'auto' }}
                        />
                    </div>
                    <div className="call">
                        <Image
                            loading="lazy"
                            className="call-icon"
                            src="/images/last_section/call_icon.svg"
                            alt="call icon"
                            width={36}
                            height={36}
                            style={{ height: 'auto' }}
                        />
                        <div className="phone-numbers">
                            <div className="phone-number">
                                <span>+201120327504</span>
                            </div>
                            <div className="point"></div>
                            <div className="phone-number">
                                <span>+201284896722</span>
                            </div>

                            <div className="bottom-right">
                                <div className="lastSection-line-container">
                                    <Image
                                        loading="lazy"
                                        className="line"
                                        src="/images/last_section/whatsapp_line.svg"
                                        alt="line"
                                        width={373}
                                        height={301}
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                                <div className="start-point"></div>
                                <div className="end-point"></div>
                                <div className="whatsapp" data-onclick="getWhatsappAccount">
                                    <Image
                                        loading="lazy"
                                        className="whatsapp-icon"
                                        src="/images/last_section/whatsapp_icon.svg"
                                        alt="whatsapp icon"
                                        width={50}
                                        height={50}
                                        style={{ height: 'auto' }}
                                    />
                                    <h5>
                                        {t('whatsappP1')} <span>{t('whatsappP2')}</span> {t('whatsappP3')}
                                        <br />
                                        {t('whatsappP4')} <span>{t('whatsappP5')}</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="footer">
                <Image
                    className="footer-logo"
                    src="/images/last_section/footer_logo.png"
                    alt="gad logo"
                    width={116.2}
                    height={55}
                    data-onclick="getHomePage"
                />
                <div className="footer-text">
                    <Image
                        className="copyright-icon"
                        src="/images/last_section/copyright_icon.svg"
                        alt="copyright icon"
                        width={25}
                        height={25}
                    />
                    <h6>
                        {t('footerP1')}<span> {t('footerP2')} </span>{t('footerP3')}
                    </h6>
                    <div className="footer-text-line-container">
                        <Image
                            className="footer-text-line"
                            src="/images/last_section/footer_line.svg"
                            alt="footer text line"
                            width={262}
                            height={9.5}
                        />
                    </div>
                </div>
                <div className="buttons">
                    <div className={locale('default') + " lang button"} data-onclick="changeLang" data-params="event">
                        <div className="active"></div>
                        {locale('default') === 'ar' ? (
                            <>
                                <Link href='/en' locale="en" className="lang-switcher inactive en-lang">EN</Link>
                                <span className="lang-switcher active-lang ar-lang" aria-current="true">AR</span>
                            </>
                        ) : (
                            <>
                                <span className="lang-switcher active-lang en-lang" aria-current="true">EN</span>
                                <Link className="lang-switcher inactive ar-lang" href='/ar' locale="ar">AR</Link>
                            </>
                        )}
                    </div>
                    <div className="theme button" data-onclick="setTheme">
                        <div className="active"></div>
                        <div className="light-icon">
                            <Image
                                src="/images/last_section/light_icon.svg"
                                alt="light icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="dark-icon">
                            <Image
                                src="/images/last_section/dark_icon.svg"
                                alt="dark icon"
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default LastSection;
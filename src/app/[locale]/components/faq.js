"use client"
import Image from 'next/image';
import React, { useState, useRef } from "react";
import {useTranslations} from 'next-intl';

const Faq = () => {
    const t = useTranslations('faq');
    const faqRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(null);

    const openCloseQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "What is the cost of a website?",
            answer:
                "The cost of a website can vary greatly depending on the complexity of the website, the number of pages, and the features required. Our prices start at $500.",
        },
        {
            question: "What is the timeline for website development?",
            answer:
                "The timeline depends on the project scope. Typically, a standard website can take 4-6 weeks.",
        },
        {
            question: "What is the cost of a website?",
            answer:
                "The cost of a website can vary greatly depending on the complexity of the website, the number of pages, and the features required. Our prices start at $500.",
        },
        {
            question: "What is the cost of a website?",
            answer:
                "The cost of a website can vary greatly depending on the complexity of the website, the number of pages, and the features required. Our prices start at $500.",
        },
    ];

    const openFAQ = () => {
        faqRef.current?.classList.add("active");
    };

    const closeFAQ = () => {
        faqRef.current?.classList.remove("active");
    };

    function refactorPhoneNumber(phoneNumber) {
        let cleanedNumber = phoneNumber.replace(/[^+\d]/g, '');
        if (cleanedNumber.startsWith('0')) {
            cleanedNumber = cleanedNumber.slice(1);
        } else if(cleanedNumber.startsWith('+')) {
            if(cleanedNumber[1] == '0') cleanedNumber = cleanedNumber.slice(1);
        }
        return cleanedNumber;
    }

    function openWhatsapp(phoneNumber) {
        if (!phoneNumber) {
            console.error("Phone number is required!");
            return;
        }
        phoneNumber = refactorPhoneNumber(phoneNumber);
        const formattedNumber = phoneNumber.startsWith('0') ? phoneNumber.slice(1) : phoneNumber;
        const link = `https://wa.me/${formattedNumber}`;
        window.open(link, '_blank');
    }

    const getWhatsappAccount = () => {
        openWhatsapp("+201120327504");
    };

    return (
        <div ref={faqRef} className="faq" >
            <div className="button" data-onclick="openFAQ">
                <svg viewBox="0 0 100 100"><path d="M47.633 2.5c-2.126.242-4.603.367-7.017.829-5.655 1.08-10.71 3.485-14.87 7.529a10.294 10.294 0 0 0-.55 14.227c2.948 3.352 7.325 3.341 11.986-.031.32-.233.647-.458.962-.697 3.48-2.64 7.466-3.674 11.727-3.249 3.515.352 6.526 1.861 7.782 5.494 1.213 3.506-.484 6.153-2.95 8.393-1.237 1.125-2.663 2.046-4.011 3.049-8.1 6.019-11.618 15.485-9.127 24.568 1.185 4.322 3.199 6.59 5.846 6.586 2.59-.003 4.563-2.035 5.716-6.333 1.198-4.461 3.49-8.197 7.013-11.104 2.819-2.325 5.902-4.325 8.742-6.623 8.88-7.187 11.038-18.305 5.399-28.203C68.49 6.772 59.069 3.132 47.633 2.5zM49.12 76.368c-6.542.01-10.696 4.033-10.682 10.346.014 6.241 4.46 10.807 10.502 10.786 6.34-.022 10.896-4.534 10.865-10.76-.03-6.339-4.197-10.383-10.685-10.372z"></path></svg>
            </div>
            <div className="faq-container">
                <div className="background"></div>
                <div className="conten-container">
                    <div className="header">
                        <div className="close" data-onclick="closeFAQ">
                            <svg viewBox="0 0 24 24"><path d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"></path></svg>
                        </div>
                        <div className="title">{t('title')}</div>
                    </div>
                    <div className="questions-container">
                        <div className="content">
                            {questions.map((item, index) => (
                                <div
                                    key={index}
                                    className={`question ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => openCloseQuestion(index)}
                                >
                                    <div className="question-title">
                                        <div className="icon">
                                            <div className="vertical-line"></div>
                                            <div className="horizontal-line"></div>
                                        </div>
                                        <span>{item.question}</span>
                                    </div>
                                    <div className="answer">
                                        <span>{item.answer}</span>
                                    </div>
                                </div>
                            ))}
                            <a className="whatsapp-support" data-onclick="getWhatsappAccount">
                                <Image
                                    className='whatsapp-icon'
                                    loading="lazy"
                                    src={`/images/last_section/whatsapp_icon.svg`}
                                    alt="whatsapp icon"
                                    width={16}
                                    height={16}
                                />
                                <span>{t('footer')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;

        
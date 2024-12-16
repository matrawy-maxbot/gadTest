"use client";
import Image from 'next/image';

const AddRequestWindow = () => {

    return (
        <div className="add-request-window">
            <div className="header">
                <div className="background"></div>
                <div className="close" data-onclick="closeAddRequestForm">
                    <svg viewBox="0 0 24 24"><path d="M22 11H4.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L4.414 13H22a1 1 0 0 0 0-2z"></path></svg>
                </div>
                <h1 className="title">User Registration Form</h1>
            </div>
            <div className="content">
                <div className="form-container">
                    <form id="add-request-form">
                        <div className="field">
                            <label htmlFor="companyName">Company Name</label>
                            <span className="warnMessage">This field is required *</span>
                            <input type="text" id="companyName" name="company_name" defaultValue="" placeholder="Company name or your personal name"/>
                        </div>
                        <br/>
                        <div className="field">
                            <label>Contact Numbers</label>
                            <span className="warnMessage">This field is required *</span>
                            <div className="sub-field">
                                <input type="text" id="phone1" name="f_number" defaultValue="" placeholder="Phone number"/>
                                <div className="check-whatsapp-container">
                                    <input type="checkbox" id="whatsappNumber1" name="whatsapp_f_number" defaultValue=""/>
                                    <div className="background">
                                        <svg viewBox="0 0 418.135 418.135">
                                            <g>
                                                <path fill="inherit" d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                                                <path fill="inherit" d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-field">
                                <input type="text" id="phone2" name="s_number" defaultValue="" placeholder="Alternate Phone Number (Optional)"/>
                                <div className="check-whatsapp-container">
                                    <input type="checkbox" id="whatsappNumber2" name="whatsapp_s_number" defaultValue=""/>
                                    <div className="background">
                                        <svg viewBox="0 0 418.135 418.135">
                                            <g>
                                                <path fill="inherit" d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                                                <path fill="inherit" d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="field">
                            <label htmlFor="whatsappNumber">Whatsapp Number</label>
                            <span className="warnMessage">This field is required *</span>
                            <input type="text" id="whatsappNumber" name="whatsapp_number" defaultValue="" placeholder="Whatsapp phone number"/>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="long-label">Choose the services you require</label>
                            <span className="warnMessage">This field is required *</span>
                            <div className="checkbox-container">
                                <div className="check-input-container">
                                    <input type="checkbox" id="designBusinessRequired" name="business" defaultValue="design_business"/>
                                    <div className="background">
                                        <div className="check-mark">
                                            <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                                        </div>
                                    </div>
                                    <Image
                                        loading="lazy"
                                        src={`/images/form/design_icon.png`}
                                        alt="GAD design icon"
                                        width={63.5}
                                        height={36}
                                        quality={100}
                                    />
                                    <h3>Design</h3>
                                </div>
                                <div className="check-input-container">
                                    <input type="checkbox" id="programmingBusinessRequired" name="business" defaultValue="programming_business"/>
                                    <div className="background">
                                        <div className="check-mark">
                                            <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                                        </div>
                                    </div>
                                    <Image
                                        loading="lazy"
                                        src={`/images/form/programming_icon.png`}
                                        alt="GAD programming icon"
                                        width={44}
                                        height={36}
                                        quality={100}
                                    />
                                    <h3>Programming</h3>
                                </div>
                                <div className="check-input-container">
                                    <input type="checkbox" id="printingBusinessRequired" name="business" defaultValue="printing_business"/>
                                    <div className="background">
                                        <div className="check-mark">
                                            <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                                        </div>
                                    </div>
                                    <Image
                                        loading="lazy"
                                        src={`/images/form/printing_icon.png`}
                                        alt="GAD Printing icon"
                                        width={50}
                                        height={36}
                                        quality={100}
                                    />
                                    <h3>Printing</h3>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="field">
                            <label className="long-label">Select your company size</label>
                            <span className="warnMessage">This field is required *</span>
                            <div className="radio-container">
                                <div className="radio-input-container">
                                    <input type="radio" id="personalCompanySize" name="companySize" defaultValue="personal"/>
                                    <div className="background">
                                        <div className="radio-mark"></div>
                                    </div>
                                    <h3>Personal Business or Freelance</h3>
                                </div>
                                <div className="radio-input-container">
                                    <input type="radio" id="smallCompanySize" name="companySize" defaultValue="small"/>
                                    <div className="background">
                                        <div className="radio-mark"></div>
                                    </div>
                                    <h3>Small Business (1-10 employees)</h3>
                                </div>
                                <div className="radio-input-container">
                                    <input type="radio" id="mediumCompanySize" name="companySize" defaultValue="medium"/>
                                    <div className="background">
                                        <div className="radio-mark"></div>
                                    </div>
                                    <h3>Medium Business (11-50 employees)</h3>
                                </div>
                                <div className="radio-input-container">
                                    <input type="radio" id="largeCompanySize" name="companySize" defaultValue="large"/>
                                    <div className="background">
                                        <div className="radio-mark"></div>
                                    </div>
                                    <h3>Large Business (51-250 employees)</h3>
                                </div>
                                <div className="radio-input-container">
                                    <input type="radio" id="enterpriseCompanySize" name="companySize" defaultValue="enterprise"/>
                                    <div className="background">
                                        <div className="radio-mark"></div>
                                    </div>
                                    <h3>Enterprise (250+ employees)</h3>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <input type="submit" defaultValue="submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRequestWindow;
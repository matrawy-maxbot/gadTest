import Image from 'next/image';

const AllClients = () => {
    return (
        <div className="data-set clients">
            <table>
                <thead>
                    <tr className="data-header">
                        <th className="name">company name</th>
                        <th className="company-size">company size</th>
                        <th className="contact">contact numbers</th>
                        <th className="whatsapp">whatsapp numbers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="data-content">
                        <td className="name">
                            <div className="flex">
                                <div className="company-icon">
                                    <Image
                                        src="/images/dashboard/company_icons/company1.png"
                                        alt="company icon"
                                        width={25}
                                        height={25}
                                        loading="lazy"
                                    />
                                </div>
                                <span>Alfreds Futterkiste</span>
                            </div>
                        </td>
                        <td className="company-size">Personal</td>
                        <td className="contact"><div className="flex column-flex"><span> <svg viewBox="0 0 100 100"><path d="M92.134 66.144c3.468.867 5.662 4.054 5.301 7.691l-1.088 11.433c-.582 9.684-7.217 13.406-15.623 11.914C39.212 92.105 7.886 60.824 2.796 19.254.416 2.16 14.201 3.904 26.143 2.544c3.66-.385 6.817 1.826 7.684 5.293l2.995 11.908c.845 3.881 3.092 8.549.107 12.343l-5.046 8.587c-1.024 1.456-1.21 3.133-.553 4.512 4.988 10.444 12.993 18.54 23.248 23.564 1.356.68 3.062.507 4.385-.44l9.047-5.353c3.689-2.88 8.42-.628 12.252.197z"></path></svg> 01552913217</span></div></td>
                        <td className="whatsapp"><div className="flex column-flex"><span> <svg viewBox="0 0 418.135 418.135">
                            <g>
                                <path fill="inherit" d="M198.929.242C88.5 5.5 1.356 97.466 1.691 208.02c.102 33.672 8.231 65.454 22.571 93.536L2.245 408.429c-1.191 5.781 4.023 10.843 9.766 9.483l104.723-24.811c26.905 13.402 57.125 21.143 89.108 21.631 112.869 1.724 206.982-87.897 210.5-200.724C420.113 93.065 320.295-5.538 198.929.242zm124.957 321.955c-30.669 30.669-71.446 47.559-114.818 47.559-25.396 0-49.71-5.698-72.269-16.935l-14.584-7.265-64.206 15.212 13.515-65.607-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713 0-43.373 16.89-84.149 47.559-114.819 30.395-30.395 71.837-47.56 114.822-47.56 43.372.001 84.147 16.891 114.816 47.559 30.669 30.669 47.559 71.445 47.56 114.817-.001 42.986-17.166 84.428-47.561 114.822z"></path>
                                <path fill="inherit" d="m309.712 252.351-40.169-11.534a14.971 14.971 0 0 0-14.816 3.903l-9.823 10.008c-4.142 4.22-10.427 5.576-15.909 3.358-19.002-7.69-58.974-43.23-69.182-61.007-2.945-5.128-2.458-11.539 1.158-16.218l8.576-11.095a14.97 14.97 0 0 0 1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356-11.211 9.482-24.513 23.891-26.13 39.854-2.851 28.144 9.219 63.622 54.862 106.222 52.73 49.215 94.956 55.717 122.449 49.057 15.594-3.777 28.056-18.919 35.921-31.317 5.362-8.453 1.128-19.679-8.494-22.442z"></path>
                            </g>
                        </svg> 01552913217</span></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AllClients;

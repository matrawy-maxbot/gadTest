"use client";
import Image from 'next/image';

const Charts = () => {
    return (
        <div className="visit-count">
            <div className="colors-id">
                <div className="color-id"><div className="color" style={{backgroundColor:'#c7d5e3'}}></div><span className="id">Printing</span></div>
                <div className="color-id"><div className="color" style={{backgroundColor:'#8ea2d9'}}></div><span className="id">Programming</span></div>
                <div className="color-id"><div className="color" style={{backgroundColor:'#7384d7'}}></div><span className="id">Design</span></div>
            </div>
            <div className="chart-parent">
                <div className="chart-container">
                    <div className="chart" id="printing-chart" fill="100" color="#c7d5e3"></div>
                    <div className="chart" id="programming-chart" fill="80" color="#8ea2d9"></div>
                    <div className="chart" id="design-chart" fill="50" color="#7384d7"></div>
                </div>
                <div className="text">
                    <div className="title">Total Projects</div>
                    <div className="number" id="All-projects-count">33</div>
                </div>
            </div>
            <div className="details-container">
                <div className="details">
                    <div className="detail" style={{"--dbg":'#7384d7'}}><div className="detail-info"><div className="color"></div><span className="name">Design</span></div><span className="percent" id="design-projects-percent">50%</span></div>
                    <div className="detail" style={{"--dbg":'#8ea2d9'}}><div className="detail-info"><div className="color"></div><span className="name">Programming</span></div><span className="percent" id="programming-projects-percent">30%</span></div>
                    <div className="detail" style={{"--dbg":'#c7d5e3'}}><div className="detail-info"><div className="color"></div><span className="name">Printing</span></div><span className="percent" id="printing-projects-percent">20%</span></div>
                </div>
                <div className="visits">
                    <div className="visits-chart">
                        <div className="chart-container">
                            <div className="chart" fill="100" color="#dde2ed"></div>
                            <div className="chart" id="impressions-chart" fill="50" color="#757faf"></div>
                        </div>
                        <div className="percent" id="impressions-percent">50<span>%</span></div>
                    </div>
                    <div className="visits-data">
                        <div className="title">impressions</div>
                        <div className="views"><div className="icon"><svg viewBox="0 0 461.312 461.312"><path d="M230.656 156.416c-40.96 0-74.24 33.28-74.24 74.24s33.28 74.24 74.24 74.24 74.24-33.28 74.24-74.24-33.28-74.24-74.24-74.24zm-5.632 52.224c-9.216 0-16.896 7.68-16.896 16.896h-24.576c.512-23.04 18.944-41.472 41.472-41.472v24.576z"></path><path d="M455.936 215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464 184.064 5.376 215.296c-7.168 8.704-7.168 21.504 0 30.72 25.088 31.232 114.688 133.12 225.28 133.12s200.192-101.888 225.28-133.12c7.168-8.704 7.168-21.504 0-30.72zm-225.28 122.88c-59.392 0-107.52-48.128-107.52-107.52s48.128-107.52 107.52-107.52 107.52 48.128 107.52 107.52-48.128 107.52-107.52 107.52z"></path></svg></div><span id="impressions-count">500</span></div>
                    </div>
                    <div className="footer">Our goal is to reach <span>10000</span>!</div>
                </div>
            </div>
        </div>
    );
}

export default Charts;
import Image from 'next/image';

const DesignProjects = () => {
    return (
        <div className="data-set design-projects">
            <div className="gallery-header">
                <div className="left">
                    <div className="all-items">
                        <span className="icon">
                            <svg viewBox="0 0 24 24"><path d="M13.395 1.324a3.162 3.162 0 0 0-2.79 0l-8.752 4.31c-1.137.56-1.137 2.173 0 2.733l8.752 4.309a3.161 3.161 0 0 0 2.79 0l8.752-4.31c1.137-.56 1.137-2.173 0-2.733zM1.903 10.61a.5.5 0 0 1 .442 0l8.26 4.067a3.162 3.162 0 0 0 2.79 0l8.26-4.067a.5.5 0 0 1 .442 0l.05.024c1.137.56 1.137 2.174 0 2.733l-8.752 4.31a3.162 3.162 0 0 1-2.79 0l-8.752-4.31c-1.137-.56-1.137-2.173 0-2.733zm.442 5a.5.5 0 0 0-.442 0l-.05.025c-1.137.56-1.137 2.173 0 2.733l8.752 4.309a3.162 3.162 0 0 0 2.79 0l8.752-4.31c1.137-.56 1.137-2.173 0-2.733l-.05-.024a.5.5 0 0 0-.442 0l-8.26 4.067a3.162 3.162 0 0 1-2.79 0z"></path></svg>
                        </span>
                        <span className="count">8</span>
                        <span>items</span>
                    </div>
                    <div className="selected-items">
                        <div className="select-all" data-onclick="selectAll" data-params="design">
                            <div className="icon">
                                <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                            </div>
                            <span>Select All</span>
                        </div>
                        <div className="count-container">
                            <span className="count">8</span>
                            <span>Selected<span className="count-long"> Items</span></span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="all-tools">
                        <div className="remove" data-onclick="removeAll" data-params="event,design">
                            <svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>
                        </div>
                        <div className="download" data-onclick="downloadAll" data-params="event,design">
                            <svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>
                        </div>
                        <div className="upload-images">
                            <div className="icon">
                                <svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.326 32 32zM142.623 177.378c8.189 0 16.379-3.124 22.627-9.373l58.75-58.75v246.746c0 17.673 14.327 32 32 32s32-14.327 32-32V109.255l58.75 58.75c12.497 12.497 32.758 12.497 45.255 0s12.497-32.758 0-45.255L278.627 9.373c-12.497-12.497-32.758-12.497-45.255 0L119.995 122.75c-12.497 12.497-12.497 32.758 0 45.255 6.249 6.249 14.438 9.373 22.628 9.373z"></path></svg>
                            </div>
                            <span>Upload Images</span>
                            <input type="file" id="fileInput" accept="image/*" multiple style={{display: "none"}}/>
                        </div>
                    </div>
                    <div className="selected-tools">
                        <div className="remove" data-onclick="removeSelected" data-params="event,design">
                            <svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>
                        </div>
                        <div className="download" data-onclick="downloadSelected" data-params="event,design">
                            <svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="col col-1">
                    <div className="project-image">
                        <Image
                            src="/images/dashboard/design_projects/1.jpg"
                            alt="GAD design project"
                            width={400}
                            height={400}
                            loading="lazy"
                        />
                        <div className="tools">
                            <div className="remove">
                                <svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>
                            </div>
                            <div className="download">
                                <svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>
                            </div>
                            <div className="select">
                                <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="project-image">
                        <Image
                            src="/images/dashboard/design_projects/4.jpg"
                            alt="GAD design project"
                            width={400}
                            height={400}
                            loading="lazy"
                        />
                        <div className="tools">
                            <div className="remove">
                                <svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>
                            </div>
                            <div className="download">
                                <svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>
                            </div>
                            <div className="select">
                                <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-3">
                    <div className="project-image">
                        <Image
                            src="/images/dashboard/design_projects/7.jpg"
                            alt="GAD design project"
                            width={400}
                            height={400}
                            loading="lazy"
                        />
                        <div className="tools">
                            <div className="remove">
                                <svg viewBox="0 0 512 512"><path d="M85.1 464c1.9 29.9 21.7 48 52 48h235.6c34.5 0 52.7-17.7 54.8-52 5.6-92.4 19.2-317.7 20.2-336.1H64.9c0 4 13.4 231.9 20.2 340.1zM447.3 32.9c-27.1-.2-54.1-.4-81.1.1-1.6-18.6-17.2-33-35.9-33H181.7c-18.7 0-34.3 14.4-35.8 33-27.8-.5-55.7-.3-83.5-.1-14.6.2-25.2 8.3-28.7 21.1-6.1 22.3 7.4 40.7 30.5 40.8 64.1.2 128.1.1 192.1.1h190.8c20.7 0 32.6-11.6 32.7-30.9s-11.9-31-32.5-31.1z"></path></svg>
                            </div>
                            <div className="download">
                                <svg viewBox="0 0 512 512"><path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"></path></svg>
                            </div>
                            <div className="select">
                                <svg viewBox="0 0 511.985 511.985"><path d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z" fill="inherit"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignProjects;

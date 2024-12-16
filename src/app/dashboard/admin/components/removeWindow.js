"use client";
import Image from 'next/image';

const RemoveWindow = () => {
    return (
        <div className="remove-window">
            <div className="close">
                <svg viewBox="0 0 320.591 320.591"><path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path><path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path></svg>
            </div>
            <div className="message">Delete all images in the collection<br/><span>containing a total of <span className="number">45</span> images</span></div>
            <div className="password-access">
                <input type="text" id="remove-password" name="password" placeholder="Enter password to access"/>
                <div className="warn">
                    <svg viewBox="0 0 512 512"><path d="M501.362 383.95 320.497 51.474c-29.059-48.921-99.896-48.986-128.994 0L10.647 383.95c-29.706 49.989 6.259 113.291 64.482 113.291h361.736c58.174 0 94.203-63.251 64.497-113.291zM256 437.241c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm30-120c0 16.538-13.462 30-30 30s-30-13.462-30-30v-150c0-16.538 13.462-30 30-30s30 13.462 30 30v150z"></path></svg>
                    <span>The password is incorrect</span>
                </div>
            </div>
            <button>Delete All</button>
        </div>
    );
}

export default RemoveWindow;
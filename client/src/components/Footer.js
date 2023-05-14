import React from "react";
import Button from "./Button";

const Footer = () => {
    return <div className={`grid grid-cols-4 mt-10 min-h-[300px]`}>
        <div className={`p-10`}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" className="w-[100px] h-[100px]">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
        </svg>
        <p className={`text-blue-950 flex gap-2 font-sans font-bold text-xl items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                <path
                    d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z"/>
            </svg>
            Connecting Travellers to Ordinary People</p></div>
        <div className={`p-10`}><h1 className={`mb-10 text-2xl font-semibold font-sans`}>Social Media</h1>
            <ul className={`flex flex-col gap-1`}>
            <li className={`flex items-center text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>Facebook</a></li>
            <li className={`flex items-center text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>Instagram</a></li>
            <li className={`flex items-center text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>LinkedIn</a></li>
            <li className={`flex items-center text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>Discord</a></li>
            <li className={`flex items-center text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>YouTube</a></li>
        </ul></div>
        <div className={`p-10`}>
            <h1 className={`text-2xl font-bold mb-10`}>Other Links</h1>
            <ul className={`flex flex-col gap-1`}>
                <li className={`text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>FAQ</a></li>
                <li className={`text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>Cookies Policy</a></li>
                <li className={`text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>Data Security Policy</a></li>
                <li className={`text-xl`}><a href={`https://www.youtube.com`} target={`_blank`}>Terms and Services</a></li>
            </ul>
        </div>
        <div className={`flex flex-col justify-center gap-4 items-center`}>
            <h1 className={`text-3xl font-bold`}>Join the Club Now</h1>
            <Button>SignUp Now</Button>
        </div>
    </div>
}

export default Footer;

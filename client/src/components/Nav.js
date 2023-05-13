import React from 'react';

const Nav = () => {
    return (
        <header className={`py-4 px-10 flex items-center justify-center`}>
            <a className={`flex items-center gap-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>
                </svg>
                <span className={`font-bold text-xl`}>Ciao</span>
            </a>

            <ul className={`flex items-center shadow-card py-1 px-3 rounded-3xl m-auto max-w-[400px] justify-center`}>
                <li className={`p-1`}><a href={`#`} className={`hover:text-gray-500 active:text-black`}>Anywhere</a></li>
                <div className={`h-4 w-0.5 bg-gray-500 mx-2`}/>
                <li className={`p-1`}><a href={`#`} className={`hover:text-gray-500 active:text-black`}>Any Week</a></li>
                <div className={`h-4 w-0.5 bg-gray-500 mx-2`}/>
                <li className={`p-1`}><a href={`#`} className={`hover:text-gray-500 active:text-black`}>Add Guests</a></li>
                <li className={``}><button className={`bg-primary p-1.5 rounded-full m-1 hover:bg-primaryhover`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                         stroke="white" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </button></li>
            </ul>
            <div className={`flex gap-5 items-center`}>
            <a href={`#`} className={`rounded-3xl hover:bg-gray-100 p-2 text-center`}>Ciao Your Home</a>
            <div className={`rounded-3xl flex gap-1 items-center shadow-card p-2`}>

                <a href={`#`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </a>
                <div className={`h-4 w-0.5 bg-gray-400 mx-2`}/>
                <a href={`#`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clip-rule="evenodd"/>
                    </svg>
                </a>
            </div>
            </div>
        </header>
    );
}


export default Nav;

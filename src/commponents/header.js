import React, { useState } from 'react';
    import tilbury from "../resources/tlburylogo.png";

const Header = ({ activeSection, currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
    
    const handleNavClick = (link) => {
        if (link === 'Portfolio') {
            onNavigate('portfolio');
        } else {
            onNavigate('home', `#${link.toLowerCase()}`);
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
           
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('Home'); }} className="text-3xl font-bold text-gray-800 z-20">
                   <div className="flex flex">
              <img src={tilbury} alt='logo unsupported' className='w-14 h-12' />   
      <span className="text-blue-900 font-black text-2xl mt-3 ml-2">
        TILBURY & TBI TECH 
      </span>
    </div>

                </a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                            className="text-gray-800 hover:text-blue-900 transition duration-300 relative group"
                        >
                            {link}
                            <span className={`absolute -bottom-2 left-0 w-full h-1 bg-blue-900 rounded-full transform transition-transform duration-300 
                            ${ (currentPage === 'home' && activeSection === link) || (currentPage === 'portfolio' && link === 'Portfolio') ? 'scale-x-100 ' : 'scale-x-0 group-hover:scale-x-100'}`}>
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-20">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
                        {isMenuOpen ? (
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">

                             </path></svg>
                        ) : (
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7">

                             </path></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden absolute top-0 right-0 w-64 bg-blue-900 h-screen  backdrop-filter backdrop-blur-lg bg-opacity-70 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} pt-20 z-10`}>
                    <nav className="flex flex-col items-center space-y-6">
                         {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                                className="text-2xl text-yellow-400 hover:text-blue-800 "
                            >
                                {link}
                                
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header;
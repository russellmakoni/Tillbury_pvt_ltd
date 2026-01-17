import React, { useState, useEffect } from 'react';
import Footer from './screens/Footer';
import AnimatedSection from './commponents/Animated';
import Header from './commponents/header';


import SuccessModal from './commponents/SuccessModal';
import WhyChooseUs from './screens/Portfolio';

import HeroSection from './screens/hero';
import ReactGA from "react-ga4";
import {  
  MapPin, 
  CheckCircle, 
  
  Truck, 
 
} from 'lucide-react';
import Services from './commponents/Service';

ReactGA.initialize("G-1ETED8194Y"); 


const Features = () => (
  <section className="bg-blue-900 py-12 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 text-white divide-x-0 md:divide-x divide-white/10">
        <div className="px-6 flex items-center gap-6">
          <div className="text-yellow-400"><MapPin size={32} /></div>
          <div>
            <h4 className="font-bold text-sm uppercase">Convenient Support</h4>
            <p className="text-white/60 text-xs mt-1 font-medium">Mobile units across major routes</p>
          </div>
        </div>
        <div className="px-6 flex items-center gap-6">
          <div className="text-yellow-400"><CheckCircle size={32} /></div>
          <div>
            <h4 className="font-bold text-sm uppercase">Genuine Spares</h4>
            <p className="text-white/60 text-xs mt-1 font-medium">Leading brands, guaranteed quality</p>
          </div>
        </div>
        <div className="px-6 flex items-center gap-6">
          <div className="text-yellow-400"><Truck size={32} /></div>
          <div>
            <h4 className="font-bold text-sm uppercase">Fleet Experts</h4>
            <p className="text-white/60 text-xs mt-1 font-medium">Over 20 years combined experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const ContactSection = ({ onFormSubmit }) => {
    // eslint-disable-next-line
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b1a6c95e-1ee1-45ca-8c2b-830ae2d503ad");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      ReactGA.event({
  category: "Contact",
  action: "Form Submitted",
  label: "Contact Form"
});
      if (onFormSubmit) onFormSubmit();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <AnimatedSection id="contact" className="bg-gray-100">
         <div className="container mx-auto"> 
         <div className="text-center mb-12">
         <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
         <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
         </div>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
          <form onSubmit={onSubmit} netlify> 
          <div className="mb-6">
          <label htmlFor="name" className="block text-blue-900 font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
           <div className="mb-6">
          <label htmlFor="email" className="block text-blue-900 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div> <div className="mb-6">
          <label htmlFor="message" className="block text-blue-900 font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 border border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" required>
          </textarea></div> <div className="text-center"><button type="submit" className="bg-blue-900 text-white font-bold py-3 px-10 rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105">Send Message</button>
          </div>
           </form>
           
            </div> 
            </div> 
        </AnimatedSection> );
};

// --- PAGES (/pages) ---

const HomePage = ({ onNavigate, setShouldScroll, shouldScroll, setShowSuccessModal }) => {
    useEffect(() => {
        if (shouldScroll && setShouldScroll.target) {
            document.querySelector(shouldScroll.target)?.scrollIntoView({ behavior: 'smooth' });
            setShouldScroll({ target: null }); // Reset after scrolling
        }
    }, [shouldScroll,setShouldScroll]);

    return ( <>
      <HeroSection onNavigate={onNavigate} />
      <Features/>
      <WhyChooseUs />
      <Services/>
      
     
      
      <ContactSection onFormSubmit={() => setShowSuccessModal(true)} />
    </> );
};





// --- MAIN APP COMPONENT ---
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [shouldScroll, setShouldScroll] = useState({ target: null });
    const [activeSection, setActiveSection] = useState('Home');
    const [showSuccessModal, setShowSuccessModal] = useState(false);


    // Navigation handler
    const handleNavigate = (page, target = null) => {
        if (page === 'home' && currentPage !== 'home') {
            setCurrentPage('home');
            setTimeout(() => { setShouldScroll({ target: target || '#home' }); }, 0);
        } else if (page === 'home') {
            document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };
    useEffect(() => {
        // Initialize GA4
        ReactGA.initialize("G-1ETED8194Y");
    }, []);

useEffect(() => {
        // Send page view with a custom path
        ReactGA.send({ hitType: "pageview", page: `/${currentPage}`, title: currentPage });
        console.log(`GA Pageview sent for: /${currentPage}`); // For debugging
    }, [currentPage]);
    // Active section listener for homepage
    useEffect(() => {
        if (currentPage !== 'home') {
            setActiveSection('');
            return;
        };

        
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    let formattedId = id.replace('-carousel', '').replace('-section', '');
                    if (formattedId === 'portfolio') formattedId = 'Portfolio';
                    else formattedId = formattedId.charAt(0).toUpperCase() + formattedId.slice(1);
                    setActiveSection(formattedId);
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" }); // Adjusted rootMargin for better accuracy
        
        sections.forEach(section => observer.observe(section));
        
        return () => sections.forEach(section => {
            if(section) observer.unobserve(section)
        });
    }, [currentPage]);

    return (
        <div className="bg-white font-sans">
            <Header activeSection={activeSection} currentPage={currentPage} onNavigate={handleNavigate} />
            <main>
                {currentPage === 'home' && <HomePage onNavigate={handleNavigate} shouldScroll={shouldScroll}
                setShouldScroll={setShouldScroll} setShowSuccessModal={setShowSuccessModal} />}
                {currentPage === 'portfolio' && <WhyChooseUs />}
            </main>
            <Footer onNavigate={handleNavigate} />
            <SuccessModal isVisible={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
        </div>
    );
}
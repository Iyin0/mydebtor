import { useEffect } from "react";
import Footer from "./footer";
import TopNavbar from "./topNavbar";
import { Link } from "react-router-dom";
import './css/faq.css'

const FAQ = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <TopNavbar />
            <main className="faq">
                <h1 className="faq-text1">Frequently asked questions</h1>
                <p className="faq-text2">You have any questions? We are here to help.</p>
                <div className="faq-search">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 22L20 20" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="text" className="faq-search-bar" placeholder="Search" />
                </div>
                <div className="all-faqs">
                    <div className="faq-open">
                        <div className="faq-headers">
                            <h2 className="faq-head">Who can see and use information?</h2>
                            <button className="faq-icon">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12.5H19" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <p className="faq-body">Information provided by registered schools can only be seen and
                            accessed by other schools registered with us. Information gotten from the platform cannot
                            be copied or published elsewhere.
                        </p>
                    </div>
                    <div className="faq-close">
                        <h2 className="faq-head">Is the platform free to use?</h2>
                        <button className="faq-icon">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.5V19.5" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 12.5H19" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="faq-close">
                        <h2 className="faq-head">Who can use my Debtor?</h2>
                        <button className="faq-icon">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.5V19.5" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 12.5H19" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="faq-close">
                        <h2 className="faq-head">What is my debtor?</h2>
                        <button className="faq-icon">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.5V19.5" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 12.5H19" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="faq-close">
                        <h2 className="faq-head">Who can use my Debtor?</h2>
                        <button className="faq-icon">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5.5V19.5" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 12.5H19" stroke="#667080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="to-contact-us">Still have questions? <span className="faq-chat">Please <Link to='/contact-us'>chat</Link> with our friendly team</span></p>
            </main>
            <Footer />
        </div>
    );
}

export default FAQ;
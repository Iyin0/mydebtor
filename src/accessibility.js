import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';
import './css/accessibility.css'

const Accessibility = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    return (
        <div>
            <main className="accessibility" onClick={() => hideTopNav()}>
                <h1>Accessibility Statement for My Debtor</h1>
                <p className="body">
                    We want everyone who visits the My Debtor website to feel welcome and find the experience rewarding.
                    We firmly believe that the internet should be available and accessible to anyone, and we are committed
                    to ensure that the My Debtor website is accessible to all users irrespective of device in use, technology or ability. <br />
                    To fulfill this, the My Debtor website has been built, with an aim, to provide maximum accessibility and usability to its
                    visitors. As a result, this website can be viewed from a variety of devices such as Desktop Laptop computers, web-enabled
                    mobile devices; etc.
                </p>
                <div className="accessibility-content">
                    <h2>What are we doing?</h2>
                    <p>To help us make the My Debtor website a positive place for everyone, we have put in our best efforts
                        to ensure that all information on this website is accessible to people with disabilities. For example,
                        a user with visual disability can access this website using assistive technologies, such as screen readers
                        and screen magnifiers. <br />
                        We also aim to be standards compliant and follow principles of usability and universal design, which should
                        help all visitors of this website.
                    </p>
                    <p>We've been using the Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines explain how to make web
                        content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that
                        the website is accessible to all people: blind people, people with motor impairments, visual impairment, cognitive
                        disabilities, and more. The guidelines have three levels of accessibility (A, AA and AAA). We've chosen Level AA as
                        the target for the My Debtors website.
                    </p>
                    <h2>How are we doing?</h2>
                    <p>
                        We've worked hard on the My Debtors website and believe we've achieved our goal of Level AA accessibility. We monitor the
                        website regularly to maintain this, but if you do find any problems, please get in touch.
                    </p>
                    <h2>Let us know what you think</h2>
                    <p>If you enjoyed using the My Debtors website, or if you had trouble with any part of it, please get in touch. We'd like to
                        hear from you in any of the following ways:
                    </p>
                    <ul>
                        <li>email us at <span>Zuri.I4G@gmail.com</span></li>
                        <li>call us at <span>+2349067414428</span></li>
                        <li>visit us at <span>Team 36, Zuri Training, Africa.</span></li>
                    </ul>
                    <p className="accessibility-know">Do let us know the nature of the problem along with your contact information.</p>
                </div>
                <p className="accessibitily-create">This statement was created on 27th July, 2022</p>
            </main>
        </div>
    );
}

export default Accessibility;
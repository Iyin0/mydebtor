import { useEffect, useRef } from "react";
import Footer from "./footer";
import TopNavbar from "./topNavbar";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';
import { Link } from "react-router-dom";

const Privacy = () => {

    const terms = [
        {
            heading: "Introduction",
            id: "intro",
            body: "This Privacy Policy is designed to inform You about the Personal Data we collect, how we collect this data, the uses of the data, \
                and Your rights relating to the Personal Data when You use this Service or purchase the Services offered on the Website. \
                We are committed to protecting your Personal Data while You use this Website. \
                By continuing to use our Website, You acknowledge that You have reviewed the Privacy Policy and agree to its terms. This also means that \
                You have consented to the use of Your Personal Data and have accepted the terms. This also means that you have consented to the use of Your \
                Personal Data and have accepted the applicable disclosures."
        },

        {
            heading: "The Personal Data We Collect From You",
            id: "personal-collect",
            body: "We collect various information to enable us provide good Service to all our users. Depending on how our Service will be used, the different types of Personal Data we collect are as follows:\n \
                \n \
                A. For registered users: During the process of Your registration we may collect the following information: \n \
                Name of school; \n \
                School email address:\n \
                Location; \n \
                Level of institution; \n \
                We may also require other information in relation to: \n \
                \n \
                (I) Your interaction with our representatives; \n \
                (II) receiving general emails from us. \n \
                (III) commenting on our Content or other User Content on our Website. \n \
                (IV) the following forms of activities:\n \
                (V) The information you upload/update on our website.\n \
                \n \
                B. For unregistered users: We will collect passive information from all registered and unregistered users. These information include cookies, IP address information, location information and certain browser information. \n \
                \n \
                C. Sales and billing information: We may collect Your credit and/or debit card information, which includes Your card number, password, etc, Your billing address, Your contact address and other information required for Your purchases. \n \
                \n \
                D. Other information: In addition to the Personal Data already described above, we may collect the following Personal Data from You: \n \
                - Phone number \n \
                - School registration number"
        },

        {
            heading: "The Personal Data We Collect As You Use Our Service",
            id: "personal-use",
            body: "We use the following to collect Personal Data from You: \n \
                \n \
                Cookies: We use the data collected by the cookies to offer You the best experience on our Website. \n \
                Cookies are information stored on Your browser when You visit our Website or use a social network with Your PC, \n \
                Smartphone or Tablets. They contain various data which includes the name of the server from which it comes, the \n \
                numeric identifier, etc. The types of cookies we use are as follows: \n \
                \n \
                (I) Technical cookies: These cookies are essential for the correct functioning of our Website and they are required to provide the Service required to our users. \n \
                \n \
                (II) Third party cookies: While using our Service, You may receive cookies from websites managed by other organizations. Third party analytical cookies may also be installed. \n \
                Third party analytical cookies are used to detect information on user behaviour on our Website.This is placed in order to monitor the performance and improve the usability of this Website.\n \
                \n \
                (III) Support in configuring your browser: You can manage these cookies through the settings of Your browser on Your device. However, deleting cookies from Your browser may remove the \n \
                preferences You have set for this Website. \n \
                \n \
                Log Data: We also use log files which store automatic information collected when users visit this Website. The log data which may be collected are as follows: \n \
                (I) the domain and host from which You access the Website; \n \
                (II) name of the Internet Service Provider (ISP):\n \
                (III) date and time of visit; \n \
                (IV) Your computer operating system and browser software; \n \
                (V) web pages visited, the duration, and frequency of visits; \n \
                (VI) Your Internet Protocol (IP) address."
        },

        {
            heading: "Third Parties",
            id: "third-party",
            body: "We collect and use Your Personal Data for the following reasons: \n \
                \n \
                (I) to provide our Service and to maintain and make improvements to the Service we provide to You; \n \
                (II) to develop new Services on the Website; \n \
                (III) to provide personalized Service to You, including making recommendations and providing personalized content;\n \
                (IV) to provide customer service to You; \n \
                (V) to provide analytics to understand how our Service is used;\n \
                \n \
                In addition to the purposes stated above, we also use Your Personal Data for the following: \n \
                (I) to ensure that non-school actors do not gain access to database. \n \
                (II) to track activity on website."
        },

        {
            heading: "Purpose Of Processing Data",
            id: "data-purpose",
            body: "We collect and use Your Personal Data for the following reasons;\n \
                (I) to provide our Service and to maintain and make improvements to the Service we provide to You;\n \
                (II) to develop new Services on the Website;\n \
                (III) to provide personalized Services to You, including making recommendations and providing personalized content;\n \
                (IV) to provide customer service to You;\n \
                (V) to provide analytics to understand how our Services is used;\n \
                \n \
                In addition to the purposes stated above, we also use Your Personal Data for the following;\n \
                (I) to ensure that non-school actors do not gain access to database.\n \
                (II) to track activity on website."
        },

        {
            heading: "Storage Of Personal Data",
            id: "data-storage",
            body: "We take the security of the Personal Data we collect very seriously, and we take reasonable measures to reduce the risk of \
                accidental destruction, loss or unauthorized access to such information. However, please note that no system involving the transmission \
                of information via electronic storage systems or the internet is completely secure. \n \
                \n \
                We use the following systems to store Your information: \n \
                Your information are safely hosted and secured by our team of engineers. \n \
                \n \
                The Personal Data and any other information we have about You may be stored for the following period: For as long as the School License is valid."
        },

        {
            heading: "Protection Of Personal Data",
            id: "data-protection",
            body: "Our Service is built with strong security features that continuously protects Your Personal Data. Our security features help us detect and block security threats. \
                If we detect any security risk, we may inform You and guide You through steps to stay protected.\n \
                \n \
                We use the following security features to protect Your Personal Data from any security breach or harm: \n \
                SQL injection scan and CSS (Cross siteing) vulnerability."
        },

        {
            heading: "Disclosure Of Personal Data",
            id: "data-disclosure",
            body: "When You share Your Personal Data \n \
                Our Service enables You to share information with other users. However, You have control over how You share this information. When You upload any content on our Website, \
                Your content becomes accessible to other users. \n \
                \n \
                When we share Your Personal Data \n \
                We do not disclose Your Personal Data except for any of the following reasons: \n \
                (I) if You have granted us the permission to do so: We will disclose Your Personal Data where we have received Your unequivocal consent and permission to do so. However, \
                such consent may be withdrawn at anytime; \n \
                (II) for the purposes of processing Your Personal Data: We may disclose Your Personal Data to our affiliates and other trusted businesses or persons for the purpose of \
                processing Your Personal Data for us, based on our instruction and in compliance with our Privacy Policy;\n \
                (III) For any other other reason that may be necessary for the operation of our Website."
        },

        {
            heading: "User Content",
            id: "user-content",
            body: "We may allow users to post their content or information on this. These contents include audio, video, updates, articles, images, or other materials users choose to \
                display on the. Please note that any material which You may post is made accessible to the entire public and will not be regulated by this Privacy Policy."
        },

        {
            heading: "Links To Third Party Sites/Services",
            id: "third-party-sites",
            body: "The website may contain links to other websites which we believe may offer useful information. This linked websites are not under our control and this Privacy Policy does \
                not apply to these websites. We suggest that You contact those websites directly for information on their privacy policy, security, data collection and distribution policies."
        },

        {
            heading: "Accessing, Modifying And Deleting Your Personal Data",
            id: "data-modify",
            body: "You may also request that we delete any information belonging to You that we have stored. You can review and modify Your information ay using the following steps: \n \
                To view the personal data we collect from You, You can go to Your settings on Your user account and click “Privacy Policy”. There you will see “Personal Data we collected from You”, click on it. \n \
                \n \
                If You wish to delete any information belonging to You, You may do so by using the following steps: \n \
                To delete your personal data, You will have to send us a mail, once we confirm and verify the request, we can have them removed."
        },

        {
            heading: "Your Rights",
            id: "your-rights",
            body: "Your rights in relation to Your Personal Data are as follows:\n \
                \n \
                (I) the right to have access to Your Personal Data; \n \
                (II) the right to be informed about the processing of Your Personal Data; \n \
                (III) the right to rectify any inaccurate Personal Data or any information about You; \n \
                (IV) the right to review, modify or erase Your Personal Data and any other information we have about You; \n \
                (V) the right to restrict the processing of Your Personal Data;\n \
                (VI) the right to block Personal Data processing in violation of any law; \n \
                (VII) the right to be informed about any rectification or erasure of Personal Data or restriction of any processing carried out; \n \
                (VIII) the right to the portability of Your Personal Data; and \n \
                (IX) the right to lodge a complaint to a supervisory authority within Nigeria."
        },

        {
            heading: "Contact Information",
            id: "contact-info",
            body: "If You have any questions regarding this Privacy Policy or the Personal Data we collect, or if You wish to make any comments or complaints about anything \
                related to this Privacy Policy, please contact us at the following email address: Zuri.I4G@gmail.com."
        },
    ]

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const term_link = useRef([]);

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    return (
        <div>
            <TopNavbar />
            <main className="terms" onClick={() => hideTopNav()}>
                <div className="side-panel">
                    <div className="links" id="links">
                        {terms.map((head, index) => (
                            <Link to={'#' + head.id} key={index} onClick={(e) => term_link.current[index].scrollIntoView({ behavior: 'smooth' })}>{head.heading}</Link>
                        ))}
                    </div>
                </div>
                <div className="main-content">
                    <h2>PRIVACY POLICY</h2>
                    <p className="last-update">Last updated on August, 2022</p>
                    {terms.map((term, index) => (
                        <div className="container" key={index}
                            ref={(element) => { term_link.current[index] = element }}>
                            <h3 id={term.id}>{term.heading}</h3>
                            {/* <p className="body">{term.body}</p> */}
                            {term.body.split('\n').map((str, index) => <p className="body" key={index}>{str}</p>)}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Privacy;
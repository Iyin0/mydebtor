import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/debtorDetails.css';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { school_debtors } from "./allSchoolDebtors";

const SchoolDebtorDetails = () => {

    const toggleSideNavbar = useDispatch();


    const sch = useParams();
    const school_info = school_debtors.find(a => a.id === parseInt(sch.id) && a.school_id === sch.schoolId);
    const debtor = school_info.debtors.find(b => b.id === parseInt(sch.debtorId))

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div>
            <div className="debtor-debtails-page">
                <div className="display-current-page">
                    <Link to='/dashboard' className="not-current-page">Home</Link>
                    <div className="page-svg-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.9502 4.07992L15.4702 10.5999C16.2402 11.3699 16.2402 12.6299 15.4702 13.3999L8.9502 19.9199" stroke="#A8A8A8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <Link to='/dashboard/schools' className="not-current-page">Schools</Link>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9502 4.07992L15.4702 10.5999C16.2402 11.3699 16.2402 12.6299 15.4702 13.3999L8.9502 19.9199" stroke="#A8A8A8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link to={`/dashboard/schools/${sch.schoolId}/${sch.id}`} className="not-current-page">{school_info.name}</Link>
                    <div className="page-svg-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.9502 4.07992L15.4702 10.5999C16.2402 11.3699 16.2402 12.6299 15.4702 13.3999L8.9502 19.9199" stroke="#A8A8A8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="current-page">Debtor details</p>
                </div>
                <div className="debtor-detail">
                    <h1>Debtor details</h1>
                    <div className="debtor-detail1">
                        <div className="debtor-left">
                            <h2>{debtor.ward}</h2>
                            <p className="debtor-email">{debtor.email}</p>
                        </div>
                        <div className="debtor-right">
                            <div className="debtor-right-top">
                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M57.7717 34.3619H49.5813V24.7465H57.7717C59.0024 24.7465 60 23.5291 60 22.0255C60 20.5217 59.0024 19.3036 57.7717 19.3036H49.5813V5.96168C49.5813 4.01411 49.2663 2.58463 48.6452 1.71385C48.0549 0.885468 47.2789 0.5 46.2041 0.5C45.1786 0.5 44.4318 0.882809 43.8529 1.70603C43.2391 2.57768 42.9275 4.00982 42.9275 5.96256V19.3052H27.521L20.9703 7.1965C20.4097 6.11586 19.8825 5.1036 19.3706 4.13196C18.9097 3.25691 18.4602 2.54445 18.0356 2.01248C17.6597 1.5415 17.2313 1.177 16.7303 0.89684C16.2576 0.633215 15.6566 0.500886 14.9455 0.500886C14.0386 0.500886 13.2154 0.804386 12.4271 1.42793C11.647 2.04468 11.1078 2.80719 10.7785 3.75919C10.4894 4.66393 10.3364 6.05029 10.3364 7.83983V19.3043H2.22741C0.996973 19.3045 0 20.5226 0 22.0262C0 23.5298 0.996973 24.7472 2.22753 24.7472H10.3366V34.3637H2.22753C0.996973 34.3637 0 35.5815 0 37.0856C0 38.5888 0.996973 39.8057 2.22753 39.8057H10.3366V55.0388C10.3366 56.9287 10.6617 58.3438 11.3056 59.2429C11.918 60.1002 12.6944 60.4982 13.7488 60.4982C14.7661 60.4982 15.5365 60.0984 16.1754 59.2395C16.8296 58.3596 17.1605 56.9454 17.1605 55.0389V39.8057H31.1017L38.646 53.937C39.1706 54.8711 39.7122 55.814 40.2524 56.7385C40.7398 57.5687 41.2715 58.3002 41.8325 58.9112C42.3378 59.4638 42.8794 59.8688 43.4425 60.1159C44.0221 60.3708 44.6995 60.5 45.4513 60.5C47.4915 60.5 49.5811 59.737 49.5811 54.0787V39.8057H57.7715C59.0022 39.8057 59.9998 38.587 59.9998 37.0838C60 35.5806 59.0024 34.3619 57.7717 34.3619ZM42.9274 24.7463V34.3618H35.6682L30.4668 24.7463H42.9274ZM17.1606 13.6979L20.1542 19.3036H17.1606V13.6979ZM17.1606 34.3619V24.7465H23.061L28.1953 34.3619H17.1606ZM42.9274 47.7828L38.6132 39.8057H42.9274V47.7828Z" fill="#292929" />
                                </svg>
                                <p>{debtor.owes}</p>
                            </div>
                            <p className="debtor-detail-date">{debtor.date}</p>
                        </div>
                    </div>
                    <div className="debtor-detail2 school-list-debtor-detail">
                        <p className="debtor-label">Parent/Guardian's name:</p>
                        <p className="debtor-info">{debtor.name}</p>
                        <p className="debtor-label">Gender:</p>
                        <p className="debtor-info">{debtor.gender}</p>
                        <p className="debtor-label">Phone number:</p>
                        <p className="debtor-info">{debtor.number}</p>
                        <p className="debtor-label">Debt description:</p>
                        <p className="debtor-info">{debtor.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchoolDebtorDetails;
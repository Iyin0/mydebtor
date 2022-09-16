import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/debtorDetails.css';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { all_debtors } from "./allDebtors";

const DebtorDetail = () => {

    const toggleSideNavbar = useDispatch();
    const { id } = useParams();
    const debtor = all_debtors.find(debt => debt.id === parseInt(id))
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(debtor.ward);
    const [amount, setAmount] = useState(debtor.owes);
    const [email, setEmail] = useState(debtor.email)
    const [gender, setGender] = useState(debtor.gender)
    const [parent, setParent] = useState(debtor.name)
    const [phone, setPhone] = useState(debtor.number)
    const [desc, setDesc] = useState(debtor.description)

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div>
            <SideNavbar />
            <div className="debtor-debtails-page">
                <SearchBar />
                <div className="display-current-page">
                    <Link to='/current-debtors' className="not-current-page">Current debtors</Link>
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
                            <h2>{name}</h2>
                            <p className="debtor-email">{email}</p>
                        </div>
                        <div className="debtor-right">
                            <div className="debtor-right-top">
                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M57.7717 34.3619H49.5813V24.7465H57.7717C59.0024 24.7465 60 23.5291 60 22.0255C60 20.5217 59.0024 19.3036 57.7717 19.3036H49.5813V5.96168C49.5813 4.01411 49.2663 2.58463 48.6452 1.71385C48.0549 0.885468 47.2789 0.5 46.2041 0.5C45.1786 0.5 44.4318 0.882809 43.8529 1.70603C43.2391 2.57768 42.9275 4.00982 42.9275 5.96256V19.3052H27.521L20.9703 7.1965C20.4097 6.11586 19.8825 5.1036 19.3706 4.13196C18.9097 3.25691 18.4602 2.54445 18.0356 2.01248C17.6597 1.5415 17.2313 1.177 16.7303 0.89684C16.2576 0.633215 15.6566 0.500886 14.9455 0.500886C14.0386 0.500886 13.2154 0.804386 12.4271 1.42793C11.647 2.04468 11.1078 2.80719 10.7785 3.75919C10.4894 4.66393 10.3364 6.05029 10.3364 7.83983V19.3043H2.22741C0.996973 19.3045 0 20.5226 0 22.0262C0 23.5298 0.996973 24.7472 2.22753 24.7472H10.3366V34.3637H2.22753C0.996973 34.3637 0 35.5815 0 37.0856C0 38.5888 0.996973 39.8057 2.22753 39.8057H10.3366V55.0388C10.3366 56.9287 10.6617 58.3438 11.3056 59.2429C11.918 60.1002 12.6944 60.4982 13.7488 60.4982C14.7661 60.4982 15.5365 60.0984 16.1754 59.2395C16.8296 58.3596 17.1605 56.9454 17.1605 55.0389V39.8057H31.1017L38.646 53.937C39.1706 54.8711 39.7122 55.814 40.2524 56.7385C40.7398 57.5687 41.2715 58.3002 41.8325 58.9112C42.3378 59.4638 42.8794 59.8688 43.4425 60.1159C44.0221 60.3708 44.6995 60.5 45.4513 60.5C47.4915 60.5 49.5811 59.737 49.5811 54.0787V39.8057H57.7715C59.0022 39.8057 59.9998 38.587 59.9998 37.0838C60 35.5806 59.0024 34.3619 57.7717 34.3619ZM42.9274 24.7463V34.3618H35.6682L30.4668 24.7463H42.9274ZM17.1606 13.6979L20.1542 19.3036H17.1606V13.6979ZM17.1606 34.3619V24.7465H23.061L28.1953 34.3619H17.1606ZM42.9274 47.7828L38.6132 39.8057H42.9274V47.7828Z" fill="#292929" />
                                </svg>
                                <p>{amount}</p>
                            </div>
                            <p className="debtor-detail-date">{debtor.date}</p>
                        </div>
                    </div>
                    <div className="debtor-details-btns">
                        <div className="debtor-btn-left">
                            <button className="edit-debtor-btn" onClick={() => setEdit(true)}>Edit details</button>
                            <button className="mark-debtor-btn">Mark as paid</button>
                        </div>
                        <button className="delete-debtor-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.08301 4.14175L7.26634 3.05008C7.39967 2.25841 7.49967 1.66675 8.90801 1.66675H11.0913C12.4997 1.66675 12.608 2.29175 12.733 3.05841L12.9163 4.14175" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.7087 7.6167L15.167 16.0084C15.0753 17.3167 15.0003 18.3334 12.6753 18.3334H7.32533C5.00033 18.3334 4.92533 17.3167 4.83366 16.0084L4.29199 7.6167" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.6084 13.75H11.3834" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.91699 10.4167H12.0837" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Delete debt
                        </button>
                    </div>
                    <div className="debtor-detail2">
                        <p className="debtor-label">Parent/Guardian's name:</p>
                        <p className="debtor-info">{parent}</p>
                        <p className="debtor-label">Gender:</p>
                        <p className="debtor-info">{gender}</p>
                        <p className="debtor-label">Phone number:</p>
                        <p className="debtor-info">{phone}</p>
                        <p className="debtor-label">Debt description:</p>
                        <p className="debtor-info">{desc}</p>
                    </div>
                </div>
            </div>
            {edit ? (
                <div className="edit-debtor-details cover">
                    <div className="edit-details-popup">
                        <div className="edit-details-header">
                            <h3>Edit debtor details</h3>
                            <button className="close-edit" onClick={() => setEdit(false)}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.17035 16.0801C8.98035 16.0801 8.79035 16.0101 8.64035 15.8601C8.35035 15.5701 8.35035 15.0901 8.64035 14.8001L14.3004 9.14011C14.5904 8.85011 15.0704 8.85011 15.3604 9.14011C15.6504 9.43011 15.6504 9.91011 15.3604 10.2001L9.70035 15.8601C9.56035 16.0101 9.36035 16.0801 9.17035 16.0801Z" fill="#0C0C0C" />
                                    <path d="M14.8304 16.0801C14.6404 16.0801 14.4504 16.0101 14.3004 15.8601L8.64035 10.2001C8.35035 9.91011 8.35035 9.43011 8.64035 9.14011C8.93035 8.85011 9.41035 8.85011 9.70035 9.14011L15.3604 14.8001C15.6504 15.0901 15.6504 15.5701 15.3604 15.8601C15.2104 16.0101 15.0204 16.0801 14.8304 16.0801Z" fill="#0C0C0C" />
                                    <path d="M15 23.25H9C3.57 23.25 1.25 20.93 1.25 15.5V9.5C1.25 4.07 3.57 1.75 9 1.75H15C20.43 1.75 22.75 4.07 22.75 9.5V15.5C22.75 20.93 20.43 23.25 15 23.25ZM9 3.25C4.39 3.25 2.75 4.89 2.75 9.5V15.5C2.75 20.11 4.39 21.75 9 21.75H15C19.61 21.75 21.25 20.11 21.25 15.5V9.5C21.25 4.89 19.61 3.25 15 3.25H9Z" fill="#0C0C0C" />
                                </svg>
                            </button>
                        </div>
                        <form action="" className="edit-details-form">
                            <label htmlFor="" className="edit-details-label">Full name</label><br />
                            <div className="edit-input-container">
                                <input type="text" className="edit-details-input" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <label htmlFor="" className="edit-details-label">Amount owed</label><br />
                            <div className="edit-input-container">
                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M57.7717 34.3619H49.5813V24.7465H57.7717C59.0024 24.7465 60 23.5291 60 22.0255C60 20.5217 59.0024 19.3036 57.7717 19.3036H49.5813V5.96168C49.5813 4.01411 49.2663 2.58463 48.6452 1.71385C48.0549 0.885468 47.2789 0.5 46.2041 0.5C45.1786 0.5 44.4318 0.882809 43.8529 1.70603C43.2391 2.57768 42.9275 4.00982 42.9275 5.96256V19.3052H27.521L20.9703 7.1965C20.4097 6.11586 19.8825 5.1036 19.3706 4.13196C18.9097 3.25691 18.4602 2.54445 18.0356 2.01248C17.6597 1.5415 17.2313 1.177 16.7303 0.89684C16.2576 0.633215 15.6566 0.500886 14.9455 0.500886C14.0386 0.500886 13.2154 0.804386 12.4271 1.42793C11.647 2.04468 11.1078 2.80719 10.7785 3.75919C10.4894 4.66393 10.3364 6.05029 10.3364 7.83983V19.3043H2.22741C0.996973 19.3045 0 20.5226 0 22.0262C0 23.5298 0.996973 24.7472 2.22753 24.7472H10.3366V34.3637H2.22753C0.996973 34.3637 0 35.5815 0 37.0856C0 38.5888 0.996973 39.8057 2.22753 39.8057H10.3366V55.0388C10.3366 56.9287 10.6617 58.3438 11.3056 59.2429C11.918 60.1002 12.6944 60.4982 13.7488 60.4982C14.7661 60.4982 15.5365 60.0984 16.1754 59.2395C16.8296 58.3596 17.1605 56.9454 17.1605 55.0389V39.8057H31.1017L38.646 53.937C39.1706 54.8711 39.7122 55.814 40.2524 56.7385C40.7398 57.5687 41.2715 58.3002 41.8325 58.9112C42.3378 59.4638 42.8794 59.8688 43.4425 60.1159C44.0221 60.3708 44.6995 60.5 45.4513 60.5C47.4915 60.5 49.5811 59.737 49.5811 54.0787V39.8057H57.7715C59.0022 39.8057 59.9998 38.587 59.9998 37.0838C60 35.5806 59.0024 34.3619 57.7717 34.3619ZM42.9274 24.7463V34.3618H35.6682L30.4668 24.7463H42.9274ZM17.1606 13.6979L20.1542 19.3036H17.1606V13.6979ZM17.1606 34.3619V24.7465H23.061L28.1953 34.3619H17.1606ZM42.9274 47.7828L38.6132 39.8057H42.9274V47.7828Z" fill="#292929" />
                                </svg>
                                <input type="text" className="edit-details-input" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            </div>
                            <label htmlFor="" className="edit-details-label">Email address</label><br />
                            <div className="edit-input-container">
                                <input type="text" className="edit-details-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <label htmlFor="" className="edit-details-label">Gender</label><br />
                            <div className="edit-input-container">
                                <input type="text" className="edit-details-input" value={gender} onChange={(e) => setGender(e.target.value)} />
                            </div>
                            <label htmlFor="" className="edit-details-label">Parent/Guardian's name</label><br />
                            <div className="edit-input-container">
                                <input type="text" className="edit-details-input" value={parent} onChange={(e) => setParent(e.target.value)} />
                            </div>
                            <label htmlFor="" className="edit-details-label">Phone number</label><br />
                            <div className="edit-input-container">
                                <input type="text" className="edit-details-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <label htmlFor="" className="edit-details-label">Debt description</label><br />
                            <div className="edit-desc-container">
                                {/* <textarea type="text" className="edit-details-input" value={desc} onChange={(e) => setDesc(e.target.value)} /> */}
                                <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                            </div>
                            <button className="edit-submit" onClick={(e) => { e.preventDefault(); setEdit(false) }}>Save changes</button>
                        </form>
                    </div>
                </div>
            ) : (null)}
        </div>
    );
}

export default DebtorDetail;
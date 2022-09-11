import SearchBar from "./searchBar";
import SideNavbar from "./sideNavbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import './css/debtSummary.css';
import { all_debtors } from "./allDebtors";


const DebtSummary = () => {

    const [isResolved, setIsResolved] = useState([]);
    const [isPending, setIsPending] = useState([]);
    const [showResolved, setShowResolved] = useState(false);
    const [pendingDropdown, setPendingDropdown] = useState(false);
    const [resolvedDropdown, setResolvedDropdown] = useState(false);
    const [resolvedClicked, setResolvedClicked] = useState();
    const [pendingClicked, setPendingClicked] = useState();

    const toggleSideNavbar = useDispatch();

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {

        setIsResolved(all_debtors.filter((e) => {
            return e.status === 'Successful' || e.status === 'Failed'
        }))

        setIsPending(all_debtors.filter((e) => {
            return e.status === 'Logged' || e.status === 'None'
        }))

    }, [])


    return (
        <div>
            <SideNavbar />
            <main className="debt-summary-page">
                <SearchBar />
                <div className="debt-summary">
                    <div className="debt-summary-top">
                        <div className="toggle-summary">
                            <button className={showResolved ? ("not-active-summary") : ("active-summary")} onClick={() => setShowResolved(false)}>Pending</button>
                            <button className={!showResolved ? ("not-active-summary") : ("active-summary")} onClick={() => setShowResolved(true)}>Resolved</button>
                        </div>
                        <button className="sort-summary">
                            Sort by
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 15.5501L13.4001 9.03014C12.6301 8.26014 11.3701 8.26014 10.6001 9.03014L4.08008 15.5501" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="debt-summary-header-container">
                        <div className="debt-summary-header">
                            <p className="header-name">Name</p>
                            <p className="header-amount">Amount</p>
                            <p className="header-date">Entry Date</p>
                            <p className="header-status">Contention Status</p>
                        </div>
                        <div className="debt-summary-blank"></div>
                    </div>
                    {showResolved ? (
                        <div className="debt-summary-list">
                            {isResolved.map((debtor, index) => (
                                <div className="debt-info-container" key={index}>
                                    <div className="debt-info">
                                        <div className={debtor.status === 'Successful' ? ("debtor-color-successful") : ("debtor-color-failed")}></div>
                                        <div className="debt-summary-info">
                                            <p className="debt-name">{debtor.ward}</p>
                                            <p className="debt-amount">
                                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M57.7717 34.3619H49.5813V24.7465H57.7717C59.0024 24.7465 60 23.5291 60 22.0255C60 20.5217 59.0024 19.3036 57.7717 19.3036H49.5813V5.96168C49.5813 4.01411 49.2663 2.58463 48.6452 1.71385C48.0549 0.885468 47.2789 0.5 46.2041 0.5C45.1786 0.5 44.4318 0.882809 43.8529 1.70603C43.2391 2.57768 42.9275 4.00982 42.9275 5.96256V19.3052H27.521L20.9703 7.1965C20.4097 6.11586 19.8825 5.1036 19.3706 4.13196C18.9097 3.25691 18.4602 2.54445 18.0356 2.01248C17.6597 1.5415 17.2313 1.177 16.7303 0.89684C16.2576 0.633215 15.6566 0.500886 14.9455 0.500886C14.0386 0.500886 13.2154 0.804386 12.4271 1.42793C11.647 2.04468 11.1078 2.80719 10.7785 3.75919C10.4894 4.66393 10.3364 6.05029 10.3364 7.83983V19.3043H2.22741C0.996973 19.3045 0 20.5226 0 22.0262C0 23.5298 0.996973 24.7472 2.22753 24.7472H10.3366V34.3637H2.22753C0.996973 34.3637 0 35.5815 0 37.0856C0 38.5888 0.996973 39.8057 2.22753 39.8057H10.3366V55.0388C10.3366 56.9287 10.6617 58.3438 11.3056 59.2429C11.918 60.1002 12.6944 60.4982 13.7488 60.4982C14.7661 60.4982 15.5365 60.0984 16.1754 59.2395C16.8296 58.3596 17.1605 56.9454 17.1605 55.0389V39.8057H31.1017L38.646 53.937C39.1706 54.8711 39.7122 55.814 40.2524 56.7385C40.7398 57.5687 41.2715 58.3002 41.8325 58.9112C42.3378 59.4638 42.8794 59.8688 43.4425 60.1159C44.0221 60.3708 44.6995 60.5 45.4513 60.5C47.4915 60.5 49.5811 59.737 49.5811 54.0787V39.8057H57.7715C59.0022 39.8057 59.9998 38.587 59.9998 37.0838C60 35.5806 59.0024 34.3619 57.7717 34.3619ZM42.9274 24.7463V34.3618H35.6682L30.4668 24.7463H42.9274ZM17.1606 13.6979L20.1542 19.3036H17.1606V13.6979ZM17.1606 34.3619V24.7465H23.061L28.1953 34.3619H17.1606ZM42.9274 47.7828L38.6132 39.8057H42.9274V47.7828Z" fill="#292929" />
                                                </svg>
                                                {debtor.owes}
                                            </p>
                                            <p className="debt-date">{debtor.date}</p>
                                            <div className="debt-status">
                                                <p className={debtor.status === 'Successful' ? ("debtor-status-successful") : ("debtor-status-failed")}>{debtor.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-summary-dropdown">
                                        {resolvedDropdown ? (
                                            <div className="view-summary-dropdown-clicked">
                                                {index !== resolvedClicked ? (
                                                    <button className="summary-dropdown" onClick={() => { setResolvedClicked(index); setResolvedDropdown(!resolvedDropdown); setPendingDropdown(false) }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                ) : (
                                                    <button className="summary-dropdown-reverse" onClick={() => { setResolvedClicked(index); setResolvedDropdown(!resolvedDropdown); setPendingDropdown(false) }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.07996 15.0501" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        ) : (
                                            <button className="summary-dropdown" onClick={() => { setResolvedClicked(index); setResolvedDropdown(!resolvedDropdown); setPendingDropdown(false) }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        )}
                                        {resolvedDropdown ? (
                                            <div className="summary-items">
                                                {index === resolvedClicked ? (
                                                    <div className="summary-list-contaier">
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Class :</p>
                                                            <p className="summary-dropdown-ans">{debtor.class}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Parent / Guardian Name :</p>
                                                            <p className="summary-dropdown-ans">{debtor.name}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Debt Description :</p>
                                                            <p className="summary-dropdown-ans">{debtor.description}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Date of Entry :</p>
                                                            <p className="summary-dropdown-ans">{debtor.date}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Contention Summary :</p>
                                                            <p className="summary-dropdown-ans">{debtor.detail}</p>
                                                        </div>
                                                    </div>
                                                ) : (null)}
                                            </div>
                                        ) : (null)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="debt-summary-list">
                            {isPending.map((debtor, index) => (
                                <div className="debt-info-container" key={index}>
                                    <div className="debt-info" key={index}>
                                        <div className={debtor.status === 'Logged' ? ("debtor-color-logged") : ("debtor-color-none")}></div>
                                        <div className="debt-summary-info">
                                            <p className="debt-name">{debtor.ward}</p>
                                            <p className="debt-amount">
                                                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M57.7717 34.3619H49.5813V24.7465H57.7717C59.0024 24.7465 60 23.5291 60 22.0255C60 20.5217 59.0024 19.3036 57.7717 19.3036H49.5813V5.96168C49.5813 4.01411 49.2663 2.58463 48.6452 1.71385C48.0549 0.885468 47.2789 0.5 46.2041 0.5C45.1786 0.5 44.4318 0.882809 43.8529 1.70603C43.2391 2.57768 42.9275 4.00982 42.9275 5.96256V19.3052H27.521L20.9703 7.1965C20.4097 6.11586 19.8825 5.1036 19.3706 4.13196C18.9097 3.25691 18.4602 2.54445 18.0356 2.01248C17.6597 1.5415 17.2313 1.177 16.7303 0.89684C16.2576 0.633215 15.6566 0.500886 14.9455 0.500886C14.0386 0.500886 13.2154 0.804386 12.4271 1.42793C11.647 2.04468 11.1078 2.80719 10.7785 3.75919C10.4894 4.66393 10.3364 6.05029 10.3364 7.83983V19.3043H2.22741C0.996973 19.3045 0 20.5226 0 22.0262C0 23.5298 0.996973 24.7472 2.22753 24.7472H10.3366V34.3637H2.22753C0.996973 34.3637 0 35.5815 0 37.0856C0 38.5888 0.996973 39.8057 2.22753 39.8057H10.3366V55.0388C10.3366 56.9287 10.6617 58.3438 11.3056 59.2429C11.918 60.1002 12.6944 60.4982 13.7488 60.4982C14.7661 60.4982 15.5365 60.0984 16.1754 59.2395C16.8296 58.3596 17.1605 56.9454 17.1605 55.0389V39.8057H31.1017L38.646 53.937C39.1706 54.8711 39.7122 55.814 40.2524 56.7385C40.7398 57.5687 41.2715 58.3002 41.8325 58.9112C42.3378 59.4638 42.8794 59.8688 43.4425 60.1159C44.0221 60.3708 44.6995 60.5 45.4513 60.5C47.4915 60.5 49.5811 59.737 49.5811 54.0787V39.8057H57.7715C59.0022 39.8057 59.9998 38.587 59.9998 37.0838C60 35.5806 59.0024 34.3619 57.7717 34.3619ZM42.9274 24.7463V34.3618H35.6682L30.4668 24.7463H42.9274ZM17.1606 13.6979L20.1542 19.3036H17.1606V13.6979ZM17.1606 34.3619V24.7465H23.061L28.1953 34.3619H17.1606ZM42.9274 47.7828L38.6132 39.8057H42.9274V47.7828Z" fill="#292929" />
                                                </svg>
                                                {debtor.owes}
                                            </p>
                                            <p className="debt-date">{debtor.date}</p>
                                            <div className="debt-status">
                                                <p className={debtor.status === 'Logged' ? ("debtor-status-logged") : ("debtor-status-none")}>{debtor.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view-summary-dropdown">
                                        {pendingDropdown ? (
                                            <div className="view-summary-dropdown-clicked">
                                                {index !== pendingClicked ? (
                                                    <button className="summary-dropdown" onClick={() => { setPendingClicked(index); setPendingDropdown(!pendingDropdown); setResolvedDropdown(false) }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                ) : (
                                                    <button className="summary-dropdown-reverse" onClick={() => { setPendingClicked(index); setPendingDropdown(!pendingDropdown); setResolvedDropdown(false) }}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.07996 15.0501" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        ) : (
                                            <button className="summary-dropdown" onClick={() => { setPendingClicked(index); setPendingDropdown(!pendingDropdown); setResolvedDropdown(false) }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#5C99D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        )}
                                        {pendingDropdown ? (
                                            <div className={debtor.status === "None" ? "summary-items-none" : "summary-items"}>
                                                {index === pendingClicked ? (
                                                    <div className="summary-list-contaier">
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Class :</p>
                                                            <p className="summary-dropdown-ans">{debtor.class}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Parent / Guardian Name :</p>
                                                            <p className="summary-dropdown-ans">{debtor.name}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Debt Description :</p>
                                                            <p className="summary-dropdown-ans">{debtor.description}</p>
                                                        </div>
                                                        <div className="summary-list">
                                                            <p className="summary-dropdown-label">Date of Entry :</p>
                                                            <p className="summary-dropdown-ans">{debtor.date}</p>
                                                        </div>
                                                        {debtor.detail !== "" ? (
                                                            <div className="summary-list">
                                                                <p className="summary-dropdown-label">Contention Summary :</p>
                                                                <p className="summary-dropdown-ans">{debtor.detail}</p>
                                                            </div>
                                                        ) : (null)}
                                                    </div>
                                                ) : (null)}
                                            </div>
                                        ) : (null)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DebtSummary;
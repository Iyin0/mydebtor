import { useNavigate } from "react-router-dom";
import './css/contendEntry.css'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleLandingDropdown } from './store/landingDropdown';

const ContendEntry = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const defaultEmail = 'mydebtor@gmail.com';
    const [debtId, setDebtId] = useState(null);
    const defaultId = `FEC-GL-${debtId}-27082022`;

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const hideDropdown = useDispatch();

    const hideTopNav = () => {
        hideDropdown(toggleLandingDropdown(false))
    }

    const contendLogin = () => {
        if (email !== defaultEmail || id !== defaultId || email === '' || id === '') {
            window.alert("Deault Email and ID are the placeholder")
        }
        else {
            navigate(`/contend/${debtId}`)
        }
    }


    return (
        <div>
            <main className="contend-entry" onClick={() => hideTopNav()}>
                <div className="contend-entry-card">
                    <h1 className="contend-entry-head">Input your debt details</h1>
                    <form action="" className="contend-entry-form">
                        <label htmlFor="" className="contend-label">Email Address</label>
                        <input type="email" placeholder="mydebtor@gmail.com" className="contend-input"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="" className="contend-label">Debt ID</label>
                        <input type="text" placeholder="FEC-GL-1-27082022" className="contend-input"
                            value={id} onChange={(e) => { setDebtId(e.target.value.split('-')[2]); setId(e.target.value) }}
                        />
                        <button className="submit-entry" onClick={(e) => { e.preventDefault(); contendLogin() }}>Submit</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default ContendEntry;
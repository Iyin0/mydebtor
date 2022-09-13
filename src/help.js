import SideNavbar from "./sideNavbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideNav } from "./store/landingDropdown";
import SearchBar from "./searchBar";
import './css/help.css'

const Help = () => {

    const toggleSideNavbar = useDispatch();
    const [question, setQuestion] = useState("")

    useEffect(() => {
        toggleSideNavbar(toggleSideNav(false));
    }, [toggleSideNavbar])


    return (
        <div>
            <SideNavbar />
            <main className="help-page">
                <SearchBar />
                <div className="help">
                    <div className="help-top">
                        <h1>Welcome! to the Help Center</h1>
                        <h2>How may we help you?</h2>
                        <div className="help-search">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#0C0C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input type="text" placeholder="Search for common questions" value={question} onChange={(e) => setQuestion(e.target.value)} />
                        </div>
                    </div>
                    <div className="help-middle">
                        <h2>Get 100% efficient customer care at your finger tip</h2>
                    </div>
                    <div className="help-bottom">
                        <div className="help-resources-container">
                            <div className="help-resource">
                                <div className="help-resource-svg">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.0003 53.5832H35.0003C41.3927 53.5832 46.0736 52.2195 49.1468 49.1463C52.22 46.0731 53.5837 41.3922 53.5837 34.9998V20.9998C53.5837 14.6074 52.22 9.92658 49.1468 6.85337C46.0736 3.78015 41.3927 2.4165 35.0003 2.4165H21.0003C14.6079 2.4165 9.92707 3.78015 6.85386 6.85337C3.78064 9.92658 2.41699 14.6074 2.41699 20.9998V34.9998C2.41699 41.3922 3.78064 46.0731 6.85386 49.1463C9.92707 52.2195 14.6079 53.5832 21.0003 53.5832ZM6.91699 20.9998C6.91699 15.6568 7.87259 12.1838 10.0285 10.028C12.1843 7.8721 15.6573 6.9165 21.0003 6.9165H35.0003C40.3434 6.9165 43.8163 7.8721 45.9722 10.028C48.1281 12.1838 49.0837 15.6568 49.0837 20.9998V34.9998C49.0837 40.3429 48.1281 43.8158 45.9722 45.9717C43.8163 48.1276 40.3434 49.0832 35.0003 49.0832H21.0003C15.6573 49.0832 12.1843 48.1276 10.0285 45.9717C7.87259 43.8158 6.91699 40.3429 6.91699 34.9998V20.9998Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M34.1035 43.1669C34.1035 44.3997 35.1207 45.4169 36.3535 45.4169C37.5863 45.4169 38.6035 44.3997 38.6035 43.1669V34.0669C38.6035 32.8341 37.5863 31.8169 36.3535 31.8169C35.1207 31.8169 34.1035 32.8341 34.1035 34.0669V43.1669Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M34.1035 17.3835C34.1035 18.6163 35.1207 19.6335 36.3535 19.6335C37.5863 19.6335 38.6035 18.6163 38.6035 17.3835V12.8335C38.6035 11.6007 37.5863 10.5835 36.3535 10.5835C35.1207 10.5835 34.1035 11.6007 34.1035 12.8335V17.3835Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M28.0381 23.45C28.0381 28.0428 31.7619 31.7666 36.3548 31.7666C40.9233 31.7666 44.6714 28.0437 44.6714 23.45C44.6714 18.8572 40.9476 15.1333 36.3548 15.1333C31.7619 15.1333 28.0381 18.8572 28.0381 23.45ZM32.5381 23.45C32.5381 21.3461 34.2509 19.6333 36.3548 19.6333C38.437 19.6333 40.1714 21.3479 40.1714 23.45C40.1714 25.5538 38.4586 27.2666 36.3548 27.2666C34.2509 27.2666 32.5381 25.5538 32.5381 23.45Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M17.3965 43.1667C17.3965 44.3995 18.4137 45.4167 19.6465 45.4167C20.907 45.4167 21.8965 44.3952 21.8965 43.1667V38.6167C21.8965 37.3839 20.8793 36.3667 19.6465 36.3667C18.4137 36.3667 17.3965 37.3839 17.3965 38.6167V43.1667Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M17.3965 21.9335C17.3965 23.1663 18.4137 24.1835 19.6465 24.1835C20.907 24.1835 21.8965 23.1619 21.8965 21.9335V12.8335C21.8965 11.6007 20.8793 10.5835 19.6465 10.5835C18.4137 10.5835 17.3965 11.6007 17.3965 12.8335V21.9335Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M11.3311 32.5501C11.3311 37.1429 15.0549 40.8667 19.6477 40.8667C24.2405 40.8667 27.9644 37.1429 27.9644 32.5501C27.9644 27.9573 24.2405 24.2334 19.6477 24.2334C15.0549 24.2334 11.3311 27.9573 11.3311 32.5501ZM15.8311 32.5501C15.8311 30.4462 17.5439 28.7334 19.6477 28.7334C21.7732 28.7334 23.4644 30.4444 23.4644 32.5501C23.4644 34.6539 21.7516 36.3667 19.6477 36.3667C17.5439 36.3667 15.8311 34.6539 15.8311 32.5501Z" fill="#0A66C2" stroke="#0A66C2" />
                                    </svg>
                                </div>
                                <div className="help-resource-text">
                                    <h3>Resolution center</h3>
                                    <p>Resolve issues on account creation and debtors listing.</p>
                                </div>
                            </div>
                            <div className="help-resource">
                                <div className="help-resource-svg">
                                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.3333 53.5832H35.3333C41.7257 53.5832 46.4066 52.2195 49.4798 49.1463C52.553 46.0731 53.9167 41.3922 53.9167 34.9998V30.3332C53.9167 29.1004 52.8995 28.0832 51.6667 28.0832C50.4339 28.0832 49.4167 29.1004 49.4167 30.3332V34.9998C49.4167 40.3429 48.4611 43.8158 46.3052 45.9717C44.1493 48.1276 40.6764 49.0832 35.3333 49.0832H21.3333C15.9903 49.0832 12.5173 48.1276 10.3615 45.9717C8.2056 43.8158 7.25 40.3429 7.25 34.9998V20.9998C7.25 15.6568 8.2056 12.1838 10.3615 10.028C12.5173 7.8721 15.9903 6.9165 21.3333 6.9165H26C27.2328 6.9165 28.25 5.89931 28.25 4.6665C28.25 3.43369 27.2328 2.4165 26 2.4165H21.3333C14.9409 2.4165 10.2601 3.78015 7.18686 6.85337C4.11365 9.92658 2.75 14.6074 2.75 20.9998V34.9998C2.75 41.3922 4.11365 46.0731 7.18686 49.1463C10.2601 52.2195 14.9409 53.5832 21.3333 53.5832Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M16.1264 40.1837L16.1264 40.1837L16.1308 40.188C17.1872 41.2186 18.6219 41.7768 20.1666 41.7768H20.1847C20.4493 41.7768 20.7922 41.7769 21.1438 41.6989L28.1449 40.6988C28.1454 40.6987 28.1458 40.6987 28.1462 40.6986C29.6101 40.4963 31.4587 39.5585 32.4902 38.527L50.8749 20.1423C50.8753 20.1419 50.8757 20.1415 50.8761 20.1411C53.0498 17.9909 54.2488 15.8362 54.4742 13.5832L54.4746 13.5783C54.7256 10.7923 53.485 8.06472 50.8768 5.45658C48.4993 3.07908 46.0405 1.82764 43.5233 1.82764C41.0061 1.82764 38.5472 3.07908 36.1697 5.45658L17.7831 23.8432C16.7516 24.8747 15.8138 26.7234 15.6115 28.1873C15.6114 28.1877 15.6114 28.1881 15.6113 28.1885L14.6086 35.2076C14.6085 35.2079 14.6085 35.2082 14.6084 35.2085C14.3322 37.0935 14.8573 38.9146 16.1264 40.1837ZM29.2864 35.3466L29.2863 35.3465L29.277 35.3563C29.1262 35.5154 28.8193 35.7235 28.448 35.9092C28.0809 36.0927 27.7207 36.2195 27.4898 36.2556C27.4889 36.2557 27.4881 36.2558 27.4872 36.2559L20.4716 37.2582C20.4712 37.2582 20.4709 37.2583 20.4705 37.2583C19.8865 37.3386 19.5077 37.2041 19.3068 37.0032C19.106 36.8024 18.9715 36.4235 19.0518 35.8395C19.0518 35.8392 19.0519 35.8388 19.0519 35.8385L20.0541 28.8228C20.0542 28.822 20.0544 28.8212 20.0545 28.8204C20.0903 28.5909 20.2164 28.2372 20.4002 27.8722C20.5848 27.5058 20.7957 27.1915 20.9635 27.0237L39.3486 8.63854C39.3489 8.63824 39.3492 8.63795 39.3495 8.63766C40.6991 7.29975 41.9158 6.47182 43.1814 6.35468C44.4189 6.24014 45.8551 6.7961 47.6718 8.61244C49.407 10.3708 50.075 11.8412 49.9554 13.1374C49.8547 14.2246 49.1592 15.4738 47.6731 16.9599L29.2864 35.3466Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M32.9614 10.2592L32.9614 10.2592L32.9622 10.2621C34.735 16.5629 39.7382 21.5686 46.0376 23.345C46.2337 23.4087 46.447 23.4366 46.6501 23.4366C47.633 23.4366 48.5408 22.8074 48.8129 21.7835C49.1386 20.5942 48.4577 19.3344 47.2509 19.0016C42.4496 17.6486 38.6381 13.8371 37.2851 9.03578C36.9537 7.83395 35.72 7.1457 34.5242 7.47454L34.5242 7.47442L34.5131 7.47773C33.3239 7.83451 32.6315 9.05969 32.9614 10.2592Z" fill="#0A66C2" stroke="#0A66C2" />
                                    </svg>
                                </div>
                                <div className="help-resource-text">
                                    <h3>Message center</h3>
                                    <p>Write us a message and our customer care team will respond within 24 hours.</p>
                                </div>
                            </div>
                            <div className="help-resource">
                                <div className="help-resource-svg">
                                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.1893 18.95V18.9969L42.7059 18.9797C47.1772 18.8306 50.6778 15.2018 50.7026 10.7127V10.7099C50.7026 6.1638 46.9787 2.43994 42.4326 2.43994C37.8874 2.43994 34.1626 6.13949 34.1626 10.7099C34.1626 15.1373 37.5961 18.7264 42.1893 18.95ZM42.6659 18.9566C42.6741 18.9566 42.6727 18.9568 42.6658 18.9566H42.6659ZM42.1893 18.48V18.4801C42.1892 18.4764 42.1892 18.4743 42.1892 18.4744C42.1892 18.4744 42.1893 18.4761 42.1893 18.48ZM38.6626 10.6866C38.6626 8.6061 40.3521 6.91662 42.4326 6.91662C44.5374 6.91662 46.2245 8.60648 46.2259 10.6841C46.2041 12.7005 44.6739 14.3338 42.7014 14.4552C42.5972 14.4448 42.4955 14.4391 42.4093 14.4391C42.3618 14.4391 42.3073 14.4408 42.255 14.4471C42.2436 14.4485 42.2295 14.4504 42.2136 14.4532C40.2077 14.3336 38.6626 12.7023 38.6626 10.6866Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M48.2247 30.1493L48.2227 30.1507C46.3187 31.42 43.4205 31.9467 40.6508 31.4738C39.4281 31.2651 38.2547 32.0709 38.0438 33.3059C37.8352 34.5278 38.6399 35.7006 39.8736 35.9125C40.8157 36.0815 41.7549 36.1534 42.69 36.1534C45.6446 36.1534 48.4965 35.3615 50.7119 33.9008L50.7119 33.9008L50.7162 33.898C52.9006 32.4253 54.18 30.2995 54.18 28.0233C54.18 25.7207 52.8742 23.6189 50.7151 22.1714L50.714 22.1706C47.7922 20.2227 43.7149 19.4854 39.8041 20.1808C38.5701 20.3924 37.7651 21.5654 37.9738 22.7875C38.1824 24.0095 39.3476 24.8577 40.5879 24.6183C43.3788 24.1241 46.3198 24.6513 48.2216 25.9187C49.2264 26.5961 49.68 27.3495 49.68 28.0233C49.68 28.7053 49.2399 29.4797 48.2247 30.1493Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M14.5333 18.9562L14.5416 18.9565H14.55H14.55H14.55H14.55H14.55H14.55H14.5501H14.5501H14.5501H14.5501H14.5502H14.5502H14.5502H14.5502H14.5502H14.5502H14.5503H14.5503H14.5503H14.5503H14.5503H14.5504H14.5504H14.5504H14.5504H14.5504H14.5505H14.5505H14.5505H14.5505H14.5506H14.5506H14.5506H14.5506H14.5507H14.5507H14.5507H14.5507H14.5508H14.5508H14.5508H14.5509H14.5509H14.5509H14.5509H14.551H14.551H14.551H14.5511H14.5511H14.5511H14.5512H14.5512H14.5512H14.5513H14.5513H14.5513H14.5514H14.5514H14.5515H14.5515H14.5515H14.5516H14.5516H14.5517H14.5517H14.5517H14.5518H14.5518H14.5519H14.5519H14.5519H14.552H14.552H14.5521H14.5521H14.5522H14.5522H14.5523H14.5523H14.5524H14.5524H14.5525H14.5525H14.5526H14.5526H14.5526H14.5527H14.5528H14.5528H14.5529H14.5529H14.553H14.553H14.5531H14.5531H14.5532H14.5532H14.5533H14.5533H14.5534H14.5534H14.5535H14.5536H14.5536H14.5537H14.5537H14.5538H14.5538H14.5539H14.554H14.554H14.5541H14.5541H14.5542H14.5543H14.5543H14.5544H14.5545H14.5545H14.5546H14.5546H14.5547H14.5548H14.5548H14.5549H14.555H14.555H14.5551H14.5552H14.5552H14.5553H14.5554H14.5554H14.5555H14.5556H14.5557H14.5557H14.5558H14.5559H14.5559H14.556H14.5561H14.5562H14.5562H14.5563H14.5564H14.5564H14.5565H14.5566H14.5567H14.5567H14.5568H14.5569H14.557H14.557H14.5571H14.5572H14.5573H14.5574H14.5574H14.5575H14.5576H14.5577H14.5578H14.5578H14.5579H14.558H14.5581H14.5582H14.5582H14.5583H14.5584H14.5585H14.5586H14.5587H14.5587H14.5588H14.5589H14.559H14.5591H14.5592H14.5592H14.5593H14.5594H14.5595H14.5596H14.5597H14.5598H14.5599H14.5599H14.56H14.5601H14.5602H14.5603H14.5604H14.5605H14.5606H14.5607H14.5608H14.5608H14.5609H14.561H14.5611H14.5612H14.5613H14.5614H14.5615H14.5616H14.5617H14.5618H14.5619H14.562H14.5621H14.5622H14.5623H14.5624H14.5624H14.5625H14.5626H14.5627H14.5628H14.5629H14.563H14.5631H14.5632H14.5633H14.5634H14.5635H14.5636H14.5637H14.5638H14.5639H14.564H14.5641H14.5642H14.5643H14.5644H14.5645H14.5646H14.5647H14.5648H14.565H14.5651H14.5652H14.5653H14.5654H14.5655H14.5656H14.5657H14.5658H14.5659H14.566H14.5661H14.5662H14.5663H14.5664H14.5665H14.5666H14.5668H14.5669H14.567H14.5671H14.5672H14.5673H14.5674H14.5675H14.5676H14.5677H14.5678H14.568H14.5681H14.5682H14.5683H14.5684H14.5685H14.5686H14.5687H14.5688H14.569H14.5691H14.5692H14.5693H14.5694H14.5695H14.5696H14.5698H14.5699H14.57H14.5701H14.5702H14.5703H14.5704H14.5706H14.5707H14.5708H14.5709H14.571H14.5711H14.5713H14.5714H14.5715H14.5716H14.5717H14.5718H14.572H14.5721H14.5722H14.5723H14.5724H14.5726H14.5727H14.5728H14.5729H14.573H14.5731H14.5733H14.5734H14.5735H14.5736H14.5738H14.5739H14.574H14.5741H14.5742H14.5744H14.5745H14.5746H14.5747H14.5748H14.575H14.5751H14.5752H14.5753H14.5755H14.5756H14.5757H14.5758H14.576H14.5761H14.5762H14.5763H14.5765H14.5766H14.5767H14.5768H14.577H14.5771H14.5772H14.5773H14.5775H14.5776H14.5777H14.5778H14.578H14.5781H14.5782H14.5783H14.5785H14.5786H14.5787H14.5788H14.579H14.5791H14.5792H14.5794H14.5795H14.5796H14.5797H14.5799H14.58H14.5801H14.5803H14.5804H14.5805H14.5806H14.5808H14.5809H14.581H14.5812H14.5813H14.5814H14.5816H14.5817H14.5818H14.5819H14.5821H14.5822H14.5823H14.5825H14.5826H14.5827H14.5829H14.583H14.5831H14.5833H14.5834H14.5835H14.5837H14.5838H14.5839H14.584H14.5842H14.5843H14.5844H14.5846H14.5847H14.5848H14.585H14.5851H14.5852H14.5854H14.5855H14.5856H14.5858H14.5859H14.586H14.5862H14.5863H14.5864H14.5866H14.5867H14.5868H14.587H14.5871H14.5872H14.5874H14.5875H14.5877H14.5878H14.5879H14.5881H14.5882H14.5883H14.5885H14.5886H14.5887H14.5889H14.589H14.5891H14.5893H14.5894H14.5895H14.5897H14.5898H14.5899H14.5901H14.5902H14.5904H14.5905H14.5906H14.5908H14.5909H14.591H14.5912H14.5913H14.5914H14.5916H14.5917H14.5918H14.592H14.5921H14.5923H14.5924H14.5925H14.5927H14.5928H14.5929H14.5931H14.5932H14.5933H14.5935H14.5936H14.5938H14.5939H14.594H14.5942H14.5943H14.5944H14.5946H14.5947H14.5948H14.595H14.5951H14.5953H14.5954H14.5955H14.5957H14.5958H14.5959H14.5961H14.5962H14.5964H14.5965H14.5966H14.5969H14.5972H14.5974H14.5977H14.598H14.5983H14.5986H14.5988H14.5991H14.5994H14.5997H14.5999H14.6002H14.6005H14.6008H14.6011H14.6013H14.6016H14.6019H14.6022H14.6025H14.6028H14.6031H14.6033H14.6036H14.6039H14.6042H14.6045H14.6048H14.6051H14.6053H14.6056H14.6059H14.6062H14.6065H14.6068H14.6071H14.6074H14.6077H14.608H14.6083H14.6086H14.6088H14.6091H14.6094H14.6097H14.61H14.6103H14.6106H14.6109H14.6112H14.6115H14.6118H14.6121H14.6124H14.6127H14.613H14.6133H14.6136H14.6139H14.6142H14.6145H14.6148H14.6151H14.6154H14.6157H14.616H14.6163H14.6166H14.617H14.6173H14.6176H14.6179H14.6182H14.6185H14.6188H14.6191H14.6194H14.6197H14.62H14.6203H14.6207H14.621H14.6213H14.6216H14.6219H14.6222H14.6225H14.6228H14.6231H14.6235H14.6238H14.6241H14.6244H14.6247H14.625H14.6253H14.6257H14.626H14.6263H14.6266H14.6269H14.6272H14.6276H14.6279H14.6282H14.6285H14.6288H14.6292H14.6295H14.6298H14.6301H14.6304H14.6308H14.6311H14.6314H14.6317H14.632H14.6324H14.6327H14.633H14.6333H14.6337H14.634H14.6343H14.6346H14.6349H14.6353H14.6356H14.6359H14.6362H14.6366H14.6369H14.6372H14.6375H14.6379H14.6382H14.6385H14.6389H14.6392H14.6395H14.6398H14.6402H14.6405H14.6408H14.6412H14.6415H14.6418H14.6421H14.6425H14.6428H14.6431H14.6435H14.6438H14.6441H14.6445H14.6448H14.6451H14.6455H14.6458H14.6461H14.6465H14.6468H14.6471H14.6474H14.6478H14.6481H14.6484H14.6488H14.6491H14.6495H14.6498H14.6501H14.6505H14.6508H14.6511H14.6515H14.6518H14.6521H14.6525H14.6528H14.6531H14.6535H14.6538H14.6541H14.6545H14.6548H14.6552H14.6555H14.6558H14.6562H14.6565H14.6568H14.6572H14.6575H14.6579H14.6582H14.6585H14.6589H14.6592H14.6596H14.6599H14.6602H14.6606H14.6609H14.6612H14.6616H14.6619H14.6623H14.6626H14.6629H14.6633H14.6636H14.664H14.6643H14.6646H14.665H14.6653H14.6657H14.666H14.6663H14.6667H14.667H14.6674H14.6677H14.668H14.6684H14.6687H14.6691H14.6694H14.6698H14.6701H14.6704H14.6708H14.6711H14.6715H14.6718H14.6721H14.6725H14.6728H14.6732H14.6735H14.6738H14.6742H14.6745H14.6749H14.6752H14.6756H14.6759H14.6762H14.6766H14.6769H14.6773H14.6776H14.6779H14.6783H14.6786H14.679H14.6793H14.6797H14.68H14.6803H14.6807H14.681H14.6814H14.6817H14.6821H14.6824H14.6827H14.6831H14.6834H14.6838H14.6841H14.6844H14.6848H14.6851H14.6855H14.6858H14.6861H14.6865H14.6868H14.6872H14.6875H14.6879H14.6882H14.6885H14.6889H14.6892H14.6896H14.6899H14.6902H14.6906H14.6909H14.6913H14.6916H14.6919H14.6923H14.6926H14.693H14.6933H14.6936H14.694H14.6943H14.6947H14.695H14.6953H14.6957H14.696H14.6964H14.6967H14.697H14.6974H14.6977H14.698H14.6984H14.6987H14.6991H14.6994H14.6997H14.7001H14.7004H14.7007H14.7011H14.7014H14.7018H14.7021H14.7024H14.7028H14.7031H14.7034H14.7038H14.7041H14.7045H14.7048H14.7051H14.7055H14.7058H14.7061H14.7065H14.7068H14.7071H14.7074L14.711 18.9693L15.0949 18.9565H15.3088L15.3079 18.947C19.6805 18.6959 23.0766 15.1094 23.0766 10.6865C23.0766 6.14037 19.3528 2.4165 14.8066 2.4165C10.2595 2.4165 6.53662 6.14133 6.53661 10.7098L6.53663 10.7126C6.56144 15.1793 10.063 18.8072 14.5333 18.9562ZM18.6233 10.7098C18.6233 12.7466 17.03 14.371 15.2511 14.4779C15.0951 14.4565 14.9611 14.4565 14.8413 14.4565L14.83 14.4565L14.8227 14.4565C14.7816 14.4565 14.718 14.4565 14.6604 14.4609C14.6357 14.4628 14.6001 14.4663 14.5603 14.4741C12.5993 14.3075 11.0833 12.6969 11.0833 10.7098C11.0833 8.6293 12.7728 6.93982 14.8533 6.93982C16.9338 6.93982 18.6233 8.6293 18.6233 10.7098Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M6.5479 33.8987L6.55111 33.9008C8.76652 35.3615 11.6184 36.1534 14.573 36.1534C15.508 36.1534 16.4472 36.0815 17.3893 35.9125C18.6231 35.7007 19.4278 34.5279 19.2192 33.3059L19.2189 33.3038C19.0082 32.1 17.841 31.264 16.6122 31.4738C13.843 31.9466 10.9453 31.4202 9.04135 30.1513C8.04125 29.477 7.58301 28.701 7.58301 28.0233C7.58301 27.3454 8.01848 26.5934 9.03831 25.9207C10.9654 24.6507 13.8852 24.1243 16.6751 24.6183C17.9154 24.8577 19.0806 24.0095 19.2892 22.7875C19.4979 21.5654 18.693 20.3925 17.459 20.1808C13.5482 19.4854 9.47087 20.2227 6.54899 22.1706L6.5479 22.1714C4.38789 23.6196 3.08301 25.745 3.08301 28.0233C3.08301 30.3241 4.38695 32.4498 6.5479 33.8987Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M28.1893 36.3802V36.4271L28.7059 36.4098C33.1772 36.2608 36.6778 32.6319 36.7026 28.1429V28.1401C36.7026 23.594 32.9787 19.8701 28.4326 19.8701C23.8874 19.8701 20.1626 23.5697 20.1626 28.1401C20.1626 32.5675 23.5961 36.1565 28.1893 36.3802ZM28.6659 36.3868C28.6741 36.3868 28.6727 36.387 28.6658 36.3868H28.6659ZM28.1893 35.9101V35.9103C28.1892 35.9066 28.1892 35.9044 28.1892 35.9045C28.1892 35.9046 28.1893 35.9063 28.1893 35.9101ZM24.6626 28.1168C24.6626 26.0363 26.3521 24.3468 28.4326 24.3468C30.5356 24.3468 32.2245 26.0582 32.2259 28.1142C32.2041 30.1307 30.6739 31.764 28.7014 31.8853C28.5972 31.875 28.4955 31.8693 28.4093 31.8693C28.3618 31.8693 28.3073 31.871 28.255 31.8773C28.2436 31.8787 28.2295 31.8806 28.2136 31.8834C26.2077 31.7638 24.6626 30.1324 24.6626 28.1168Z" fill="#0A66C2" stroke="#0A66C2" />
                                        <path d="M36.7135 39.6007L36.7146 39.6014C38.8737 41.0489 40.1795 43.1507 40.1795 45.4533C40.1795 47.7272 38.9023 49.8782 36.713 51.3298C34.4483 52.8394 31.5482 53.6067 28.6662 53.6067C25.7874 53.6067 22.885 52.8642 20.6167 51.328C18.4582 49.8804 17.1528 47.779 17.1528 45.4767C17.1528 43.2027 18.4302 41.0516 20.6198 39.6L36.7135 39.6007ZM36.7135 39.6007C34.4467 38.0895 31.5515 37.3467 28.6749 37.3467M36.7135 39.6007L28.6749 37.3467M28.6749 37.3467C25.7983 37.3467 22.8978 38.0895 20.6199 39.5999L28.6749 37.3467ZM23.1081 43.3741L23.1088 43.3737C24.5954 42.3899 26.6226 41.8758 28.6727 41.873C30.7233 41.8701 32.7353 42.3789 34.1953 43.3703L34.1967 43.3713C35.2022 44.049 35.6562 44.8027 35.6562 45.4767C35.6562 46.1586 35.2161 46.933 34.2009 47.6026L34.2009 47.6026L34.1967 47.6054C32.7235 48.5984 30.7044 49.1125 28.6545 49.1125C26.6046 49.1125 24.5855 48.5984 23.1123 47.6054L23.1123 47.6054C22.1068 46.9278 21.6528 46.1741 21.6528 45.5C21.6528 44.8181 22.0929 44.0437 23.1081 43.3741Z" fill="#0A66C2" stroke="#0A66C2" />
                                    </svg>
                                </div>
                                <div className="help-resource-text">
                                    <h3>Ask the community</h3>
                                    <p>Find answers or join the conversation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="help-resources-container">
                            <div className="help-resource">
                                <div className="help-resource-svg">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M51.2632 42.7698C51.2632 43.6098 51.0765 44.4732 50.6798 45.3132C50.2832 46.1532 49.7698 46.9465 49.0932 47.6932C47.9498 48.9532 46.6898 49.8632 45.2665 50.4465C43.8665 51.0298 42.3498 51.3332 40.7165 51.3332C38.3365 51.3332 35.7932 50.7732 33.1098 49.6298C30.4265 48.4865 27.7432 46.9465 25.0832 45.0098C22.3998 43.0498 19.8565 40.8798 17.4298 38.4765C15.0265 36.0498 12.8565 33.5065 10.9198 30.8465C9.0065 28.1865 7.4665 25.5265 6.3465 22.8898C5.2265 20.2298 4.6665 17.6865 4.6665 15.2598C4.6665 13.6732 4.9465 12.1565 5.5065 10.7565C6.0665 9.33317 6.95317 8.0265 8.18984 6.85984C9.68317 5.38984 11.3165 4.6665 13.0432 4.6665C13.6965 4.6665 14.3498 4.8065 14.9332 5.0865C15.5398 5.3665 16.0765 5.7865 16.4965 6.39317L21.9098 14.0232C22.3298 14.6065 22.6332 15.1432 22.8432 15.6565C23.0532 16.1465 23.1698 16.6365 23.1698 17.0798C23.1698 17.6398 23.0065 18.1998 22.6798 18.7365C22.3765 19.2732 21.9332 19.8332 21.3732 20.3932L19.5998 22.2365C19.3432 22.4932 19.2265 22.7965 19.2265 23.1698C19.2265 23.3565 19.2498 23.5198 19.2965 23.7065C19.3665 23.8932 19.4365 24.0332 19.4832 24.1732C19.9032 24.9432 20.6265 25.9465 21.6532 27.1598C22.7032 28.3732 23.8232 29.6098 25.0365 30.8465C26.2965 32.0832 27.5098 33.2265 28.7465 34.2765C29.9598 35.3032 30.9632 36.0032 31.7565 36.4232C31.8732 36.4698 32.0132 36.5398 32.1765 36.6098C32.3632 36.6798 32.5498 36.7032 32.7598 36.7032C33.1565 36.7032 33.4598 36.5632 33.7165 36.3065L35.4898 34.5565C36.0732 33.9732 36.6332 33.5298 37.1698 33.2498C37.7065 32.9232 38.2432 32.7598 38.8265 32.7598C39.2698 32.7598 39.7365 32.8532 40.2498 33.0632C40.7632 33.2732 41.2998 33.5765 41.8832 33.9732L49.6065 39.4565C50.2132 39.8765 50.6332 40.3665 50.8898 40.9498C51.1232 41.5332 51.2632 42.1165 51.2632 42.7698Z" stroke="#0A66C2" strokeWidth="6" strokeMiterlimit="10" />
                                        <path d="M43.1667 20.9997C43.1667 19.5997 42.07 17.453 40.4367 15.703C38.9433 14.093 36.96 12.833 35 12.833" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M51.3333 20.9998C51.3333 11.9698 44.03 4.6665 35 4.6665" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="help-resource-text">
                                    <h3>24/7 live call center</h3>
                                    <p>Talk to a customer care agent or technical expert.</p>
                                </div>
                            </div>
                            <div className="help-resource">
                                <div className="help-resource-svg">
                                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.3338 42.467C33.4885 42.467 37.6672 38.2883 37.6672 33.1336C37.6672 27.979 33.4885 23.8003 28.3338 23.8003C23.1792 23.8003 19.0005 27.979 19.0005 33.1336C19.0005 38.2883 23.1792 42.467 28.3338 42.467Z" stroke="#0A66C2" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24.6934 33.3672L26.21 34.8839C26.6534 35.3272 27.3767 35.3272 27.82 34.9072L31.9734 31.0806" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.0006 51.3333H37.6672C47.0472 51.3333 48.7272 47.5767 49.2172 43.0033L50.9672 24.3367C51.5972 18.6433 49.9639 14 40.0006 14H16.6672C6.70391 14 5.07057 18.6433 5.70057 24.3367L7.45057 43.0033C7.94057 47.5767 9.62057 51.3333 19.0006 51.3333Z" stroke="#0A66C2" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.0005 13.9998V12.1332C19.0005 8.00317 19.0005 4.6665 26.4672 4.6665H30.2005C37.6672 4.6665 37.6672 8.00317 37.6672 12.1332V13.9998" stroke="#0A66C2" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M50.8504 25.6665C46.8138 28.6065 42.3338 30.6598 37.6904 31.8265" stroke="#0A66C2" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.44629 26.2954C10.343 28.9554 14.5896 30.8454 18.9996 31.9187" stroke="#0A66C2" strokeWidth="6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="help-resource-text">
                                    <h3>Resource center</h3>
                                    <p>Gain unlimited access to a repository of resources and self-paced instructional videos on how to use our products and services.</p>
                                </div>
                            </div>
                            <div className="help-resource">
                                <div className="help-resource-svg">
                                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.0464 40.88C25.1197 42.2566 26.7997 43.1666 28.6664 43.1666C31.8864 43.1666 34.4997 40.5533 34.4997 37.3333C34.4997 36.0033 34.0564 34.7666 33.3097 33.7866" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.24634 48.5335C5.82301 46.7602 5.33301 43.9368 5.33301 39.6668V35.0002C5.33301 25.6668 7.66634 23.3335 16.9997 23.3335H40.333C41.173 23.3335 41.943 23.3568 42.6663 23.4035C50.063 23.8235 51.9997 26.5068 51.9997 35.0002V39.6668C51.9997 49.0002 49.6663 51.3335 40.333 51.3335H16.9997C16.1597 51.3335 15.3897 51.3102 14.6663 51.2635" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.6665 23.3332V18.6665C14.6665 10.9432 16.9998 4.6665 28.6665 4.6665C38.3498 4.6665 41.5932 7.8865 42.4332 12.9732" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M51.9997 4.6665L5.33301 51.3332" stroke="#0A66C2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="help-resource-text">
                                    <h3>Safety and Security</h3>
                                    <p>Learn how to protect your personal information and that of your clients from third party infringement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="help-demo">
                        <h2>Request a Demo</h2>
                        <p>Track debt of various students across different schools</p>
                        <div className="help-demo-btn-container">
                            <button className="help-schedule-btn">Schedule a Demo</button>
                            <button className="help-watch-btn">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.825684" width="24.4776" height="24" rx="8" fill="#FEFEFE" />
                                    <path d="M13.034 22C18.6667 22 23.233 17.5228 23.233 12C23.233 6.47715 18.6667 2 13.034 2C7.40121 2 2.83496 6.47715 2.83496 12C2.83496 17.5228 7.40121 22 13.034 22Z" stroke="#0855A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.73975 12.2301V10.5601C9.73975 8.48012 11.239 7.63012 13.0748 8.67012L14.5537 9.51012L16.0325 10.3501C17.8684 11.3901 17.8684 13.0901 16.0325 14.1301L14.5537 14.9701L13.0748 15.8101C11.239 16.8501 9.73975 16.0001 9.73975 13.9201V12.2301Z" fill="#0855A2" stroke="#0855A2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Help;
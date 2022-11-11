import React from 'react';
import foto from '../map.png';
import foto1 from '../photo.jpg';
function JobDetailedValue() {
    return (
        <div className='jobDetailedValue'>
            <header className='header'>
                <div className='text'>
                    <div className='upper'>
                        <p className="jobDetails">Job Details</p>
                        <p className='save'>Save to my list</p>
                        <p className='share'>Share</p>
                    </div>
                    <button type='submit' placeholder='APPLY NOW'>APPLY NOW</button>
                    <div className='titleBox'>
                        <p className='mainText'>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)</p>
                        <p className='price'>€ 54 000—60 000 </p>
                    </div>
                    <p className='date'>Posted 2 days ago</p>
                    <p className='content'>At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.</p>
                    
                </div>
                <div className='map'>
                    <img src={foto} alt=''></img>
                </div>
            </header>
            <main className='main'>
                <p className='respons'>Responsopilities</p>
                <p className='description'>
                    Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
                    <br /><br />The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
                    <br /><br /> Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
                    <br /><br />
                </p>
                <p className='benefits'>Compensation & Benefits:</p>
                <ul className='benefitsList'>
                    <p>Our physicians enjoy a wide range of benefits, including:</p>
                    <li>Very competitive compensation package with bonuses</li>
                    <li>Medical, Dental, and Vision Insurance</li>
                    <li>Occurrence-based Malpractice Coverage</li>
                    <li>Short-term and Long-term Disability Insurance
                    and life insurance</li>
                </ul>
                <button type='submit' placeholder='APPLY NOW'>APPLY NOW</button>
            </main>
            <footer className="footer">
                <p className='footerTitle'>Additional info</p>
                <p className='employ'>Employment type</p>
                <div className='employValue'>
                    <p>full time</p>
                    <p>part time</p>
                </div>
                <p className='benefits'>Benefits</p>
                <div className='benefitsValue'>
                    <p>Flexible shedule</p>
                    <p>Relocation assistance</p>
                </div>
                <p className='imgTitle'>Attached images</p>
                <div className="images"> 
                    <img src={foto1} alt=""></img>
                    <img src={foto1} alt=""></img>
                    <img src={foto1} alt=""></img>
                </div>
            </footer>
        </div>
    )
}

export default JobDetailedValue;
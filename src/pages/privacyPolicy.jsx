import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext"; // Import the context
import { translations } from "./privacyPolicyTranslation"; // Import translations
import Navbar from "../components/Home/Navbar";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../components/Home/Footer";
import './style.css'

export default function PrivacyPolicy() {
    const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
    const [open, setOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [langUpdated, setLangUpdated] = useState(false); // State to trigger re-render on language change
  
    const t = translations[selectedLanguage]; // Get the translation for the selected language
  
    // Use effect to force re-render when language changes
    useEffect(() => {
      setLangUpdated(false); // Reset state before language change
      const timeout = setTimeout(() => {
        setLangUpdated(true); // Update state after a brief delay
      }, 100); // Delay to allow the context to update
      return () => clearTimeout(timeout); // Cleanup timeout
    }, [selectedLanguage]); // Dependency on language change
  
    return (
        <>
            <div className="main-wrapper ">
                <Navbar />
                <div className="w-8/12 mx-auto 2xl:max-w-[1154px] ">
                <div className='w-11/12 mx-auto 2xl:max-w-[1200px] pb-[35px] pt-[204px] '>
            <ul className=' inline-flex  items-center ' >
                <li>
                        <div className=' bg-green w-[100px] h-[1px] '  ></div>
                </li>
                <li className=' ml-[22px] ' >
                    <h2 className=' text-green text-4xl f-f-m ' >
                    OUR PRIVACY POLICY
                    </h2>
                </li>
            </ul>
    </div>
                </div>
            </div>
            <div className="w-8/12 mx-auto 2xl:max-w-[1154px]">
                <p className="mt-5">Rapido Relief App Privacy Policy</p>
                <br />

                <p>Last updated: March 10, 2024</p>
                <br />

                <p>
                    Welcome to Rapido Relief App, operated by Rapido Relief App Limited
                    (&quot;Rapido Relief App,&quot; &quot;we,&quot; or &quot;us&quot;).
                    Your privacy is important to us, and we are committed to protecting
                    your personal information. This Privacy Policy explains how we
                    collect, use, and share your information when you access or use our
                    website, mobile application, and related services (collectively, the
                    &quot;Services&quot;). By using or accessing the Services, you acknowledge that you have
                    read, understood, and agree to the practices and policies outlined in
                    this Privacy Policy. If you do not agree with this Privacy Policy,
                    please do not use the Services.
                </p>
                <br />

                <p>
                    Cookies Usage at Rapido Relief App: We utilize various types of Cookies for different purposes to enhance
                    your experience on the Rapido Relief App:
                    <p>Essential Cookies:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Necessary for requested features or services.</li>
                        <li>For instance, enabling secure logins.</li>
                        <li>Disabling these may limit certain features.</li>
                    </ul>
                    <p>Functional Cookies:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Record choices and settings, providing a personalized experience.</li>
                        <li>Recognize returning users and maintain preferences.</li>
                    </ul>
                    <p>Performance/Analytical Cookies:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Understand visitor behavior, analyze page views, and measure performance.</li>
                        <li>Aid in optimizing advertising campaigns.</li>
                        <li>Google Analytics services may be used for these cookies.</li>
                    </ul>
                    <p>Retargeting/Advertising Cookies:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Collect online activity data to deliver relevant advertising.</li>
                        <li>More details on interest-based ads are provided below.</li>
                    </ul>
                    <p>Web Beacons:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Tiny graphic files tracking Service usage, advertiser web services, and email engagement.</li>
                        <li>Facilitate analysis of user engagement and enhance interest-based advertising.</li>
                    </ul>
                    <p>Mobile Device Identifiers:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Aid in understanding user demographics and internet behaviors.</li>
                        <li>Track activities, locations, and device types.</li>
                        <li>Collects data like IP address, domain server, and browser information.</li>
                    </ul>
                    <p>Cross Device Matching:</p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Identifies user interactions across multiple devices.</li>
                        <li>Analysis and advertisement targeting across associated devices.</li>
                    </ul>
                </p>
                <br />

                <p>
                    Cookie Management: <br /> You have the choice to accept or reject Cookies through your browser
                    settings. Most browsers allow disabling Cookies or prompting for
                    acceptance. Mobile device identifiers can also be rejected by
                    adjusting mobile device settings. Deleting existing Cookies may
                    require reconfiguration of preferences during subsequent Service
                    access.
                </p>
                <br />

                <p>
                    Do Not Track Option: <br /> While some browsers offer a &quot;Do Not Track&quot; option, our
                    Services, like many others, do not currently support this request. For
                    more details on managing Cookies, visit the preferences or options
                    section of your browser&rsquo;s menu.
                </p>
                <br />

                <p>
                    Interest-Based Advertisements:<br />We may display advertisements, including third-party networks, based
                    on user interests. Information for such ads may be derived from
                    user-provided data or inferred from online activity. Adherence to
                    Digital Advertising Alliance (&quot;DAA&quot;) principles ensures user
                    control over customized ads. Opt-out choices can be exercised through
                    DAA or Network Advertising Initiative (&quot;NAI&quot;) opt-out pages,
                    and opting out is applicable per browser and device. Note that opting
                    out doesn&rsquo;t eliminate all ads but ensures non-interest-based
                    content delivery. Even after opting out, tracking tools may still be
                    used for general analytics and ad delivery purposes.
                </p>
                <br />

                <p>
                    Data Security:<br />Ensuring the security of your Personal Data is our top priority.
                    Employing a blend of physical, technical, organizational, and
                    administrative security measures, we safeguard your data from
                    unauthorized access, use, and disclosure. These measures align with
                    industry standards and cover both data transmission and storage
                    aspects. Utilizing Secure Sockets Layer (SSL) technology, we encrypt
                    Personal Data during transmission.
                </p>
                <br />

                <p>
                    Your information is stored and processed on servers within the United
                    States and abroad, supported by industry-standard backup and archival
                    systems. While we implement robust security practices, your
                    collaboration in protecting your data is vital. This includes
                    judiciously selecting and securing your password, controlling access
                    to your devices, and signing out after accessing your account.
                </p>
                <br />

                <p>
                    Despite our diligent efforts, it&rsquo;s important to acknowledge that
                    no method of data transmission or storage over the Internet is
                    entirely foolproof. We do not guarantee absolute security against
                    theft, destruction, loss, or inadvertent disclosure of your
                    information, except as explicitly mandated by law.
                </p>
                <br />

                <p>
                    In the event of a perceived compromise to the security of your
                    Personal Data, we commit to notifying you promptly. Notifications will
                    be delivered through your provided email address, so keeping it
                    updated in your account profile is crucial. If preferred, you can opt
                    by reaching out to us at Privacy-Notice@rapidorelief.com, specifying
                    your address. Consent for email notifications is implied unless
                    otherwise stated.
                </p>
                <br />

                <p>
                    Data Retention:<br />Retention of your Personal Data is conducted based on the necessity to
                    deliver our Services or fulfill business purposes. Factors such as
                    data source, purpose of collection, and sensitivity are considered
                    when establishing retention periods. In certain cases, data may be
                    retained for an extended period to comply with legal obligations,
                    resolve disputes, collect owed fees, provide Services, or as
                    stipulated by applicable laws.
                </p>
                <br />

                <p>
                    Examples of our retention approach include:
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>Account information and credentials are retained as long as your account is active.</li>
                        <li>Device/IP data is retained for system integrity and efficiency.</li>
                        <li>Protected Health Information (PHI) is retained in compliance with Business Associate Agreements and HIPAA regulations.</li>
                    </ul>
                    Additionally, information may be retained in an anonymous or
                    aggregated form when personal identification is unnecessary. This
                    retention framework ensures alignment with privacy regulations and
                    responsible data management.
                </p>
                <br />

                <p>
                    Children&rsquo;s Privacy:<br /> The Services are not intended for use by children under 13 years of
                    age, and we do not knowingly collect Personal Data from individuals in
                    this age group. If you are under 13, please refrain from attempting to
                    register or use the Services or submit any Personal Data. By accessing
                    or submitting information to the Services, you confirm that you are
                    over 13 years old. In accordance with the Terms of Use, if we become
                    aware that Personal Data has been directly provided by a child under
                    13 without parental consent, we will use such data only to communicate
                    with the child (or their parent/guardian) and inform them of the
                    inability to use the Services. Subsequently, we will delete the
                    child&rsquo;s Personal Data. If you suspect a child under 13 has
                    provided us with Personal Data, contact us at
                    Privacy@rapidorelief.com.
                </p>
                <br />

                <p>
                    For users aged 13 to the age of majority in their place of residence,
                    Services may be used only with parental consent or under parental
                    supervision. Parents or legal guardians using the Services on behalf
                    of a minor child must comply with the Agreement. Any information
                    provided while using the Services on behalf of a minor child will be
                    treated as Personal Data, as outlined herein.
                </p>
                <br />

                <p>
                    When using the Services on behalf of another person, irrespective of
                    age, you agree that we may contact you for any Service-related
                    communication or legally required notices. Additionally, you commit to
                    forwarding or sharing such communications with the person for whom you
                    are using the Services.
                </p>
                <br />

                <p>
                    How We Use Information That is Neither Personal Data nor PHI:<br />Information collected by Rapido Relief App that does not qualify as
                    Personal Data or Protected Health Information (PHI) may be utilized
                    for various purposes permitted by applicable law. This includes
                    understanding user demographics and improving the digital healthcare
                    experience. De-identified or aggregated data may be used for
                    analytical insights.
                </p>
                <br />

                <p>
                    Controlling Your Personal Data &amp; Notifications:<br /> If you are a registered user, you can manage specific Personal Data or
                    account details by logging in and accessing your account. To close
                    your account, contact us at Privacy@rapidorelief.com, and we will
                    endeavor to delete your account promptly. Note that certain
                    information may be retained in accordance with our internal data
                    retention policies. In the event of lost, stolen, or unauthorized use
                    of your account data, please promptly inform us.
                </p>
                <br />

                <p>
                    Exercising Your Rights:<br />To exercise your rights under the CCPA, VCDPA, or CPA, you must send a
                    request providing sufficient information for us to verify your
                    identity and describing your request in detail. Each request meeting
                    these criteria will be considered a &quot;Valid Request.&quot; You
                    don&rsquo;t need an account to submit a Valid Request.
                </p>
                <br />

                <p>
                    We will respond within the required legal timeframe and won&rsquo;t
                    charge a fee unless your request is deemed excessive, repetitive, or
                    manifestly unfounded. If a fee applies, we&rsquo;ll notify you before
                    completing your request.
                </p>
                <br />

                <p>
                    Submit a Valid Request using these methods:
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                        <li>For account holders, use the &ldquo;Data Privacy&rdquo; tab in
                            your account settings.</li>
                        <li>For non-account holders, submit the form at
                            https://www.rapidorelief.com/privacy-settings.</li>
                        <li>Opt-out through the &ldquo;Data Privacy&rdquo; tab or visit
                            https://www.rapidorelief.com/privacy-settings for sensitive
                            information, &ldquo;selling,&rdquo; &ldquo;sharing,&rdquo; or
                            targeted advertising opt-outs.</li>
                            <li>
                            For assistance or questions, call (000) 000-0000 or email Consumer-Privacy@rapidorelief.com.
                            </li>
                    </ul>
                </p>
                <br />

                <p>
                Changes to this Privacy Policy: <br />
                We may amend the Privacy Policy at our discretion and will notify you of changes by email or through a notice on our website homepage. The use of collected information is subject to the Privacy Policy in effect when the information is collected.
                </p>
                <br />

                <p>
                Contact Information: <br />
For questions or comments about this Privacy Policy, your Personal Data, and your rights, contact us at: <br />
Email: Privacy@rapidorelief.com
                </p>
            </div>
            <Subscribe />
            <Footer />
        </>
    );
};


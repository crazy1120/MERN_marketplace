import { Typography, Row, Col } from 'antd'

function Privacy() {
  return (
    <Typography component='div' style={{'height': '100vh', 'overflow': 'auto'}}>
        <Row type='flex' justify='center' style={{'margin': '20px'}}>
            <Col span={20}>
                <Typography.Title level={2}>
                    PRIVACY POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    Last updated: May 9, 2023
                </Typography.Paragraph>

                <Typography.Title level={3}>
                    AGREEMENT TO PRIVACY POLICY
                </Typography.Title>

                <Typography.Paragraph>
                    Thank you for choosing to be part of our community at Amplichat LLC (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our notice, or our practices with regards to your personal information, please contact us at contact@amplichat.com.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    When you visit our website <a href='https://amplichat.com' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>https://amplichat.com</a>, mobile application, Facebook application, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites or Apps and our services.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    This privacy notice applies to all information collected through our website (such as <a href='https://amplichat.com' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>https://amplichat.com</a>), mobile application, Facebook application, ("Apps"), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy notice as the "Services").
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Please read this privacy notice carefully as it will help you make informed decisions about sharing your personal information with us.
                </Typography.Paragraph>


                <Typography.Title level={3}>
                    TABLE OF CONTENTS
                </Typography.Title>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#1';
                    return false;
                    }}>
                    1. WHAT INFORMATION DO WE COLLECT?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#2';
                    return false;
                    }}>
                    2. HOW DO WE USE YOUR INFORMATION?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#3';
                    return false;
                    }}>
                    3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#4';
                    return false;
                    }}>
                    4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#5';
                    return false;
                    }}>
                    5. DO WE USE GOOGLE MAPS?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#6';
                    return false;
                    }}>
                    6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#7';
                    return false;
                    }}>
                    7. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#8';
                    return false;
                    }}>
                    8. HOW LONG DO WE KEEP YOUR INFORMATION?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#9';
                    return false;
                    }}>
                    9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#10';
                    return false;
                    }}>
                    10. DO WE COLLECT INFORMATION FROM MINORS?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#11';
                    return false;
                    }}>
                    11. WHAT ARE YOUR PRIVACY RIGHTS?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#12';
                    return false;
                    }}>
                    12. CONTROLS FOR DO-NOT-TRACK FEATURES
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#13';
                    return false;
                    }}>
                    13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </Typography>

                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#14';
                    return false;
                    }}>
                    14. DO WE MAKE UPDATES TO THIS POLICY?
                </Typography>
                {/*
                <Typography style={{'color': 'blue'}} onClick={() => {
                    document.location = '#15';
                    return false;
                    }}>
                    15. HOW CAN YOU CONTACT US ABOUT THIS POLICY?
                </Typography>
                */}

                <Typography.Title level={3} id='1'>
                    1. WHAT INFORMATION DO WE COLLECT?
                </Typography.Title>

                <Typography.Title level={4}>
                    Information automatically collected
                </Typography.Title>

                <Typography.Paragraph>
                    In Short: Some information — such as IP address and/or browser and device characteristics — is collected automatically when you visit our Services or Apps.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We automatically collect certain information when you visit, use or navigate the Services or Apps. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services or Apps and other technical information. This information is primarily needed to maintain the security and operation of our Services or Apps, and for our internal analytics and reporting purposes.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Like many businesses, we also collect information through cookies and similar technologies.
                </Typography.Paragraph>

                <Typography.Title level={4}>
                    Information collected through our Apps
                </Typography.Title>

                <Typography.Paragraph>
                    In Short: We may collect information regarding your geo-location, mobile device, push notifications, and Facebook permissions when you use our apps.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If you use our Apps, we may also collect the following information:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                    Geo-Location Information. We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our mobile application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device's settings.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, contacts, microphone, sms messages, social media accounts, storage, bluetooth, calendar, reminders, sensors, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Mobile Device Data. We may automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Push Notifications. We may request to send you push notifications regarding your account or the mobile application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Facebook Permissions. We by default access your <a href='https://www.facebook.com/about/privacy/' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>Facebook</a> basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the <a href='https://developers.facebook.com/docs/facebook-login/permissions' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>Facebook Permissions Reference</a> page.
                    </Typography.Paragraph>

                </Typography>


                <Typography.Title level={4} id='2'>
                    2. HOW DO WE USE YOUR INFORMATION?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We use personal information collected via our Services or Apps for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We use the information we collect or receive:
                </Typography.Paragraph>


                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                    To send you marketing and promotional communications.
                    We and/or our third party marketing partners may use the personal information you send to us for our marketing purposes,
                    if this is in accordance with your marketing preferences.
                    You can opt-out of our marketing emails at any time (see the "<Typography.Text style={{'color': 'blue'}} onClick={() => {
                        document.location = '#11';
                        return false;
                    }}>WHAT ARE YOUR PRIVACY RIGHTS</Typography.Text>" below).
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services or Apps.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Deliver targeted advertising to you. We may use your information to develop and display content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Request Feedback. We may use your information to request feedback and to contact you about your use of our Services or Apps.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To protect our Services. We may use your information as part of our efforts to keep our Services or Apps safe and secure (for example, for fraud monitoring and prevention).
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To enforce our terms, conditions and policies for Business Purposes, Legal Reasons and Contractual.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To deliver services to the user. We may use your information to provide you with the requested service.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    For other Business Purposes. We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services or Apps, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.
                    </Typography.Paragraph>

                </Typography>

                <Typography.Title level={4} id='3'>
                    3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We may process or share data based on the following legal basis:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                    Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                    </Typography.Paragraph>

                </Typography>

                    <Typography.Paragraph>
                    More specifically, we may need to process your data or share your personal information in the following situations:
                    </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                    Vendors, Consultants and Other Third-Party Service Providers. We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services or Apps, which will enable them to collect data about how you interact with the Services or Apps over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Third-Party Advertisers. We may use third-party advertising companies to serve ads when you visit the Services or Apps. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                    Other Users. When you share personal information (for example, by posting comments, contributions or other content to the Services or Apps) or otherwise interact with public areas of the Services or Apps, such personal information may be viewed by all users and may be publicly distributed outside the Services or Apps in perpetuity. If you interact with other users of our Services or Apps and register through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services or Apps, and view your profile.
                    </Typography.Paragraph>

                </Typography>

                <Typography.Title level={4} id='4'>
                    4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  We may use cookies and other tracking technologies to collect and store your information.
                </Typography.Paragraph>

                <Typography.Paragraph>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                </Typography.Paragraph>


                <Typography.Title level={4} id='5'>
                    5. DO WE USE GOOGLE MAPS?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  Yes, we use Google Maps for the purpose of providing better service.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    This website, mobile application, or Facebook application uses Google Maps APIs. You may find the Google Maps APIs Terms of Service <a href='https://cloud.google.com/maps-platform/terms/' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>here</a>. To better understand Google’s Privacy Policy, please refer to this <a href='https://policies.google.com/privacy' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>link</a>.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    By using our Maps API Implementation, you agree to be bound by Google’s Terms of Service. By using our implementation of the Google Maps APIs, you agree to allow us to gain access to information about you including personally identifiable information (such as usernames) and non-personally identifiable information (such as location). We will be collecting the following information:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                    location
                    </Typography.Paragraph>
                </Typography>

                <Typography.Paragraph>
                    For a full list of what we use information for, please see the previous section titled "<Typography.Text style={{'color': 'blue'}} onClick={() => {
                    document.location = '#2';
                    return false;
                    }}>HOW DO WE USE YOUR INFORMATION?</Typography.Text>" and “<Typography.Text style={{'color': 'blue'}} onClick={() => {
                    document.location = '#3';
                    return false;
                    }}>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</Typography.Text>” You agree to allow us to obtain or cache your location. You may revoke your consent at anytime.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    The Maps APIs that we use store and access cookies and other information on your devices. If you are a user currently in the European Economic Area (EU countries, Iceland, Liechtenstein and Norway), please take a look at our EU User Consent Policy.
                </Typography.Paragraph>


                <Typography.Title level={4} id='6'>
                    6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Our Services or Apps offer you the ability to register and login using your third party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, e-mail address, friends list, profile picture as well as other information you choose to make public. If you login using Facebook, we may also request access to other permissions related to your account, such as friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the Services or Apps. Please note that we do not control, and are not responsible for, other uses of your personal information by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.
                </Typography.Paragraph>


                <Typography.Title level={4} id='7'>
                    7. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our websites.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    The Services or Apps may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Services or Apps. You should review the policies of such third parties and contact them directly to respond to your questions.
                </Typography.Paragraph>


                <Typography.Title level={4} id='8'>
                    8. HOW LONG DO WE KEEP YOUR INFORMATION?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                </Typography.Paragraph>


                <Typography.Title level={4} id='9'>
                    9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  We aim to protect your personal information through a system of organizational and technical security measures.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services or Apps is at your own risk. You should only access the services within a secure environment.
                </Typography.Paragraph>


                <Typography.Title level={4} id='10'>
                    10. DO WE COLLECT INFORMATION FROM MINORS?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  We do not knowingly collect data from or market to children under 18 years of age.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We do not knowingly solicit data from or market to children under 18 years of age. By using the Services or Apps, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services or Apps. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at contact@amplichat.com.
                </Typography.Paragraph>


                <Typography.Title level={4} id='11'>
                    11. WHAT ARE YOUR PRIVACY RIGHTS?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    In some regions (like the European Economic Area), you have certain rights under applicable data protection laws.
                    These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the <Typography.Text style={{'color': 'blue'}} onClick={() => {
                    document.location = '#15';
                    return false;
                    }}>contact details</Typography.Text> provided below. We will consider and act upon any request in accordance with applicable data protection laws.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details <a href='https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>here</a> If you have questions or comments about your privacy rights, you may email us at contact@amplichat.com.
                </Typography.Paragraph>

                <Typography.Title level={4}>
                    Account Information
                </Typography.Title>

                <Typography.Paragraph>
                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                        Log into your account settings and update your user account.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        Contact us using the contact information provided.
                    </Typography.Paragraph>
                </Typography>

                <Typography.Paragraph>
                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services or Apps. To opt-out of interest-based advertising by advertisers on our Services or Apps visit <a href='https://optout.aboutads.info/?c=2&lang=EN' rel="noopener noreferrer" target='_blank' style={{'color': 'blue'}}>here</a>.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:
                </Typography.Paragraph>

                <Typography component='div' style={{'marginLeft': '40px'}}>
                    <Typography.Paragraph>
                        Note your preferences when you register an account with the site.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        Access your account settings and update preferences.
                    </Typography.Paragraph>

                    <Typography.Paragraph>
                        Contact us using the contact information provided.
                    </Typography.Paragraph>
                </Typography>

                <Typography.Title level={4} id='12'>
                    12. CONTROLS FOR DO-NOT-TRACK FEATURES
                </Typography.Title>

                <Typography.Paragraph>
                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                </Typography.Paragraph>


                <Typography.Title level={4} id='13'>
                    13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    If you are under 18 years of age, reside in California, and have a registered account with the Services or Apps, you have the right to request removal of unwanted data that you publicly post on the Services or Apps. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services or Apps, but please be aware that the data may not be completely or comprehensively removed from our systems.
                </Typography.Paragraph>


                <Typography.Title level={4} id='14'>
                    14. DO WE MAKE UPDATES TO THIS POLICY?
                </Typography.Title>

                <Typography.Paragraph>
                    In Short:  Yes, we will update this policy as necessary to stay compliant with relevant laws.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                </Typography.Paragraph>

            </Col>
        </Row>
    </Typography>
  )
}

export default Privacy

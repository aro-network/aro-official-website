'use client'
import AFooter from "../components/AFooter"
import AHeader from "../components/AHeader"

const Privacy = () => {



  return <div className="  bg-black   w-full h-full">

    <AHeader />
    <div className="w-container  mo:w-full mo:px-5 m-auto mo:m-0 md:w-full md:px-[30px]  select-none  px-10">
      <div className=" font-medium text-center mt-20 ">
        <div className=" text-2xl text-white">Privacy Policy</div>
        <span className=" text-xl text-white">
          Effective Date: {`08/12/2024`}
        </span>
      </div>
      <div className="   mt-20 font-normal text-white">
        <span className=" ">
          Welcome to ARO Network, managed and operated by ARO Labs Ltd. (“ARO,” “we,” “us,” or “our”). This Privacy Policy outlines our handling and protection of the personal information you provide when using our services, which include our website, web extension, dashboard application, desktop and mobile applications, and related hardware (collectively referred to as the “Services”).</span>
        <div className=" mt-2 ">This Privacy Policy is designed to help you understand how we collect, use, and safeguard your information and to assist you in making informed decisions when using our Services. By accessing or using our Services, you agree to this Privacy Policy.</div>
        <div className=" mt-2">
          <span className="title">1. Introduction</span><br />
          This document serves as the Privacy Policy for ARO, a platform enabling users to participate in a decentralized peer-to-peer networking ecosystem designed for optimized data handling and AI-driven functionalities. This policy covers all digital platforms and hardware provided under the ARO brand.
        </div>
        <div className=" mt-2">
          <span className="title">2. Consent from Users Outside the EEA, UK, Switzerland, and BVI</span><br />
          If you are not located in the European Economic Area (EEA), the United Kingdom (UK), Switzerland, or the British Virgin Islands (BVI), by using our Services, you consent to the collection, use, and disclosure of your personal information under the terms of this Privacy Policy. If you are located in the aforementioned regions, please refer to the additional provisions at the end of this document.
        </div>
        <div className=" mt-2">
          <span className="title">3. What is Personal Information?</span><br />
          Personal information is data that can be used to identify you as an individual. This includes, but is not limited to, your name, email address, postal address, phone number, and digital wallet address. We also collect technical data and usage information which, while non-identifiable on its own, may be considered personal information when combined with other data.
        </div>
        <div className=" mt-2">
          <span className="title">4. Information We Collect</span><br />
          We collect personal information in various ways:<br />
          {"\u00A0"}{"\u00A0"}•	Account Information: Such as your email address, username, and digital wallet address.<br />
          {"\u00A0"}{"\u00A0"}•	Technical Information: Including IP addresses, system configuration information, and other analytics.<br />
          {"\u00A0"}{"\u00A0"}•	Interactions with Our Services: Information about your interactions and transactions with our Services.
        </div>
        <div className=" mt-2">
          <span className="title">5. Use of Your Personal Information</span><br />
          We use the personal information we collect for various purposes:<br />
          {"\u00A0"}{"\u00A0"}•	To provide, operate, and improve the ARO Services.<br />
          {"\u00A0"}{"\u00A0"}•	To communicate with you, including sending updates and promotional materials.<br />
          {"\u00A0"}{"\u00A0"}•	To support and troubleshoot our Services, and to respond to your requests.
        </div>

        <div className=" mt-2">
          <span className="title">6. Promotional and Transactional Messages</span><br />
          We will send you promotional and transactional messages related to your account and the Services. You may opt out of receiving promotional messages by following the unsubscribe instructions provided in the communications.
        </div>

        <div className=" mt-2">
          <span className="title">7. Disclosure and Transfers of Personal Information</span><br />
          We may disclose your personal information to third parties in connection with the services they provide to us, such as hosting, data analytics, and customer service. We require that these parties agree to process such information based on our instructions and requirements consistent with this Privacy Policy.
        </div>
        <div className=" mt-2">
          <span className="title">8. Aggregated Data<br /></span>
          We may also share aggregated or de-identified information, which cannot reasonably be used to identify you, with partners or for public relations. For instance, we may share information publicly to show trends about the general use of our services.
        </div>
        <div className=" mt-2">
          <span className="title">9. Retention of Personal Information</span><br />
          We retain your personal information as long as necessary to provide the Services you have requested, or for other essential purposes such as complying with our legal obligations, resolving disputes, and enforcing our policies.
        </div>

        <div className=" mt-2">
          <span className="title">10. Security and Protection of Personal Information</span><br />
          We implement security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We regularly review our practices to ensure they comply with applicable security standards.
        </div>
        <div className=" mt-2">
          <span className="title">11. Your Rights Related to Your Personal Information</span><br />
          Depending on your location, you may have certain rights under data protection laws, including the right to access, correct, or delete your personal information maintained by ARO.
        </div>
        <div className=" mt-2">
          <span className="title">12. Consent; Withdrawal of Consent</span><br />
          You have the right to withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of processing based on consent before its withdrawal.
        </div>
        <div className=" mt-2">
          <span className="title">13. Links to Third-Party Resources</span><br />
          Our Services may include links to other websites or services that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.
        </div>
        <div className=" mt-2">
          <span className="title"> 14. Cookies</span><br />
          Our Services use cookies and similar tracking technologies to track activity on our Services and we hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </div>
        <div className=" mt-2">
          <span className="title"> 15. Changes to This Privacy Policy</span><br />
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “effective date” at the top of this policy.
        </div>
        <div className=" mt-2">
          <span className="title"> 16. Contact Information</span><br />
          If you have any questions about this Privacy Policy, please contact us at  <a href="mailto:contact@aro.network" className=" underline-offset-4 underline" >contact@aro.network</a>.
        </div>

        Additional Information for Users in the EEA, UK, Switzerland, or BVI
        This section provides additional information as required by the laws of the EEA, UK, Switzerland, and BVI. This includes specific rights regarding the processing of personal information and details about the transfers of personal information outside of these regions.
        Make sure to customize the placeholders and details to fit the specific operations and legal requirements of ARO before publishing.

      </div>
    </div>

    <AFooter />


  </div>

}

export default Privacy
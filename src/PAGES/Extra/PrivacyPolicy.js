import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
        <h2>Privacy Policy for FitGrocery</h2>
        <p>At Fitgrocery, we are committed to ensuring the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide to us.</p>
      </div>
      <div className='pgcont1'>
        <h4>Information We Collect:</h4>
<h3>
Personal Information:
</h3>
        <p>When you create an account or place an order, we collect personal information such as your name, email address, phone number, and delivery address.</p>
      </div>

      <div className='pgcont1'>

        <h3>Payment Information:</h3>
        <p>To process your orders, we securely collect and handle payment information. Please note that we do not store your payment details on our servers.</p>
      </div>

      <div className='pgcont1'>
        <h3>Browsing Information:</h3>
        <p>Like many websites, we may collect non-personal information such as your IP address, browser type, and device information to enhance your shopping experience and improve our website.</p>
      </div>

      <div className='pgcont1'>
        <h4>How We Use Your Information:</h4>
        <h3>Order Processing:</h3>
        <p>We use your personal and payment information to process your orders, arrange delivery, and provide you with the products and services you have requested.</p>
      </div>

      <div className='pgcont1'>
        <h3>Communication:</h3>
        <p>We may use your contact information to communicate with you about your orders, promotions, and updates related to our services. You can opt-out of promotional communications at any time.</p>
      </div>

      <div className='pgcont1'>
        <h3>Improving Our Services:</h3>
        <p>Your browsing information helps us analyze trends, track user activity, and improve our website's functionality and user experience.</p>
      </div>

      <div className='pgcont1'>
        <h3>Data Security:</h3>
        <p>We take the security of your information seriously. We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, and destruction.</p>
      </div>

      <div className='pgcont1'>
        <h3>Third-Party Disclosure:</h3>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties unless we provide you with advance notice. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
      </div>

      <div className='pgcont1'>
        <h3>Your Choices:</h3>
        <p>You have the right to review and update your personal information. If you wish to make changes or have any concerns about your privacy, please contact us at privacy@FitGrocery.com.</p>
      </div>

     

      
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default PrivacyPolicy
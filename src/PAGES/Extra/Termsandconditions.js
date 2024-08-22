import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const Termsandconditions = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        heading="Terms & Conditions"
      />
<div className='pgcont1'>
        <h3>Welcome to FitGrocery! Before you start shopping with us, please take a moment to read our Terms and Conditions. By using our website and services, you agree to comply with the following terms:</h3>
        
      </div>

      <div className='pgcont1'>
        <h3> Account Registration:</h3>
        <p>To make a purchase, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.</p>
      </div>
      <div className='pgcont1'>
        <h3> Order Placement:</h3>
        <p>By placing an order on our website, you are making an offer to purchase products subject to these Terms and Conditions. We reserve the right to refuse or cancel orders at our discretion.</p>
      </div>

      <div className='pgcont1'>

        <h3>Pricing and Payment:</h3>
        <p>All prices are listed in the currency specified on our website. We reserve the right to change prices at any time. Payment is due at the time of order placement. We accept various payment methods as indicated on our website.</p>
      </div>

      <div className='pgcont1'>
        <h3> Product Information:</h3>
        <p>While we strive to provide accurate product information, we do not warrant that product descriptions, images, or other content on our site are error-free. If you receive a product that does not match the description, please contact our customer service team for assistance.</p>
      </div>

      <div className='pgcont1'>
        <h3>Delivery:</h3>
        <p>Delivery times are estimated and may vary. We are not responsible for delays caused by circumstances beyond our control. You are responsible for providing accurate delivery information. If you are not available to receive the delivery, additional charges may apply.</p>
      </div>

      <div className='pgcont1'>
        <h3> Returns and Refunds:</h3>
        <p>Please refer to our Return Policy for information on returns and refunds.</p>
      </div>

      <div className='pgcont1'>
        <h3>Privacy:</h3>
        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
      </div>

      <div className='pgcont1'>
        <h3>Intellectual Property:</h3>
        <p>All content on our website, including logos, images, and text, is the property of [Your Grocery Store Name] and is protected by copyright and other intellectual property laws.</p>
      </div>

      <div className='pgcont1'>
        <h3> Limitation of Liability:</h3>
        <p>We are not liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of our website or products.</p>
      </div>

      <div className='pgcont1'>
        <h3> Changes to Terms:</h3>
        <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice. The latest version will be posted on our website, and your continued use of our services constitutes acceptance of the updated terms.
If you have any questions or concerns regarding these Terms and Conditions, please contact us at terms@FitGrocery.com.</p>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Termsandconditions
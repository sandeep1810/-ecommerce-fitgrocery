import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="About Us"
        bannerimage= 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        />
        <div className='pgleft pgcommon'>
            {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' /> */}

            <div>
                {/* <h1>Our Story</h1> */}
                <p><h3>Welcome to FitGrocery,</h3> your one-stop destination for fresh, high-quality groceries delivered right to your doorstep. At FitGrocery, we believe in making your grocery shopping experience convenient, enjoyable, and stress-free.</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' /> */}

            <div>
                <h3>Our Commitment</h3>
                <p>
                   FitGrocery is committed to providing you with a diverse selection of the finest products to meet all your culinary needs. From farm-fresh produce to pantry staples, we source our items from trusted suppliers to ensure that you receive only the best.</p>

            </div>
        </div>
        <div className='pgleft pgcommon'>
            {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' /> */}

            <div>
                <h3>Quality You Can Trust</h3>
                <p>
We understand the importance of quality when it comes to the food you bring into your home. That's why we go the extra mile to select products that meet the highest standards. Our team of experts carefully inspects and approves every item, ensuring that you receive fresh, delicious, and wholesome products with every order.</p>
            </div>
        </div>

        <div className='pgleft pgcommon'>
            {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' /> */}

            <div>
                {/* <h1>Our Story</h1> */}
                <h3>Convenience Redefined</h3>
                <p>
Say goodbye to long lines and crowded aisles. FitGrocery brings the grocery store to your fingertips, allowing you to shop from the comfort of your home. With our user-friendly website and mobile app, you can browse our extensive product range, place your order, and have your groceries delivered straight to your door at a time that suits you.</p>

            </div>
        </div>

        <div className='pgright pgcommon'>
            {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' /> */}

            <div>
                <h3>Locally Sourced</h3>
                <p>
                Locally Sourced:
                Supporting local farmers and producers is at the heart of our mission. We take pride in offering a wide range of locally sourced products, helping to strengthen our community and promote sustainability.At FitGrocery, we prioritize your satisfaction. Our dedicated customer service team is always ready to assist you with any questions, concerns, or special requests. Your happiness is our top priority, and we strive to exceed your expectations with every interaction.</p>

            </div>
        </div>

        <div className='pgright pgcommon'>
            {/* <img src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='noimg' /> */}

            <div>
            <h3><h4>Join the FitGrocery family and experience a new era of grocery shopping-one that is convenient, reliable, and focused on delivering the best for you and your loved ones. Thank you for choosing FitGrocery as your trusted grocery partner.</h4></h3>
            </div>
        </div>
       

        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About
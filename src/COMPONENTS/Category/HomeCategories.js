import React from 'react'
import './HomeCategories.css'
import imgad1 from '../../ASSETS/Images/HomeCategoriesAd/Ad3.jpg'
import imgad2 from '../../ASSETS/Images/HomeCategoriesAd/Ad4.jpg'
import imgad3 from '../../ASSETS/Images/HomeCategoriesAd/Ad5.jpg'
import imgad4 from '../../ASSETS/Images/HomeCategoriesAd/Ad6.jpg'
const HomeCategories = () => {
  return (
    <div className='homecategories'>
        <div className='container'><img src={imgad1} alt='img1'></img>
        <div className='content'>
            {/* <h1>
                Vegetables at your doorstep</h1>
                <p> Shop Vegetables Now </p> */}
                </div>
            </div>
        <div className='container'><img src={imgad2} alt='img2'></img>
        <div className='content'>
            {/* <h1>
                Vegetables at your doorstep</h1>
                <p> Shop Vegetables Now </p> */}
                </div>
            </div>
        <div className='container'><img src={imgad3} alt='img3'></img>
        <div className='content'>
            {/* <h1>
                Vegetables at your doorstep</h1>
                <p> Shop Vegetables Now </p> */}
                </div>
             </div>
        <div className='container'><img src={imgad4} alt='img4'></img>
        <div className='content'>
            {/* <h1>
                Vegetables at your doorstep</h1>
                <p> Shop Vegetables Now </p> */}
                </div>
            </div>
    </div>
  )
}

export default HomeCategories
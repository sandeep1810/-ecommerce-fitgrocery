import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
const BannerSlider = () => {
    const data =[
        {
            id: 1,
            image: 'https://media.istockphoto.com/id/1203599952/photo/assortment-of-fresh-organic-fruits-and-vegetables-in-rainbow-colors.webp?b=1&s=170667a&w=0&k=20&c=92WdbVXN_471z4QQdrw5oaqTQW3pBu8atfA7MVPu7fo=',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'We deliver fresh vegetables & fruits at your doorstep',
            button: 'https://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Daily routine products at your doorstep',
            description: 'We deliver Daily routine products at your doorstep',
            button: 'https://www.google.com'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 1,
        sliderToScroll: 1,
    };

  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item=>{
                    return (
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='noimg'/>
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>Shop More</button>
                            </div>
                        </div>
                    )
                }

                )
            }
        </Slider>
    </div>
  )
}

export default BannerSlider
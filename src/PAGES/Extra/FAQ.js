import React, { useEffect, useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [activesection, setactivesection] = useState(0)


  const faq = [
    {
      id: 1,
      question: 'Do I need to register before shopping on FitGrocery?',
      answer: 'Yes, you do need to register before shopping with us. However, you can browse the website without registration. You are required to login or register while you checkout.'
    },
    {
      id: 2,
      question: 'How will you ensure the freshness of products?',
      answer: 'We ensure that all our products are hygienically and carefully handled and maintain them in the correct temperature & packaging.'
    },
    {
      id: 3,
      question: 'How are the fruits and vegetables weighed?',
      answer: 'All fruits and vegetables vary in size and weight. You can choose any size/weight available on the website. While you shop, we will show an estimated weight and price. At the time of processing, we pack the closest size/weight and charge you for the actual weight of each item. E.g. If you order 1 kg of apples, we will try to pack exactly 1 kg or the weight closest to 1 kg. If the actual weight is 987 gm, we will bill you for 987 gm and not 1 kg.'
    },
    {
      id: 4,
      question: 'Can I change the delivery address of my order?',
      answer: 'At this time, we do not offer this option. You can, however, cancel your order and reorder from a different locality.'
    },
    {
      id: 5,
      question: 'What if I have a complaint regarding my order?',
      answer: 'Please reach out to us via the “Customer Support” section on the app/web. Our customer care team is more than happy to help.'
    }
  ]

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        heading="FAQs"
        bannerimage='https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
      />
      {/* <p>faq</p> */}

      <div className='faqcontainer'>
        {/* {
          activesection === 1 ?
            <div className='faq'>
              <div className='faqhead'>
                <h1>What is Lorem Ipsum?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setactivesection(0)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='faqbody'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            :
            <div className='faq'>
              <div className='faqhead'>
                <h1>What is Lorem Ipsum?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setactivesection(1)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
        } */}


        {
          faq.map((item, index) => {
            return (
              activesection === item.id ?
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>
                      {item.question}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(0)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='faqbody'>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
                :
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>{item.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(item.id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                  </div>
                </div>
            )
          })
        }


      </div>


      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default FAQ
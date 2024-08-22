import React, { useEffect } from 'react'
import imgcsb1 from '../../ASSETS/Images/CategorySidebarimg/category2.jpg'
import imgcsb2 from '../../ASSETS/Images/CategorySidebarimg/category3.png'
import imgcsb3 from '../../ASSETS/Images/CategorySidebarimg/category4.jpg'
import imgcsb4 from '../../ASSETS/Images/CategorySidebarimg/category1.png'
import imgcsb5 from '../../ASSETS/Images/CategorySidebarimg/category5.jpg'
import './CategorySidebar.css'
const CategorySidebar = (props) => {

  const data = [
   {
    id: 1,
    categoryimage : imgcsb1,
    categoryname : 'Fresh Vegetables'
  }, 
  {
    id: 2,
    categoryimage : imgcsb2,
    categoryname : 'Fresh Fruits'
  }, 
  {
    id: 3,
    categoryimage : imgcsb3,
    categoryname : 'Snacks'
  }, 
  {
    id: 4,
    categoryimage : imgcsb4,
    categoryname : 'Cooking Masala'
  }, 
  {
    id: 5,
    categoryimage : imgcsb5,
    categoryname : 'Other Items'
  }, 
  
  ]
  
  return (
    <div className='categorysidebar'>
      {
        data.map((item) => {
          return (
            <div className='category' onClick={()=> props.setCategory(item.categoryname)}>

              <img src={item.categoryimage}
              alt='categoryimage'/>
              <h3>{item.categoryname}</h3>
              </div>
          )
       } )
       }
      </div>
  )
}

export default CategorySidebar
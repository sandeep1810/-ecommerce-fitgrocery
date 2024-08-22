import React, { useState } from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product_Sidebar.css'

const Product_Sidebar = () => {
  const [category, setCategory] = useState('All');
  return (
    <div className='product_sidebar'>
        <CategorySidebar  setCategory={setCategory}/>
        <AllProduct category={category}/>
    </div>
  )
}

export default Product_Sidebar
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import imgv1 from '../../ASSETS/Images/Vegetables/veg1.png'
import imgv2 from '../../ASSETS/Images/Vegetables/veg2.jpg'
import imgv3 from '../../ASSETS/Images/Vegetables/veg3.jpg'
import imgv4 from '../../ASSETS/Images/Vegetables/veg4.jpg'
import imgv5 from '../../ASSETS/Images/Vegetables/veg5.jpg'
import imgv6 from '../../ASSETS/Images/Vegetables/veg6.jpg'
import imgv7 from '../../ASSETS/Images/Vegetables/veg7.jpg'
import imgv8 from '../../ASSETS/Images/Vegetables/veg8.jpg'

import imgf1 from '../../ASSETS/Images/Fruits/Frt1.jpg'
import imgf2 from '../../ASSETS/Images/Fruits/Frt2.jpg'
import imgf3 from '../../ASSETS/Images/Fruits/Frt3.jpg'
import imgf4 from '../../ASSETS/Images/Fruits/Frt4.jpg'
import imgf5 from '../../ASSETS/Images/Fruits/Frt5.jpg'
import imgf6 from '../../ASSETS/Images/Fruits/Frt6.jpg'
import imgf7 from '../../ASSETS/Images/Fruits/Frt7.jpg'
import imgf8 from '../../ASSETS/Images/Fruits/Frt8.jpg'

import img1 from '../../ASSETS/Moreimg/Rel1.jpg'
import img2 from '../../ASSETS/Moreimg/Rel2.jpg'
import img3 from '../../ASSETS/Moreimg/Rel3.jpg'
import img4 from '../../ASSETS/Moreimg/Rel4.jpg'
import img5 from '../../ASSETS/Moreimg/Rel5.jpg'
import img6 from '../../ASSETS/Moreimg/Rel6.jpg'
import img7 from '../../ASSETS/Moreimg/Rel7.jpg'
import img8 from '../../ASSETS/Moreimg/Rel8.jpg'
import img9 from '../../ASSETS/Moreimg/Rel9.jpg'
import img10 from '../../ASSETS/Moreimg/Rel10.jpg'
import img11 from '../../ASSETS/Moreimg/Rel11.jpg'
import img12 from '../../ASSETS/Moreimg/Rel12.jpg'

import im1 from '../../ASSETS/Exploreimg/Exp1.jpg'
import im2 from '../../ASSETS/Exploreimg/Exp2.jpg'
import im3 from '../../ASSETS/Exploreimg/Exp3.jpg'
import im4 from '../../ASSETS/Exploreimg/Exp4.jpg'
import im5 from '../../ASSETS/Exploreimg/Exp5.jpg'
import im6 from '../../ASSETS/Exploreimg/Exp6.jpg'
import im7 from '../../ASSETS/Exploreimg/Exp7.jpg'
import im8 from '../../ASSETS/Exploreimg/Exp8.jpg'
import im9 from '../../ASSETS/Exploreimg/Exp9.jpg'
import im10 from '../../ASSETS/Exploreimg/Exp10.jpg'
import im11 from '../../ASSETS/Exploreimg/Exp11.jpg'
import im12 from '../../ASSETS/Exploreimg/Exp12.jpg'
import im13 from '../../ASSETS/Exploreimg/Exp13.jpg'
import im14 from '../../ASSETS/Exploreimg/Exp14.jpg'
import im15 from '../../ASSETS/Exploreimg/Exp15.jpg'
import im16 from '../../ASSETS/Exploreimg/Exp16.jpg'
import im17 from '../../ASSETS/Exploreimg/Exp17.jpg'
import im18 from '../../ASSETS/Exploreimg/Exp18.jpg'
import im19 from '../../ASSETS/Exploreimg/Exp19.jpg'
import im20 from '../../ASSETS/Exploreimg/Exp20.jpg'
import './AllProduct.css'
const AllProduct = (props) => {
   
    const products = [
        {      id: 1,
            "ProductId": 1,
            "ProductName": "Cauliflower(Per Kg)",
            "ProductDescription":
            "Cauliflower can be enjoyed raw or cooked. Raw cauliflower makes a great snack when dipped in hummus or another healthy vegetable dip. Your favourite pasta dish can be quickly upgraded to a healthier alternative with the addition of fresh cauliflower. Cauliflower is also delicious when roasted, steamed, or sauteed with your favourite spices. Try adding some grilled bread slices to the top for even more awesome flavours! So, go ahead, buy Cauliflower 1 pc (Approx 600 g - 1000 g) online now!",
            "ProductImage": [
                {
                    
                    image: imgv1
                }
                
            ],
            "ProductCode": "P1",
            "ProductCategory": "Fresh Vegetables",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 70,
            "SalesPrice": 50,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 10,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 15,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews" : [
                {
                    "ReviewId": 1,
                    "Name": "Sandeep Kumhar",
                    "Email": "",
                    "Rating": 5,
                    "Date": "18-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Rahul Saini",
                    "Email": "",
                    "Rating": 4,
                    "Date": "10-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "15-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                }
                
            ]
  },
        {      id: 2,
            "ProductId": 2,
            "ProductName": "Lauki (Bottle Gourd)(Per Kg)",
            "ProductDescription":
            "The bottle gourd is a vegetable native to India and is cultivated in other Asian countries. Due to its ability to grow almost anywhere, it is an important food source. Bottle Gourd is used in the preparation of various curries in Indian cuisine. The bottle gourds are chopped into pieces and added in curries to savour along with hot rice or rotis. Bottle Gourd is also prepared as chutney to consume with rice, roti or sometimes with dosas. So, go ahead, buy Lauki (Bottle Gourd) 1 kg online now!",
            "ProductImage": [
                {
                    
                    image: imgv2
                }
                
            ],
            "ProductCode": "P1",
            "ProductCategory": "Fresh Vegetables",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 60,
            "SalesPrice": 50,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 10,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 15,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews" : [
                {
                    "ReviewId": 1,
                    "Name": "Sandeep Kumhar",
                    "Email": "",
                    "Rating": 5,
                    "Date": "18-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Rahul Saini",
                    "Email": "",
                    "Rating": 4,
                    "Date": "10-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "15-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                }
                
            ]
 },
        {      id: 3,
            "ProductId": 3,
            "ProductName": "Onion(Per Kg)",
            "ProductDescription":
            "The beauty of an Onion is that it can go just about anywhere. Cut it into thin slices to top off your favourite burger or hot dog, or chop it into little cubes to bring out the sweetness in curry dishes. Chopped Onions are perfect for fish dishes, quiche, stews and chili. Onions can be roasted whole until tender and then chopped, or caramelized by slowly cooking them in butter for a delicious treat for a delicious treat. They are also delicious when dipped in batter and deep-fried! So, go ahead, buy Onion 1 kg online now!",
            "ProductImage": [
                {
                    
                    image: imgv3
                }
                
            ],
            "ProductCode": "P1",
            "ProductCategory": "Fresh Vegetables",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 80,
            "SalesPrice": 60,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 10,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 15,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews" : [
                {
                    "ReviewId": 1,
                    "Name": "Sandeep Kumhar",
                    "Email": "",
                    "Rating": 5,
                    "Date": "18-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Rahul Saini",
                    "Email": "",
                    "Rating": 4,
                    "Date": "10-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "15-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                }
                
            ]
 },
        {      id: 4,
            "ProductId": 4,
            "ProductName": "Potato(Per Kg)",
            "ProductDescription":
            "Potato is a root vegetable and the most versatile of all. It is widely used across Indian kitchens paired with numerous other vegetables for preparation of several delicacies. Be it Brinjal, Cauliflower, Tomato, Onion or be it Soyabean Chunks or the Spinach clan- Potatoes goes with all for delicious cuisines. Buy Potato per kg online now.",
            "ProductImage": [
                {
                    
                    image: imgv4
                }
               
            ],
            "ProductCode": "P1",
            "ProductCategory": "Fresh Vegetables",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 50,
            "SalesPrice": 50,
            "ProductDiscount": 50,
            "ProductDiscountType": "Percentage",
            "ProductTax": 10,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 10,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews" : [
                {
                    "ReviewId": 1,
                    "Name": "Sandeep Kumhar",
                    "Email": "",
                    "Rating": 5,
                    "Date": "18-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Rahul Saini",
                    "Email": "",
                    "Rating": 4,
                    "Date": "10-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "15-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                }
                
            ]
},
        {      id: 5,
            "ProductId": 5,
            "ProductName": "Tomato(Per Kg)",
            "ProductDescription":
            "Fresh, and delicious tomatoes are a summertime favourite. Tomatoes are perfect for sauces and salsas, or try marinating them in herbs and olive oil for an easy appetizer. Enjoy a delicious cup of tomato soup on a lazy afternoon or simply use it as a pizza topping on an exciting evening watching your favourite sports. So, go ahead, buy Tomato online now!",
            "ProductImage": [
                {
                    
                    image: imgv5
                }
                
            ],
            "ProductCode": "P1",
            "ProductCategory": "Fresh Vegetables",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 60,
            "SalesPrice": 30,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 10,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 10,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews" : [
                {
                    "ReviewId": 1,
                    "Name": "Sandeep Kumhar",
                    "Email": "",
                    "Rating": 5,
                    "Date": "18-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Rahul Saini",
                    "Email": "",
                    "Rating": 4,
                    "Date": "10-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "15-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                }
                
            ]
 },
        {      id: 6,
            "ProductId": 6,
            "ProductName": "Green Capsicum(Per Kg)",
            "ProductDescription":
            "Green Capsicums come in different shapes and sizes to make it easy for you to add vibrant colour and sweet taste wherever you want to. Green Capsicums add a sweet taste and delicious flavour to your favourite dishes. You can cut them into wedges to eat fresh, dice them to mix into dishes, or leave them halved so you can stuff them and bake them. They can be roasted and peeled, stuffed and baked, added to soups and stews, or pickled like pimentos. So, go ahead, buy Green Capsicum 500 g online now!",
            "ProductImage": [
                {
                    
                    image: imgv6
                }
          ],
            "ProductCode": "P1",
            "ProductCategory": "Fresh Vegetables",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 100,
            "SalesPrice": 70,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 10,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 15,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews" : [
                {
                    "ReviewId": 1,
                    "Name": "Sandeep Kumhar",
                    "Email": "",
                    "Rating": 5,
                    "Date": "18-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Rahul Saini",
                    "Email": "",
                    "Rating": 4,
                    "Date": "10-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "15-11-2023",
                    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                }
                
            ]
 },
 {             id: 7,
    "ProductId": 7,
    "ProductName": "Carrot(Per Kg)",
    "ProductDescription":
    "Carrots are a great addition to soups and stews, appetizers and hors d'oeuvres, side dishes and salads. They can be roasted in the oven or boiled on the stove top. Try using carrots in place of potato slices in soup, for a lower-carbohydrate meal. They can also be used in place of pasta, in casseroles, and even shredded and added to homemade breads when substituting them for grains is called for. So, go ahead, buy Carrot Orange 500 g online now!",
    "ProductImage": [
        {
            
            image: imgv7
        }
        
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Vegetables",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 60,
    "ProductDiscount": 30,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 15,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{       id: 8,
    "ProductId": 8,
    "ProductName": "Brinjal(Began)(Per Kg)",
    "ProductDescription":
    "Brinjal is a terrific vegetable to bring into your weekly cooking rotation. The bold flavour of Brinjal makes it a great choice for main dishes, side dishes, salads and even desserts. When grilled, Brinjal has a firm, satisfying texture, making it a popular substitute for meat in vegetarian dishes. Cut it up raw and toss it into every day stir-fries or stick it under the broiler with other vegetables to roast or grill. So, go ahead, buy Brinjal Black Big 500 g online now!",
    "ProductImage": [
        {
            
            image: imgv8
        }
       
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Vegetables",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 80,
    "SalesPrice": 70,
    "ProductDiscount": 30,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{      id: 9,
    "ProductId": 9,
    "ProductName": "Pomegranate(Per Kg)",
    "ProductDescription":
    "Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
    "ProductImage": [
        {
            
            image: imgf1
        }
       
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Fruits",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 120,
    "SalesPrice": 80,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 12,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 15,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{     id: 10,
    "ProductId": 10,
    "ProductName": "Apple(Per Kg)",
    "ProductDescription":
    "Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
    "ProductImage": [
        {
            
            image: imgf2
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Fruits",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 90,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 12,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 11,
    "ProductId": 11,
    "ProductName": "Banana(Per Kg)",
    "ProductDescription":
    "Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
    "ProductImage": [
        {
            
            image: imgf3
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Fruits",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 70,
    "ProductDiscount": 30,
    "ProductDiscountType": "Percentage",
    "ProductTax": 12,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{   id: 12,
    "ProductId": 12,
    "ProductName": "Kiwi(Per Kg)",
    "ProductDescription":
    "Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
    "ProductImage": [
        {
            
            image: imgf4
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Fruits",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 120,
    "SalesPrice": 90,
    "ProductDiscount": 5,
    "ProductDiscountType": "Percentage",
    "ProductTax": 12,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 15,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{   id: 13,
    "ProductId": 13,
    "ProductName": "Orange(Per Kg)",
    "ProductDescription":
    "Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
    "ProductImage": [
        {
            
            image: imgf5
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Fruits",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 70,
    "SalesPrice": 65,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 12,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{  id: 14,
    "ProductId": 14,
    "ProductName": "Guava(Per Kg)",
    "ProductDescription":
    "Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
    "ProductImage": [
        {
            
            image: imgf6
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Fresh Fruits",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 70,
    "ProductDiscount": 30,
    "ProductDiscountType": "Percentage",
    "ProductTax": 12,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 15,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 15,
"ProductId": 15,
"ProductName": "Papaya(Per Kg)",
"ProductDescription":
"Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
"ProductImage": [
{
    
    image: imgf7
}
],
"ProductCode": "P1",
"ProductCategory": "Fresh Fruits",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 80,
"SalesPrice": 70,
"ProductDiscount": 5,
"ProductDiscountType": "Percentage",
"ProductTax": 12,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 10,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{id: 16,
"ProductId": 16,
"ProductName": "Watermelon(Per Kg)",
"ProductDescription":
"Discover a world of flavor and nutrition with our exquisite selection of handpicked fruits. At FitGrocery, we take pride in offering the finest, farm-fresh fruits that are not only delicious but also packed with essential vitamins and nutrients. Each piece is carefully selected to ensure you experience the peak of freshness and flavor.",
"ProductImage": [
{
    
    image: imgf8
}
],
"ProductCode": "P1",
"ProductCategory": "Fresh Fruits",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 100,
"SalesPrice": 70,
"ProductDiscount": 30,
"ProductDiscountType": "Percentage",
"ProductTax": 12,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 15,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{    id: 17,
    "ProductId": 17,
    "ProductName": "Saras ghee",
    "ProductDescription":
    "Saras Cow ghee is made from 100% cow's milk.It Adds a distinctive taste to the food. It is Rich in taste and aroma Can be used for stir-frying, tempering, etc.",
    "ProductImage": [
        {
            
            image: img1
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 800,
    "SalesPrice": 760,
    "ProductDiscount": 5,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 12,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 18,
    "ProductId": 18,
    "ProductName": "Everest Turmeric Powder",
    "ProductDescription":
    "Turmeric or Haldi is an essential ingredient in Indian cuisines. The Everest Turmeric Powder is not only used for its flavour and aroma but also for its health benefits. It has antiseptic qualities as well as properties of flavouring agent and is also a natural beauty aid. It gives musky flavour and yellow colour to curries. Buy this product online today.",
    "ProductImage": [
        {
            
            image: img2
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 70,
    "SalesPrice": 55,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 12,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{   id: 19,
    "ProductId": 19,
    "ProductName": "Lal mirch(MDH)",
    "ProductDescription":
    "Chilli powder is prepared from the dried red chillies that are used as a spice to add pungency and flavour to dishes. It can set your taste buds on fire. Add a little Catch Red Chilli Powder to enhance the spice quotient in your meal. Buy this product online today.",
    "ProductImage": [
        {
            
            image: img3
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 80,
    "SalesPrice": 70,
    "ProductDiscount": 12,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 12,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 20,
    "ProductId": 20,
    "ProductName": "Tata Salt 2 kg",
    "ProductDescription":
    "Tata Salt, the refined and very much edible salt is helpful for your digestion. This is safe to be consumed even for the heart and diabetic patients, as it is exactly composed and hygienic. Buy Tata Salt online now!",
    "ProductImage": [
        {
            
            image: img4
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 60,
    "SalesPrice": 50,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 21,
    "ProductId": 21,
    "ProductName": "India Gate Basmati Rice 1 kg",
    "ProductDescription":
    "India Gate Basmati Rice is everyday Rice that makes each meal memorable. It is ideal for people who like to include Rice in their daily meal consumption. Aromatic, flavorful, and defined by its distinctly long and slender grains, India Gate  Basmati Rice turns every meal into comfort food. No matter what you’re in the mood for, India Gate Rice leaves you feeling satisfied and nourished. Buy India Gate Basmati Rice online today.",
    "ProductImage": [
        {
            
            image: img5
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 150,
    "SalesPrice": 120,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 12,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{   id: 22,
    "ProductId": 22,
    "ProductName": "Krishna Ghee 1kg",
    "ProductDescription":
    "Krishna Cow ghee is made from 100% cow's milk.It Adds a distinctive taste to the food. It is Rich in taste and aroma Can be used for stir-frying, tempering, etc.",
    "ProductImage": [
        {
            
            image: img6
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 780,
    "SalesPrice": 560,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 12,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 23,
    "ProductId": 23,
    "ProductName": "Aashirvaad Superior MP Whole Wheat Atta 10 kg",
    "ProductDescription":
    "Aashirvaad Superior MP Whole Wheat Atta provides goodness of taste in every bite. Also, it has a sweet and aromatic taste that works together to give you fuller and softer rotis, every single time. Buy Aashirvaad Superior MP Whole Wheat Atta online now!",
    "ProductImage": [
        {
            
            image: img7
        }
    ],

    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 550,
    "SalesPrice": 490,
    "ProductDiscount": 11,
    "ProductDiscountType": "Percentage",
    "ProductTax": 6,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 7,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{       id: 24,
    "ProductId": 24,
    "ProductName": "Kissan Fresh Tomato Ketchup 1 kg",
    "ProductDescription":
    "Kissan Fresh Tomato Ketchup - this one's definitely a winner when it comes to cajoling your kids into eating their food. Its remarkable flavour comes from the 100% real juicy tomatoes that have gone in making it. It's an assured hero for all the snacks, be it samosas, pakoras, noodles or plain roti roll a perfect ally for making wholesome and yummy food. So go ahead, buy Kissan Fresh Tomato Ketchup online today!",
    "ProductImage": [
        {
            
            image: img8
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 150,
    "SalesPrice": 110,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 25,
    "ProductId": 25,
    "ProductName": "Vedaka Peanut Oil",
    "ProductDescription":
    "The taste of Good Life Refined Peanut Oil improves the quality of food and is healthy for making Indian dishes. It is suitable to be used in salad dressings, baked food and sauces. Peanut oil mixes well with oils, making it a good ingredient for baked goods. A must-have product in the kitchen. Buy Good Life Refined Peanut Oil now!",
    "ProductImage": [
        {
            
            image: img9
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 700,
    "SalesPrice": 640,
    "ProductDiscount": 8,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{   id: 26,
    "ProductId": 26,
    "ProductName": "Disano Macaroni Pasta 500gm",
    "ProductDescription":
    "Disano Macaroni Pasta is made from high-quality durum wheat which makes it exceptionally healthy and nutritious. This pasta is perfect for any time snacking when hunger kicks in. Relish this pasta with your favourite choice of sauce, veggies and herbs that tickles your taste buds. Go ahead, buy Disano Macaroni Pasta online today!",
    "ProductImage": [
        {
            
            image: img10
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 80,
    "ProductDiscount": 20,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{   id: 27,
    "ProductId": 27,
    "ProductName": "Disano Honey 250gm",
    "ProductDescription":
    "Honey was almost the only source of sugar available to the ancient and was valued for its medicinal benefits. Honey is one of the most important source of natural sweetness and so many health benefits too, so let us taste sweetness of the Nature by “Disano” pune honey.",
    "ProductImage": [
        {
            
            image: img11
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Cooking Masala",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 150,
    "SalesPrice": 140,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 12,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{    id: 28,
    "ProductId": 28,
    "ProductName": "Disano OATS",
    "ProductDescription":
    "Start your morning with a wholesome bowl of Quaker Oats - the perfect breakfast porridge for the whole family. Quaker Oats are made from 100 % wholegrain oats, a source of protein and dietary fibre. It helps reduce the risk of high blood pressure and cholesterol. It is easy to prepare and can also be used as a healthier alternative in several recipes be rest assured, there will be no compromise on taste. So go ahead, buy Quaker Oats online today!",
    "ProductImage": [
        {
            
            image: img12
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 400,
    "SalesPrice": 370,
    "ProductDiscount": 7,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 11,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 29,
    "ProductId": 29,
    "ProductName": "Maggi 2-Minute Masala Noodles 70gm",
    "ProductDescription":
    "Maggi 2-Minutes Noodles have been a classic Indian snack for a good few decades now. Nestle brings you another delicious instant food product - Maggi 2-Minute Masala Noodles! These Maggi noodles offer you the delicious masala flavour that will leave you wanting for more. It is not just loved by young ones but adults too. For every busy day or lazy evening, these noodles are easy to make and are perfect for those untimely hunger pangs. They are made with all-natural ingredients and offers you a lip-smacking taste as they are loaded with authentic flavours. So go ahead, buy Maggi 2-Minute Masala Noodle online today!.",
    "ProductImage": [
        {
            
            image: im1
        },
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 25,
    "SalesPrice": 16,
    "ProductDiscount": 9,
    "ProductDiscountType": "Percentage",
    "ProductTax": 6,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 8,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 30,
    "ProductId": 30,
    "ProductName": "Bajaj Almond Hair Oil 95 ml",
    "ProductDescription":
    "Now, give your hair care routine a twist of health and nourishment with Bajaj Almond Drops Non Sticky Hair Oil. It gives your hair the much-needed nourishment and complete protection from hair damage, split ends and breakage. So what are you waiting for? Buy the product online at the best rate, right here!",
    "ProductImage": [
        {
            
            image: im2
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 90,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 31,
    "ProductId": 31,
    "ProductName": "Britannia Good Day Butter Cookies(Buy 4 Get 1)",
    "ProductDescription":
    "Britannia Good Day Butter Cookies are buttery flavoured cookies that satisfy your cravings between meals. Crunchy and crispy, the rich butter smoothly melts in your mouth giving a delicious taste. Britannia biscuits, cookies, cakes and rusk are a perfect companion for your tea. Believing in delivering fresh and delicious products, Britannia India manufactures some of India's favourite brands like 50-50, Tiger, NutriChoice, Bourbon, Milk Bikis and Marie Gold. Buy this product online now!",
    "ProductImage": [
        {
            
            image: im3
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 90,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 8,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 32,
    "ProductId": 32,
    "ProductName": "Colgate Strong Pack 500g",
    "ProductDescription":
    "Disclaimer- Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary. Please read the label, directions and warnings carefully before use..",
    "ProductImage": [
        {
            
            image: im4
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 400,
    "SalesPrice": 380,
    "ProductDiscount": 5,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 33,
    "ProductId": 33,
    "ProductName": "Dettol Original Liquid Handwash 200 ml",
    "ProductDescription":
    "Personal hygiene plays a critical role in preventing the spread of illness and infection. Dettol Original Liquid Handwash with its unique formulation helps you fight harmful bacteria and provides protection against germs. It is infused with a scent that makes it pleasant to use. So what are you waiting for? Buy the product online at the best rate, right here!",
    "ProductImage": [
        {
            
            image: im5
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 120,
    "SalesPrice": 90,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 8,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 34,
    "ProductId": 34,
    "ProductName": "Surf Excel Easy Wash Detergent Powder 1 kg",
    "ProductDescription":
    "Keep clothes looking fresh and clean with Surf Excel Easy Wash Detergent Powder that ensures tough stain removal from your clothes. This detergent powder is suitable for both your whites and colored clothes. It removes dirt from clothes, thereby removing dullness from them and leaves a pleasant fragrance. So go ahead and buy this product online today!",
    "ProductImage": [
        {
            
            image: im6
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 200,
    "SalesPrice": 170,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 10,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 35,
    "ProductId": 35,
    "ProductName": "Hair & Care Aloe Vera Hair Oil 500 ml",
    "ProductDescription":
    "Tired of dull and frizzy hair? Hair oil plays a vital role in protecting your hair from regular wear and tear. Hair & Care Aloe Vera, Olive Oil & Green Tea Damage Repair Hair Oil gives your hair the much needed nourishment and protects it from further damage. It can be used for a deep relaxing massage before washing your hair or to tame your hair before styling. Give your hair the care it deserves by making this a part of your hair care regime. So what are you waiting for? Buy this product online at the best rate, right here!",
    "ProductImage": [
        {
            
            image: im7
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 300,
    "SalesPrice": 280,
    "ProductDiscount": 13,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 8,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 36,
    "ProductId": 36,
    "ProductName": "Kurkure masala munch 90g",
    "ProductDescription":
    "Do you feel like having a tasty treat? Lay's India's Magic Masala KurKure are for you. Enjoy it with your favourite beverage or drink! It's the perfect party snack for when your friends and family are over. So go ahead, buy this product online today!",
    "ProductImage": [
        {
            
            image: im8
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 50,
    "SalesPrice": 40,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 5,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 6,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 37,
    "ProductId": 37,
    "ProductName": "Lay's Classic Salted Potato Chips 90g",
    "ProductDescription":
    "Do you feel like having a tasty treat? Lay's Classic Salted Potato Chips is for you. Enjoy it with your favourite beverage or drink! It's the perfect party snack for when your friends and family are over. So go ahead, buy this product online today!",
    "ProductImage": [
        {
            
            image: im9
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Snacks",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 60,
    "SalesPrice": 50,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 6,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 7,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 38,
    "ProductId": 38,
    "ProductName": "Rin Detergent Bar 250g (Pack of 4)",
    "ProductDescription":
    "Presenting the new Rin Bar - with the promise of whiter and brighter clothes so that you can dress to progress! As you stride forward on your journey through life, Rin Bar gives you the confidence to shine, all day, every day. Rin Bar removes the dirt from the toughest places like cuff and colour with just one stroke. It also leaves your clothes with a pleasant fragrance to keep you feeling fresh all day long. With Rin Bar by your side, let your confidence shine as bright as your clothes do! Rin Detergent Bar is extremely easy to use. Washing Instructions for Bright Clothes: • Soak clothes in a bucket of water • Use Rin Bar directly on dirt areas – one stroke is enough • Use a scrubber to remove tougher dirt Rin Bar is available in convenient pack sizes of Rs. 5, Rs. 10, 250 g and 1000 g (4 packs of 250 g each). Rin Bar is here to help you achieve the all-round cleanliness your clothes need to shine bright. So what are you waiting for? Try the new Rin Bar to make clothes shine like new. Shine with your dazzling brightness for a long-lasting impression..",
    "ProductImage": [
        {
            
            image: im10
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 100,
    "SalesPrice": 80,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 8,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 10,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 39,
    "ProductId": 39,
    "ProductName": "Head & Shoulders Anti-Hairfall Anti-Dandruff Shampoo 650 ml",
    "ProductDescription":
    "Rescue hair from damage, dullness, and hairfall. Helps repair damaged hair to create smoothness, and reduces breakage for up to 10X stronger hair (strength against damage vs. non-conditioning shampoo). Gentle enough for everyday use, even for color or chemically treated hair. Formulated with Head and Shoulders’ Fresh Scent Technology featuring enhanced fragrance notes for an improved in-shower scent experience up to 100% dandruff free. Visible flakes with regular use.",
    "ProductImage": [
        {
            
            image: im11
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 900,
    "SalesPrice": 790,
    "ProductDiscount": 12,
    "ProductDiscountType": "Percentage",
    "ProductTax": 6,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 7,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{id: 40,
    "ProductId": 40,
    "ProductName": "Godrej No.1 Sandal and Turmeric Bath Soap 150g (Pack of 4)",
    "ProductDescription":
    "Showering and bathing is an everyday routine. Godrej No.1 Sandal and Turmeric Bath Soap is required for you to begin your day on a refreshing note. It fills you with confidence while removing dirt gently and cleansing your skin effectively. It leaves your skin feeling clean and refreshed. So what are you waiting for? Go ahead and buy this product online today.",
    "ProductImage": [
        {
            
            image: im12
        }
    ],
    "ProductCode": "P1",
    "ProductCategory": "Other Items",
    "ProductSubCategory": "Sub Category 1",
    "ProductBrand": "Brand 1",
    "ProductColor": "Color 1",
    "ProductSize": "Size 1",
    "ProductWeight": "Weight 1",
    "ProductMaterial": "Material 1",
    "ProductQuantity": 10,
    "ProductUnit": "Unit 1",
    "ProductPrice": 170,
    "SalesPrice": 130,
    "ProductDiscount": 10,
    "ProductDiscountType": "Percentage",
    "ProductTax": 6,
    "ProductTaxType": "Percentage",
    "ProductShippingCharge": 7,
    "ProductShippingChargeType": "Percentage",
    "ProductShippingTime": "1-2 days",
    "ProductShippingTimeType": "Days",
    "ProductShippingLocation": "Location 1",
    "ProductShippingLocationType": "Country",
    "ProductShippingReturnPolicy": "Return Policy 1",
    "ProductShippingReturnPolicyType": "Days",
    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
    "ProductShippingReturnPolicyDescriptionType": "Days",
    "ProductReviews" : [
        {
            "ReviewId": 1,
            "Name": "Sandeep Kumhar",
            "Email": "",
            "Rating": 5,
            "Date": "18-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            "ReviewId": 2,
            "Name": "Rahul Saini",
            "Email": "",
            "Rating": 4,
            "Date": "10-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            "ReviewId": 3,
            "Name": "Harshal Jain",
            "Email": "",
            "Rating": 4,
            "Date": "15-11-2023",
            "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
        
    ]
},
{ id: 41,
"ProductId": 41,
"ProductName": "Kissan Fresh Tomato Ketchup 100 g",
"ProductDescription":
"Kissan Fresh Tomato Ketchup - this one's definitely a winner when it comes to cajoling your kids into eating their food. Its remarkable flavour comes from the 100% real juicy tomatoes that have gone in making it. It's an assured hero for all the snacks, be it samosas, pakoras, noodles or plain roti roll a perfect ally for making wholesome and yummy food. So go ahead, buy Kissan Fresh Tomato Ketchup online today!",
"ProductImage": [
{
   
    image: im13
}
],
"ProductCode": "P1",
"ProductCategory": "Snacks",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 30,
"SalesPrice": 20,
"ProductDiscount": 7,
"ProductDiscountType": "Percentage",
"ProductTax": 5,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 4,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{id: 42,
"ProductId": 42,
"ProductName": "Tide Jasmine & Rose Detergent Powder 2kg",
"ProductDescription":
"Keep clothes looking fresh and clean with Tide Jasmine & Rose Detergent Powder that ensures tough stain removal from your clothes. This detergent powder is suitable for both your whites and coloured clothes. It removes dirt from clothes, thereby removing dullness from them and leaving a pleasant fragrance. So go ahead and buy this product online today!",
"ProductImage": [
{
    
    image: im14
}
],
"ProductCode": "P1",
"ProductCategory": "Other Items",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 200,
"SalesPrice": 170,
"ProductDiscount": 10,
"ProductDiscountType": "Percentage",
"ProductTax": 8,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 10,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{id: 43,
"ProductId": 43,
"ProductName": "B Natural Mixed Fruit Juice 1L",
"ProductDescription":
"Turn your day around with B Natural Mixed Fruit Juice! All it takes is a glass and a bit of ice. Delicious and refreshing - there's no other way to describe it. It contains a handpicked and delicious selection of finest quality ingredients. So go ahead, buy this product online today!",
"ProductImage": [
{
    
    image: im15
}
],
"ProductCode": "P1",
"ProductCategory": "Snacks",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 150,
"SalesPrice": 110,
"ProductDiscount": 10,
"ProductDiscountType": "Percentage",
"ProductTax": 9,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 10,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{id: 44,
"ProductId": 44,
"ProductName": "B Natural Orange Juice 1L",
"ProductDescription":
"Turn your day around with B Natural Orange Juice! All it takes is a glass and a bit of ice. Delicious and refreshing - there's no other way to describe it. It contains a handpicked and delicious selection of finest quality ingredients. So go ahead, buy this product online today!",
"ProductImage": [
{
    
    image: im16
}
],
"ProductCode": "P1",
"ProductCategory": "Snacks",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 130,
"SalesPrice": 90,
"ProductDiscount": 10,
"ProductDiscountType": "Percentage",
"ProductTax": 8,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 12,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{ id: 45,
"ProductId": 45,
"ProductName": "Nescafe Classic Instant Coffee 45g",
"ProductDescription":
"Start your day right with the first sip of Nescafe Classic Instant Coffee. Let the intense taste of coffee awaken your mind and body to new opportunities as the rich aroma of this distinctive blend unfolds. This is made of quality Robusta beans and it is roasted to medium-dark colour to deliver deliciousness and a pleasurable and exclusive experience! So go ahead and order this product online today!",
"ProductImage": [
{
   
    image: im17
}
],
"ProductCode": "P1",
"ProductCategory": "Cooking Masala",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 200,
"SalesPrice": 170,
"ProductDiscount": 10,
"ProductDiscountType": "Percentage",
"ProductTax": 8,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 7,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{id: 46,
"ProductId": 46,
"ProductName": "Cadbury Dairy Milk Hazelnut Bites 40 g",
"ProductDescription":
"Cadbury has been inventing and investing in chocolates for nearly 200 years. Cadbury Dairy Milk Hazelnut Bites contains a handpicked delicious selection of finest quality ingredients. They are incredibly indulgent and will satisfy any discerning chocoholic's needs. Savour the taste of the smoothness, richness and creaminess with every bite. Let your taste buds sink with an amazing burst of chocolatey flavours. Buy this product online today.",
"ProductImage": [
{
    
    image: im18
}
],
"ProductCode": "P1",
"ProductCategory": "Snacks",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 100,
"SalesPrice": 90,
"ProductDiscount": 10,
"ProductDiscountType": "Percentage",
"ProductTax": 7,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 8,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{id: 47,
"ProductId": 47,
"ProductName": "Cadbury Dairy Milk Silk Chocolate 150g",
"ProductDescription":
"Cadbury has been inventing and investing in chocolates for nearly 200 years. Cadbury Dairy Milk Silk Chocolate contains a handpicked delicious selection of finest quality ingredients. They are incredibly indulgent and will satisfy any discerning chocoholic's needs. Savour the taste of the smoothness, richness and creaminess with every bite. Let your taste buds sink with an amazing burst of chocolatey flavours. Buy this product online today.",
"ProductImage": [
{
    
    image: im19
}
],
"ProductCode": "P1",
"ProductCategory": "Snacks",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 180,
"SalesPrice": 150,
"ProductDiscount": 10,
"ProductDiscountType": "Percentage",
"ProductTax": 6,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 7,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
},
{ id: 48,
"ProductId": 48,
"ProductName": "Pepsi 1.5L",
"ProductDescription":
"Delight your guests with Pepsi. It is the perfect drink for any weather and gatherings are incomplete without it. One glass is never enough! So go ahead buy this product online today.",
"ProductImage": [
{
   
    image: im20
}
],
"ProductCode": "P1",
"ProductCategory": "Snacks",
"ProductSubCategory": "Sub Category 1",
"ProductBrand": "Brand 1",
"ProductColor": "Color 1",
"ProductSize": "Size 1",
"ProductWeight": "Weight 1",
"ProductMaterial": "Material 1",
"ProductQuantity": 10,
"ProductUnit": "Unit 1",
"ProductPrice": 50,
"SalesPrice": 40,
"ProductDiscount": 5,
"ProductDiscountType": "Percentage",
"ProductTax": 6,
"ProductTaxType": "Percentage",
"ProductShippingCharge": 8,
"ProductShippingChargeType": "Percentage",
"ProductShippingTime": "1-2 days",
"ProductShippingTimeType": "Days",
"ProductShippingLocation": "Location 1",
"ProductShippingLocationType": "Country",
"ProductShippingReturnPolicy": "Return Policy 1",
"ProductShippingReturnPolicyType": "Days",
"ProductShippingReturnPolicyDescription": "Return Policy Description 1",
"ProductShippingReturnPolicyDescriptionType": "Days",
"ProductReviews" : [
{
    "ReviewId": 1,
    "Name": "Sandeep Kumhar",
    "Email": "",
    "Rating": 5,
    "Date": "18-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
},
{
    "ReviewId": 2,
    "Name": "Rahul Saini",
    "Email": "",
    "Rating": 4,
    "Date": "10-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
},
{
    "ReviewId": 3,
    "Name": "Harshal Jain",
    "Email": "",
    "Rating": 4,
    "Date": "15-11-2023",
    "Review":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}

]
}
    ]
    const [fproducts, setFproducts]=useState(products)
    useEffect(()=>{
        console.log(props.category)
        if(props.category!='All'){ 
            setFproducts(products.filter(pro=>pro['ProductCategory']==props.category))
        }
        else{
            setFproducts(products);
        }
    },[props.category])
  return (
    <div className='allproducts'>
     <h1>All Products</h1>
     <div className='products'>
        {
            fproducts.map((item,index) =>{
                return(
                    <ProductCard data={item} key={item.id}/>
                )
            })
        }
     </div>
    </div>
  )
}

export default AllProduct
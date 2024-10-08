import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setShippingToggle] = useState(true)
  const [paymentToggle, setPaymentToggle] = useState(true)

  const [paymentMethod, setPaymentMethod] = useState("cod")

  const [shippingInfo , setShippingInfo] = useState({
    address:'',
    city:'',
    zip:''
  })

const cart = useSelector((state) => state.cart)
const navigate = useNavigate()

  
   
  const handleOrder = () =>  {
     const newOrder = {
      products : cart.products,
      orderNumber : "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
     }
     setOrder(newOrder)
     navigate('/order-confirmation')

  }
  

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
    
        <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
          <div className='md:w-2/3'>
             <div className='border p-2 mb-6'>
               <div className='flex items-center justify-between'
               onClick={()=> setBillingToggle(!billingToggle)}>
                <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
               </div>

               <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                 <div>
                   <label className='block text-gray-700'>Name</label>
                   <input 
                   type="text"
                   name="name"
                   placeholder='Enter Name'
                   className='w-full px-3 py-2 border' 
                   />
                 </div>
               
                 <div>
                   <label  className='block text-gray-700'>Email</label>
                   <input
                   type="email"
                   name="email"
                   placeholder='Enter Email'
                   className='w-full px-3 py-2 border' />
                 </div>
               
               
                 <div>
                   <label className='block text-gray-700'>Phone no.</label>
                   <input
                   type="number"
                   name="phone"
                   placeholder='Enter Phone Number'
                   className='w-full px-3 py-2 border' />
                 </div>
               </div>
             </div>

             <div className='border p-2 mb-6'>
               <div className='flex items-center justify-between'
               onClick={()=> setShippingToggle(!shippingToggle)}>
                <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
               </div>

               <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                 <div>
                   <label className='block text-gray-700'>Address</label>
                   <input 
                   type="text"
                   name="name"
                   placeholder='Enter Address'
                   className='w-full px-3 py-2 border' 
                   onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value })}
                   />
                 </div>
               
                 <div>
                   <label  className='block text-gray-700'>City Name</label>
                   <input
                   type="text"
                   name="city"
                   placeholder='Enter city'
                   className='w-full px-3 py-2 border' 
                   onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value })}
                   />
                 </div>
               
               
                 <div>
                   <label className='block text-gray-700'>ZipCode</label>
                   <input
                   type="zip"
                   name="phone"
                   placeholder='Enter Pincode'
                   className='w-full px-3 py-2 border' 
                   onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value })}
                   />
                 </div>
               </div>
             </div>

             <div className='border p-2 mb-6'>
               <div className='flex items-center justify-between'
               onClick={()=> setPaymentToggle(!paymentToggle)}>
                <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
               </div>

               <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                 <div className='flex items-center mb-2'>
                 <input 
                 type="radio"
                 name="payment" 
                 checked = {paymentMethod === "cod"}
                 onChange={() => setPaymentMethod("cod")}
                 />
                 <label className='block text-gray-700 ml-2'> Cash on Delivery</label>
                 </div>
               
                 <div className='flex items-center mb-2'>
                 <input 
                 type="radio"
                 name="payment" 
                 checked = {paymentMethod === "dc"}
                 onChange={() => setPaymentMethod("dc")}
                 />
                 <label className='block text-gray-700 ml-2'>Debit Card</label>
                 </div>
                 {paymentMethod === "dc" && (
                  <div>
                    <h3>Debit Card Information</h3>
                    <div>
                      <label htmlFor="">Card Number</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label htmlFor="">Card Holder Name</label>
                      <input type="text" />
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Expire Date</label>
                        <input type="text" />
                      </div>
                      <div>
                        <label htmlFor="">CVV</label>
                        <input type="text" />
                      </div>

                    </div>
                  </div>
                 )}
               </div>
               
             </div>
             
          </div>

  
             <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
             <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
             <div className='space-y-4'>
              {cart.products.map(product => (
               <div key = {product.id} className='flex justify-between'>
                  <div className='flex items-center'>
                  <img 
                  src={product.image} 
                  alt={product.name}
                  className='w-16 h-16 object-contain rounded' />

                    <div className='ml-4'>
                      <h4 className='text-md font-semibold'>{product.name}</h4>
                      <p className='text-gray-600'>
                       ${product.price} x {product.quantity}
                      </p>
                    </div>
                  </div>
                  <div className='text-gray-800'>
                  ${product.price} * {product.quantity}
                  </div>
                </div>
              ))}
             </div>
              <div className='mt-4 border-t pt-4'>
                <div className='flex justify-between'>
                  <span>Total Price :</span>
                  <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
              onClick={handleOrder}
              >Place order</button>
             </div>

          </div> 
         
    </div>
  )
}

export default Checkout
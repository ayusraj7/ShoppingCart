import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return(
    <div>
     {
       cart.length>0?
       (
         <div className="h-100vh max-w-[1200px] mx-auto flex flex-row justify-around">
           <div className='w-1/2'>
             {
               cart.map((item,index)=>{
                 return <CartItem key={item.id} item={item} itemIndex={index} />
               })
             }
           </div>



           <div className='h-[400px] mt-[105px] flex flex-col justify-between pr-5'>

             <div className='w-full flex flex-col'>
               
                <div className='uppercase text-[18px] text-green-900 '>Your Cart</div>
                <div className="-mt-[15px] text-green-700 text-[40px] uppercase font-semibold ">Summary</div>
                <p>
                  <span className='font-semibold capitalize text-[18px] text-green-900'>Total Items: {cart.length} </span>
                </p>
             </div>


             <div>
               <p className="py-2">Total Amount:<span className="font-bold text-[16px]">${totalAmount}</span></p>
               <button className="bg-green-700 w-full p-3 rounded-md font-semibold text-white ">CheckOut Now</button>
             </div>

             
           </div>


         </div>
       ):
       (
         <div className="h-[100vh] flex flex-col justify-center items-center gap-2">
           <h1> Cart Empty </h1>
           <Link to={'/'}>
             <button className="bg-green-700 p-3 rounded-sm text-white font-semibold hover:text-green-700 hover:bg-white ">Shop Now</button>
           </Link>
         </div>
         )
     }
    </div>

  )
};

export default Cart;

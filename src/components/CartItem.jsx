import toast from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'

const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  function removeFromCart()
  {
     dispatch(remove(item.id));
     toast.success("Remove from Cart"); 
  }
  return(
    

      <div className='flex flex-row  mt-12  border-b-[4px] border-slate-600  gap-[50px] pb-10'>
        <div className='h-[280px] w-[40%]'>
          <img src={item.image} alt="" className='w-full h-full ' />
        </div>

        <div className=' w-[60%] flex flex-col gap-4 '>
          <h1 className='text-gray-700 font-semibold text-lg text-left  w-40 mt-1'>{item.title}</h1>
          <p className=" text-gray-600 font-medium text-[16px] text-left ">{item.description.split(" ").slice(0,20).join(" ")+"..."}</p>
          <div className='flex flex-row justify-between px-3 py-2 '>
            <p className='text-green-600 font-semibold text-[22px]'>${item.price}</p>
            <div className='text-[35px]' onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>

      </div>

    
  )
};

export default CartItem;

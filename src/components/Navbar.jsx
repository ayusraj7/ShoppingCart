import {FiShoppingCart} from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
import logo from '../../src/logo.png'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart=useSelector((state)=>state);
  console.log(cart);
  console.log(cart.length);
  return(
      <nav className="flex justify-between items-center h-20 max-w-4xl lg:max-w-6xl mx-auto">
         <NavLink to='/'>

         <div>
         <img  src={logo} height="50px" width="150px"/>
         </div>

         </NavLink>


         <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>

           <NavLink to='/'>
           <p>Home</p>
           </NavLink>

           <NavLink to='/cart'>
            <div className='relative'>
              <FiShoppingCart className='text-2xl '/>
              {
               cart.length > 0 && 
               <span className='absolute -top-1 -right-2 bg-green text-xs w-5 h-5
                items-center text-white flex justify-center'>{cart.length}</span>
              }
            </div>
           </NavLink>
           
         </div>
      </nav>
  )
};

export default Navbar;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../Components/AuthContextProvider';


const Dashboard = () => {
const user = useAuthContext()
console.log(user)

    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet/>
        </div> 
 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashBoard' className='text-base font-bold'>My Profile</Link></li>
            <li><Link to='/dashBoard/myOrder' className='text-base font-bold'>My Order</Link></li>
            <li><Link to='/dashBoard/addReview' className='text-base font-bold'>Add Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;
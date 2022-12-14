import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';



const Dashboard = () => {

  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if(loading || adminLoading){
    return <Loading/>
  }



  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashBoard' className='text-base font-bold'>My Profile</Link></li>
          <li><Link to='/dashBoard/myOrder' className='text-base font-bold'>My Order</Link></li>
          <li><Link to='/dashBoard/addReview' className='text-base font-bold'>Add Review</Link></li>
         { admin && <>
          <li><Link to='/dashBoard/allUsers' className='text-base font-bold'>All Users</Link></li>
          <li><Link to='/dashBoard/addProduct' className='text-base font-bold'>Add Product</Link></li>
          <li><Link to='/dashBoard/manageProduct' className='text-base font-bold'>Manage Product</Link></li>
         </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;
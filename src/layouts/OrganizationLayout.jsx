import { Outlet, useParams } from 'react-router-dom';
import "../organizations/org1/org1.css"


const OrganizationLayout = () => {

  return (
    <div className='sub-organization-main-cover-wrapper'>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default OrganizationLayout;

// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrganizationLayout from './layouts/OrganizationLayout';
import DynamicOrgPage from './organizations/DynamicOrgPage';
import Home from "../src/organizations/org1/pages/home"



const AppRoutes = () => (
    <Routes>  
      
      <Route path="/" element={<Home />}/>
      <Route path="/organization/:orgId" element={<OrganizationLayout />}>
        <Route path=":pageName" element={<DynamicOrgPage />} />
      </Route>

      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
);

export default AppRoutes;

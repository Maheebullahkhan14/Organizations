// src/organizations/DynamicOrgPage.jsx
import { useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';



const DynamicOrgPage = () => {
  const { orgId , pageName } = useParams();
  
  // Dynamically load the page
  const PageComponent = lazy(() =>
    import(`./${orgId}/pages/${pageName}.jsx`).catch(() =>
      import('../pages/NotFound')
    )
  );

  return (
    <Suspense fallback={<div>Loading {pageName} page...</div>}>
      <PageComponent />
    </Suspense>
  );
};

export default DynamicOrgPage;

import React from 'react';
import Logo from './logo';
import Breadcrumbs from './breadcrumbs';
import MainInfoCard from './mainInfoCard';
import RelatedInfoCard from './relatedInfoCard';

function App() {
  return (
          <div className='container'>
              <Logo/>
              <Breadcrumbs/>
              <MainInfoCard />
              <div className='row justify-content-center'>
                  <RelatedInfoCard />
                  <RelatedInfoCard />
                  <RelatedInfoCard />
              </div>
          </div>
         )
}

export default App;

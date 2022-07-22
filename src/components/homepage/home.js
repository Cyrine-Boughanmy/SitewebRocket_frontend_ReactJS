import React from 'react';
import Header from './header/header';
import Formezvous from './formez-vous/formezvous';
import Objectifs from './objectifs/objectifs';
import Pourquoiunbootcamp from './pourquoiunbootcamp/pourquoiunbootcamp';
import Pourquoirocketcoding from './pourquoirocketcoding/pourquoirocketcoding';




const Home = () => {
  return (
<div>
  <Header/>
  <Formezvous/> 
  <Objectifs/>
  <Pourquoiunbootcamp/>
  <Pourquoirocketcoding/>
</div>
  )
  
}

export default Home;

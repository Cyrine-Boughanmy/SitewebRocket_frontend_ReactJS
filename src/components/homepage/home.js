import React from 'react';
import Header from './header/header';
import Formezvous from './formez-vous/formezvous';
import Objectifs from './objectifs/objectifs';
import Pourquoiunbootcamp from './pourquoiunbootcamp/pourquoiunbootcamp';
import Pourquoirocketcoding from './pourquoirocketcoding/pourquoirocketcoding';
import Programme from '../programme/Programme';
import Stackdedeveloppement from './stackdedevloppement/stackdedeveloppement';
import Tarif from '../tarif/Tarif';
import Prochainesréunions from './prochainesréunions/prochainesréunions';




const Home = () => {
  return (
<div>
  <Header/>
  <Formezvous/> 
  <Objectifs/>
  <Pourquoiunbootcamp/>
  <Pourquoirocketcoding/>
  <Programme/>
  <Stackdedeveloppement/>
  
</div>
  )
  
}

export default Home;

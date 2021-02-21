import React from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {toggleAsideOpenAC,smallGroupOpenAC,smallGroupCloseAC,
        middleGroupOpenAC, middleGroupCloseAC,seniorGroupOpenAC,
        seniorGroupCloseAC,toggleOpenMenuAC 
      } from './store/ActionCreators';

import './store/redux-store';
import Menu from './components/menu';
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Aside from './components/aside';
import SmallGroup from './components/hiddenComponents/smallGroup';
import MiddleGroup from './components/hiddenComponents/middleGroup';
import SeniorGroup from './components/hiddenComponents/seniorGroup';
import Contacts from './pages/contacts';
import  GalleryPage from './pages/gallery';





const navItems=[
  {
    id:1,
    path:'/',
    component:'Գլխավոր',
    exact:true
  },
  {
    id:2,
    path:'/about',
    component:'Մեր մասին'
  },
  {
    id:3,
    path:'/services',
    component:'Մեր առօրյան'
  },
  {
    id:4,
    path:'/gallery',
    component:'Տեսադարան'
  },
  {
    id:5,
    path:'/contacts',
    component:'Կապ'
  }
];



class  App extends React.Component{
 

  render(){
    const {
           navState:{asideIsOpen}, 
           smallGroupState:{smallGroupIsOpen},
           middleGroupState:{middleGroupIsOpen},
           seniorGroupState:{seniorGroupIsOpen},
           menuState:{menuIsOpen},
            toggleAsideOpen,middleGroupOpen,
            middleGroupClose,smallGroupClose,
            smallGroupOpen,seniorGroupOpen,
            seniorGroupClose,toggleOpenMenu 
          }=this.props;
    return (
      <div className="App" >
      
         <Nav navItems={navItems}  toggleAsideOpen={toggleAsideOpen} />
         <Menu navItems={navItems} toggleOpenMenu={toggleOpenMenu} menuIsOpen={menuIsOpen}  />
         <Aside  asideIsOpen={asideIsOpen} toggleAsideOpen={toggleAsideOpen} />
        <SmallGroup  smallGroupIsOpen={smallGroupIsOpen} smallGroupClose={smallGroupClose}/>
        <MiddleGroup middleGroupIsOpen={middleGroupIsOpen} middleGroupClose={middleGroupClose} />
        <SeniorGroup seniorGroupIsOpen={seniorGroupIsOpen} seniorGroupClose={seniorGroupClose}/>
        
         
         <Route path="/" component={Home}  exact={true}  />
         <Route path="/about" component={About}  />
         <Route path="/services" render={(props)=><Services smallGroupOpen={smallGroupOpen}  middleGroupOpen={middleGroupOpen} seniorGroupOpen={seniorGroupOpen} />} />
         <Route path="/contacts" component={Contacts} />
         <Route path="/gallery"  render={()=> <GalleryPage />} />

         </div>
  ); 
  }
 
}

const mapStateToProps=(state)=>{
  return {
    navState:state.navState,
    middleGroupState:state.middleGroupState,
    smallGroupState:state.smallGroupState,
    seniorGroupState:state.seniorGroupState,
    menuState:state.menuState
   }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    toggleAsideOpen:()=>dispatch(toggleAsideOpenAC()),
    middleGroupOpen:()=>dispatch(middleGroupOpenAC()),
    middleGroupClose:()=>dispatch(middleGroupCloseAC()),
    smallGroupOpen:()=>dispatch(smallGroupOpenAC()),
    smallGroupClose:()=>dispatch(smallGroupCloseAC()),
    seniorGroupOpen:()=>dispatch(seniorGroupOpenAC()),
    seniorGroupClose:()=>dispatch(seniorGroupCloseAC()),
    toggleOpenMenu:()=>dispatch(toggleOpenMenuAC()),
  }
}
const AppContainer=connect(mapStateToProps,mapDispatchToProps)(App);

export default AppContainer;

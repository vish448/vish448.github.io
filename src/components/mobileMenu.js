import React, { Component } from 'react'
import $ from 'jquery'

import Nav from './nav'

class MobileMenu extends Component {
  componentDidMount() {
    $('#menu-icon').click(function(){
      $(this).toggleClass('open');
      if($('#menu-icon').hasClass('open')){
          $('#mobileNav').css('width',window.innerWidth) 
      }
      else {
          $('#mobileNav').css('width',0) 
      }   
     })
  }

  render(){
    return (
      <header className="hide-md">
          <div className="mobileNavigation">
          <div id="menu-icon">
              <span></span>
              <span></span>
              <span></span>
          </div>
          
          <div id="mobileNav" className="mobileNav">
              <Nav />
          </div>
        </div>
          
      <div className="logo">
        <h1>VS.</h1>
      </div>
    </header>
    )
  }
}

export default MobileMenu
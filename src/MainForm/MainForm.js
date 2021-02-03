import React, { Component } from 'react';
import MainFeatures from '../MainFeatures/MainFeatures'
import './MainForm.css';
import slugify from 'slugify';

class MainForm extends Component {
  render() {
    return(
      <div className="MainForm">
        <form className="main__form">
          <MainFeatures />
        </form>
      </div>
    )
  }
}

    

export default MainForm;
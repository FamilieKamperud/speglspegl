import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
moment.locale('nb');

import './yrWeather.styl';
import grayscale from '../lib/recolorImage';

export default class YrWeather extends React.Component {
  static propTypes = {
    yrWeather: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
  }

  render(){
    const {yrWeather} = this.props;
    if(Object.keys(yrWeather).length === 0) {
      return null;
    }
    const { weather }  = yrWeather['0566'];
    const { symbol, temperature } = weather[0];
    return (
      <div className="yrWeather">
        <img className="yrWeather-symbol" ref="yrImage" onLoad={this.handleImageLoaded} crossOrigin="Anonymous" src={symbol} ></img>
        <h2 className="yrWeather-temperature">{temperature}</h2>
      </div>
    );
  }

  handleImageLoaded = () =>{
    //grayscale(this.refs.yrImage, true);
  }

}

const mapStateToProps = (state) => {
  const { yrWeather } = state;
  return { yrWeather };
};

export default connect(mapStateToProps)(YrWeather);

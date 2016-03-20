import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
moment.locale('nb');

import './yrWeather.styl';

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
    const { symbol, temperature, windSpeed } = weather[0];
    const [T,W] = [temperature, Math.pow(windSpeed*3.6, 0.16)];
    const effectiveTemperature = (13.12 + 0.6215*T - 11.37*W + 0.3965*T*W).toFixed();

    return (
      <div className="yrWeather">
        <img className="yrWeather-symbol" ref="yrImage" src={symbol} ></img>
        <h2 className="yrWeather-temperature">{temperature}°</h2>
        <div className="yrWeather-effective-temperature">
          <h5 className="yrWeather-effective-temperature-text">EFFEKTIV</h5>
          <h5 className="yrWeather-effective-temperature-text">TEMP</h5>
          <h2 className="yrWeather-effective-temperature-temp">{effectiveTemperature}°</h2>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const { yrWeather } = state;
  return { yrWeather };
};

export default connect(mapStateToProps)(YrWeather);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
moment.locale('nb');

import './yrWeather.styl';

export default class YrWeather extends React.Component {
  static propTypes = {
    yrWeather: PropTypes.object.isRequired
  };

  render(){
    const {yrWeather} = this.props;
    if(Object.keys(yrWeather).length === 0) {
      return null;
    }
    const {weather} = yrWeather;
    return (
      <div>
        <WeatherRow size="large" weather={weather[0]}  />
        <WeatherRow size="small" weather={weather[1]} />
        <WeatherRow size="small" weather={weather[2]} />
      </div>
    );
  }

}

class WeatherRow extends React.Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
    size: PropTypes.string.isRequired
  };

  render(){
    const {weather, size} = this.props;
    const { symbol, temperature, windSpeed } = weather;
    const [T,W] = [temperature, Math.pow(windSpeed*3.6, 0.16)];
    const effectiveTemperature = (13.12 + 0.6215*T - 11.37*W + 0.3965*T*W).toFixed();

    let eff = void 0;
    if(size==='large'){
      eff = (
        <div>
          <h5 className={`yrWeather-effective-temperature-text--${size}`}>Effektiv</h5>
          <h5 className={`yrWeather-effective-temperature-text--${size}`}>temp</h5>
        </div>
      );
    }

    return (
      <div className="yrWeather">
        <img className={`yrWeather-symbol--${size}`} ref="yrImage" src={symbol} ></img>
        <h2 className={`yrWeather-temperature--${size}`}>{temperature}°</h2>
        <div className={`yrWeather-effective-temperature--${size}`}>
          {eff}
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

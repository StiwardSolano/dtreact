import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import axios from 'axios';
import '../styles/predictions.css';

export default class CreatePrediction extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        age: '',
        bmi: '',
        children: '',
        sex: '',
        smoking: '',
        region: '',
        prediction: ''
      }

    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeBmi = this.onChangeBmi.bind(this);
    this.onChangeChildren = this.onChangeChildren.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeSmoking = this.onChangeSmoking.bind(this);
    this.onChangeRegion = this.onChangeRegion.bind(this);
    this.onChangePrediction = this.onChangePrediction.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        age: '',
        bmi: '',
        children: '',
        sex: '',
        smoking: '',
        region: '',
        prediction: ''
      }

  }

  componentDidMount() {

  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }
  onChangeBmi(e) {
    this.setState({
      bmi: e.target.value
    });
  }
  onChangeChildren(e) {
    this.setState({
      children: e.target.value
    });
  }
  onChangePrediction(e) {
    this.setState({
      prediction: e.target.value
    });
  }

  onChangeSex(e) {
    this.setState({
      sex: e.target.value
    });
  }
  onChangeSmoking(e) {
    this.setState({
      smoking: e.target.value
    });
  }
  onChangeRegion(e) {
    this.setState({
      region: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const prediction = {
      age: this.state.age,
      bmi: this.state.bmi,
      children: this.state.children,
      sex: this.state.sex,
      smoking: this.state.smoking,
      region: this.state.region
    };

    console.log(prediction);
    axios.post('http://127.0.0.1:5000/pall', prediction)//TODO POST
    .then(res => {
      //console.log(res.data);
      const predictive = JSON.parse(res.data.result);
      //console.log(predictive);
      this.setState({prediction: predictive})
    });
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              
            </div>
            <div className="col">
              <Link to="/listpredictions" >List Predictions</Link>
            </div>
          </div>
          <div className="row">
          <div className="col">
              <form onSubmit={this.onSubmit}>
              <label>
                <p>Age</p>
                <input type="number"
                    required
                    name="age"
                    maxLength="2"
                    className="form-control"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                    />
              </label>
              <label>
                <p>Sex</p>
                  <div onChange={this.onChangeSex}>
                    <input type="radio" value="male" name="gender" /> Male
                    <input type="radio" value="female" name="gender" /> Female
                  </div>
              </label>
              <label>
                <p>BMI</p>
                <input type="number"
                    required
                    name="bmi"
                    className="form-control"
                    value={this.state.bmi}
                    onChange={this.onChangeBmi}
                    />
              </label>
              <label>
                <p>Children</p>
                <input type="number"
                    required
                    name="children"
                    className="form-control"
                    value={this.state.children}
                    onChange={this.onChangeChildren}
                    />
              </label>
              <label>
                <p>Smoking</p>
                <div onChange={this.onChangeSmoking}>
                  <input type="radio" value="yes" name="smoking" /> Yes
                  <input type="radio" value="no" name="smoking" /> No
                </div>
              </label>
              <label>
                <p>Region</p>
                  <select onChange={this.onChangeRegion}>
                    <option defaultValue="northwest">Northwest</option>
                    <option value="southeast">Southeast</option>
                    <option value="southwest">Southwest</option>
                  </select>
              </label>
              <div>
                <button type="submit">Predict</button>
              </div>
            </form>
            </div>
            <div className="col">
            <label>
                <p>Prediction Results: </p>
                <input type="text"
                    disabled
                    name="prediction"
                    className="form-control"
                    value={this.state.prediction}
                    onChange={this.onChangePrediction.bind(this)}
                    />
              </label>
            </div>
          </div>
        </div>
    )
  }
}
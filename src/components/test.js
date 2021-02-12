import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        age: '',
        bmi: 0,
        children: 0
      }

    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeBmi = this.onChangeBmi.bind(this);
    this.onChangeChildren = this.onChangeChildren.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        age: '',
        bmi: 0,
        children: 0
      }

  }

  componentDidMount() {/*
    axios.get('https://exerapi.herokuapp.com/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })*/
  }

  onChangeAge(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeBmi(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeChildren(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const prediction = {
      age: this.state.age,
      bmi: this.state.bmi,
      children: this.state.children
    };

    console.log(prediction);
    
    axios.post('http://127.0.0.1:5000/pall', exercise)//TODO POST
    .then(res => console.log(res.data));

  //window.location = '/';
  }

  render() {
    return (
        <div className="predictions-wrapper">
        <form>
          <label>
            <p>Age</p>
            <input type="number" />
          </label>
          <label>
            <p>Sex</p>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
          </label>
          <label>
            <p>BMI</p>
            <input type="number" />
          </label>
          <label>
            <p>Children</p>
            <input type="number" />
          </label>
          <label>
            <p>Smoking</p>
            <input type="radio" value="Yes" name="smoking" /> Yes
            <input type="radio" value="No" name="smoking" /> No
          </label>
          <label>
            <p>Region</p>
            <select>
                <option selected value="northwest">Northwest</option>
                <option value="southeast">Southeast</option>
                <option value="southwest">Southwest</option>
              </select>
          </label>
          <div>
            <button type="submit">Predict</button>
          </div>
        </form>
        </div>
    )
  }
}
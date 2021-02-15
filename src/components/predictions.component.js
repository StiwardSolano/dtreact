import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/predictions.css';

function CreatePrediction() {
  
  const [age, setAge] = useState({
    age: '',
  });
  const [bmi, setBmi] = useState(0);
  const [children, setChildren] = useState(0);
  const [sex, setSex] = useState('');
  const [smoking, setSmoking] = useState('');
  const [region, setRegion] = useState({
    region : ''
  });
  const [prediction, setPrediction] = useState({
    prediction : ''
  });

  const onChangeAge = (e) => {
    setAge({
      ...age, 
      age : e.target.value
    });
  }

  const onChangeBmi = (e) => {
    setBmi({
      ...bmi, 
      [e.target.name] : e.target.value
    });
  }

  const onChangeChildren = (e) => {
    setChildren({
      ...children, 
      [e.target.name] : e.target.value
    });
  }

  const onChangeSex = (e) => {
    setSex({
      ...sex, 
      [e.target.name] : e.target.value
    });
  }

  const onChangeSmoking = (e) => {
    setSmoking({
      ...smoking, 
      [e.target.name] : e.target.value
    });
  }

  const onChangeRegion = (e) => {
    setRegion({
      ...region, 
      region : e.target.value
    });
  }

  const onChangePrediction = (e) => {
    setPrediction({
      ...prediction, 
      prediction : e.target.value
    });
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    const predictions = {
      age: age.age,
      bmi: bmi.bmi,
      children: children.children, 
      sex: sex.sex,
      smoking: smoking.smoking,
      region: region.region
    };

    console.log(predictions);
    axios.post('https://mongopy-api.herokuapp.com/pall', predictions)
    .then(res => {
      const predictive = JSON.parse(res.data.result);
      console.log(predictive);
      setPrediction({
        ...prediction, 
        prediction : res.data.result
      });
    });
  }

  return(
    <div className="container">
      <h1>Logistic Regression Prediction Ensurance</h1>
          <div className="row">
            <div className="col">
              
            </div>
            <div className="col">
              <Link to="/listpredictions" >List Predictions</Link>
            </div>
          </div>
          <div className="row">
          <div className="col">
              <form onSubmit={onSubmit}>
              <label>
                <p>Age</p>
                <input type="number"
                    required
                    name="age"
                    className="form-control"
                    onChange={onChangeAge}
                    />
              </label>
              <label>
                <p>Sex</p>
                  <div onChange = {onChangeSex}>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="sex" value="male"></input>
                      <label className="form-check-label" >Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="sex" value="female"></input>
                      <label className="form-check-label" >Female</label>
                    </div>
                  </div>
              </label>
              <label>
                <p>BMI</p>
                <input type="number"
                    required
                    name="bmi"
                    className="form-control"
                    onChange={onChangeBmi}
                    />
              </label>
              <label>
                <p>Children</p>
                <input type="number"
                    required
                    name="children"
                    className="form-control"
                    onChange={onChangeChildren}
                    />
              </label>
              <label>
                <p>Smoking</p>
                <div onChange = {onChangeSmoking}>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="smoking" value="yes"></input>
                      <label className="form-check-label" >Yes</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="smoking" value="no"></input>
                      <label className="form-check-label" >No</label>
                    </div>
                  </div>
              </label>
              <label>
                <p>Region</p>
                  <select className="form-select" onChange = {onChangeRegion}>
                    <option defaultValue="northwest" name="region">Northwest</option>
                    <option value="northeast" name="region">Northeast</option>
                    <option value="southeast" name="region">Southeast</option>
                    <option value="southwest" name="region">Southwest</option>
                  </select>
              </label>
              <div>
                <button type="submit" className="btn btn-primary">Predict</button>
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
                    value={prediction.prediction}
                    onChange={onChangePrediction}
                  />
              </label>
            </div>
          </div>
        </div>
  );
}

export default CreatePrediction;

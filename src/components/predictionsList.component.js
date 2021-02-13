import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function ListPredictions() {
  
  const [predictions, setPredictions] = useState([
    {
      predictions: []
    }
  ]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/predictions')
    .then(response => {
     setPredictions(response.data);
    })
    .catch((error) => {
       console.log(error);
    })
  }, [])

  return(
    <div className="container">
      <h1>List Predictions</h1>
      <p></p>
      <Link to="/" >Return</Link>
      <Table striped bordered hover size="sm">
      <thead>
          <tr>
          <th>Creation Time and date</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Bmi</th>
          <th>Children</th>
          <th>Smoking</th>
          <th>Region</th>
          <th>Prediction</th>
          </tr>
      </thead>
      <tbody>
        {predictions.map((currentprediction, index) =>{
            const {age, sex, bmi, children, smoking, region, prediction, creation_time, id} = currentprediction
            return(
              <tr key={id}>
                <td>{creation_time}</td>
                <td>{age}</td>
                <td>{sex}</td>
                <td>{bmi}</td>
                <td>{children}</td>
                <td>{smoking}</td>
                <td>{region}</td>
                <td>{prediction}</td>
              </tr>
            )
          })
        }
      </tbody>
      </Table>
  </div>
  );
}

export default ListPredictions;
import React, { Component } from 'react';
import axios from 'axios';
import { Table, CardTitle } from 'reactstrap';


class APITable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quizs: []
    }
  }
  componentDidMount() {
  axios.get('http/localhoast/5001').then(response => {
    console.log(response);
    this.setState({
        quizs: response.data, 
    });
  });
  }

  render() {
    const { quizs = [] } = this.state;
    return (
      <div className="App">
        <CardTitle className="title">Quizzes</CardTitle>
        <header className="App-header">
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Diffuculty</th>
              </tr>
            </thead>
            <tbody>
            {quizs.length ? 
              quizs.map(quiz => (
                <tr key = {quiz.id}>
                  <td>
                    {/* link to view the quiz questions */}
                    <a id="view-questions"href={`/quiz/${quiz.id}/`}>{quiz.name}</a>
                  </td>
                  <td>{quiz.category}</td>
                  <td>{quiz.difficulty}</td>


                </tr>
              ))
              : 
              (<tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>)
            }
            </tbody>
          </Table>
        </header>
      </div>
    );
  }
}

export default APITable;
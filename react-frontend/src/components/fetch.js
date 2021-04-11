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
  axios.get('https://localhost:5001/InvoiceSync').then(response => {
    console.log(response);
    this.setState({
        Invoices: response.data, 
    });
  });
  }

  render() {
    const { Invoices = [] } = this.state;
    return (
      <div className="App">
        <CardTitle className="title">Invoices</CardTitle>
        <header className="App-header">
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Category</th>
                <th>Amount Due</th>
              </tr>
            </thead>
            <tbody>
            {Invoices.length ? 
              Invoices.map(Invoice => (
                <tr key = {Invoice.id}>
                  <td>
                    {/* link to view the invoices */}
                    <a id="view-invoices"href={`/invoice/${Invoice.id}/`}>{Invoice.to}</a>
                  </td>
                  <td>{Invoice.category}</td>
                  <td>{Invoice.difficulty}</td>


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
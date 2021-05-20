import React, { useState, useEffect } from "react";
import axios from "axios";
import { DotLoader } from "react-spinners";
import nav from '../components/nav'
 
function Invoices() {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    getUserDetails();
  }, []);
 
  const getUserDetails = async () => {
    try {
      // use the api to fetch all invoices
      await axios.get(
        "https://localhost:5001/InvoiceSync"
      ).then(response => setUserData(response.data));
      setIsLoaded(true);
      console.log(userData);
    } catch (err) {
      console.log(err);
      setIsLoaded(true);
      setError(err);
    }
  };
 
  if (error) {
    return <h1>{error.message}</h1>;
  } else if (!isLoaded) {
    return (
      <div>
        <h1>Loading Invoice Data ...</h1>
        <DotLoader sizeUnit={"px"} size={50} color={"#000"} />
      </div>
    );
  }
 
  return (
    <div className="App2">
      <header className="App-header">
        <h2>Xero Invoices</h2>
      </header>
      <div className="user-container">

      <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name:</th>
                  <th scope="col">Total:</th>
                  <th scope="col">Amount Due:</th>
                  <th scope="col">Date:</th>
                </tr>
              </thead>

      {userData.map(data => (             
              <tbody>
                <tr>
                  <td>{data.contact.name}</td>
                  <td>{data.total}</td>
                  <td>{data.amountDue}</td>
                  <td>{data.date}</td>
                </tr>
              </tbody>
              ))}
 </table>
       </div>
      <a href="http://localhost:3000/home">Home</a>
    </div>
  );
}
 
export default Invoices;
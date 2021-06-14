import React, { useState, useEffect } from "react";
import axios from "axios";
import { DotLoader } from "react-spinners";
 
function Invoices() {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    getUserDetails();
  }, []);
 
  const getUserDetails = async () => {
    try {
      // use the api to fetch all quizzes
      await axios.get(
        "/InvoiceSync"
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
        <h1>Loading data ...</h1>
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
 
      {userData.map(data => (
              <div>
              <div><h5>Invoice ID</h5><p>{data.invoiceID}</p></div>
              <div>Name:<p>{data.name}</p></div>
 
               <div>dueDate:<p>{data.lineItems}</p></div>
              <div>Date:<p>{data.date}</p></div>
              </div>
 
              ))}
 
       </div>
      <a href="https://xero.conrad-thomas.com/backend/auth/logout">Logout</a>
    </div>
  );
}
 
export default Invoices;
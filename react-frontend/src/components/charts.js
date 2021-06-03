import React, {useState, useEffect} from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import axios from "axios";

import { DotLoader } from "react-spinners";

function ChartsPage() {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(async () => {
    try {
      // use the api to fetch all invoices
      await axios.get(
        "https://localhost:5001/InvoiceSync"
      ).then(response => {
        setUserData(response.data)
        setIsLoaded(true)
      
      });
      
    } catch (err) {
      console.log(err);
      setIsLoaded(true);
      setError(err);
    }

  }, []);

  const getUserDetails = async () => {
    setUserData(userData)
    setIsLoaded(true)
    console.log(userData)
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
  console.log(userData)

    const dataHorizontal = {
      labels: userData.filter(x => x.amountDue != 0).map(x => x.contact.name),
      datasets: [
        {
          label: 'dfsd',
          data: userData.filter(x => x.amountDue != 0).map(x => x.amountDue),
          fill: false,
          backgroundColor: userData.filter(x => x.amountDue != 0).map(x => "Red"),
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 0
        }
      ]
    }



    return (
      <MDBContainer>
        <h3 className='mt-5'>Invoice Data</h3>
        <HorizontalBar
          data={dataHorizontal}
          // data = {userData.map(data => (data.amountDue))}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }


export default ChartsPage;
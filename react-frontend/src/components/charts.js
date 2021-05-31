import React, {useState} from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';




function ChartsPage(chartData) {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    setUserData(chartData)
    setIsLoaded(true)
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

    dataHorizontal = {
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Grey'],
      datasets: [
        {
          label: 'Dataset',
          data: userData.amountDue,
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    }

    return (
      <MDBContainer>
        <h3 className='mt-5'>Invoice Data</h3>
        <HorizontalBar
          data={this.state.dataHorizontal}
          // data = {userData.map(data => (data.amountDue))}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }


export default ChartsPage;
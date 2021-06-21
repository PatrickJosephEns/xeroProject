import React, { useState, useEffect, location, Link} from "react";
import '../../App.css';
 
function Home() {

  return (   
          <div>
            <img className = 'homeImg' src='imgs/XeroIllustration.jpg'></img>
            <p>Xero is a New Zealand domiciled public technology company,</p>
            <p> listed on the Australian Securities Exchange. Xero is a cloud-based </p> 
            <p>accounting software platform for small and medium-sized businesses.</p>
          </div>
  );
}
 
export default Home;
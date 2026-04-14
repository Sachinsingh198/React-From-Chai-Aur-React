import { useState } from 'react'
import Header from "./components/Header.jsx";

function App() {

    const [isLive, setIsLive] = useState(false);

  return(
      <>
          <div className="min-h-screen bg-slate-900 p-8">
              <Header isLive = {isLive}/>
          </div>

        {/*/!*Header *!/*/}
        {/*<div>*/}

        {/*  /!*Main Header *!/*/}
        {/*  <div>*/}
        {/*    <h1>*/}
        {/*      <span>WaMa</span> IoT Device Monitor*/}
        {/*    </h1>*/}
        {/*      <p>*/}
        {/*          Real Time Waste Analytics for your Raspberry Pi*/}
        {/*      </p>*/}
        {/*  </div>*/}

        {/*  /!*Live Tracking Logo *!/*/}
        {/*  <h2>Start Live Tracking</h2>*/}
        {/*</div>*/}

        {/*  /!*Stats Row *!/*/}
        {/*  <div>*/}
        {/*      /!*Total Bins *!/*/}


        {/*      /!*Action Needed *!/*/}

        {/*      /!*Network Statis *!/*/}


        {/*  </div>*/}

        {/*  /!*Sensor Grid *!/*/}

        {/*  <div>*/}
        {/*      /!*Main Gate *!/*/}


        {/*      /!*Food Court*!/*/}

        {/*      /!*Admin Block *!/*/}
        {/*  </div>*/}
      </>
  )
}

export default App;

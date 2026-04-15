import { useState } from 'react'
import Header from "./components/Header.jsx";
import StatsCard from "./components/StatsCard.jsx";
import { Trash2, AlertTriangle, Wifi } from 'lucide-react';

function App() {

    const [isLive, setIsLive] = useState(false);

  return(
      <>
          <div className="min-h-screen bg-slate-900 p-8">
              <Header isLive = {isLive}/>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <StatsCard
                      label="Total Bins"
                      value="03"
                      icon={Trash2}
                      colorClass="text-sky-400"
                  />
                  <StatsCard
                      label="Action Needed"
                      value="01"
                      icon={AlertTriangle}
                      colorClass="text-amber-400"
                  />
                  <StatsCard
                      label="Network"
                      value="Optimal"
                      icon={Wifi}
                      colorClass="text-emerald-400"
                  />
              </div>

          </div>

        {/*/!*Header *!/*/}
        {/*<div>*/}

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

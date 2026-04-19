import { useState } from 'react'
import Header from "./components/Header.jsx";
import StatsCard from "./components/StatsCard.jsx";
import { Trash2, AlertTriangle, Wifi } from 'lucide-react';
import SensorCard from "./components/SensorCard.jsx";

function App() {

    const [isLive, setIsLive] = useState(false);
    const [bins, setBins] = useState([
        { id: 1, location: "Main Gate", fillLevel: 45, battery: 90, temp: 24 },
        { id: 2, location: "Food Court", fillLevel: 88, battery: 15, temp: 28 },
        { id: 3, location: "Admin Block", fillLevel: 12, battery: 75, temp: 22 },
        { id: 3, location: "Admin Block", fillLevel: 12, battery: 75, temp: 22 }
    ]);

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {
                      bins.map((bin) => (
                          <SensorCard
                            key = {bin.id}
                            location={bin.location}
                            fillLevel={bin.fillLevel}
                            battery={bin.battery}
                            temp={bin.temp}
                          />
                      ))
                  }
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

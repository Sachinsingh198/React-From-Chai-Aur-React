import {useEffect, useState} from 'react'
import Header from "./components/Header.jsx";
import StatsCard from "./components/StatsCard.jsx";
import { Trash2, AlertTriangle, Wifi } from 'lucide-react';
import SensorCard from "./components/SensorCard.jsx";

function App() {

    const [isLive, setIsLive] = useState(false);

    const toggleTracking = () => {
        setIsLive(!isLive);
    }

    useEffect(() => {
        let interval;

        // 1. Only start the interval if isLive is true
        if (isLive) {
            interval = setInterval(() => {
                setBins((prevBins) =>
                    // 2. Use implicit return (no curly braces) or add the return keyword
                    prevBins.map((bin) => ({
                        ...bin,
                        // 3. Fix the typo: fillLevel
                        fillLevel: Math.min(100, Math.max(0, bin.fillLevel + (Math.random() > 0.5 ? 2 : -1)))
                    }))
                );
            }, 1000); // Set a duration (e.g., 1000ms = 1s)
        }

        // 4. Cleanup: Kills the timer when isLive becomes false or component unmounts
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isLive]);


    const [bins, setBins] = useState([
        { id: 1, location: "Main Gate", fillLevel: 45, battery: 90, temp: 24 },
        { id: 2, location: "Food Court", fillLevel: 88, battery: 15, temp: 28 },
        { id: 3, location: "Admin Block", fillLevel: 12, battery: 75, temp: 22 },
        { id: 4, location: "Admin Calc", fillLevel: 22, battery: 26, temp: 22 }
    ]);

    // Calculate total bins
    const totalBins = bins.length;

// Calculate how many bins need action (Fill Level > 80)
    const actionNeeded = bins.filter(bin => bin.fillLevel >= 80).length;

// Calculate system health (just an example logic)
    const isSystemHealthy = bins.every(bin => bin.battery > 10);

  return(
      <>
          <div className="min-h-screen bg-slate-900 p-8">
              <Header isLive = {isLive} toggleTracking = {toggleTracking}/>
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
                            isLive = {isLive}
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

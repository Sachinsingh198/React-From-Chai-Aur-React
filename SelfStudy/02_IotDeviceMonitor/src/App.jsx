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


    const [bins, setBins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newLocation, setNewLocation] = useState("");

    const fetchBins = async () => {
        try{
            setIsLoading(true);
            const response = await fetch("https://dummyjson.com/products/category/smartphones");
            if(!response.ok){
                throw new Error("Network response not ok");
            }

            const data = await response.json();

            const formattedData = data.products.map(item => ({
                id : item.id,
                location : item.title,
                fillLevel : Math.floor(Math.random() * 100),
                battery : item.stock,
                temp : Math.floor(Math.random() * 100),
            }));

            setBins(formattedData)
            setError(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchBins()
    }, []);

    const handleAddBin = () => {
        if(newLocation.trim() === "") return;
        const newBin = {
            id : Date.now(),
            location : newLocation,
            fillLevel: 0,
            battery: 100,
            temp: 20
        }

        setBins([...bins, newBin])
        setNewLocation("");
    }

    const deleteBin = (id) => {
        const updatedBins = bins.filter(bin => bin.id !== id);
        setBins(updatedBins)
    }


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
                      value={bins.length} // Dynamic count
                      icon={Trash2}
                      colorClass="text-sky-400"
                  />
                  <StatsCard
                      label="Action Needed"
                      value={actionNeeded} // Dynamic count from your filter logic
                      icon={AlertTriangle}
                      colorClass="text-amber-400"
                  />
                  <StatsCard
                      label="Network"
                      value={isSystemHealthy ? "Optimal" : "Low Battery"} // Dynamic status
                      icon={Wifi}
                      colorClass={isSystemHealthy ? "text-emerald-400" : "text-red-400"}
                  />
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-10">
                  <h2 className="text-white font-bold mb-4">Register New IoT Bin</h2>
                  <div className="flex gap-4">
                      <input
                          type="text"
                          placeholder="Enter Bin Location (e.g. Library)"
                          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition-colors"
                          // 1. Bind value to state
                          value={newLocation}
                          // 2. Update state on every keystroke
                          onChange={(e) => setNewLocation(e.target.value)}
                          onKeyDown={(e) => {
                              if(e.key === "Enter"){
                                  handleAddBin();
                              }
                          }}
                      />
                      <button
                          className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 rounded-lg transition-colors cursor-pointer"
                          onClick={handleAddBin}
                      >
                          Add Bin
                      </button>
                  </div>
              </div>
              {isLoading && <p className="text-sky-400 animate-pulse">Connecting to IoT Cloud...</p>}
              {error && <p className="text-red-400">Error: {error}</p>}

              {!isLoading && !error && (

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {bins.map(bin => <SensorCard key={bin.id} id={bin.id} {...bin} isLive={isLive} ondelete = {deleteBin} />)}
                  </div>
              )}


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

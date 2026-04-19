import React from 'react';
import {Battery, Thermometer, Trash2, Wifi} from 'lucide-react';

const SensorCard = ({location, fillLevel, temp, battery}) => {
    const isCritical = fillLevel >= 80;
    const isWarning = fillLevel >= 50 && fillLevel < 80;

    const barColor = isCritical ? 'bg-red-500' : isWarning ? 'bg-amber-500' : "bg-sky-500";

    return (
        <div className="bg-slate-800/50 rounded-2xl border-slate-700 shadow-xl p-4 ">
            {/*Title */}

            <div className="flex justify-between">
                <div className="bg-slate-500 p-4 rounded-2xl border-slate-300 shadow-2xlw">
                    <Trash2 size = {48} className="text-green-400"/>
                </div>

                <div className="flex gap-4">
                    <Wifi className="text-green-400"/>
                    <span className="text-slate-400 font-medium">Connected</span>
                </div>
            </div>

            <h3 className="text-slate-100 font-bold text-lg mb-4">
                {location}
            </h3>
            {/*progress bar */}
            <div className="space-y-2 mb-6">
                <div
                    className="flex justify-between text-sm"
                >
                    <span className="text-slate-400 font-medium">Fill Level</span>
                    <span className={`font-bold ${fillLevel > 80 ? 'text-red-400' : 'text-slate-200'}`}>{fillLevel}%</span>
                </div>

                {/* The Gray Track */}
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    {/* The Dynamic Fill */}
                    <div
                        className={`h-full transition-all duration-700 ease-in-out ${barColor}`}
                        style={{width : `${fillLevel}%`}}
                    >
                    </div>

                </div>

                {/*The Bottom Metrics*/}
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Battery size={16} className={battery < 20 ? "text-red-400 animate-pulse" : "text-slate-400"} />
                        <span className="text-sm font-medium">{battery}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Thermometer size={16} className="text-slate-400"/>
                        <span className="text-sm font-medium">{temp}</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SensorCard;
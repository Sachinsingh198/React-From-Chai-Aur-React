import React from 'react';
import {RefreshCcw} from "lucide-react";

const Header = ({isLive}) => {
    return (
        <header
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 p-6"
        >
            {/* Title Group */}
            <div>
                <h1 className = "text-3xl font-extrabold text-green-400 tracking-tight" >
                    <span className="text-black">WaMa</span> IoT Monitor
                </h1>

                <p
                    className="text-slate-400 font-medium"
                >
                    Real-time waste analytics for your Raspberry Pi 5
                </p>
            </div>

            {/* Status Indicator Area */}
            <div className="flex items-center bg-slate-800 gap-2 rounded-full p-2 pr-6 border  border-slate-400 shadow-inner cursor-pointer">
                {/* Dynamic Pulse Dot: Green if Live, Red/Gray if stopped */}
                <div className={`w-3 h-3 rounded-full ml-2 ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`}>

                </div>
                <RefreshCcw/>
                <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
                     {isLive ? "System Live" : "System Standby"}
                </span>
            </div>
        </header>
    )
}

export default Header;
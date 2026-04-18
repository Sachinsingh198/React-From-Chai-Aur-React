import React from 'react';

const StatsCard = ({label, value, icon : Icon, colorClass}) => {
    return (
        <div className="flex items-center bg-slate-800/50 rounded-2xl border-slate-700 shadow-xl gap-2 m-4 p-3">
            <div className={`rounded-xl bg-slate-500 p-5 m-4 ${colorClass}`}>
                {/*Icon */}
                <Icon size = {24}/>
            </div>
            <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{label}</p>
                <p className="text-xl font-black text-white mt-1">{value}</p>
                <div>"Hello</div>
            </div>

        </div>
    )
}

export default StatsCard;
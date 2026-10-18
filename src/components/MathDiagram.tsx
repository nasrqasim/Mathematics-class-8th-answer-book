import React from 'react';

interface MathDiagramProps {
  type: string;
  data?: any;
  title?: string;
}

export const MathDiagram: React.FC<MathDiagramProps> = ({ type, data, title }) => {
  if (type === 'number-line') {
    return (
      <div className="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          {title || "Real Number Line Representation"}
        </div>
        <svg viewBox="0 0 700 90" className="w-full max-w-2xl mx-auto h-auto text-slate-700 dark:text-slate-300">
          {/* Main Axis */}
          <line x1="30" y1="45" x2="670" y2="45" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="25,45 35,40 35,50" fill="currentColor" />
          <polygon points="675,45 665,40 665,50" fill="currentColor" />

          {/* Ticks from -5 to +5 */}
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((val, idx) => {
            const x = 70 + idx * 56;
            return (
              <g key={val}>
                <line x1={x} y1="37" x2={x} y2="53" stroke="currentColor" strokeWidth={val === 0 ? "2.5" : "1.5"} />
                <text
                  x={x}
                  y="72"
                  textAnchor="middle"
                  className={`text-xs font-mono select-none ${val === 0 ? 'font-bold fill-blue-600 dark:fill-blue-400' : 'fill-slate-600 dark:fill-slate-400'}`}
                >
                  {val > 0 ? `+${val}` : val}
                </text>
              </g>
            );
          })}

          {/* Example highlighted points */}
          <circle cx="350" cy="45" r="5" className="fill-blue-600" />
          <circle cx="557" cy="45" r="6" className="fill-emerald-600 animate-pulse" />
          <text x="557" y="25" textAnchor="middle" className="text-xs font-bold fill-emerald-600">3.7</text>

          <circle cx="98" cy="45" r="6" className="fill-rose-600" />
          <text x="98" y="25" textAnchor="middle" className="text-xs font-bold fill-rose-600">-4.5</text>
        </svg>
      </div>
    );
  }

  if (type === 'venn') {
    return (
      <div className="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          {title || "Venn Diagram Representation"}
        </div>
        <svg viewBox="0 0 500 280" className="w-full max-w-md mx-auto h-auto">
          {/* Universal set box */}
          <rect x="20" y="20" width="460" height="240" rx="12" fill="none" stroke="currentColor" strokeWidth="2" className="stroke-slate-400 dark:stroke-slate-600" />
          <text x="40" y="50" className="text-sm font-bold fill-slate-700 dark:fill-slate-300">Universal Set (U)</text>

          {/* Circle A */}
          <circle cx="190" cy="140" r="85" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />
          <text x="140" y="145" className="text-base font-bold fill-blue-700 dark:fill-blue-300">Set A</text>

          {/* Circle B */}
          <circle cx="310" cy="140" r="85" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
          <text x="350" y="145" className="text-base font-bold fill-emerald-700 dark:fill-emerald-300">Set B</text>

          {/* Intersection Label */}
          <text x="250" y="145" textAnchor="middle" className="text-xs font-semibold fill-purple-700 dark:fill-purple-300">
            A ∩ B
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'triangle') {
    return (
      <div className="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          {title || "Right-Angled Triangle (Pythagoras Theorem)"}
        </div>
        <svg viewBox="0 0 350 220" className="w-full max-w-xs mx-auto h-auto">
          {/* Triangle ABC */}
          <polygon points="60,180 260,180 260,40" className="fill-indigo-500/10 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
          {/* Right angle indicator at C(260, 180) */}
          <rect x="235" y="155" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.5" className="stroke-slate-500" />
          <circle cx="248" cy="168" r="2" fill="currentColor" className="text-slate-500" />

          {/* Vertices */}
          <text x="40" y="195" className="text-sm font-bold fill-slate-800 dark:fill-slate-200">A</text>
          <text x="270" y="195" className="text-sm font-bold fill-slate-800 dark:fill-slate-200">C (90°)</text>
          <text x="270" y="35" className="text-sm font-bold fill-slate-800 dark:fill-slate-200">B</text>

          {/* Side labels */}
          <text x="150" y="200" textAnchor="middle" className="text-xs font-semibold fill-slate-600 dark:fill-slate-400">Base (b)</text>
          <text x="280" y="115" className="text-xs font-semibold fill-slate-600 dark:fill-slate-400">Perpendicular (a)</text>
          <text x="135" y="100" textAnchor="middle" className="text-xs font-bold fill-indigo-600 dark:fill-indigo-400">Hypotenuse (c)</text>
        </svg>
      </div>
    );
  }

  if (type === 'spinner') {
    return (
      <div className="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
          {title || "Probability Spinner Model"}
        </div>
        <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto">
          {/* 6 Sectors */}
          <circle cx="100" cy="100" r="90" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="2" fill="none" />
          {/* Sector 1: a */}
          <path d="M 100 100 L 100 10 A 90 90 0 0 1 177.94 55 Z" className="fill-amber-400/80 stroke-white" strokeWidth="2" />
          <text x="125" y="55" className="font-bold text-sm fill-slate-900">a</text>

          {/* Sector 2: b */}
          <path d="M 100 100 L 177.94 55 A 90 90 0 0 1 177.94 145 Z" className="fill-emerald-400/80 stroke-white" strokeWidth="2" />
          <text x="145" y="105" className="font-bold text-sm fill-slate-900">b</text>

          {/* Sector 3: b */}
          <path d="M 100 100 L 177.94 145 A 90 90 0 0 1 100 190 Z" className="fill-teal-400/80 stroke-white" strokeWidth="2" />
          <text x="125" y="155" className="font-bold text-sm fill-slate-900">b</text>

          {/* Sector 4: d */}
          <path d="M 100 100 L 100 190 A 90 90 0 0 1 22.06 145 Z" className="fill-rose-400/80 stroke-white" strokeWidth="2" />
          <text x="70" y="155" className="font-bold text-sm fill-slate-900">d</text>

          {/* Sector 5: c */}
          <path d="M 100 100 L 22.06 145 A 90 90 0 0 1 22.06 55 Z" className="fill-sky-400/80 stroke-white" strokeWidth="2" />
          <text x="45" y="105" className="font-bold text-sm fill-slate-900">c</text>

          {/* Sector 6: a */}
          <path d="M 100 100 L 22.06 55 A 90 90 0 0 1 100 10 Z" className="fill-amber-400/80 stroke-white" strokeWidth="2" />
          <text x="70" y="55" className="font-bold text-sm fill-slate-900">a</text>

          {/* Center Pin & Spinner Needle */}
          <line x1="100" y1="100" x2="135" y2="40" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="142,32 130,45 140,48" fill="#dc2626" />
          <circle cx="100" cy="100" r="7" className="fill-slate-900 stroke-white stroke-2" />
        </svg>
      </div>
    );
  }

  return null;
};

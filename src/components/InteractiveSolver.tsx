import React, { useState } from 'react';
import { MathRenderer } from './MathRenderer';
import { Calculator, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export const InteractiveSolver: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pythagoras' | 'identity' | 'currency' | 'inheritance'>('pythagoras');

  // Pythagoras State
  const [pythA, setPythA] = useState<string>('6');
  const [pythB, setPythB] = useState<string>('8');
  const [pythResult, setPythResult] = useState<{ c: number; steps: string[] } | null>(null);

  // Identity State
  const [termA, setTermA] = useState<string>('2x');
  const [termB, setTermB] = useState<string>('5');
  const [identityType, setIdentityType] = useState<'(a+b)2' | '(a-b)2' | 'a2-b2'>('(a+b)2');

  // Currency State
  const [pkrAmount, setPkrAmount] = useState<string>('1000');
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'CAD' | 'CNY'>('USD');

  // Inheritance State
  const [estateAmount, setEstateAmount] = useState<string>('1800000');
  const [numSons, setNumSons] = useState<number>(1);
  const [numDaughters, setNumDaughters] = useState<number>(2);
  const [hasWidow, setHasWidow] = useState<boolean>(true);

  // Solve Pythagoras
  const handleSolvePythagoras = () => {
    const a = parseFloat(pythA);
    const b = parseFloat(pythB);
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) return;
    const c2 = a * a + b * b;
    const c = Math.sqrt(c2);
    setPythResult({
      c,
      steps: [
        `c^2 = a^2 + b^2`,
        `c^2 = (${a})^2 + (${b})^2 = ${a * a} + ${b * b} = ${c2}`,
        `c = \\sqrt{${c2}} = ${Number.isInteger(c) ? c : c.toFixed(3)}`
      ]
    });
  };

  // Currency Rates from Grade 8 Textbook
  const rates = {
    USD: 270,
    EUR: 360,
    GBP: 360,
    CAD: 200,
    CNY: 39
  };

  // Calculate Inheritance
  const calculateInheritance = () => {
    const estate = parseFloat(estateAmount) || 0;
    if (estate <= 0) return null;

    let widowShare = 0;
    const totalChildren = numSons + numDaughters;

    if (hasWidow) {
      widowShare = totalChildren > 0 ? estate * (1 / 8) : estate * (1 / 4);
    }

    const remaining = estate - widowShare;
    const totalParts = numSons * 2 + numDaughters * 1;

    let sonShare = 0;
    let daughterShare = 0;

    if (totalParts > 0) {
      const partValue = remaining / totalParts;
      sonShare = partValue * 2;
      daughterShare = partValue;
    }

    return {
      estate,
      widowShare,
      remaining,
      sonShare,
      daughterShare
    };
  };

  const inheritance = calculateInheritance();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Interactive Math Workbench</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Real-time step-by-step calculator based on Grade 8 Balochistan Curriculum
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-3">
        {[
          { id: 'pythagoras', label: 'Pythagoras Solver' },
          { id: 'identity', label: 'Algebraic Identities' },
          { id: 'currency', label: 'Currency Converter' },
          { id: 'inheritance', label: 'Islamic Inheritance' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pythagoras Tab */}
      {activeTab === 'pythagoras' && (
        <div className="space-y-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Calculate the unknown hypotenuse <MathRenderer content="$c$" /> given legs <MathRenderer content="$a$" /> and <MathRenderer content="$b$" />:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Base / Perpendicular $a$ (cm or m)
              </label>
              <input
                type="number"
                value={pythA}
                onChange={(e) => setPythA(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 6"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Base / Perpendicular $b$ (cm or m)
              </label>
              <input
                type="number"
                value={pythB}
                onChange={(e) => setPythB(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. 8"
              />
            </div>
          </div>
          <button
            onClick={handleSolvePythagoras}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
          >
            Calculate Hypotenuse <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {pythResult && (
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> Step-by-Step Solution:
              </div>
              {pythResult.steps.map((st, i) => (
                <div key={i} className="text-sm font-mono text-slate-800 dark:text-slate-200">
                  <MathRenderer content={`$$${st}$$`} />
                </div>
              ))}
              <div className="pt-2 border-t border-blue-200 dark:border-blue-900 font-bold text-base text-blue-900 dark:text-blue-100">
                Hypotenuse <MathRenderer content={`$c = ${Number.isInteger(pythResult.c) ? pythResult.c : pythResult.c.toFixed(3)}$`} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Identity Tab */}
      {activeTab === 'identity' && (
        <div className="space-y-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Expand algebraic expressions using standard algebraic identities:
          </div>
          <div className="flex gap-2">
            {[
              { id: '(a+b)2', label: '(a + b)²' },
              { id: '(a-b)2', label: '(a - b)²' },
              { id: 'a2-b2', label: '(a + b)(a - b)' }
            ].map((id) => (
              <button
                key={id.id}
                onClick={() => setIdentityType(id.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border ${
                  identityType === id.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-bold'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                {id.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Term $a$ (e.g. 2x, 5a, 7)
              </label>
              <input
                type="text"
                value={termA}
                onChange={(e) => setTermA(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Term $b$ (e.g. 5, 3y, 11)
              </label>
              <input
                type="text"
                value={termB}
                onChange={(e) => setTermB(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-500">Expanded Result:</div>
            {identityType === '(a+b)2' && (
              <div>
                <MathRenderer content={`$$(${termA} + ${termB})^2 = (${termA})^2 + 2(${termA})(${termB}) + (${termB})^2$$`} />
              </div>
            )}
            {identityType === '(a-b)2' && (
              <div>
                <MathRenderer content={`$$(${termA} - ${termB})^2 = (${termA})^2 - 2(${termA})(${termB}) + (${termB})^2$$`} />
              </div>
            )}
            {identityType === 'a2-b2' && (
              <div>
                <MathRenderer content={`$$(${termA} + ${termB})(${termA} - ${termB}) = (${termA})^2 - (${termB})^2$$`} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Currency Converter */}
      {activeTab === 'currency' && (
        <div className="space-y-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Official currency rates based on Chapter 2 (Approximation and Estimation):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Pakistani Rupees (PKR)
              </label>
              <input
                type="number"
                value={pkrAmount}
                onChange={(e) => setPkrAmount(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Select Foreign Currency
              </label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value as any)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              >
                <option value="USD">USD (United States Dollar - 270 PKR)</option>
                <option value="EUR">EUR (Euro - 360 PKR)</option>
                <option value="GBP">GBP (British Pound - 360 PKR)</option>
                <option value="CAD">CAD (Canadian Dollar - 200 PKR)</option>
                <option value="CNY">CNY (Chinese Yuan - 39 PKR)</option>
              </select>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
            <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-1">
              Conversion Working:
            </div>
            <div className="text-sm font-mono text-slate-800 dark:text-slate-200">
              <MathRenderer
                content={`$$\\text{Rate: } 1\\text{ ${selectedCurrency}} = ${rates[selectedCurrency]}\\text{ PKR}$$`}
              />
              <MathRenderer
                content={`$$\\text{Value} = \\frac{${pkrAmount}}{${rates[selectedCurrency]}} = ${(
                  parseFloat(pkrAmount || '0') / rates[selectedCurrency]
                ).toFixed(4)}\\text{ ${selectedCurrency}}$$`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Islamic Inheritance */}
      {activeTab === 'inheritance' && (
        <div className="space-y-4">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            Distribution according to Islamic inheritance principles (Chapter 6):
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
              Net Estate Value (PKR)
            </label>
            <input
              type="number"
              value={estateAmount}
              onChange={(e) => setEstateAmount(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Widow</label>
              <select
                value={hasWidow ? 'yes' : 'no'}
                onChange={(e) => setHasWidow(e.target.value === 'yes')}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              >
                <option value="yes">Present</option>
                <option value="no">None</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Number of Sons</label>
              <input
                type="number"
                min="0"
                value={numSons}
                onChange={(e) => setNumSons(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Number of Daughters</label>
              <input
                type="number"
                min="0"
                value={numDaughters}
                onChange={(e) => setNumDaughters(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>

          {inheritance && (
            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 space-y-2 text-xs">
              <div className="font-bold text-purple-900 dark:text-purple-200 text-sm">Shares Distribution:</div>
              {hasWidow && (
                <div className="flex justify-between py-1 border-b border-purple-200/50 dark:border-purple-800">
                  <span>Widow's Share (1/8 of estate):</span>
                  <span className="font-bold font-mono">Rs. {inheritance.widowShare.toLocaleString()}</span>
                </div>
              )}
              {numSons > 0 && (
                <div className="flex justify-between py-1 border-b border-purple-200/50 dark:border-purple-800">
                  <span>Each Son's Share ({numSons} sons, 2 parts each):</span>
                  <span className="font-bold font-mono text-blue-600 dark:text-blue-400">
                    Rs. {Math.round(inheritance.sonShare).toLocaleString()}
                  </span>
                </div>
              )}
              {numDaughters > 0 && (
                <div className="flex justify-between py-1">
                  <span>Each Daughter's Share ({numDaughters} daughters, 1 part each):</span>
                  <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    Rs. {Math.round(inheritance.daughterShare).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

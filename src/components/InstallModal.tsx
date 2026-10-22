import React, { useState } from 'react';
import {
  X,
  Download,
  Smartphone,
  Monitor,
  CheckCircle2,
  Share2,
  PlusSquare,
  Sparkles,
  FileCode,
  Image as ImageIcon
} from 'lucide-react';

interface InstallModalProps {
  onClose: () => void;
  deferredPrompt: any;
  isInstalled: boolean;
  onInstallSuccess?: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  onClose,
  deferredPrompt,
  isInstalled,
  onInstallSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'install' | 'instructions'>('install');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleNativeInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          onInstallSuccess?.();
          onClose();
        }
      } catch (err) {
        console.error('Install prompt error:', err);
      }
    } else {
      setActiveTab('instructions');
    }
  };

  const handleDownloadShortcut = () => {
    const currentUrl = window.location.origin + window.location.pathname;
    const shortcutContent = `[InternetShortcut]\r\nURL=${currentUrl}\r\nIconIndex=0\r\nIconFile=${currentUrl}favicon.svg\r\n`;
    const blob = new Blob([shortcutContent], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Grade-8-Mathematics-Keybook.url';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess('Desktop shortcut (.url) downloaded successfully!');
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  const handleDownloadIcon = () => {
    const link = document.createElement('a');
    link.href = '/icon-512.png';
    link.download = 'Math-8-Icon.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess('High-resolution App Icon downloaded!');
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 font-bold overflow-hidden">
              <img src="/icon-192.png" alt="App Icon" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>Install App</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-md">
                  PWA
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fast 1-click access anytime on phone, tablet or PC
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 pt-3 gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('install')}
            className={`pb-2.5 transition-colors border-b-2 cursor-pointer ${
              activeTab === 'install'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            Quick Install & Download
          </button>
          <button
            onClick={() => setActiveTab('instructions')}
            className={`pb-2.5 transition-colors border-b-2 cursor-pointer ${
              activeTab === 'instructions'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            Mobile & Browser Guide
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          {activeTab === 'install' ? (
            <div className="space-y-4">
              {/* Feature highlight */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/50 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100">
                    Works Offline & Instant Launch
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Install to your device as a standalone lightweight app with no URL bar. All 233 textbook solutions remain readily available!
                  </div>
                </div>
              </div>

              {/* Action 1: Native PWA Install Button */}
              {isInstalled ? (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                    App is already installed as a standalone web application!
                  </div>
                </div>
              ) : deferredPrompt ? (
                <button
                  onClick={handleNativeInstall}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install App on this Device</span>
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab('instructions')}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>How to Install App (Mobile / PC Guide)</span>
                </button>
              )}

              {/* Action 2: Direct Shortcut File Download */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Instant Shortcut Files & Icon Downloads:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={handleDownloadShortcut}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all text-left flex items-start gap-2.5 group cursor-pointer"
                  >
                    <FileCode className="w-4 h-4 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Desktop Shortcut (.url)
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Place on desktop for instant 1-click launch
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleDownloadIcon}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all text-left flex items-start gap-2.5 group cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 text-amber-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Download App Icon (.png)
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        High-res 512×512 app logo badge
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Guide Tab */
            <div className="space-y-4 text-xs">
              {/* Android Guide */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>Android (Google Chrome / Edge)</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-1">
                  <li>Tap the three vertical dots menu (<span className="font-bold">⋮</span>) in top right.</li>
                  <li>Select <span className="font-semibold text-slate-900 dark:text-slate-100">"Install app"</span> or <span className="font-semibold text-slate-900 dark:text-slate-100">"Add to Home screen"</span>.</li>
                  <li>Confirm by tapping <span className="font-semibold text-slate-900 dark:text-slate-100">Install</span>. The app icon will appear on your phone screen!</li>
                </ol>
              </div>

              {/* iOS Safari Guide */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
                  <Share2 className="w-4 h-4 text-blue-600" />
                  <span>iPhone / iPad (Safari)</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-1">
                  <li>Tap the <span className="font-semibold text-slate-900 dark:text-slate-100">Share button</span> (square with arrow pointing up).</li>
                  <li>Scroll down and tap <span className="font-semibold text-slate-900 dark:text-slate-100">Add to Home Screen</span>.</li>
                  <li>Tap <span className="font-semibold text-slate-900 dark:text-slate-100">Add</span> in the top right corner.</li>
                </ol>
              </div>

              {/* Desktop Chrome / Edge Guide */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
                  <Monitor className="w-4 h-4 text-indigo-600" />
                  <span>Windows / Mac / Linux (Chrome & Edge)</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-1">
                  <li>Look for the <span className="font-semibold text-slate-900 dark:text-slate-100">Install icon</span> (monitor/down arrow) in the address bar.</li>
                  <li>Or click the browser menu (<span className="font-bold">⋮</span>) &gt; <span className="font-semibold text-slate-900 dark:text-slate-100">Cast, save and share</span> &gt; <span className="font-semibold text-slate-900 dark:text-slate-100">Install page as app</span>.</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            Balochistan Textbook Board Class 8 Math
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

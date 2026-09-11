import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share2, PlusSquare, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall.ts';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(true);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed or installed
    const dismissed = (localStorage.getItem('champz_pwa_banner_dismissed') || localStorage.getItem('clarity_pwa_banner_dismissed')) === 'true';
    const installed = (localStorage.getItem('champz_pwa_installed') || localStorage.getItem('clarity_pwa_installed')) === 'true';

    if (!dismissed && !installed && !isInstalled) {
      // Delay presentation slightly so page renders smoothly first
      const timer = setTimeout(() => {
        setIsDismissed(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInstalled]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('champz_pwa_banner_dismissed', 'true');
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstallSuccess(true);
        setTimeout(() => {
          setIsDismissed(true);
        }, 2000);
      }
    } else {
      // Open instructions for iOS or desktop where native event is not yet triggered
      setShowInstructionsModal(true);
    }
  };

  // If already running in standalone app mode, hide banner
  if (isInstalled) {
    return null;
  }

  return (
    <>
      {/* Subtle Floating Install Banner / Pill */}
      {!isDismissed && (
        <aside
          aria-label="Install App Banner"
          id="pwa-install-banner"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="relative flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#111827]/98 backdrop-blur-xl border border-[#1E293B] shadow-2xl shadow-black/90 text-white">
            {/* App Icon + Text */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0D1220] border border-[#3B82F6]/40 p-1 flex items-center justify-center shadow-md shadow-black/50">
                <img 
                  src="/pwa-192x192.png" 
                  alt="Champz Digital Icon" 
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    // Fallback to SVG if PNG is loading
                    (e.target as HTMLImageElement).src = '/icon.svg';
                  }}
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold tracking-tight text-white truncate">
                    Install Champz Digital App
                  </h3>
                  <span className="hidden xs:inline-flex px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-[#2563EB]/20 text-[#60A5FA] border border-[#3B82F6]/30">
                    PWA
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8] truncate">
                  Fast access, offline ready &amp; native feel
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {installSuccess ? (
                <div className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#60A5FA] bg-[#2563EB]/15 rounded-lg border border-[#3B82F6]/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Installed!</span>
                </div>
              ) : (
                <button
                  type="button"
                  id="install-pwa-button"
                  onClick={handleInstallClick}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md shadow-[#2563EB]/30 transition-all hover:scale-102 active:scale-98 cursor-pointer"
                  title="Install Champz Digital to Home Screen or Desktop"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Install</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleDismiss}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Dismiss install banner"
                aria-label="Close install banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Manual Installation Guide Modal (for iOS or browsers without native beforeinstallprompt) */}
      {showInstructionsModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-guide-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-sm rounded-2xl bg-[#111827] border border-[#1E293B] p-5 shadow-2xl shadow-black text-white space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1E293B]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#2563EB]/15 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6]">
                  {isIOS ? <Smartphone className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
                </div>
                <div>
                  <h4 id="pwa-guide-title" className="text-sm font-bold text-white">
                    {isIOS ? 'Install on iPhone / iPad' : 'Install Champz Digital'}
                  </h4>
                  <p className="text-[11px] text-[#94A3B8]">Add to your device home screen</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowInstructionsModal(false)}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Instructions list */}
            {isIOS ? (
              <div className="space-y-3 text-xs text-[#94A3B8]">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0D1220] border border-[#1E293B]">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tap the Share Button</p>
                    <p className="text-[#94A3B8] mt-0.5">
                      In the Safari browser bottom toolbar, tap the Share icon (<Share2 className="inline w-3 h-3 text-[#3B82F6]" />).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0D1220] border border-[#1E293B]">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-white">Choose &apos;Add to Home Screen&apos;</p>
                    <p className="text-[#94A3B8] mt-0.5">
                      Scroll down in the action sheet and select <strong>Add to Home Screen</strong> (<PlusSquare className="inline w-3 h-3 text-[#3B82F6]" />).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0D1220] border border-[#1E293B]">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tap &apos;Add&apos;</p>
                    <p className="text-[#94A3B8] mt-0.5">
                      Confirm by tapping <strong>Add</strong> in the top right. Champz Digital will appear alongside your native apps!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-[#94A3B8]">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0D1220] border border-[#1E293B]">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-white">Browser Address Bar Icon</p>
                    <p className="text-[#94A3B8] mt-0.5">
                      In Google Chrome or Microsoft Edge, look for the <strong>Install</strong> icon (<Download className="inline w-3 h-3 text-[#3B82F6]" />) on the right side of the address bar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0D1220] border border-[#1E293B]">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-white">Or Browser Menu (⋮)</p>
                    <p className="text-[#94A3B8] mt-0.5">
                      Click the three dots in the top right corner and choose <strong>&apos;Install Champz Digital...&apos;</strong> or <strong>&apos;Add to Home Screen&apos;</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Footer action */}
            <button
              type="button"
              onClick={() => setShowInstructionsModal(false)}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-colors cursor-pointer border border-[#3B82F6]/40 text-center"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

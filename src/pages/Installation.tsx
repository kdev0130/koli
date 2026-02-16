import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Lock, CheckCircle2, Share } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Home, Users, Map } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

// Android Robot Icon
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={className} fill="currentColor">
    <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48l47.94-83a10 10 0 1 0-17.32-10h0l-48.54 84.07a301.25 301.25 0 0 0-246.56 0L116.18 64.45a10 10 0 1 0-17.32 10h0l47.94 83C64.53 202.22 8.24 285.55 0 384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/>
  </svg>
);

// Apple Logo Icon
const AppleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

const ACCESS_CODE = "KOLI2025"; // Change this to your desired access code
const PWA_URL = "https://koli-2bad9.web.app";

export default function Installation() {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios" | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [installError, setInstallError] = useState("");
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [modalPlatform, setModalPlatform] = useState<"android" | "ios" | null>(null);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Capture the install prompt event
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.toUpperCase() === ACCESS_CODE) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid access code. Please try again.");
    }
  };

  const handleInstall = async (platform: "android" | "ios") => {
    setModalPlatform(platform);
    setShowInstallModal(true);
  };

  const confirmInstall = async () => {
    if (!modalPlatform) return;
    
    setSelectedPlatform(modalPlatform);
    setInstallError("");
    setShowInstallModal(false);

    // For iOS, we need to show manual instructions as PWA install can't be triggered programmatically
    if (modalPlatform === "ios" || /iPhone|iPad|iPod/.test(navigator.userAgent)) {
      // Open the PWA URL and show instructions
      window.open(PWA_URL, "_blank");
      return;
    }

    // For Android/Desktop Chrome, use the native install prompt
    if (deferredPrompt) {
      try {
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
          setIsInstalled(true);
          setDeferredPrompt(null);
        } else {
          setInstallError("Installation cancelled. You can try again anytime.");
        }
      } catch (err) {
        console.error('Error during installation:', err);
        setInstallError("Unable to install. Please try adding to home screen manually.");
        // Fallback: open in new tab
        window.open(PWA_URL, "_blank");
      }
    } else {
      // Prompt not available, open URL and show manual instructions
      window.open(PWA_URL, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingNav navItems={navItems} />
      
      {/* Animated background with gold glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-dots">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl -top-48 -left-48 animate-pulse" 
             style={{ background: "radial-gradient(ellipse, hsl(43, 96%, 56%, 0.15) 0%, transparent 70%)" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" 
             style={{ background: "radial-gradient(ellipse, hsl(174, 72%, 46%, 0.1) 0%, transparent 70%)", animationDelay: "700ms" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            <motion.div
              key="access-code"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 relative">
                <GlowingEffect spread={60} glow={true} proximity={100} />
                <div className="relative z-10 space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, hsl(43, 96%, 56%), hsl(38, 90%, 45%))" }}
                  >
                    <Lock className="w-10 h-10 text-background" />
                  </motion.div>
                  
                  <div className="text-center space-y-3">
                    <h1 className="text-3xl font-bold text-foreground">
                      Koli App Installation
                    </h1>
                    <p className="text-muted-foreground text-base">
                      Enter your access code to continue with the installation
                    </p>
                  </div>

                  <form onSubmit={handleAccessSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Enter access code"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary h-12 text-center text-lg tracking-wider uppercase"
                        autoComplete="off"
                      />
                    </div>
                    
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      className="w-full font-semibold h-12 text-base"
                      style={{ 
                        background: "linear-gradient(135deg, hsl(43, 96%, 56%), hsl(38, 90%, 45%))",
                        color: "hsl(222, 47%, 6%)"
                      }}
                    >
                      Verify & Continue
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="installation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto w-24 h-24 rounded-3xl flex items-center justify-center mb-6 gold-glow"
                  style={{ background: "linear-gradient(135deg, hsl(43, 96%, 56%), hsl(38, 90%, 45%))" }}
                >
                  <Download className="w-12 h-12 text-background" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold"
                >
                  Install Koli App
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-lg"
                >
                  Choose your platform to install the Koli app on your device
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Android Installation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card p-6 relative group hover:border-primary/50 transition-colors"
                >
                  <GlowingEffect spread={50} glow={true} proximity={80} />
                  <div className="relative z-10 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center"
                           style={{ background: "linear-gradient(135deg, hsl(142, 71%, 45%), hsl(142, 71%, 35%))" }}>
                        <AndroidIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">Android</h2>
                        <p className="text-muted-foreground">Install on your Android device</p>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => handleInstall("android")}
                      className="w-full font-semibold h-12"
                      disabled={isInstalled}
                      style={{ 
                        background: isInstalled 
                          ? "hsl(222, 30%, 15%)" 
                          : "linear-gradient(135deg, hsl(142, 71%, 45%), hsl(142, 71%, 35%))"
                      }}
                    >
                      {isInstalled ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          Installed
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Install on Android
                        </>
                      )}
                    </Button>
                    
                    {selectedPlatform === "android" && !isInstalled && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-background/50 rounded-lg p-4 space-y-3 border border-border/50"
                      >
                        {deferredPrompt ? (
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(142, 71%, 45%)" }} />
                            <p className="text-sm text-muted-foreground">
                              Click the button above to automatically install the app
                            </p>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(142, 71%, 45%)" }} />
                              <p className="text-sm text-muted-foreground">
                                Tap the <strong className="text-foreground">menu icon (⋮)</strong> in your browser
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(142, 71%, 45%)" }} />
                              <p className="text-sm text-muted-foreground">
                                Select <strong className="text-foreground">"Add to Home Screen"</strong> or <strong className="text-foreground">"Install App"</strong>
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(142, 71%, 45%)" }} />
                              <p className="text-sm text-muted-foreground">
                                Tap <strong className="text-foreground">"Install"</strong> or <strong className="text-foreground">"Add"</strong> to confirm
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(142, 71%, 45%)" }} />
                              <p className="text-sm text-muted-foreground">
                                The Koli app icon will appear on your home screen
                              </p>
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* iOS Installation */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass-card p-6 relative group hover:border-primary/50 transition-colors"
                >
                  <GlowingEffect spread={50} glow={true} proximity={80} />
                  <div className="relative z-10 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center"
                           style={{ background: "linear-gradient(135deg, hsl(211, 100%, 50%), hsl(211, 100%, 40%))" }}>
                        <AppleIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">iOS</h2>
                        <p className="text-muted-foreground">Install on your iPhone or iPad</p>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => handleInstall("ios")}
                      className="w-full font-semibold h-12"
                      disabled={isInstalled}
                      style={{ 
                        background: isInstalled 
                          ? "hsl(222, 30%, 15%)" 
                          : "linear-gradient(135deg, hsl(211, 100%, 50%), hsl(211, 100%, 40%))"
                      }}
                    >
                      {isInstalled ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          Installed
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 mr-2" />
                          Install on iOS
                        </>
                      )}
                    </Button>
                    
                    {selectedPlatform === "ios" && !isInstalled && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-background/50 rounded-lg p-4 space-y-3 border border-border/50"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(211, 100%, 50%)" }} />
                          <p className="text-sm text-muted-foreground">
                            Tap the <strong className="text-foreground">Share button</strong> <Share className="inline w-4 h-4" /> at the bottom of Safari
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(211, 100%, 50%)" }} />
                          <p className="text-sm text-muted-foreground">
                            Scroll down and tap <strong className="text-foreground">"Add to Home Screen"</strong>
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(211, 100%, 50%)" }} />
                          <p className="text-sm text-muted-foreground">
                            Tap <strong className="text-foreground">"Add"</strong> in the top right corner
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(211, 100%, 50%)" }} />
                          <p className="text-sm text-muted-foreground">
                            The Koli app icon will appear on your home screen
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Installation Success Message */}
              {isInstalled && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="glass-card p-6 relative border-2"
                  style={{ borderColor: "hsl(142, 71%, 45%)" }}
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                         style={{ background: "linear-gradient(135deg, hsl(142, 71%, 45%), hsl(142, 71%, 35%))" }}>
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Installation Successful!</h3>
                      <p className="text-muted-foreground">The Koli app has been installed on your device.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Installation Error Message */}
              {installError && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
                    <AlertDescription>{installError}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="glass-card p-4 relative"
              >
                <div className="relative z-10 flex items-start gap-3">
                  <Download className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(43, 96%, 56%)" }} />
                  <p className="text-muted-foreground">
                    After installation, the Koli app will work just like a native app on your device. You can find it on your home screen and use it even with limited connectivity.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Install Confirmation Modal */}
      <AnimatePresence>
        {showInstallModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setShowInstallModal(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setShowInstallModal(false)}
            >
              <div
                className="glass-card p-8 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <GlowingEffect spread={80} glow={true} proximity={120} />
                
                <div className="relative z-10 space-y-6">
                  {/* App Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    className="mx-auto w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl gold-glow"
                    style={{ background: "linear-gradient(135deg, hsl(43, 96%, 56%), hsl(38, 90%, 45%))" }}
                  >
                    {modalPlatform === "android" ? (
                      <AndroidIcon className="w-12 h-12 text-background" />
                    ) : (
                      <AppleIcon className="w-12 h-12 text-background" />
                    )}
                  </motion.div>

                  {/* Title */}
                  <div className="text-center space-y-2">
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-foreground"
                    >
                      Install KOLI App
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted-foreground"
                    >
                      Add the Kingdom of Love International app to your {modalPlatform === "android" ? "Android" : "iOS"} device for quick access
                    </motion.p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 py-4">
                    {[
                      { text: "Works like a native app", delay: 0.4 },
                      { text: "Access from your home screen", delay: 0.5 },
                      { text: "Works with limited connectivity", delay: 0.6 }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: feature.delay }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center"
                             style={{ background: "hsl(43, 96%, 56%, 0.1)" }}>
                          <CheckCircle2 className="w-5 h-5" style={{ color: "hsl(43, 96%, 56%)" }} />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {feature.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-3"
                  >
                    <Button
                      onClick={() => setShowInstallModal(false)}
                      variant="outline"
                      className="flex-1 h-12 border-border hover:bg-muted"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={confirmInstall}
                      className="flex-1 h-12 font-semibold shadow-lg hover:shadow-xl transition-shadow"
                      style={{ 
                        background: "linear-gradient(135deg, hsl(43, 96%, 56%), hsl(38, 90%, 45%))",
                        color: "hsl(222, 47%, 6%)"
                      }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Install Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

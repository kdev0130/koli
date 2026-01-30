import { motion } from "motion/react";
import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Timeline } from "@/components/ui/timeline";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { CompactCountdownTimer } from "@/components/ui/compact-countdown-timer";
import { useStickyBanner } from "@/contexts/StickyBannerContext";
import { Link } from "react-router-dom";
import { Home, Users, Map, Rocket, Users2, Coins, Heart, Globe, CheckCircle2 } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const roadmapData = [
  {
    title: (
      <div className="text-3xl">
        <span className="font-bold">Months 1–2:</span> <span className="text-white">Foundation & Ignition</span>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Rocket className="h-6 w-6" />
          <span className="font-semibold text-lg">Building the Foundation</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Token creation, smart contract audit, website & social launch. Phase 1 launch (~95M tokens) with airdrop to 250k+ waitlist believers.
        </p>
        <div className="space-y-3">
          {[
            "Token creation & smart contract audit",
            "Website & social media launch",
            "Phase 1 launch (~95M tokens)",
            "Airdrop to 250k+ waitlist believers",
            "Community building begins",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="text-3xl">
        <span className="font-bold">Months 3–4:</span> <span className="text-white">Momentum & Early Utility</span>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Coins className="h-6 w-6" />
          <span className="font-semibold text-lg">Building Utility</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Launch staking platform and first merchant pilots. Major community airdrops and expanded marketing to grow the movement.
        </p>
        <div className="space-y-3">
          {[
            "Staking platform goes live",
            "First merchant pilots (online stores)",
            "Major community airdrop",
            "Engagement rewards program",
            "Marketing expansion",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="text-3xl">
        <span className="font-bold">Months 5–6:</span> <span className="text-white">Expansion & Phase 2</span>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Users2 className="h-6 w-6" />
          <span className="font-semibold text-lg">Scaling the Ecosystem</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          E-commerce beta platform rollout with lower prices for $KOLI users. Phase 2 token release with burns and governance features.
        </p>
        <div className="space-y-3">
          {[
            "E-commerce beta platform (lower prices for $KOLI)",
            "Phase 2 token release",
            "Initial token burns",
            "Governance features launch",
            "Strategic partnerships",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="text-3xl">
        <span className="font-bold">Months 7–8:</span> <span className="text-white">Real-World Integration</span>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Heart className="h-6 w-6" />
          <span className="font-semibold text-lg">Taking It Everywhere</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Physical store pilots and major token burns. Ramped staking rewards and community governance voting on ecosystem priorities.
        </p>
        <div className="space-y-3">
          {[
            "Gas stations & physical stores (pilots)",
            "Major milestone burn (100M+)",
            "Staking rewards ramp-up",
            "Community ecosystem voting",
            "Broader adoption push",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="text-3xl">
        <span className="font-bold">Months 9–10:</span> <span className="text-white">Scale & Global Vision</span>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Globe className="h-6 w-6" />
          <span className="font-semibold text-lg">Global Movement</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Full e-commerce & merchant network launch. Phase 3 release and major CEX listings. Stories of real impact across the globe.
        </p>
        <div className="space-y-3">
          {[
            "Full e-commerce & merchant network",
            "Phase 3 release (if momentum strong)",
            "Major CEX listings (Binance, OKX)",
            "Impact reports & success stories",
            "Global adoption push",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const Roadmap = () => {
  const { isBannerVisible } = useStickyBanner();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <StickyBanner className="bg-gradient-to-r from-primary via-gold-light to-primary text-primary-foreground">
        <div className="font-bold text-sm md:text-base drop-shadow-md flex items-center gap-2 whitespace-nowrap flex-nowrap">
          <span>PRESALE STARTS IN:</span>
          <CompactCountdownTimer />
        </div>
      </StickyBanner>
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              10-Month Horizon
            </span>
            <h2 className="text-3xl md:text-5xl mb-4 text-foreground font-bold">From <span className="text-gradient-gold">Vision</span> to <span className="text-gradient-gold">Reality</span></h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              This is just the beginning. Watch as we build a thriving KOLI economy where holders benefit from everyday use and global growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative">
        <Timeline data={roadmapData} />
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">250,000 Strong</span> and Growing
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Over 250,000 believers are already waiting – proof that hope spreads fast. KOLI rewards this faith with airdrops, staking incentives, community governance, and focus on charitable impact.
            </p>
            <div className="space-y-4 max-w-2xl mx-auto mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Airdrops for early participants and long-term holders</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Staking incentives</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Community governance as the ecosystem matures</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Focus on charitable impact: Targeted distributions to underserved groups</span>
              </div>
            </div>
            <p className="text-xl font-semibold mb-8 max-w-2xl mx-auto">
              Join the movement. <span className="text-gradient-gold">Hold with purpose</span>. Watch opportunity unfold.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">
              © Kingdom of Love International. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Roadmap;

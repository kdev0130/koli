import { motion } from "motion/react";
import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { CompactCountdownTimer } from "@/components/ui/compact-countdown-timer";
import { GlobeDemo } from "@/components/ui/globe-demo";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Link } from "react-router-dom";
import { Home, Users, Map, Heart, Zap, Lock } from "lucide-react";
import heroBg from "@/assets/lamb.png";
import { useStickyBanner } from "@/contexts/StickyBannerContext";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const philosophyItems = [
  {
    title: "The Problem",
    description: "Traditional aid provides temporary relief",
    content: () => (
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl font-bold text-gradient-gold">
          "Give a man a fish, and he eats for a day."
        </p>
        <p className="text-foreground/80 text-base leading-relaxed">
          Traditional aid provides temporary relief but often creates permanent dependence. This is the limitation that has held our communities back for generations.
        </p>
      </div>
    ),
  },
  {
    title: "The Solution",
    description: "We focus on Education and Empowerment",
    content: () => (
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl font-bold text-gradient-gold">
          "Teach a man to fish, and he thrives for a lifetime."
        </p>
        <p className="text-foreground/80 text-base leading-relaxed">
          We focus on Education. We empower our community—from low-income individuals to small-scale producers—to hold, use, and trust a currency that grows with them.
        </p>
      </div>
    ),
  },
];

const pillars = [
  {
    title: "Hyper-Low Friction",
    description: "Built on the Solana Blockchain. Transactions cost fractions of a cent and finalize in seconds—making $KOLI the perfect medium of exchange for farmers, fishermen, and local vendors.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Sovereign Scarcity",
    description: "Strategic deflationary mechanics. A target of 200,000,000 $KOLI will be permanently removed from circulation at key adoption thresholds to reward the long-term holders.",
    icon: <Lock className="h-8 w-8" />,
  },
  {
    title: "Real-World Integration",
    description: "KOLI is not just a digital asset. We are building a payment ecosystem for e-commerce, local trade, and essential services, ensuring $KOLI has value in the \"real world.\"",
    icon: <Heart className="h-8 w-8" />,
  },
];

const stats = [
  { label: "Verified Waitlist", value: "250K+" },
  { label: "Max Supply", value: "700M" },
  { label: "Milestone Burn", value: "30%" },
  { label: "Locked Liquidity", value: "30%" },
];

const Index = () => {
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

      {/* Section 1: Hero - The Sovereign Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="$KOLI Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        </div>

        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tight text-gradient-gold">
              $KOLI
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground/90">
              NO ONE LEFT BEHIND
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-center"
          >
            <span className="inline-flex flex-col items-center w-full">
              <span>POWERING THE</span>
              <span className="block text-center">
                <LayoutTextFlip
                  text=""
                  words={[
                    { word: "KINGDOM", className: "ml-2" },
                    { word: "CITIZENS", className: "ml-3" },
                    { word: "COMMUNITY", className: "ml-1" },
                  ]}
                  duration={3000}
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            <span className="text-gradient-gold font-semibold">$KOLI</span> is the utility token of the Kingdom of Love International. A high-performance digital asset built on Solana to turn collective belief into real-world opportunity for 250,000+ citizens.
          </motion.p>

          {/* Scroll indicator removed */}
        </div>
      </section>


      {/* Section 2: The Silent Legacy */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              DECENTRALIZING <span className="text-gradient-gold">PROSPERITY</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                <span className="text-gradient-gold font-semibold">$KOLI</span> serves as the bridge between high-finance innovation and grassroots implementation. By removing the middlemen and traditional banking barriers, we empower our community to trade, hold, and grow with total sovereignty.
              </p>
              <p>
                This is the financial tool that supports the "Teach a man to fish" philosophy—providing the rod, the line, and the lake for a new global economy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Philosophy - Fishing Rod */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <HoverEffect items={philosophyItems} />
        </div>
      </section>

      {/* Section 4: The Sovereign Stats */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              THE <span className="text-gradient-gold">NETWORK OF ABUNDANCE</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 min-w-[160px] flex flex-col items-center justify-center h-full"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-3">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Globe Section */}
          <GlobeDemo />
        </div>
      </section>

      {/* Section 5: The Pillars of Trust */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WHY <span className="text-gradient-gold">KOLI?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              The Utility Pillars
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 h-full group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">{pillar.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.5: The Security Standard */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              BUILT ON <span className="text-gradient-gold">TRUST</span>. SECURED BY CODE.
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Fully Audited",
                description: "Smart contracts verified by international security standards."
              },
              {
                title: "Transparency First",
                description: "All treasury operations and burns are verifiable on-chain."
              },
              {
                title: "Vested Alignment",
                description: "Team and advisor tokens are locked for 24–36 months to ensure long-term commitment to the Kingdom."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-gold"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Global Call */}
      <section id="presale-countdown" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              A KINGDOM WITHOUT <span className="text-gradient-gold">BORDERS</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/90 mb-12 leading-relaxed">
              From the shores of the Philippine islands to the international stage, the Kingdom of Love is expanding. We are inviting the dreamers, the producers, and the 250,000+ believers to take their place in the royal lineage of <span className="text-gradient-gold font-semibold">$KOLI</span>.
            </p>
            <HoverBorderGradient
              containerClassName="rounded-full mx-auto w-fit"
              as="button"
              className="flex items-center space-x-2 font-bold text-xl px-10 py-4"
            >
              <span>PRESALE STARTS IN: 4 MONTHS</span>
            </HoverBorderGradient>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 scale-[0.6] md:scale-75"
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl font-semibold text-gradient-gold mb-4">
                KOLI Coin: The International Standard for Community Growth
              </p>
              <p className="text-foreground/80 text-base">
                Network: Solana (SPL Token)
              </p>
              <p className="text-foreground/80 text-base">
                Contract: [Coming Soon]
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Utility
              </a>
              <Link to="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <a href="/litepaper.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Litepaper
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Community Telegram
              </a>
            </div>

            <div className="text-center border-t border-border pt-8">
              <p className="text-muted-foreground text-sm">
                © 2026 <a href="https://kol-intl.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kingdom of Love International</a>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

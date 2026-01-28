import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Link } from "react-router-dom";
import { Home, Users, Map, Heart, Zap, Lock } from "lucide-react";
import heroBg from "@/assets/lamb.png";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const pillars = [
  {
    title: "Built for Utility",
    description: "Not just a \"meme.\" We are building an ecosystem of stores, e-marketplaces, and essential services that accept $KOLI.",
    icon: <Heart className="h-8 w-8" />,
  },
  {
    title: "Hyper-Low Friction",
    description: "Powered by Solana. Transactions cost fractions of a cent and happen in the blink of an eye.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Community Sovereignty",
    description: "The Kingdom belongs to the holders. With a 40% community allocation, the people own the future.",
    icon: <Lock className="h-8 w-8" />,
  },
];

const stats = [
  { label: "Years of Impact", value: "10" },
  { label: "Global Believers", value: "250K+" },
  { label: "Fixed Supply", value: "700M" },
  { label: "Holder Protection", value: ["30% Burn", "30% Lock"] },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav navItems={navItems} />

      {/* Section 1: Hero - The Sovereign Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Watermark Logo */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gradient-gold"
          >
            $KOLI
          </motion.p>
        </div>

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
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            THE KINGDOM <br />
            WHERE EVERYONE <span className="text-gradient-gold">EATS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            A legacy of impact since 2016, now decentralized for the world. <span className="text-gradient-gold font-semibold">$KOLI</span> is the international standard for community-driven prosperity. Built on Solana for the people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="flex items-center space-x-2 font-semibold text-lg px-8 py-3"
            >
              <span>JOIN THE KINGDOM</span>
            </HoverBorderGradient>

            <Link
              to="/roadmap"
              className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-semibold text-lg"
            >
              VIEW THE PROTOCOL
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
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
              WE MOVED IN <span className="text-gradient-gold">SILENCE</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-foreground/90 leading-relaxed">
              <p>
                Our story didn’t begin behind conference tables. It started a decade ago in the fields working beside farmers and on the open water together with fishermen—laying the true foundation of how we serve.</p>
              <p>
                <span className="text-gradient-gold font-semibold">$KOLI</span> is not just a token; it is the global evolution of 10 years of groundwork. What was once local is now International. What was once a gift is now a sovereign protocol.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Philosophy - Fishing Rod */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="glass-card p-12 h-full">
                <p className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  "Give a man a fish, and he eats for a day."
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Traditional aid provides temporary relief but often creates permanent dependence. This is the limitation that has held our communities back for generations.
                </p>
              </div>
            </motion.div>

            {/* Right: The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="glass-card p-12 h-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <p className="text-2xl md:text-3xl font-bold mb-6 text-gradient-gold">
                  "Teach a man to fish, and he thrives for a lifetime."
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  We focus on Education. We empower our community—from low-income individuals to small-scale producers—to hold, use, and trust a currency that grows with them.
                </p>
              </div>
            </motion.div>
          </div>
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
              THE <span className="text-gradient-gold">SOVEREIGN STATS</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  {Array.isArray(stat.value) ? (
                    <div className="leading-tight space-y-1">
                      {stat.value.map((line, i) => (
                        <div key={i} className="whitespace-nowrap">{line}</div>
                      ))}
                    </div>
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              THE <span className="text-gradient-gold">PILLARS OF TRUST</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Why $KOLI stands above the rest
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

      {/* Section 6: Global Call */}
      <section className="py-24 relative">
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
            <p className="text-xl md:text-2xl text-foreground/90 mb-12 leading-relaxed">
              From the shores of the Philippines to the international stage, the Kingdom of Love is expanding. We are inviting the dreamers, the producers, and the 250,000+ believers to take their place in the royal lineage of <span className="text-gradient-gold font-semibold">$KOLI</span>.
            </p>
            <HoverBorderGradient
              containerClassName="rounded-full mx-auto w-fit"
              as="button"
              className="flex items-center space-x-2 font-bold text-xl px-10 py-4"
            >
              <span>PRESALE STARTS IN: 4 MONTHS</span>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl font-semibold text-gradient-gold mb-4">
                Kingdom of Love International
              </p>
              <p className="text-foreground/80 text-lg">
                Empowering the Less Fortunate, One Hold at a Time.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Litepaper
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Community Telegram
              </a>
            </div>

            <div className="text-center border-t border-border pt-8">
              <p className="text-muted-foreground text-sm">
                © 2026 Kingdom of Love International. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-4">
                Disclaimer: $KOLI is a utility token. Digital assets involve risk. Hold with purpose.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Timeline } from "@/components/ui/timeline";
import { Link } from "react-router-dom";
import { Home, Users, Map, Rocket, Users2, Coins, Heart, Globe, CheckCircle2 } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const roadmapData = [
  {
    title: "Q1 2026",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Rocket className="h-6 w-6" />
          <span className="font-semibold text-lg">Foundation Phase</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Laying the groundwork for KOLI – building the core team, establishing partnerships, 
          and developing our smart contracts.
        </p>
        <div className="space-y-3">
          {[
            "Core team formation",
            "Smart contract development",
            "Website & brand launch",
            "Community building initiatives",
            "Whitepaper release",
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
    title: "Q2 2026",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Coins className="h-6 w-6" />
          <span className="font-semibold text-lg">Token Launch</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The official launch of $KOLI token – marking the beginning of our journey 
          to spread love through blockchain.
        </p>
        <div className="space-y-3">
          {[
            "Smart contract audit completion",
            "Token presale event",
            "DEX listing (Uniswap/PancakeSwap)",
            "Initial CEX partnerships",
            "Staking platform launch",
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
    title: "Q3 2026",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Users2 className="h-6 w-6" />
          <span className="font-semibold text-lg">Community Expansion</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Growing the KOLI kingdom – expanding our community, launching governance, 
          and beginning our charitable initiatives.
        </p>
        <div className="space-y-3">
          {[
            "DAO governance launch",
            "First community-voted charity donation",
            "Ambassador program",
            "Cross-chain bridge development",
            "Mobile app beta release",
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
    title: "Q4 2026",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Heart className="h-6 w-6" />
          <span className="font-semibold text-lg">Love in Action</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Putting love into action – major charitable milestones, ecosystem expansion, 
          and global community events.
        </p>
        <div className="space-y-3">
          {[
            "$100K charity milestone",
            "NFT collection launch",
            "Partnership with major charities",
            "KOLI merchandise store",
            "First annual community summit",
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
    title: "2027+",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Globe className="h-6 w-6" />
          <span className="font-semibold text-lg">Global Kingdom</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The future is bright – expanding KOLI to become a global movement 
          for positive change through blockchain technology.
        </p>
        <div className="space-y-3">
          {[
            "Multi-chain presence",
            "$1M charity goal achievement",
            "KOLI Foundation establishment",
            "Educational platform launch",
            "Global impact partnerships",
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
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="text-gradient-gold">KOLI</span> Roadmap
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              From vision to reality – follow our journey as we build the Kingdom of Love International, 
              one milestone at a time.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the Journey
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our community and help shape the future of KOLI. Every voice matters in our kingdom.
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-primary-foreground font-bold">K</span>
              </div>
              <span className="text-foreground font-semibold text-lg">KOLI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 Kingdom of Love International. All rights reserved.
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

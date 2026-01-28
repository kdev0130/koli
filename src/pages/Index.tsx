import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PinContainer } from "@/components/ui/3d-pin";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Link } from "react-router-dom";
import { Home, Users, Map, Heart, Shield, Globe, Coins } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const features = [
  {
    title: "Community First",
    description: "Built by the community, for the community. Every holder has a voice.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Secure & Transparent",
    description: "Smart contracts audited and verified. Full transparency in all operations.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Global Impact",
    description: "Spreading love and positive change across borders through blockchain.",
    icon: <Globe className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="KOLI Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              🚀 Building the Future of Love
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient-gold">KOLI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/80 mb-4"
          >
            Kingdom of Love International
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            A revolutionary crypto token built on the foundation of community, 
            compassion, and collective growth. Join us in building a kingdom where love leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="flex items-center space-x-2 font-semibold"
            >
              <Coins className="h-5 w-5" />
              <span>Join the Kingdom</span>
            </HoverBorderGradient>

            <Link
              to="/roadmap"
              className="px-8 py-3 rounded-full border border-border text-foreground hover:bg-card transition-colors font-medium"
            >
              View Roadmap
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Community Members", value: "10K+" },
              { label: "Total Supply", value: "1B" },
              { label: "Launch Phase", value: "Q2 2026" },
              { label: "Charity Goal", value: "$1M" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why <span className="text-gradient-gold">KOLI</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              More than just a token – it's a movement. Built on values that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FollowerPointerCard
                key={idx}
                title={<span className="text-xs">Learn more</span>}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 h-full group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </FollowerPointerCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Pin Section */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient-gold">Vision</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A decentralized ecosystem built on love, transparency, and community empowerment.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            <PinContainer title="Community Treasury" href="#">
              <div className="flex flex-col p-4 tracking-tight w-[20rem] h-[16rem]">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Community Treasury
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A portion of every transaction goes to the community treasury, 
                  governed by KOLI holders.
                </p>
                <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-primary" />
                </div>
              </div>
            </PinContainer>

            <PinContainer title="Charity Initiative" href="#">
              <div className="flex flex-col p-4 tracking-tight w-[20rem] h-[16rem]">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Love in Action
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Regular charitable donations to causes voted on by our community.
                </p>
                <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-accent/40 via-primary/30 to-accent/20 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-accent" />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Join the <span className="text-gradient-gold">Kingdom</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Be part of something bigger. Join thousands of believers building 
              a world where love and blockchain technology create lasting positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center space-x-2 font-semibold"
              >
                <span>Get Started</span>
              </HoverBorderGradient>
              <Link
                to="/about"
                className="px-8 py-3 rounded-full border border-border text-foreground hover:bg-card transition-colors font-medium"
              >
                Learn More
              </Link>
            </div>
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
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Roadmap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

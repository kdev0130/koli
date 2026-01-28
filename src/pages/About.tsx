import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Link } from "react-router-dom";
import { Home, Users, Map, Heart, Target, Eye, Sparkles } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Love",
    description: "At the core of everything we do is love – for our community, for humanity, and for positive change.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community",
    description: "We believe in the power of collective action. Together, we're stronger than any individual.",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Transparency",
    description: "Open-source, audited smart contracts, and full visibility into all treasury operations.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Impact",
    description: "Every transaction contributes to real-world charitable causes chosen by our community.",
  },
];

const team = [
  { name: "Community", role: "The Heart of KOLI", initial: "C" },
  { name: "Developers", role: "Building the Future", initial: "D" },
  { name: "Advisors", role: "Guiding the Vision", initial: "A" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              About KOLI
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a <span className="text-gradient-gold">Kingdom</span> of Love
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              KOLI – Kingdom of Love International – is more than a cryptocurrency. 
              It's a movement dedicated to spreading positivity, supporting communities, 
              and proving that blockchain technology can be a force for good.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a decentralized ecosystem that empowers individuals to make 
                a positive impact on the world. Through transparent governance, 
                community-driven initiatives, and innovative tokenomics, we aim to 
                redefine what it means to be part of the crypto space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-accent-foreground mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where cryptocurrency serves humanity – not the other way around. 
                We envision KOLI becoming the go-to token for those who want their 
                investments to align with their values, creating ripples of positive 
                change across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The pillars that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <FollowerPointerCard
                key={idx}
                title={<span className="text-xs">{value.title}</span>}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 h-full text-center group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              </FollowerPointerCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The <span className="text-gradient-gold">KOLI</span> Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built by believers, for believers. Our decentralized team spans the globe.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground mx-auto mb-4 text-3xl font-bold">
                  {member.initial}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
              Ready to learn more?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Check out our roadmap to see what's coming next for KOLI.
            </p>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Map className="h-5 w-5" />
              View Roadmap
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

export default About;

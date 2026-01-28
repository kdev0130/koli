import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Link } from "react-router-dom";
import { Home, Users, Map, Sprout, Fish, TrendingUp } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "/about", icon: <Users className="h-4 w-4" /> },
  { name: "Roadmap", link: "/roadmap", icon: <Map className="h-4 w-4" /> },
];

const citizens = [
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "The Farmer",
    description: "Modernizing agricultural trade by removing the middlemen who eat into their profits.",
  },
  {
    icon: <Fish className="h-8 w-8" />,
    title: "The Fisherman",
    description: "Providing a stable, borderless currency that retains value even when local economies fluctuate.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "The Low-Income Leader",
    description: "Offering an entry point into wealth creation that was previously reserved for the elite.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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

        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              BORN FROM <span className="text-gradient-gold">SERVICE</span>. SCALED FOR <span className="text-gradient-gold">SOVEREIGNTY</span>.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              We didn't build KOLI in a lab. We built it in the fields, on the waters, and in the heart of the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy of Impact */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A <span className="text-gradient-gold">FOUNDATION OF TRUST</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              KOLI is the culmination of a long-standing commitment to direct impact. Operating under a foundational mission, we have worked closely with those who are often overlooked by traditional finance. We've been on the ground with the farmers who feed the world and on the waters with the fishermen who brave the seas.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We identified that the greatest barrier to prosperity is financial exclusion. KOLI is the international evolution of that groundwork—transitioning from local aid to a global, decentralized protocol that empowers the individual so the entire community can rise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 250,000 Believers */}
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
              A <span className="text-gradient-gold">KINGDOM ALREADY IN MOTION</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              KOLI arrives on the Solana blockchain with a waitlist of over 250,000 individuals already standing at the gates.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              This is a pre-built ecosystem of believers who understand our core philosophy. We aren't just looking for "investors"; we are mobilizing a nation of holders who are ready to use $KOLI as a tool for economic freedom and long-term stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breaking the Limitations */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-gold">BREAKING THE LIMITATIONS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Many have tried to bring digital assets to the underserved, but most have failed due to a lack of community education. A tool is only as powerful as the person who knows how to use it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              KOLI addresses this gap head-on. We don't just provide a token; we provide the knowledge. We teach our community how to secure their assets, how to utilize peer-to-peer trade, and why holding is an act of financial independence.
            </p>
            <p className="text-lg italic text-foreground">
              "Give a man a fish, he eats for a day. Teach a man to fish, he thrives for a lifetime." This is the KOLI Protocol.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Citizens */}
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
              Our <span className="text-gradient-gold">Global Citizens</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {citizens.map((citizen, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 h-full text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {citizen.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{citizen.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{citizen.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Vision */}
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
              <span className="text-gradient-gold">GLOBAL STANDARDS</span>. LOCAL HEARTS.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Kingdom of Love International bridges the gap between high-finance innovation and grassroots implementation. By utilizing the Solana blockchain, we ensure that every citizen of our Kingdom—regardless of their location or transaction size—enjoys the speed and security of the world's most advanced digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Word & CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-semibold mb-8 max-w-2xl mx-auto">
              We are the <span className="text-gradient-gold">protectors of the hardworking</span> and the <span className="text-gradient-gold">builders of the new economy</span>.
            </p>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Map className="h-5 w-5" />
              VIEW THE ROADMAP
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

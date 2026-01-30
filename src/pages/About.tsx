import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { LampContainer } from "@/components/ui/lamp";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { CompactCountdownTimer } from "@/components/ui/compact-countdown-timer";
import { Link } from "react-router-dom";
import { Home, Users, Map, Sprout, Fish, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useStickyBanner } from "@/contexts/StickyBannerContext";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

      {/* Section 1: The Sovereign Gateway (Header) */}
      <LampContainer className="min-h-[70vh] rounded-none bg-background z-0 pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4 -mt-82"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            THE SOVEREIGN CURRENCY <span className="text-gradient-gold">OF A BORDERLESS NATION</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            $KOLI is a high-performance SPL token on the Solana blockchain, engineered to provide the financial infrastructure for the Kingdom of Love International.
          </p>
        </motion.div>
      </LampContainer>

      {/* Section 2: Engineered for Adoption (The Technology) */}
      <section className="-mt-96 py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              THE <span className="text-gradient-gold">SOLANA ADVANTAGE</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative"
          >
            <GlowingEffect spread={50} glow={true} proximity={80} />
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg relative z-10">
              We chose the Solana Blockchain because our mission requires speed, scalability, and near-zero costs. For our citizens—the farmers and the fishermen—a transaction fee should never be a barrier to growth.
            </p>
            <ul className="text-muted-foreground leading-relaxed text-lg list-disc pl-6 space-y-2 relative z-10">
              <li><strong>Near-Instant Finality:</strong> Transactions settle in less than a second, matching the speed of real-world trade.</li>
              <li><strong>Ultra-Low Fees:</strong> Fractions of a cent per transaction ensures more value stays in the pockets of the community.</li>
              <li><strong>Global Scalability:</strong> A foundation built to handle millions of users and international merchant volume.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Scarcity Protocol (The Tokenomics) */}
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
              <span className="text-gradient-gold">DESIGNED FOR GENERATIONAL STABILITY</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative"
          >
            <GlowingEffect spread={50} glow={true} proximity={80} />
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg relative z-10">
              $KOLI is built with a deflationary mindset to protect the purchasing power of our holders. We believe in rewarding patience over speculation.
            </p>
            <ul className="text-muted-foreground leading-relaxed text-lg list-disc pl-6 space-y-2 mb-6 relative z-10">
              <li><strong>The Sovereign Burn:</strong> We have committed to a target burn of 200,000,000 $KOLI. These tokens will be permanently removed from circulation at key adoption milestones to ensure scarcity.</li>
              <li><strong>The Shield (Liquidity Lock):</strong> To ensure market stability, 30% of the total supply is locked in secure vaults. This "Shield" prevents manipulation and ensures the Kingdom’s financial floor remains unshakeable.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Real-World Utility (The "Fishing Rod") */}
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
              <span className="text-gradient-gold">BEYOND THE EXCHANGE</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative"
          >
            <GlowingEffect spread={50} glow={true} proximity={80} />
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg relative z-10">
              Unlike speculative tokens, $KOLI is designed for daily usage within a self-sustaining ecosystem:
            </p>
            <ul className="text-muted-foreground leading-relaxed text-lg list-disc pl-6 space-y-2 mb-6 relative z-10">
              <li><strong>Digital Commerce:</strong> Powering a global marketplace for local producers to sell directly to consumers without middlemen.</li>
              <li><strong>Merchant Integration:</strong> Partnering with essential retailers, including gas stations and local vendors, to accept $KOLI as a primary payment method.</li>
              <li><strong>Peer-to-Peer Empowerment:</strong> Enabling farmers and fishermen to trade instantly across borders, bypassing the delays of traditional banking.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Education as a Core Feature */}
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
              <span className="text-gradient-gold">BREAKING THE LIMITATIONS</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative"
          >
            <GlowingEffect spread={50} glow={true} proximity={80} />
            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              The greatest barrier to prosperity is not a lack of money, but a lack of education. KOLI is the first project to treat Digital Literacy as a core protocol feature. By teaching our 250,000+ waitlist members how to hold securely and use the token efficiently, we create a "Strong Hand" community that thrives regardless of market volatility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: The Global Standard (Final Word) */}
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
              <span className="text-gradient-gold">THE GLOBAL STANDARD</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative"
          >
            <GlowingEffect spread={50} glow={true} proximity={80} />
            <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
              $KOLI is the bridge between digital innovation and grassroots survival. It is the currency of the hardworking, the honest, and the brave. No one is left behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Button Only */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
              © <a href="https://kol-intl.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kingdom of Love International</a>. All rights reserved.
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

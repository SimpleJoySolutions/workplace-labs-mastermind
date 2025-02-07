import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="section-inner">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold">Workplace Labs Mastermind</span>
            </Link>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="https://www.workplacelabs.io"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Workplace Labs
              </a>
              . All rights reserved.
            </p>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {/* <Link
              to="/job-description-kit"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Job Description Kit
            </Link> */}
            <Link
              to="/faq"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              FAQ
            </Link>
            <Link
              to="/about-us"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              About Us
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
};

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-body">
          © 2024 <span className="text-primary">Swapnil Waghmare</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/swapnilwaghmare2004" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/swapnil-waghmare-103b93259" },
            { icon: Twitter, href: "https://x.com/home?lang=en" },
            { icon: Mail, href: "mailto:waghmareswapnil563@gmail.com" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

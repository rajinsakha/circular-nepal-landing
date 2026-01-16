const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground/60 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Circular Nepal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

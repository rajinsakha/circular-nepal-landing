import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants/footer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-12 relative overflow-hidden text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <Image
                alt={FOOTER_CONTENT.brand.logoAlt}
                src={FOOTER_CONTENT.brand.logoSrc}
                width={48}
                height={48}
              />
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                {FOOTER_CONTENT.brand.name}{" "}
                <span className="text-secondary">
                  {FOOTER_CONTENT.brand.accent}
                </span>
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {FOOTER_CONTENT.brand.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-8">
              {FOOTER_CONTENT.navigation.title}
            </h5>
            <ul className="space-y-4">
              {FOOTER_CONTENT.navigation.links.map((link) => (
                <li key={link.id}>
                  <a
                    className="text-sm sm:text-base text-slate-300 hover:text-secondary transition-colors font-medium"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-8">
              {FOOTER_CONTENT.contact.title}
            </h5>

            <ul className="space-y-6">
              {FOOTER_CONTENT.contact.items.map((item) => {
                const linkClassName =
                  "className" in item && item.className
                    ? ` ${item.className}`
                    : "";

                return (
                  <li key={item.id} className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-secondary mt-0.5" />
                    {"lines" in item ? (
                      <address className="not-italic text-sm sm:text-base text-slate-300 leading-relaxed">
                        {item.lines.map((line, index) => (
                          <span key={`${item.id}-${line}`}>
                            {line}
                            {index < item.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </address>
                    ) : (
                      <a
                        className={`text-sm sm:text-base text-slate-300 hover:text-white transition-colors${linkClassName}`}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <div>
              <h5 className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary mb-8">
                {FOOTER_CONTENT.connect.title}
              </h5>

              <div className="flex gap-4">
                {FOOTER_CONTENT.connect.socials.map((social) => (
                  <a
                    key={social.id}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all group"
                    href={social.href}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h6 className="text-base sm:text-lg font-bold text-white mb-2">
                {FOOTER_CONTENT.cta.title}
              </h6>
              <p className="text-xs sm:text-sm text-slate-400 mb-4">
                {FOOTER_CONTENT.cta.description}
              </p>
              <a
                className="inline-block w-full text-center py-2 rounded-lg border border-secondary text-secondary font-bold text-sm sm:text-base hover:bg-secondary hover:text-primary transition-all"
                href={FOOTER_CONTENT.cta.href}
              >
                {FOOTER_CONTENT.cta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs sm:text-sm font-light">
            © {currentYear} {FOOTER_CONTENT.legal.copyright}
          </p>
          <div className="flex gap-8">
            {FOOTER_CONTENT.legal.links.map((link) => (
              <a
                key={link.id}
                className="text-xs sm:text-sm font-bold text-slate-400 hover:text-secondary uppercase tracking-widest transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

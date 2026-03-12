import Icon from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-6 text-center text-sm text-muted">
          For product consulting, speaking engagements, or collaborations - reach out here.
        </p>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Joel Duran &mdash; AI Product Manager
          </p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:duranjoel.a@gmail.com"
              aria-label="Email me"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Icon name="email" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/joeldabr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Icon name="linkedin" size={18} />
            </a>
            <a
              href="https://github.com/joelszn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-foreground"
            >
              <Icon name="github" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

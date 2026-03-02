export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Joel Duran
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:duranjoel.a@gmail.com"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/joeldabr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/joelszn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-[1400px] px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © Pavel Korolev {`${new Date().getFullYear()}`} — Made with ❤️
          </div>
          <div className="text-sm text-center text-muted-foreground">
            Built with Builder.io using React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

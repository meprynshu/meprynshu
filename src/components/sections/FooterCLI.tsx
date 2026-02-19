import { Button } from '@/components/atoms/Button'
import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import { CONTACT_LINKS } from '@/data/content'

export function FooterCLI() {
  return (
    <footer className="bg-footer-bg py-8 text-footer-fg md:py-10" id="contact">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <p className="font-mono text-xs text-footer-fg/90">priyanshu@arch:~$ ls -a ./links</p>

        <div className="mt-4 grid grid-cols-1 gap-3 border-t border-footer-fg/20 pt-4 sm:grid-cols-3">
          {CONTACT_LINKS.map((link) => (
            <Button
              className="justify-center py-3.5 text-[12px]"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
              variant="inverted"
            >
              {link.label}
            </Button>
          ))}
        </div>

        <div className="mt-4 flex justify-end border-t border-footer-fg/20 pt-4">
          <ThemeToggle variant="inverted" />
        </div>
      </div>
    </footer>
  )
}

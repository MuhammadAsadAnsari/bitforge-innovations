import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader, Section } from "@/components/site/Section";

const BOOKING_URL = "https://cal.com/muhammad-asad-6rphhy/15min";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BitForge Innovations" },
      {
        name: "description",
        content:
          "Get in touch with BitForge Innovations. Email hello@bitforge.dev or book a call.",
      },
      { property: "og:title", content: "Contact BitForge Innovations" },
      {
        property: "og:description",
        content:
          "Tell us about your project. We reply to every enquiry within one working day.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks, your message is with us.", {
        description: "We reply to every enquiry within one working day.",
      });
    }, 600);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're trying to fix"
        lead="A short description of your current process is more useful than a formal brief. We read every message and reply within one working day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder="What does your team do today, and where does it slow down?"
              />
            </div>
            <Button type="submit" size="lg" className="mt-6" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              We use your details only to reply to this enquiry.
            </p>
          </form>

          <div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Prefer a live conversation?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Book a 15-minute introductory call. No preparation needed — just tell us what
                your business does and where things slow down.
              </p>
              <Button asChild size="lg" className="mt-4 w-full">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>

            <ul className="mt-6 space-y-5">
              {[
                {
                  icon: Mail,
                  k: "Email",
                  v: "hello@bitforge.dev",
                  href: "mailto:hello@bitforge.dev",
                },
                {
                  icon: Clock,
                  k: "Hours",
                  v: "Monday to Friday, 10:00 to 19:00 PKT",
                },
              ].map((c) => (
                <li key={c.k} className="flex gap-4">
                  <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <div>
                    <p className="text-sm font-semibold">{c.k}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {c.v}
                      </a>
                    ) : (
                      <p className="text-sm leading-relaxed text-muted-foreground">{c.v}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-muted-foreground">
              Karachi, Pakistan · Working with teams across PK, UAE and UK
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

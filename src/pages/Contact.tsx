import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

// Replace with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = "YOUR_FORM_ID";

type FormStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have a question, partnership inquiry, or feedback? We'd love to hear from you.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> contact@peasanthouse.com</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> United States</span>
          </div>

          {status === "success" ? (
            <div className="mt-10 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-6 text-green-800">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold">Message sent!</p>
                <p className="mt-1 text-sm">Thanks for reaching out. We typically respond within 1–2 business days.</p>
              </div>
            </div>
          ) : (
            <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again or email us directly at contact@peasanthouse.com.
                </div>
              )}

              <Button variant="hero" size="lg" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

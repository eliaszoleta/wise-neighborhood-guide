import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have a question, partnership inquiry, or feedback? We'd love to hear from you.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> contact@neighborhoodguidelines.com</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> United States</span>
          </div>
          <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
              <input id="name" type="text" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input id="email" type="email" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <textarea id="message" rows={5} className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
            </div>
            <Button variant="hero" size="lg" type="submit">Send Message</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

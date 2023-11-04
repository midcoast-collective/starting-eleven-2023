import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/page";
import * as Contact from "@/app/components/contact";
import ContactForm from "../components/contactForm";

export const metadata = {
  title: "Contact - Starting Eleven",
  description: "Contact us online or come see us in our Venice or KC location.",
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <Page.Placeholder $image="/stadium-gameday.png" />
      </section>

      <Page.GrayBackground>
        <Wrap>
          <section>
            <h1>Contact us</h1>

            <ContactForm />
          </section>
        </Wrap>
      </Page.GrayBackground>

      <Wrap>
        <section id="projects">
          <Page.SectionTitle>Locations</Page.SectionTitle>

          <Contact.Locations>
            <p>
              730 Minnesota Ave.
              <br />
              STE C<br />
              Kansas City, KS 66101
            </p>

            <p>
              27 Market Street
              <br />
              Venice, CA 90291
            </p>
          </Contact.Locations>
        </section>
      </Wrap>
    </main>
  );
}

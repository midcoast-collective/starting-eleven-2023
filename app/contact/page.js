import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import * as Contact from "@/app/components/contact";
import ContactForm from "../components/contactForm";

export const metadata = {
  title: "Contact - Starting Eleven",
  description:
    "Want to tell your soccer story? Contact us online or come see us in our Venice or KC location.",
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
            <Contact.Title>Contact</Contact.Title>
            <p>
              Want to tell your soccer story? Reach out via email (
              <a href="mailto:hello@startingeleven.com">
                hello@startingeleven.com
              </a>
              ) or fill out this form.
            </p>

            <ContactForm />
          </section>
        </Wrap>
      </Page.GrayBackground>

      <Wrap>
        <section id="projects">
          <Page.SectionTitle>Locations</Page.SectionTitle>

          <Contact.Locations>
            <div>
              <p>
                730 Minnesota Ave. STE C
                <br />
                Kansas City, KS 66101
                <br />
                <a
                  href="https://maps.app.goo.gl/9i745UvyVXKSAUvA9"
                  target="_blank"
                >
                  Get directions &rarr;
                </a>
              </p>
            </div>

            <div>
              <p>
                27 Market Street
                <br />
                Venice, CA 90291
                <br />
                <a
                  href="https://maps.app.goo.gl/dWbFicy36Ponav6z6"
                  target="_blank"
                >
                  Get directions &rarr;
                </a>
              </p>
            </div>
          </Contact.Locations>
        </section>
      </Wrap>
    </main>
  );
}

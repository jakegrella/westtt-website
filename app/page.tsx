import Image, { ImageProps } from "next/image";
import { Phone, Envelope } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "./components/ContactForm";
import Button from "./components/Button";
import WorkCard from "./components/WorkCard";

const Logo = (props: Omit<ImageProps, "src" | "alt">) => (
  <Image
    src="/logo-peach.svg"
    alt="Westtt logo"
    height={props.height ?? 20}
    width={props.width ?? 48}
    {...props} // Spreads any additional props passed to Logo onto the Image component
  />
);

const Home = () => {
  return (
    <div className="px-4 py-7">
      <header className="flex justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xl">Westtt</span>
        </div>
        <Button href="#contact-section">Get in touch</Button>
      </header>
      <main className="flex flex-col gap-10 md:my-0 md:mx-auto md:max-w-2xl">
        <section className="pt-24 pb-14">
          <h1>Unmistakably thoughtful websites</h1>
          <h2>
            Web design, development, branding, and consulting services for those
            looking to step off the beaten path.
          </h2>
        </section>
        <section>
          <h2 className="pb-2">Recent work</h2>
          <div>
            <WorkCard
              title="Fish Farm Samples"
              tags={["Design", "Development", "Branding"]}
              imageSource="/fish-farm-samples.jpg"
              href="https://www.fishfarmsamples.com"
            />
          </div>
          <Button href="#contact-section" className="mt-4">
            Get in touch
          </Button>
        </section>
        <section>
          <h2 className="pb-2">About</h2>
          <div className="flex flex-col gap-2">
            <p>
              Westtt is a Los Angeles-based web design studio, offering our
              services in web design, development, branding, and consulting.
            </p>
            <p>
              We want to work with people that care about their craft; you bring
              your passion and we&apos;ll bring ours. In the past, we&apos;ve
              worked with artists to build their portfolios, creators to rebrand
              their newsletters, and brands to create a custom ecommerce
              experience.
            </p>
            <p>
              We&apos;re a small team of designers, developers, and strategists
              that are passionate about creating great work. We take a hands on
              approach and want to understand your wants and needs in order to
              deliver the best possible product.
            </p>
          </div>
        </section>
        <section id="contact-section">
          <h2 className="pb-2">Get in touch</h2>
          <p>
            Please feel free to reach out via email, phone/text, or the contact
            form below.
          </p>
          <div className="flex gap-2 my-2 items-center bg-gray-500 w-fit px-2 py-0.5 rounded-lg">
            <Envelope />
            <p>jake@westtt.com</p>
          </div>
          <div className="flex gap-2 my-2 items-center bg-gray-500 w-fit px-2 py-0.5 rounded-lg">
            <Phone />
            <p>(708) 205-1007</p>
          </div>
          <ContactForm />
        </section>
      </main>
      <footer className="flex gap-2 pt-24">
        <Logo height={10} width={24} />
        <span className="text-sm">©️ 2024 Westtt, LLC</span>
      </footer>
    </div>
  );
};

export default Home;

import { Meta } from '../layout/Meta';
import { BackToTop } from '../navigation/BackToTop';
import { ContactForm } from '../sections/ContactForm';
import { CTABottom } from '../sections/CTABottom';
import { FloatingCTA } from '../sections/FloatingCTA';
import { PainPoints } from '../sections/PainPoints';
import { Pricing } from '../sections/Pricing';
import { Process } from '../sections/Process';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Solutions } from '../sections/Solutions';
import { Testimonials } from '../sections/Testimonials';
import { WhyUs } from '../sections/WhyUs';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="font-sans text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* 1. Hero – full screen */}
    <Hero />

    {/* 2. Pain Points */}
    <PainPoints />

    {/* 3. Solutions */}
    <Solutions />

    {/* 4. Services */}
    <Services />

    {/* 5. Projects */}
    <Projects />

    {/* 6. Why Us */}
    <WhyUs />

    {/* 7. Process */}
    <Process />

    {/* 8. Pricing */}
    <Pricing />

    {/* 9. Testimonials */}
    <Testimonials />

    {/* 10. CTA Bottom */}
    <CTABottom />

    {/* 11. Contact Form */}
    <ContactForm />

    {/* 12. Footer */}
    <Footer />

    {/* Floating CTA – mobile only */}
    <FloatingCTA />

    {/* Back to Top button */}
    <BackToTop />
  </div>
);

export { Base };

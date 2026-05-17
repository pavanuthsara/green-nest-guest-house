import type { Component } from "solid-js";

/* ─── WhatsApp link ──────────────────────────────────────── */
const WA_LINK =
  "https://wa.me/94714169537?text=Hi%20Green%20Nest!%20I'm%20interested%20in%20booking%20a%20stay.";

/* ─── Icon helpers ──────────────────────────────────────── */
const IconWA = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Nav ─────────────────────────────────────────────────── */
const Nav: Component = () => (
  <nav class="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-forest-100/60 shadow-sm">
    <div class="container-max flex items-center justify-between h-16 px-4 sm:px-6">
      <a href="#home" class="flex items-center gap-2.5" aria-label="Green Nest Guest House home">
        <span class="w-8 h-8 rounded-lg bg-forest flex items-center justify-center text-white text-sm font-bold">G</span>
        <span class="font-serif font-semibold text-forest text-lg leading-none">Green Nest</span>
      </a>
      <div class="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#about" class="hover:text-forest transition-colors">The Space</a>
        <a href="#kitchen" class="hover:text-forest transition-colors">Kitchen</a>
        <a href="#amenities" class="hover:text-forest transition-colors">Amenities</a>
        <a href="#long-stay" class="hover:text-forest transition-colors">Long Stays</a>
      </div>
      <a id="nav-book-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer" class="btn-wa text-sm px-5 py-2.5">
        <IconWA /> Book via WhatsApp
      </a>
    </div>
  </nav>
);

/* ─── Hero ───────────────────────────────────────────────── */
const Hero: Component = () => (
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient bg-leaf-pattern pt-16">
    {/* Decorative blobs */}
    <div aria-hidden="true" class="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-[50%_30%_60%_20%] bg-forest-100/40 animate-leaf-tl pointer-events-none" />
    <div aria-hidden="true" class="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-[20%_60%_20%_50%] bg-sand-100/60 animate-leaf-br pointer-events-none" />
    <div aria-hidden="true" class="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-forest-50/50 blur-3xl pointer-events-none" />

    <div class="container-max section-pad w-full relative z-10">
      <div class="max-w-2xl animate-slide-up">
        {/* Location badge */}
        <div class="badge bg-forest-50 text-forest border border-forest-200 mb-6">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          Weligama, Sri Lanka
        </div>

        {/* Main headline – SEO H1 */}
        <h1 class="font-serif text-[clamp(2.2rem,5.5vw,3.8rem)] font-bold text-gray-800 leading-tight text-balance mb-5">
          Your Peaceful Tropical Stay &amp; Long-Term Rental in{" "}
          <span class="text-forest">Weligama</span>
        </h1>

        {/* Subheadline */}
        <p class="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 max-w-xl">
          A cozy, independent sanctuary at Green Nest—perfect for{" "}
          <strong class="text-gray-700 font-semibold">digital nomads</strong>,{" "}
          <strong class="text-gray-700 font-semibold">solo travelers</strong>, and{" "}
          <strong class="text-gray-700 font-semibold">couples</strong>.
        </p>

        {/* Promo tag */}
        <div class="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-full px-4 py-2 text-sm font-semibold mb-8">
          <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Special Discounts for Monthly Stays
        </div>

        {/* CTA buttons */}
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a id="hero-book-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer" class="btn-wa text-base">
            <IconWA /> Book via WhatsApp
          </a>
          <a href="#amenities" class="btn-secondary text-base">
            View Amenities
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust bar */}
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-sm text-gray-500">
          {[
            "✔ Private Entrance",
            "✔ High-Speed Wi-Fi",
            "✔ Outdoor Kitchen",
            "✔ Pets Welcome",
          ].map((t) => <span>{t}</span>)}
        </div>
      </div>
    </div>
  </section>
);

/* ─── About / The Space ──────────────────────────────────── */
const AboutSection: Component = () => (
  <section id="about" aria-labelledby="about-heading" class="bg-white section-pad">
    <div class="container-max">
      <div class="text-center mb-14">
        <p class="heading-accent">The Space &amp; Vibe</p>
        <h2 id="about-heading" class="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-gray-800 mb-4">
          Comfort, Peace, and Independence in Weligama
        </h2>
        <div class="divider mb-6" />
        <p class="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Nestled in the heart of <strong>Weligama</strong>—Sri Lanka's beloved surfing and coastal town—Green Nest is a self-contained retreat designed for those who want more than just a bed. Whether you're a <strong>digital nomad</strong> chasing reliable internet and workspace zen, a solo traveler seeking a quiet home base near Weligama's surf beach, or a couple wanting an intimate hideaway, this is your place.
        </p>
        <p class="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4">
          Start your mornings with <strong>peaceful meditation</strong> in the open-air garden, brew your own coffee in the outdoor kitchen, and settle into deep work with no interruptions. The guest space features a <strong>private entrance</strong> so you come and go entirely on your own terms—no shared lobbies, no awkward check-ins. This is <strong>independent living</strong> at the coast.
        </p>
      </div>

      {/* Highlights grid */}
      <div class="grid sm:grid-cols-3 gap-6">
        {[
          {
            icon: "🚪",
            title: "Private Entrance",
            desc: "Complete independence and safety. Your own key, your own space—arrive and leave whenever you like, no shared access.",
          },
          {
            icon: "💻",
            title: "Dedicated Workspace",
            desc: "A proper desk and chair paired with free high-speed Wi-Fi make this the ideal digital nomad-friendly stay in Weligama.",
          },
          {
            icon: "🧘",
            title: "Peaceful Atmosphere",
            desc: "A calm, quiet environment ideal for morning meditation, deep focus, creative work, or simply unwinding after a surf session.",
          },
        ].map((item) => (
          <article class="glass-card p-6 sm:p-8 text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
            <h3 class="font-serif text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Outdoor Kitchen ────────────────────────────────────── */
const KitchenSection: Component = () => (
  <section id="kitchen" aria-labelledby="kitchen-heading" class="bg-cream section-pad">
    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div>
          <p class="heading-accent">Featured Amenity</p>
          <h2 id="kitchen-heading" class="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-gray-800 mb-4">
            Fully Equipped Outdoor Kitchen
          </h2>
          <div class="w-12 h-1 bg-gradient-to-r from-forest to-forest-light rounded-full mb-6" />
          <p class="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Long-term travelers know the value of a real kitchen. At Green Nest, you have access to a <strong>fully equipped outdoor kitchen and dining area</strong>—perfect for self-catering, budget-friendly cooking, and enjoying Sri Lankan evenings outdoors.
          </p>
          <p class="text-gray-600 text-base leading-relaxed mb-8">
            Cook your own meals, store fresh produce, and dine under the open sky. Everything you need for comfortable, independent living is here.
          </p>

          {/* Appliance list */}
          <ul class="space-y-3" aria-label="Kitchen appliances and equipment">
            {[
              { icon: "❄️", label: "Refrigerator – keep groceries fresh" },
              { icon: "🔥", label: "Gas Stove – full cooking capability" },
              { icon: "🍞", label: "Toaster – quick breakfast essentials" },
              { icon: "🥤", label: "Blender – smoothies & fresh juices" },
              { icon: "🪑", label: "Outdoor Dining Table – alfresco meals" },
            ].map((item) => (
              <li class="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-forest-50">
                <span class="text-xl" aria-hidden="true">{item.icon}</span>
                <span class="text-gray-700 text-sm font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual panel */}
        <div class="relative">
          <div class="rounded-3xl bg-green-gradient p-1 shadow-card-lg">
            <div class="rounded-[22px] bg-forest-50 p-10 flex flex-col items-center justify-center text-center min-h-72">
              <div class="text-7xl mb-5" aria-hidden="true">🍃</div>
              <p class="font-serif text-2xl font-bold text-forest-dark mb-2">Alfresco Living</p>
              <p class="text-forest text-sm leading-relaxed max-w-xs">
                Cook, dine, and breathe fresh tropical air—your outdoor kitchen is the heart of your independent stay at Green Nest.
              </p>
            </div>
          </div>
          {/* Floating badge */}
          <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-4 py-3 border border-forest-100 flex items-center gap-2">
            <span class="text-2xl" aria-hidden="true">🌿</span>
            <span class="text-xs font-semibold text-forest leading-tight">Self-Catering<br />Friendly</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Amenities ──────────────────────────────────────────── */
const AmenitiesSection: Component = () => {
  const groups = [
    {
      emoji: "🛏️",
      title: "Comfort & Sleep",
      items: ["Cozy private bedroom", "Quality bed linens", "Mosquito net"],
    },
    {
      emoji: "🚿",
      title: "Bathroom & Laundry",
      items: ["Attached private bathroom", "Hot water shower", "Bidet", "Washing machine", "Free clothes dryer", "Drying rack"],
    },
    {
      emoji: "📶",
      title: "Connectivity",
      items: ["Free high-speed Wi-Fi", "Dedicated laptop workspace", "Desk & ergonomic chair"],
    },
    {
      emoji: "🔒",
      title: "Safety & Facilities",
      items: ["CCTV cameras (lobby & exterior)", "Free parking on premises", "Private entrance with key"],
    },
    {
      emoji: "📋",
      title: "Policies",
      items: ["Pets & assistance animals welcome", "Smoking allowed (outdoor areas)", "Self check-in available"],
    },
  ];

  return (
    <section id="amenities" aria-labelledby="amenities-heading" class="bg-white section-pad">
      <div class="container-max">
        <div class="text-center mb-14">
          <p class="heading-accent">What's Included</p>
          <h2 id="amenities-heading" class="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-gray-800 mb-4">
            Amenities at a Glance
          </h2>
          <div class="divider" />
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <article class="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="icon-box">
                  <span class="text-xl" aria-hidden="true">{group.emoji}</span>
                </div>
                <h3 class="font-serif text-lg font-semibold text-gray-800">{group.title}</h3>
              </div>
              <ul class="space-y-2">
                {group.items.map((item) => (
                  <li class="flex items-start gap-2 text-sm text-gray-600">
                    <svg class="w-4 h-4 text-forest mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Long-Stay Callout ──────────────────────────────────── */
const LongStaySection: Component = () => (
  <section id="long-stay" aria-labelledby="long-stay-heading" class="bg-cream section-pad">
    <div class="container-max">
      <div class="relative rounded-3xl bg-green-gradient overflow-hidden shadow-card-lg">
        {/* Decorative blobs */}
        <div aria-hidden="true" class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
        <div aria-hidden="true" class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />

        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 sm:p-14">
          <div class="text-center lg:text-left max-w-xl">
            <div class="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              🗓️ Monthly Stay Offer
            </div>
            <h2 id="long-stay-heading" class="font-serif text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-white mb-4 text-balance">
              Planning a Monthly Stay?
            </h2>
            <p class="text-white/85 text-base sm:text-lg leading-relaxed">
              Message us directly to unlock <strong class="text-white">exclusive long-term rental discounts</strong>. Whether you're a digital nomad settling in for a month of deep work beside the Indian Ocean, or a couple seeking a slow-travel base near Weligama's surf scene—we have a deal for you.
            </p>
          </div>

          <div class="flex flex-col items-center gap-4 flex-shrink-0">
            <div class="text-center text-white mb-2">
              <div class="text-5xl font-serif font-bold">30%</div>
              <div class="text-white/80 text-sm font-medium">avg. monthly discount</div>
            </div>
            <a
              id="long-stay-cta"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Inquire about monthly stay discounts on WhatsApp"
              class="inline-flex items-center justify-center gap-2.5 bg-white text-forest font-semibold px-8 py-4 rounded-pill shadow-lg transition-all duration-200 hover:bg-forest-50 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <IconWA /> Inquire on WhatsApp
            </a>
            <p class="text-white/60 text-xs text-center">Instant reply · No booking fees</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Footer ─────────────────────────────────────────────── */
const Footer: Component = () => (
  <footer class="bg-forest-dark text-white" aria-label="Site footer">
    <div class="container-max section-pad">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <span class="w-9 h-9 rounded-lg bg-forest-light flex items-center justify-center text-white font-bold">G</span>
            <span class="font-serif text-xl font-semibold">Green Nest</span>
          </div>
          <p class="text-white/70 text-sm leading-relaxed mb-5">
            A cozy, independent guest house in Weligama, Sri Lanka. Peaceful coastal living for digital nomads, solo travelers, and couples.
          </p>
          <a
            id="footer-book-cta"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-wa text-sm inline-flex"
            aria-label="Book your stay via WhatsApp"
          >
            <IconWA /> Book via WhatsApp
          </a>
        </div>

        {/* Guest access notes */}
        <div>
          <h3 class="font-serif text-lg font-semibold mb-4 text-forest-light">Guest Access Notes</h3>
          <ul class="space-y-2 text-white/70 text-sm">
            <li>✦ Full private access to your room & outdoor kitchen</li>
            <li>✦ Private entrance – come and go freely</li>
            <li>✦ Free on-premises parking available</li>
            <li>✦ CCTV security in lobby & exterior areas</li>
            <li>✦ Pets and assistance animals welcome</li>
            <li>✦ Smoking permitted in outdoor areas</li>
            <li>✦ Self check-in available on request</li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div>
          <h3 class="font-serif text-lg font-semibold mb-4 text-forest-light">Find Us</h3>
          <address class="not-italic text-white/70 text-sm space-y-2">
            <p>📍 Weligama, Southern Province, Sri Lanka</p>
            <p>📱 <a href="tel:+94714169537" class="hover:text-white transition-colors">+94 71 416 9537</a></p>
            <p>💬 <a href={WA_LINK} target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Message on WhatsApp</a></p>
            <p>🌐 Near Weligama surf beach &amp; town centre</p>
          </address>
          <div class="mt-6 text-xs text-white/40 space-y-1">
            <p>✔ Check-in: 2:00 PM</p>
            <p>✔ Check-out: 11:00 AM</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Green Nest Guest House, Weligama, Sri Lanka. All rights reserved.</p>
        <p>Crafted with 🌿 for long-term travelers &amp; digital nomads</p>
      </div>
    </div>
  </footer>
);

/* ─── Main Landing Page ──────────────────────────────────── */
const LandingPage: Component = () => (
  <>
    <Nav />
    <main id="main-content">
      <Hero />
      <AboutSection />
      <KitchenSection />
      <AmenitiesSection />
      <LongStaySection />
    </main>
    <Footer />
  </>
);

export default LandingPage;

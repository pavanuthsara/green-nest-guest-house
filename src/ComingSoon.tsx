import type { Component } from "solid-js";

const ComingSoon: Component = () => {
  return (
    <div class="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Decorative leaf blobs */}
      <div
        aria-hidden="true"
        class="fixed -top-40 -left-40 w-[520px] h-[520px] rounded-[50%_20%_50%_20%] opacity-[0.08] bg-forest pointer-events-none z-0 animate-leaf-tl"
      />
      <div
        aria-hidden="true"
        class="fixed -bottom-32 -right-32 w-[420px] h-[420px] rounded-[20%_50%_20%_50%] opacity-[0.08] bg-forest pointer-events-none z-0 animate-leaf-br"
      />

      <main class="relative z-10 w-full max-w-card text-center bg-white/55 backdrop-blur-[12px] border border-forest/[0.18] rounded-card shadow-card px-6 py-10 sm:px-10 sm:py-12 animate-slide-up">

        {/* Homestay icon */}
        <div
          aria-label="Homestay icon"
          class="w-[88px] h-[88px] mx-auto mb-5 flex items-center justify-center rounded-full bg-forest/10 border-2 border-forest/20 animate-icon-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
            class="w-[52px] h-[52px]"
          >
            <path
              d="M8 30L32 10L56 30V56H40V40H24V56H8V30Z"
              fill="#4a7c59"
              opacity="0.15"
              stroke="#4a7c59"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path d="M32 10L56 30" stroke="#4a7c59" stroke-width="2" stroke-linecap="round" />
            <path d="M32 10L8 30" stroke="#4a7c59" stroke-width="2" stroke-linecap="round" />
            <rect x="24" y="40" width="16" height="16" rx="2" fill="#4a7c59" opacity="0.35" stroke="#4a7c59" stroke-width="1.5" />
            <rect x="12" y="34" width="8" height="8" rx="1" fill="#4a7c59" opacity="0.3" stroke="#4a7c59" stroke-width="1.5" />
            <rect x="44" y="34" width="8" height="8" rx="1" fill="#4a7c59" opacity="0.3" stroke="#4a7c59" stroke-width="1.5" />
            <ellipse cx="32" cy="7" rx="4" ry="6" fill="#4a7c59" opacity="0.7" transform="rotate(-15 32 7)" />
            <ellipse cx="37" cy="6" rx="3.5" ry="5.5" fill="#6aa878" opacity="0.6" transform="rotate(15 37 6)" />
          </svg>
        </div>

        {/* Site name */}
        <p class="text-[1.15rem] font-bold tracking-[0.04em] text-forest uppercase mb-0.5">
          Green Nest Guest House
        </p>
        <p class="text-[0.85rem] text-[#888] italic tracking-[0.06em] mb-6">
          Weligama, Sri Lanka
        </p>

        {/* Divider */}
        <div aria-hidden="true" class="flex items-center gap-3 mb-6">
          <span class="flex-1 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1C8 1 3 5 3 8.5C3 11.5376 5.23858 14 8 14C10.7614 14 13 11.5376 13 8.5C13 5 8 1 8 1Z"
              fill="#4a7c59"
              opacity="0.6"
            />
          </svg>
          <span class="flex-1 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent" />
        </div>

        {/* Main heading */}
        <h1 class="text-[clamp(2.4rem,6vw,3.2rem)] font-bold text-[#333] leading-[1.1] tracking-[-0.01em] mb-4">
          Coming Soon
        </h1>
        <p class="text-base leading-[1.75] text-[#555] mb-8">
          We're crafting something beautiful for you. Our website is currently
          under construction — stay tuned for a warm and cozy experience.
        </p>

        {/* WhatsApp contact — full width on mobile, auto pill on sm+ */}
        <a
          id="whatsapp-contact"
          href="https://wa.me/94714169537"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Pavan on WhatsApp"
          class="
            group flex w-full items-center justify-center gap-3
            bg-wa text-white no-underline font-[inherit]
            px-6 py-4 rounded-pill
            shadow-wa mb-8
            transition-all duration-200 ease-in-out
            hover:bg-wa-hover hover:-translate-y-1 hover:shadow-wa-hover
            active:translate-y-0 active:shadow-wa-active
            sm:inline-flex sm:w-auto
          "
        >
          {/* WhatsApp icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="w-[26px] h-[26px] flex-shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Text block */}
          <span class="flex flex-col text-left leading-[1.25]">
            <span class="text-[0.78rem] opacity-85 font-normal">Contact us on WhatsApp</span>
            <span class="text-[0.97rem] font-bold tracking-[0.01em]">+94 71 416 9537 · Pavan</span>
          </span>
        </a>

        {/* Footer */}
        <p class="text-[0.75rem] text-[#aaa] tracking-[0.02em] m-0">
          © {new Date().getFullYear()} Green Nest Guest House. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default ComingSoon;

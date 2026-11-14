import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";
import { ABOUT, BUSINESS, CTA, ESTIMATE_FORM, HERO, PROJECT_FILTERS, PROJECTS, GOOGLE_RATING, googleReviews, PROJECT_TYPES, SEO, SERVICES, SERVICES_INTRO, WHY_US, type Project } from "@/data/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO.title },
      { name: "description", content: SEO.description },
      { property: "og:title", content: SEO.ogTitle },
      { property: "og:description", content: SEO.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  useScrollReveal();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root" suppressHydrationWarning>
        <ImportedCursor />
        <ImportedHeader />
        <main>
          <ImportedSectionBuiltWithPrecisionCrafted />
          <ImportedSectionACommitmentToThe />
          <ImportedSectionExpertiseInEveryJoint />
          <ImportedSectionFeaturedProjects />
          <ImportedSectionTheStandardIsThe />
          <ImportedSection />
          <ImportedSectionHowWeBuild />
          <ImportedSectionStartYourProject />
          <ImportedSectionRequestAFreeEstimate />
        </main>
        <ImportedFooter />
        <div suppressHydrationWarning className={"fixed top-0 flex w-full flex-col-reverse p-4 \x73m:\x74op-auto \x73m:\x66lex-col [max-height:100vh] [z-index:100] [@media(min-width:640px)]:[bottom:0px] [@media(min-width:640px)]:[right:0px] [@media(min-width:768px)]:max-w-[420px]"}>
          <div suppressHydrationWarning className={"fixed top-0 flex w-full flex-col-reverse p-4 \x73m:\x74op-auto \x73m:\x66lex-col [max-height:100vh] [z-index:100] [@media(min-width:640px)]:[bottom:0px] [@media(min-width:640px)]:[right:0px] [@media(min-width:768px)]:max-w-[420px]"} />
        </div>
      </div>
    </>
  );
}

function ImportedCursor() {
  const pointer = usePointer();
  return (
    <div className="[@media(pointer:fine)]:pointer-events-none [@media(pointer:fine)]:fixed [@media(pointer:fine)]:[left:0px] [@media(pointer:fine)]:[top:0px] [@media(pointer:fine)]:[z-index:9999]" style={{ transform: `translateX(${pointer.x}px) translateY(${pointer.y}px)` }}>
      <div className={"cursor-crosshair [@media(pointer:fine)]:[transition:width_0.25s,height_0.25s]" + (pointer.hover ? " is-hover" : "")} />
    </div>
  );
}

function ImportedSectionStartYourProject() {
  const ctaParallax = useScrollValue<HTMLElement>((rect, vh) => clamp((vh - rect.top) / (vh + rect.height)), true);
  return (
    <section ref={ctaParallax.ref} className={"relative h-[80vh] w-full \x62g-[#\x30F0F0F] [&]:min-h-[520px] [overflow:hidden]"}>
      <div className={"absolute \x73cale-110 [inset:0px]"} style={{ transform: `translateY(${ctaParallax.value === null ? -15 : -15 + 30 * ctaParallax.value}%)` }}>
        <img className={"h-full w-full [&]:object-cover"} src="/site-assets/2f1d4afd7235a23a.png" alt="Modern custom home at dusk" />
      </div>
      <div className={"absolute \x62g-gradient-to-t \x66rom-[#\x30F0F0F] \x76ia-[#\x30F0F0F]/\x355 \x74o-[#\x30F0F0F]/\x340 [inset:0px]"} />
      <div className={"relative flex h-full flex-col items-center \x70x-[\x36vw] [&]:justify-center [&]:text-center [z-index:10]"}>
        <div data-reveal="">
          <span className={"label-tech \x74ext-[#\x4298B5F]"}>{CTA.eyebrow}</span>
        </div>
        <div data-reveal="">
          <h2 className={"display-heading mt-5 \x74ext-[#\x469F9F7] \x74ext-5xl \x6dd:\x74ext-8xl [max-width:56rem]"}>Ready to build something <span className={"\x74ext-[#\x4298B5F]"}>great</span>?</h2>
        </div>
        <div data-reveal="">
          <p className={"mt-6 \x74ext-[#\x469F9F7]/\x365 \x6ceading-relaxed [max-width:36rem]"}>{CTA.body}</p>
        </div>
        <div data-reveal="">
          <div className="mt-9">
            <a className={"btn-ghost \x70y-5 label-tech \x74ext-[#\x30F0F0F] \x62g-[#\x4298B5F] \x62order-[#\x4298B5F] [padding-left:2.5rem] [padding-right:2.5rem]"} style={{ transform: "none" }} href="#contact">
              <span>Request a Free Estimate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  useEffect(() => {
    if (!menuOpen) {
      if (wasOpen.current) openButtonRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);
  const menuLinks = [
    ["#about", "About"],
    ["#services", "Services"],
    ["#projects", "Projects"],
    ["#process", "Process"],
    ["#reviews", "Reviews"],
    ["#contact", "Contact"],
  ];
  return (
    <>
    <header suppressHydrationWarning className={"fixed top-0 left-0 right-0 z-[200] transition-all \x64uration-500 bg-transparent \x70y-6"} style={{ transform: "none" }} data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"bg-[#0F0F0F]/90\",\"backdrop-blur-md\",\"border-b\",\"border-white/5\",\"py-3\"],\"removed\":[\"bg-transparent\",\"py-6\"],\"threshold\":648},\"mobile\":{\"added\":[\"bg-[#0F0F0F]/90\",\"backdrop-blur-md\",\"border-b\",\"border-white/5\",\"py-3\"],\"removed\":[\"bg-transparent\",\"py-6\"],\"threshold\":633}}"}>
      <div className={"\x6dx-auto flex max-w-[1400px] items-center justify-between \x70x-[\x36vw]"}>
        <a className={"flex items-center gap-2.5 \x74ext-[#\x469F9F7]"} href="#top">
          <span className={"plus-mark \x74ext-[#\x4298B5F] \x73cale-125"} />
          <span className={"display-heading \x74ext-xl \x6dd:\x74ext-2xl \x74racking-tight \x66ont-extrabold"}>{BUSINESS.logoLead} <span className={"\x74ext-[#\x4298B5F]"}>{BUSINESS.logoAccent}</span></span>
        </a>
        <nav className={"hidden \x6dd:\x66lex items-center gap-9"}>
          <a className={"label-tech \x74ext-[#\x469F9F7]/\x380 \x68over:\x74ext-[#\x4298B5F] transition-colors \x64uration-300 relative \x61fter:\x61bsolute \x61fter:\x2dbottom-1.\x35 \x61fter:\x6ceft-0 \x61fter:\x68-px \x61fter:\x77-0 \x61fter:\x62g-[#\x4298B5F] \x68over:\x61fter:\x77-full \x61fter:\x74ransition-all \x61fter:\x64uration-300"} href="#about">About</a>
          <a className={"label-tech \x74ext-[#\x469F9F7]/\x380 \x68over:\x74ext-[#\x4298B5F] transition-colors \x64uration-300 relative \x61fter:\x61bsolute \x61fter:\x2dbottom-1.\x35 \x61fter:\x6ceft-0 \x61fter:\x68-px \x61fter:\x77-0 \x61fter:\x62g-[#\x4298B5F] \x68over:\x61fter:\x77-full \x61fter:\x74ransition-all \x61fter:\x64uration-300"} href="#services">Services</a>
          <a className={"label-tech \x74ext-[#\x469F9F7]/\x380 \x68over:\x74ext-[#\x4298B5F] transition-colors \x64uration-300 relative \x61fter:\x61bsolute \x61fter:\x2dbottom-1.\x35 \x61fter:\x6ceft-0 \x61fter:\x68-px \x61fter:\x77-0 \x61fter:\x62g-[#\x4298B5F] \x68over:\x61fter:\x77-full \x61fter:\x74ransition-all \x61fter:\x64uration-300"} href="#projects">Projects</a>
          <a className={"label-tech \x74ext-[#\x469F9F7]/\x380 \x68over:\x74ext-[#\x4298B5F] transition-colors \x64uration-300 relative \x61fter:\x61bsolute \x61fter:\x2dbottom-1.\x35 \x61fter:\x6ceft-0 \x61fter:\x68-px \x61fter:\x77-0 \x61fter:\x62g-[#\x4298B5F] \x68over:\x61fter:\x77-full \x61fter:\x74ransition-all \x61fter:\x64uration-300"} href="#process">Process</a>
          <a className={"label-tech \x74ext-[#\x469F9F7]/\x380 \x68over:\x74ext-[#\x4298B5F] transition-colors \x64uration-300 relative \x61fter:\x61bsolute \x61fter:\x2dbottom-1.\x35 \x61fter:\x6ceft-0 \x61fter:\x68-px \x61fter:\x77-0 \x61fter:\x62g-[#\x4298B5F] \x68over:\x61fter:\x77-full \x61fter:\x74ransition-all \x61fter:\x64uration-300"} href="#reviews">Reviews</a>
          <a className={"label-tech \x74ext-[#\x469F9F7]/\x380 \x68over:\x74ext-[#\x4298B5F] transition-colors \x64uration-300 relative \x61fter:\x61bsolute \x61fter:\x2dbottom-1.\x35 \x61fter:\x6ceft-0 \x61fter:\x68-px \x61fter:\x77-0 \x61fter:\x62g-[#\x4298B5F] \x68over:\x61fter:\x77-full \x61fter:\x74ransition-all \x61fter:\x64uration-300"} href="#contact">Contact</a>
        </nav>
        <a className={"hidden \x6dd:\x69nline-flex btn-ghost \x70x-6 \x70y-3 \x74ext-[#\x30F0F0F] \x62g-[#\x4298B5F] \x62order-[#\x4298B5F] label-tech \x66ont-semibold"} href="#contact">
          <span>Get a Quote</span>
        </a>
        <button ref={openButtonRef} className={"\x6dd:\x68idden \x74ext-[#\x469F9F7]"} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
    {menuOpen && (
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[300] bg-[#0F0F0F] grain flex flex-col animate-in fade-in duration-300">
        <div className="flex items-center justify-between px-[6vw] py-6">
          <span className="display-heading text-[#F9F9F7] text-lg">{BUSINESS.logoLead} <span className="text-[#B98B5F]">{BUSINESS.logoAccent}</span></span>
          <button ref={closeButtonRef} className="text-[#F9F9F7]" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {menuLinks.map(([href, label]) => (
            <a key={label} href={href} className="display-heading text-3xl text-[#F9F9F7] hover:text-[#B98B5F] transition-colors" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="mt-4 btn-ghost px-7 py-3 text-[#B98B5F] border-[#B98B5F] label-tech" onClick={() => setMenuOpen(false)}>
            <span>Get a Free Quote</span>
          </a>
        </nav>
      </div>
    )}
    </>
  );
}

function ImportedSectionBuiltWithPrecisionCrafted() {
  const pointer = usePointer();
  const hero = useScrollValue<HTMLElement>((rect) => clamp(-rect.top / rect.height), true);
  const progress = hero.value ?? 0;
  return (
    <section ref={hero.ref} className={"relative h-screen w-full \x62g-[#\x30F0F0F] grain [&]:min-h-[640px] [overflow:hidden]"} id="top">
      <div className="absolute [inset:0px]" style={{ transform: progress > 0 ? `translateY(${22 * progress}%)` : "none" }}>
        <img className={"h-full w-full [&]:object-cover"} src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SbBC_DhCf-otMDw98qKr0ifle5km15r_a7DSPuXUtQ58eyeBNJK7HQzQM6IwTcG9iTvG1L8i5mvSkYSIrq3GwMl5BOIQ6yOz6hyqMoNZtbRr0-BMRqH9MP4kQR08hziqVtjGVjdvPkuyLb=s1360-w1360-h1020-rw" alt="Custom Adirondack outdoor seating" />
      </div>
      <div className={"absolute transition-all \x64uration-200 [animation-duration:0.2s] [inset:0px]"} style={{ background: `radial-gradient(circle at ${pointer.active ? pointer.px : 50}% ${pointer.active ? pointer.py : 40}%, rgba(255, 255, 255, 0.16), rgba(15, 15, 15, 0.55) 38%, rgba(15, 15, 15, 0.94) 100%)` }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[46.6944%] [animation:15.3307s_linear_2.06403s_infinite_normal_none_running_float-up]"} style={{ width: "3.49241px", height: "3.49241px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[41.6065%] [animation:21.9855s_linear_4.30927s_infinite_normal_none_running_float-up]"} style={{ width: "4.15852px", height: "4.15852px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[96.1689%] [animation:23.3975s_linear_4.37896s_infinite_normal_none_running_float-up]"} style={{ width: "3.90289px", height: "3.90289px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[29.1336%] [animation:18.6633s_linear_9.73587s_infinite_normal_none_running_float-up]"} style={{ width: "3.60204px", height: "3.60204px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[65.7894%] [animation:14.2476s_linear_5.54097s_infinite_normal_none_running_float-up]"} style={{ width: "3.93192px", height: "3.93192px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[28.7564%] [animation:19.5678s_linear_5.14346s_infinite_normal_none_running_float-up]"} style={{ width: "3.58329px", height: "3.58329px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[67.7259%] [animation:25.9361s_linear_0.125032s_infinite_normal_none_running_float-up]"} style={{ width: "4.5925px", height: "4.5925px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[99.5758%] [animation:20.3604s_linear_8.4377s_infinite_normal_none_running_float-up]"} style={{ width: "2.7074px", height: "2.7074px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[23.2484%] [animation:20.5736s_linear_2.636s_infinite_normal_none_running_float-up]"} style={{ width: "4.40016px", height: "4.40016px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[9.27169%] [animation:22.7523s_linear_2.75083s_infinite_normal_none_running_float-up]"} style={{ width: "3.19622px", height: "3.19622px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[27.9571%] [animation:22.2865s_linear_2.64364s_infinite_normal_none_running_float-up]"} style={{ width: "4.12584px", height: "4.12584px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[98.7007%] [animation:22.4506s_linear_2.42549s_infinite_normal_none_running_float-up]"} style={{ width: "2.24758px", height: "2.24758px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[40.1813%] [animation:17.7643s_linear_7.7004s_infinite_normal_none_running_float-up]"} style={{ width: "3.30639px", height: "3.30639px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[31.1872%] [animation:16.2577s_linear_2.63473s_infinite_normal_none_running_float-up]"} style={{ width: "4.01535px", height: "4.01535px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[3.02323%] [animation:14.8494s_linear_1.77788s_infinite_normal_none_running_float-up]"} style={{ width: "3.2496px", height: "3.2496px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[65.1234%] [animation:14.9492s_linear_5.31265s_infinite_normal_none_running_float-up]"} style={{ width: "2.14111px", height: "2.14111px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[74.0689%] [animation:19.0528s_linear_0.209055s_infinite_normal_none_running_float-up]"} style={{ width: "3.2864px", height: "3.2864px" }} />
      <span className={"absolute rounded-full \x62g-[#\x4298B5F]/\x340 [bottom:0px] left-[49.9939%] [animation:20.0841s_linear_0.0413123s_infinite_normal_none_running_float-up]"} style={{ width: "4.94888px", height: "4.94888px" }} />
      <div className={"relative flex h-full flex-col pb-[14vh] \x70x-[\x36vw] [&]:justify-end [z-index:10]"} style={{ opacity: Math.max(0, 1 - progress / 0.85), transform: progress > 0 ? `translateY(${40 * progress}%)` : "none" }}>
        <span className={"label-tech \x74ext-[#\x4298B5F] mb-6 flex items-center [gap:0.75rem]"} style={{ opacity: "1", transform: "none" }}><span className={"h-px w-10 \x62g-[#\x4298B5F]"} /> {HERO.eyebrow}</span>
        <h1 className={"display-heading \x74ext-[#\x469F9F7] text-[2rem] \x73m:\x74ext-5xl \x6dd:\x74ext-6xl \x6cg:\x74ext-7xl \x78l:\x74ext-[\x35rem] \x6ceading-[\x31.\x302] \x74racking-tight [max-width:56rem]"}>
          {[HERO.headlineLead, HERO.headlineAccent].map((line, lineIndex) => (
            <span key={lineIndex} aria-hidden="true" className={`block hero-title-line${lineIndex === 1 ? " \x74ext-[#\x4298B5F]" : ""}`}>
              {Array.from(line).map((character, index) =>
                character === " " ? (
                  <span key={index}> </span>
                ) : (
                  <span key={index} className="hero-title-letter" style={{ animationDelay: `${(lineIndex * 38 + index) * 38}ms` }}>
                    {character}
                  </span>
                ),
              )}
            </span>
          ))}
          <span className="sr-only">{HERO.headlineLead} {HERO.headlineAccent}</span>
        </h1>
        <p className={"mt-8 \x74ext-[#\x469F9F7]/\x365 \x74ext-base \x6dd:\x74ext-lg \x6ceading-relaxed [max-width:36rem]"} style={{ opacity: "1" }}>{HERO.subheadline}</p>
        <div className={"mt-9 flex flex-col \x73m:\x66lex-row [gap:1rem]"} style={{ opacity: "1", transform: "none" }}>
          <a className={"btn-ghost \x70y-4 label-tech \x74ext-[#\x30F0F0F] \x62g-[#\x4298B5F] \x62order-[#\x4298B5F] \x68over:\x74ext-[#\x30F0F0F] [padding-left:2rem] [padding-right:2rem]"} style={{ transform: "none" }} href="#contact">
            <span>Get a Free Quote</span>
          </a>
          <a className={"btn-ghost \x70y-4 label-tech \x74ext-[#\x469F9F7] \x62order-[#\x469F9F7]/\x330 [padding-left:2rem] [padding-right:2rem]"} style={{ transform: "none" }} href="#projects">
            <span>View Our Work</span>
          </a>
        </div>
      </div>
      <div className={"absolute \x2dtranslate-x-1/\x32 flex flex-col items-center [bottom:2rem] [gap:0.5rem] [left:50%] [z-index:10]"} style={{ opacity: "1" }}>
        <span className={"label-tech \x74ext-[#\x469F9F7]/\x350"}>Scroll</span>
        <div className={"h-8 w-px \x62g-gradient-to-b \x66rom-[#\x4298B5F] \x74o-transparent site-scroll-cue"} />
      </div>
    </section>
  );
}

function ImportedSectionACommitmentToThe() {
  return (
    <section className={"relative \x62g-[#\x469F9F7] \x70y-24 \x6dd:\x70y-36"} id="about">
      <div className={"\x6dx-auto grid max-w-[1400px] gap-14 \x70x-[\x36vw] \x6dd:\x67ap-20 [@media(min-width:768px)]:items-center [@media(min-width:768px)]:[grid-template-columns:repeat(2,minmax(0px,1fr))]"}>
        <div className="relative">
          <div className="relative [overflow:hidden]" style={{ transform: "translateY(-6.48647%)" }} data-site-import-responsive="61">
<img className={"w-full [&]:aspect-[4/5] [&]:object-cover"} src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9PitMvZw-3iSFCC8oaBo6xkDqG_nPeBFsr6uMkL53zGW1qySPQH4bD723U45SN8TEa1_3uhxN2u_7vUIWKRzYHzfR3n9hTj3oSBG5SeDp394809sx9uKLP_TWq1pFcUhdTRlrTMJjsjuR=s1360-w1360-h1020-rw" alt="Wood Core Carpentry craftsmanship" />          </div>
          <div className={"absolute -top-3 -left-3 plus-mark \x74ext-[#\x4298B5F] \x73cale-150"} />
          <div className={"absolute -bottom-3 -right-3 plus-mark \x74ext-[#\x4298B5F] \x73cale-150"} />
          <div className={"absolute -bottom-6 right-6 \x62g-[#\x30F0F0F] \x70x-6 \x70y-4 grain"}>
            <div className={"display-heading \x74ext-3xl \x74ext-[#\x4298B5F]"}>{ABOUT.statValue}</div>
            <div className={"label-tech \x74ext-[#\x469F9F7]/\x360 mt-1"}>{ABOUT.statLabel}</div>
          </div>
        </div>
        <div>
          <div data-reveal="">
            <span className={"label-tech \x74ext-[#\x4298B5F] flex items-center [gap:0.75rem]"}><span className={"h-px w-8 \x62g-[#\x4298B5F]"} /> {ABOUT.eyebrow}</span>
          </div>
          <div data-reveal="">
            <h2 className={"display-heading mt-5 \x74ext-4xl \x6dd:\x74ext-6xl \x74ext-[#\x30F0F0F]"}>{ABOUT.heading}</h2>
          </div>
          <div data-reveal="">
            <p className={"mt-6 \x74ext-[#\x3333] \x74ext-lg \x6ceading-relaxed"}>{ABOUT.body}</p>
          </div>
          <div className={"mt-9 grid grid-cols-1 \x73m:\x67rid-cols-2 [column-gap:2rem] [row-gap:0.75rem]"}>
            {ABOUT.points.map((point) => (
              <div key={point} data-reveal="">
                <div className={"flex items-center \x74ext-[#\x30F0F0F] [gap:0.75rem]"}>
                  <span className={"plus-mark \x74ext-[#\x4298B5F]"} />
                  <span className={"\x74ext-sm \x66ont-medium"}>{point}</span>
                </div>
              </div>
            ))}
          </div>
          <div data-reveal="">
            <div className={"mt-10 h-px w-full \x62g-[#\x30F0F0F]/\x310 \x6frigin-left [animation:1s_ease_0s_1_normal_forwards_running_draw-line]"} style={{ transform: "scaleX(1)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionExpertiseInEveryJoint() {
  return (
    <section className={"relative \x62g-[#\x30F0F0F] grain \x70y-24 \x6dd:\x70y-36 \x74ext-[#\x469F9F7]"} id="services">
      <div className={"\x6dx-auto max-w-[1400px] \x70x-[\x36vw]"}>
        <div className={"flex flex-col \x6dd:\x66lex-row [gap:1.5rem] [@media(min-width:768px)]:items-end [@media(min-width:768px)]:justify-between"}>
          <div>
            <div data-reveal="">
              <span className={"label-tech \x74ext-[#\x4298B5F] flex items-center [gap:0.75rem]"}><span className={"h-px w-8 \x62g-[#\x4298B5F]"} /> {SERVICES_INTRO.eyebrow}</span>
            </div>
            <div data-reveal="">
              <h2 className={"display-heading mt-5 \x74ext-4xl \x6dd:\x74ext-6xl [max-width:42rem]"}>Expertise, in every <span className={"\x74ext-[#\x4298B5F]"}>joint</span>.</h2>
            </div>
          </div>
          <div data-reveal="">
            <p className={"\x74ext-[#\x469F9F7]/\x355 \x6ceading-relaxed [max-width:24rem]"}>{SERVICES_INTRO.body}</p>
          </div>
        </div>
        <div className={"mt-14 grid \x62g-white/\x35 \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-3 [gap:1px]"}>
          {SERVICES.map((service, index) => (
            <div key={service.number} className={"group relative \x62g-[#\x30F0F0F] p-8 \x6dd:\x70-10 transition-colors \x64uration-500 \x68over:\x62g-[#\x3161616] [overflow:hidden]"} data-reveal="">
              <span className={"absolute \x62order \x62order-transparent transition-colors \x64uration-500 \x67roup-hover:\x62order-[#\x4298B5F]/\x340 [&]:pointer-events-none [inset:0px]"} />
              <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
              <span className={"absolute right-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full [bottom:0px]"} />
              <div className="relative">
                <div className="-mx-8 -mt-8 mb-8 aspect-[16/10] overflow-hidden md:-mx-10 md:-mt-10">
                  <img className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" src={service.image} alt={service.title} loading="lazy" />
                </div>
                <svg className={"\x74ext-[#\x4298B5F] \x74ransition-transform \x64uration-500 \x67roup-hover:\x72otate-[\x3360deg] [transition-property:transform] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  {SERVICE_ICONS[index]}
                </svg>
                <h3 className={"mt-6 font-heading \x74ext-xl \x66ont-bold \x74racking-tight"}>{service.title}</h3>
                <p className={"mt-3 \x74ext-sm \x74ext-[#\x469F9F7]/\x355 \x6ceading-relaxed"}>{service.description}</p>
                <span className={"mt-6 inline-block label-tech \x74ext-[#\x469F9F7]/\x330 \x67roup-hover:\x74ext-[#\x4298B5F] transition-colors"}>{service.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const cardTrigger = useRef<HTMLButtonElement | null>(null);
  const dialogClose = useRef<HTMLButtonElement>(null);
  const visibleProjects = activeFilter === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === activeFilter);
  useEffect(() => {
    if (!activeProject) return;
    dialogClose.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      cardTrigger.current?.focus();
    };
  }, [activeProject]);
  return (
    <section className={"relative \x62g-[#\x469F9F7] \x70y-24 \x6dd:\x70y-36"} id="projects">
      <div className={"\x6dx-auto max-w-[1400px] \x70x-[\x36vw]"}>
        <div className={"flex flex-col \x6dd:\x66lex-row [gap:1.5rem] [@media(min-width:768px)]:items-end [@media(min-width:768px)]:justify-between"}>
          <div>
            <div data-reveal="">
              <span className={"label-tech \x74ext-[#\x4298B5F] flex items-center [gap:0.75rem]"}><span className={"h-px w-8 \x62g-[#\x4298B5F]"} /> The Archive</span>
            </div>
            <div data-reveal="">
              <h2 className={"display-heading mt-5 \x74ext-4xl \x6dd:\x74ext-6xl \x74ext-[#\x30F0F0F]"}>Featured projects.</h2>
            </div>
          </div>
          <div data-reveal="">
            <div className={"flex [&]:flex-wrap [gap:0.5rem]"}>
              {PROJECT_FILTERS.map((filter) => (
                <button key={filter} className={filter === activeFilter ? "label-tech \x70x-4 \x70y-2 \x62order transition-colors \x64uration-300 \x62g-[#\x30F0F0F] \x74ext-[#\x469F9F7] \x62order-[#\x30F0F0F]" : "label-tech \x70x-4 \x70y-2 \x62order transition-colors \x64uration-300 \x74ext-[#\x3333] \x62order-[#\x30F0F0F]/\x315 \x68over:\x62order-[#\x4298B5F] \x68over:\x74ext-[#\x4298B5F]"} aria-pressed={filter === activeFilter} onClick={() => setActiveFilter(filter)}>{filter}</button>
              ))}
            </div>
          </div>
        </div>
        <div className={"mt-14 \x63olumns-1 \x73m:\x63olumns-2 \x6cg:\x63olumns-3 [&>*]:\x6db-5 [gap:1.25rem]"}>
          {visibleProjects.map((project) => (
            <button key={project.title} className={"group relative block w-full [&]:text-left [overflow:hidden] animate-in fade-in duration-500"} style={{ opacity: "1", transform: "none" }} aria-haspopup="dialog" onClick={(event) => { cardTrigger.current = event.currentTarget; setActiveProject(project); }}>
              <div className={"[&]:will-change-transform"} style={{ transform: "none" }}>
                <img className={"w-full transition-all \x64uration-700 \x67roup-hover:\x73cale-[\x31.\x304] " + (project.aspect === "3/4" ? "[&]:aspect-[3/4]" : project.aspect === "1/1" ? "[&]:aspect-square" : "[&]:aspect-[4/3]") + " [&]:object-cover [animation-duration:0.7s]"} src={project.image} alt={project.title} />
              </div>
              <div className={"absolute \x62g-gradient-to-t \x66rom-[#\x30F0F0F]/\x385 \x76ia-[#\x30F0F0F]/\x310 \x74o-transparent opacity-80 \x74ransition-opacity \x64uration-500 \x67roup-hover:\x6fpacity-95 [inset:0px] [transition-property:opacity] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"} />
              <div className={"absolute flex flex-col p-6 [&]:justify-end [inset:0px]"}>
                <span className={"label-tech \x74ext-[#\x4298B5F]"}>{project.category}</span>
                <h3 className={"project-title-typewriter mt-2 font-heading \x74ext-xl \x66ont-bold \x74ext-[#\x469F9F7]"}>{project.title}</h3>
                <div className={"mt-3 max-h-0 opacity-0 transition-all \x64uration-500 \x67roup-hover:\x6dax-h-24 \x67roup-hover:\x6fpacity-100 [overflow:hidden]"}>
                  <p className={"\x74ext-xs \x74ext-[#\x469F9F7]/\x370 \x6ceading-relaxed"}>{project.materials}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {activeProject && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center bg-[#0F0F0F]/90 backdrop-blur-sm p-[6vw] animate-in fade-in duration-300" onClick={() => setActiveProject(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden bg-[#F9F9F7] md:grid-cols-2 animate-in zoom-in-95 duration-300" onClick={(event) => event.stopPropagation()}>
            <div className="relative h-64 md:h-auto">
              <img src={activeProject.image} alt={activeProject.title} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-y-auto p-8 md:p-12">
              <span className="label-tech text-[#B98B5F]">{activeProject.category}</span>
              <h3 id="project-dialog-title" className="mt-3 display-heading text-3xl md:text-4xl text-[#0F0F0F]">{activeProject.title}</h3>
              <p className="mt-5 text-[#333] leading-relaxed">{activeProject.description}</p>
              <div className="mt-7 space-y-4 border-t border-[#0F0F0F]/10 pt-6">
                <div>
                  <div className="label-tech text-[#0F0F0F]/40">Scope of Work</div>
                  <p className="mt-1 text-sm text-[#333]">{activeProject.scope}</p>
                </div>
                <div>
                  <div className="label-tech text-[#0F0F0F]/40">Materials Used</div>
                  <p className="mt-1 text-sm text-[#333]">{activeProject.materials}</p>
                </div>
                <div>
                  <div className="label-tech text-[#0F0F0F]/40">Duration</div>
                  <p className="mt-1 text-sm text-[#333]">{activeProject.duration}</p>
                </div>
              </div>
            </div>
            <button ref={dialogClose} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-[#0F0F0F] text-[#F9F9F7] hover:bg-[#B98B5F] transition-colors" aria-label="Close" onClick={() => setActiveProject(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function ImportedSectionTheStandardIsThe() {
  return (
    <section className={"relative \x62g-[#\x469F9F7] \x70y-24 \x6dd:\x70y-36"}>
      <div className={"\x6dx-auto max-w-[1400px] \x70x-[\x36vw]"}>
        <div className={"\x6dx-auto [&]:text-center [max-width:42rem]"}>
          <div data-reveal="">
            <span className={"label-tech \x74ext-[#\x4298B5F] flex items-center [&]:justify-center [gap:0.75rem]"}><span className={"h-px w-8 \x62g-[#\x4298B5F]"} /> {WHY_US.eyebrow}</span>
          </div>
          <div data-reveal="">
            <h2 className={"display-heading mt-5 \x74ext-4xl \x6dd:\x74ext-6xl \x74ext-[#\x30F0F0F]"}>The standard is the <span className={"\x74ext-[#\x4298B5F]"}>work</span>.</h2>
          </div>
          <div data-reveal="">
            <p className={"mt-5 \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.body}</p>
          </div>
        </div>
        <div className={"mt-16 grid \x62g-[#\x30F0F0F]/\x310 \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-3 [gap:1px]"}>
          <div className={"group relative \x62g-[#\x469F9F7] p-8 \x6dd:\x70-10"} data-reveal="">
            <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h3 className={"mt-5 font-heading \x74ext-lg \x66ont-bold \x74racking-tight \x74ext-[#\x30F0F0F]"}>{WHY_US.items[0]!.title}</h3>
            <p className={"mt-2 \x74ext-sm \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.items[0]!.text}</p>
          </div>
          <div className={"group relative \x62g-[#\x469F9F7] p-8 \x6dd:\x70-10"} data-reveal="">
            <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <h3 className={"mt-5 font-heading \x74ext-lg \x66ont-bold \x74racking-tight \x74ext-[#\x30F0F0F]"}>{WHY_US.items[1]!.title}</h3>
            <p className={"mt-2 \x74ext-sm \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.items[1]!.text}</p>
          </div>
          <div className={"group relative \x62g-[#\x469F9F7] p-8 \x6dd:\x70-10"} data-reveal="">
            <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <h3 className={"mt-5 font-heading \x74ext-lg \x66ont-bold \x74racking-tight \x74ext-[#\x30F0F0F]"}>{WHY_US.items[2]!.title}</h3>
            <p className={"mt-2 \x74ext-sm \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.items[2]!.text}</p>
          </div>
          <div className={"group relative \x62g-[#\x469F9F7] p-8 \x6dd:\x70-10"} data-reveal="">
            <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="m9 16 2 2 4-4" />
            </svg>
            <h3 className={"mt-5 font-heading \x74ext-lg \x66ont-bold \x74racking-tight \x74ext-[#\x30F0F0F]"}>{WHY_US.items[3]!.title}</h3>
            <p className={"mt-2 \x74ext-sm \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.items[3]!.text}</p>
          </div>
          <div className={"group relative \x62g-[#\x469F9F7] p-8 \x6dd:\x70-10"} data-reveal="">
            <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
              <path d="m7 16.5-4.74-2.85" />
              <path d="m7 16.5 5-3" />
              <path d="M7 16.5v5.17" />
              <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
              <path d="m17 16.5-5-3" />
              <path d="m17 16.5 4.74-2.85" />
              <path d="M17 16.5v5.17" />
              <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
              <path d="M12 8 7.26 5.15" />
              <path d="m12 8 4.74-2.85" />
              <path d="M12 13.5V8" />
            </svg>
            <h3 className={"mt-5 font-heading \x74ext-lg \x66ont-bold \x74racking-tight \x74ext-[#\x30F0F0F]"}>{WHY_US.items[4]!.title}</h3>
            <p className={"mt-2 \x74ext-sm \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.items[4]!.text}</p>
          </div>
          <div className={"group relative \x62g-[#\x469F9F7] p-8 \x6dd:\x70-10"} data-reveal="">
            <span className={"absolute left-0 top-0 h-0 w-px \x62g-[#\x4298B5F] transition-all \x64uration-500 \x67roup-hover:\x68-full"} />
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <h3 className={"mt-5 font-heading \x74ext-lg \x66ont-bold \x74racking-tight \x74ext-[#\x30F0F0F]"}>{WHY_US.items[5]!.title}</h3>
            <p className={"mt-2 \x74ext-sm \x74ext-[#\x3333] \x6ceading-relaxed"}>{WHY_US.items[5]!.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const STAR_PATH = "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z";

function ReviewStars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex [gap:0.25rem]" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} className={index < count ? "text-[#B98B5F] [fill:#B98B5F]" : "text-white/20 [fill:none]"} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}

function ImportedSection() {
  return (
    <section className={"relative bg-[#0F0F0F] grain py-24 md:py-36 text-[#F9F9F7] [overflow:hidden]"} id="reviews">
      <div className={"absolute h-72 w-72 rounded-full bg-[#B98B5F]/5 blur-3xl [left:-5rem] [top:33.3333%]"} />
      <div className={"absolute h-72 w-72 rounded-full bg-[#B98B5F]/5 blur-3xl [bottom:25%] [right:-5rem]"} />
      <div className={"relative mx-auto px-[6vw] [max-width:80rem]"}>
        <div className="text-center" data-reveal="">
          <span className={"label-tech text-[#B98B5F] flex items-center justify-center [gap:0.75rem]"}><span className={"h-px w-8 bg-[#B98B5F]"} /> Client Reviews</span>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
            <span className="font-heading text-5xl md:text-6xl font-semibold tracking-tight">{GOOGLE_RATING.score}</span>
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <ReviewStars count={GOOGLE_RATING.stars} size={22} />
              <span className="label-tech text-[#F9F9F7]/60">{GOOGLE_RATING.label}</span>
            </div>
          </div>
        </div>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((item) => (
            <li key={item.author} className="flex flex-col border border-white/10 bg-white/[0.02] p-7 md:p-8 transition-colors duration-300 hover:border-[#B98B5F]/40" data-reveal="">
              <ReviewStars count={item.rating} />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-[#F9F9F7]/80">“{item.text}”</p>
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="label-tech text-[#B98B5F]">{item.author}</p>
                <p className="mt-1.5 text-sm text-[#F9F9F7]/40">{item.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ImportedSectionHowWeBuild() {
  const timeline = useScrollValue<HTMLDivElement>((rect, vh) => clamp((vh / 2 - rect.top) / rect.height));
  return (
    <section className={"relative \x62g-[#\x469F9F7] \x70y-24 \x6dd:\x70y-36"} id="process">
      <div className={"\x6dx-auto max-w-[1400px] \x70x-[\x36vw]"}>
        <div className={"\x6dx-auto [&]:text-center [max-width:42rem]"}>
          <div data-reveal="">
            <span className={"label-tech \x74ext-[#\x4298B5F] flex items-center [&]:justify-center [gap:0.75rem]"}><span className={"h-px w-8 \x62g-[#\x4298B5F]"} /> The Process</span>
          </div>
          <div data-reveal="">
            <h2 className={"display-heading mt-5 \x74ext-4xl \x6dd:\x74ext-6xl \x74ext-[#\x30F0F0F]"}>How we build.</h2>
          </div>
        </div>
        <div ref={timeline.ref} className="relative mt-20">
          <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 top-0 w-px \x62g-[#\x30F0F0F]/\x310 \x6dd:\x2dtranslate-x-1/\x32 [bottom:0px]"} />
          <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 top-0 w-px \x6frigin-top \x62g-[#\x4298B5F] \x6dd:\x2dtranslate-x-1/\x32 [bottom:0px]"} style={{ transform: timeline.value === null || timeline.value < 1 ? `scaleY(${timeline.value ?? 0})` : "none" }} />
          <div className={"\x73pace-y-14 \x6dd:\x73pace-y-24"}>
            <div className={"relative flex items-center gap-8 \x6dd:\x67ap-0 pl-20 \x6dd:\x70l-0 \x6dd:\x66lex-row"} data-reveal="">
              <div className={"\x6dd:\x77-1/\x32 [@media(min-width:768px)]:[padding-left:3rem] [@media(min-width:768px)]:[padding-right:3rem]"}>
                <div className="[@media(min-width:768px)]:text-right">
                  <span className={"label-tech \x74ext-[#\x4298B5F]"}>Step 01</span>
                  <h3 className={"mt-2 font-heading \x74ext-2xl \x6dd:\x74ext-3xl \x66ont-bold \x74ext-[#\x30F0F0F]"}>Consultation</h3>
                  <p className={"mt-3 \x74ext-[#\x3333] \x6ceading-relaxed \x6dd:\x69nline-block [max-width:24rem]"}>We listen first — understanding your vision, space, and goals before anything else.</p>
                </div>
              </div>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 flex h-14 w-14 \x2dtranslate-x-1/\x32 items-center rounded-full \x62g-[#\x30F0F0F] grain \x62order-2 \x62order-[#\x4298B5F] [&]:justify-center [z-index:10]"}>
                <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={"hidden \x6dd:\x62lock \x6dd:\x77-1/\x32"} />
            </div>
            <div className={"relative flex items-center gap-8 \x6dd:\x67ap-0 pl-20 \x6dd:\x70l-0 [@media(min-width:768px)]:flex-row-reverse"} data-reveal="">
              <div className={"\x6dd:\x77-1/\x32 [@media(min-width:768px)]:[padding-left:3rem] [@media(min-width:768px)]:[padding-right:3rem]"}>
                <div className="[@media(min-width:768px)]:text-left">
                  <span className={"label-tech \x74ext-[#\x4298B5F]"}>Step 02</span>
                  <h3 className={"mt-2 font-heading \x74ext-2xl \x6dd:\x74ext-3xl \x66ont-bold \x74ext-[#\x30F0F0F]"}>Planning</h3>
                  <p className={"mt-3 \x74ext-[#\x3333] \x6ceading-relaxed \x6dd:\x69nline-block [max-width:24rem]"}>A clear plan with scope, sequencing, and material selection mapped to your priorities.</p>
                </div>
              </div>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 flex h-14 w-14 \x2dtranslate-x-1/\x32 items-center rounded-full \x62g-[#\x30F0F0F] grain \x62order-2 \x62order-[#\x4298B5F] [&]:justify-center [z-index:10]"}>
                <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                  <path d="m8 6 2-2" />
                  <path d="m18 16 2-2" />
                  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <div className={"hidden \x6dd:\x62lock \x6dd:\x77-1/\x32"} />
            </div>
            <div className={"relative flex items-center gap-8 \x6dd:\x67ap-0 pl-20 \x6dd:\x70l-0 \x6dd:\x66lex-row"} data-reveal="">
              <div className={"\x6dd:\x77-1/\x32 [@media(min-width:768px)]:[padding-left:3rem] [@media(min-width:768px)]:[padding-right:3rem]"}>
                <div className="[@media(min-width:768px)]:text-right">
                  <span className={"label-tech \x74ext-[#\x4298B5F]"}>Step 03</span>
                  <h3 className={"mt-2 font-heading \x74ext-2xl \x6dd:\x74ext-3xl \x66ont-bold \x74ext-[#\x30F0F0F]"}>Estimate</h3>
                  <p className={"mt-3 \x74ext-[#\x3333] \x6ceading-relaxed \x6dd:\x69nline-block [max-width:24rem]"}>Transparent, itemized pricing with no surprises — you know exactly what you're paying for.</p>
                </div>
              </div>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 flex h-14 w-14 \x2dtranslate-x-1/\x32 items-center rounded-full \x62g-[#\x30F0F0F] grain \x62order-2 \x62order-[#\x4298B5F] [&]:justify-center [z-index:10]"}>
                <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>
              <div className={"hidden \x6dd:\x62lock \x6dd:\x77-1/\x32"} />
            </div>
            <div className={"relative flex items-center gap-8 \x6dd:\x67ap-0 pl-20 \x6dd:\x70l-0 [@media(min-width:768px)]:flex-row-reverse"} data-reveal="">
              <div className={"\x6dd:\x77-1/\x32 [@media(min-width:768px)]:[padding-left:3rem] [@media(min-width:768px)]:[padding-right:3rem]"}>
                <div className="[@media(min-width:768px)]:text-left">
                  <span className={"label-tech \x74ext-[#\x4298B5F]"}>Step 04</span>
                  <h3 className={"mt-2 font-heading \x74ext-2xl \x6dd:\x74ext-3xl \x66ont-bold \x74ext-[#\x30F0F0F]"}>Construction</h3>
                  <p className={"mt-3 \x74ext-[#\x3333] \x6ceading-relaxed \x6dd:\x69nline-block [max-width:24rem]"}>Skilled execution with clean job sites, reliable scheduling, and consistent communication.</p>
                </div>
              </div>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 flex h-14 w-14 \x2dtranslate-x-1/\x32 items-center rounded-full \x62g-[#\x30F0F0F] grain \x62order-2 \x62order-[#\x4298B5F] [&]:justify-center [z-index:10]"}>
                <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
                  <path d="m18 15 4-4" />
                  <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
                </svg>
              </div>
              <div className={"hidden \x6dd:\x62lock \x6dd:\x77-1/\x32"} />
            </div>
            <div className={"relative flex items-center gap-8 \x6dd:\x67ap-0 pl-20 \x6dd:\x70l-0 \x6dd:\x66lex-row"} data-reveal="">
              <div className={"\x6dd:\x77-1/\x32 [@media(min-width:768px)]:[padding-left:3rem] [@media(min-width:768px)]:[padding-right:3rem]"}>
                <div className="[@media(min-width:768px)]:text-right">
                  <span className={"label-tech \x74ext-[#\x4298B5F]"}>Step 05</span>
                  <h3 className={"mt-2 font-heading \x74ext-2xl \x6dd:\x74ext-3xl \x66ont-bold \x74ext-[#\x30F0F0F]"}>Final Walkthrough</h3>
                  <p className={"mt-3 \x74ext-[#\x3333] \x6ceading-relaxed \x6dd:\x69nline-block [max-width:24rem]"}>We walk every detail together. Nothing is signed off until it meets the standard.</p>
                </div>
              </div>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 flex h-14 w-14 \x2dtranslate-x-1/\x32 items-center rounded-full \x62g-[#\x30F0F0F] grain \x62order-2 \x62order-[#\x4298B5F] [&]:justify-center [z-index:10]"}>
                <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </div>
              <div className={"hidden \x6dd:\x62lock \x6dd:\x77-1/\x32"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionRequestAFreeEstimate() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", details: "" });
  const [projectType, setProjectType] = useState<string | null>(null);
  const completed = [form.name, form.phone, form.email, projectType, form.details].filter((value) => value && value.trim()).length;
  const update = (field: keyof typeof form) => (event: { target: { value: string } }) => setForm((current) => ({ ...current, [field]: event.target.value }));
  return (
    <section className={"relative \x62g-[#\x469F9F7] \x70y-24 \x6dd:\x70y-36"} id="contact">
      <div className={"\x6dx-auto grid max-w-[1400px] \x70x-[\x36vw] [gap:0px] [@media(min-width:1024px)]:[grid-template-columns:repeat(2,minmax(0px,1fr))]"}>
        <div className={"relative hidden \x6cg:\x62lock [overflow:hidden]"}>
          <img className={"h-full w-full [&]:object-cover"} src="/site-assets/753acf21e27d8244.png" alt="Craftsman at work" />
          <div className={"absolute \x62g-gradient-to-t \x66rom-[#\x30F0F0F]/\x360 \x74o-transparent [inset:0px]"} />
          <div className="absolute [bottom:2.5rem] [left:2.5rem] [right:2.5rem]">
            <span className={"label-tech \x74ext-[#\x4298B5F]"}>{ESTIMATE_FORM.imageLabel}</span>
            <h3 className={"mt-3 display-heading \x74ext-3xl \x74ext-[#\x469F9F7]"}>{ESTIMATE_FORM.imageHeading}</h3>
          </div>
        </div>
        <div className={"\x62g-[#\x30F0F0F] grain \x74ext-[#\x469F9F7] p-8 \x6dd:\x70-12"}>
          <div data-reveal="">
            <span className={"label-tech \x74ext-[#\x4298B5F] flex items-center [gap:0.75rem]"}><span className={"h-px w-8 \x62g-[#\x4298B5F]"} /> {ESTIMATE_FORM.eyebrow}</span>
          </div>
          <div data-reveal="">
            <h2 className={"display-heading mt-5 \x74ext-3xl \x6dd:\x74ext-5xl"}>{ESTIMATE_FORM.heading}</h2>
          </div>
          <form action="https://formspree.io/f/mwloknjo" method="POST" className={"mt-8 \x73pace-y-5"} data-reveal="">
            <input type="hidden" name="_subject" value="New quote request — Wood Core Carpentry" />
            <input type="hidden" name="project_type" value={projectType ?? "Not selected"} />
            <div className={"grid \x73m:\x67rid-cols-2 [gap:1.25rem]"}>
              <label className="block">
                <span className={"label-tech \x74ext-[#\x469F9F7]/\x350 mb-2 block"}>Name</span>
                <input className="cc-input [transition:border-color_0.3s]" type="text" name="name" required placeholder={ESTIMATE_FORM.namePlaceholder} value={form.name} onChange={update("name")} />
              </label>
              <label className="block">
                <span className={"label-tech \x74ext-[#\x469F9F7]/\x350 mb-2 block"}>Phone</span>
                <input className="cc-input [transition:border-color_0.3s]" type="tel" name="phone" placeholder={ESTIMATE_FORM.phonePlaceholder} value={form.phone} onChange={update("phone")} />
              </label>
            </div>
            <label className="block">
              <span className={"label-tech \x74ext-[#\x469F9F7]/\x350 mb-2 block"}>Email</span>
              <input className="cc-input [transition:border-color_0.3s]" required type="email" name="email" placeholder={ESTIMATE_FORM.emailPlaceholder} value={form.email} onChange={update("email")} />
            </label>
            <label className="block">
              <span className={"label-tech \x74ext-[#\x469F9F7]/\x350 mb-2 block"}>Project Type</span>
              <div className={"flex [&]:flex-wrap [gap:0.5rem]"}>
                {PROJECT_TYPES.map((type) => (
                  <button key={type} className={type === projectType ? "label-tech px-3 py-2 border transition-colors border-[#B98B5F] bg-[#B98B5F] text-[#0F0F0F]" : "label-tech \x70x-3 \x70y-2 \x62order transition-colors \x62order-white/\x315 \x74ext-[#\x469F9F7]/\x360 \x68over:\x62order-[#\x4298B5F]/\x360"} type="button" aria-pressed={type === projectType} onClick={() => setProjectType(type)}>{type}</button>
                ))}
              </div>
            </label>
            <label className="block">
              <span className={"label-tech \x74ext-[#\x469F9F7]/\x350 mb-2 block"}>Project Details</span>
              <textarea className={"cc-input [&]:resize-none [transition:border-color_0.3s]"} required name="project_details" rows={3} placeholder={ESTIMATE_FORM.detailsPlaceholder} value={form.details} onChange={update("details")} />
            </label>
            <div className="pt-2">
              <div className={"mb-3 h-1 w-full \x62g-white/\x310 [overflow:hidden]"}>
                <div className={"h-full \x62g-[#\x4298B5F] transition-all duration-500"} style={{ width: completed ? `${completed * 20}%` : "0px" }} />
              </div>
              <button className={"group relative flex w-full items-center \x62g-[#\x4298B5F] \x70x-6 \x70y-4 label-tech \x74ext-[#\x30F0F0F] transition-colors \x68over:\x62g-[#\x6187a4f] disabled:opacity-80 [&]:justify-center [gap:0.75rem] [overflow:hidden]"} type="submit">Send Build Request<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg></button>
            </div>
          </form>
        </div>
      </div>
      <div className={"\x6dx-auto mt-16 max-w-[1400px] \x70x-[\x36vw]"}>
        <div className={"grid \x62g-[#\x30F0F0F]/\x310 [gap:1px] [@media(min-width:640px)]:[grid-template-columns:repeat(3,minmax(0px,1fr))]"}>
          <div className={"\x62g-[#\x469F9F7] p-7"} data-reveal="">
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className={"mt-4 label-tech \x74ext-[#\x30F0F0F]/\x340"}>Phone</div>
            <p className={"mt-1.5 \x74ext-[#\x30F0F0F] \x66ont-medium"}><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
          </div>
          <div className={"\x62g-[#\x469F9F7] p-7"} data-reveal="">
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <div className={"mt-4 label-tech \x74ext-[#\x30F0F0F]/\x340"}>Email</div>
            <p className={"mt-1.5 \x74ext-[#\x30F0F0F] \x66ont-medium"}><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
          </div>
          <div className={"\x62g-[#\x469F9F7] p-7"} data-reveal="">
            <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className={"mt-4 label-tech \x74ext-[#\x30F0F0F]/\x340"}>Location</div>
            <p className={"mt-1.5 \x74ext-[#\x30F0F0F] \x66ont-medium"}>{BUSINESS.address}</p>
          </div>
        </div>
        <div className={"relative mt-6 h-64 \x62order \x62order-[#\x30F0F0F]/\x310 \x62g-[#\x30F0F0F] [overflow:hidden]"}>
          <div className="absolute opacity-40 [inset:0px]" style={{ backgroundImage: "linear-gradient(rgba(185, 139, 95, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(185, 139, 95, 0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" } as CSSProperties} />
          <div className={"absolute flex flex-col items-center [&]:justify-center [&]:text-center [inset:0px]"}>
            <div className={"relative flex h-12 w-12 items-center [&]:justify-center"}>
              <span className={"absolute inline-flex h-full w-full rounded-full \x62g-[#\x4298B5F]/\x340 [animation:1s_cubic-bezier(0,0,0.2,1)_0s_infinite_normal_none_running_ping]"} />
              <svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className={"mt-4 label-tech \x74ext-[#\x4298B5F]"}>Service Area — {BUSINESS.city}</p>
            <p className={"mt-1 \x74ext-[#\x469F9F7]/\x370 \x74ext-sm [max-width:28rem] [padding:0_1.5rem]"}>{BUSINESS.serviceAreaFull}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
        <footer suppressHydrationWarning className={"relative \x62g-[#\x30F0F0F] grain \x74ext-[#\x469F9F7]"}>
      <div className={"\x6dx-auto max-w-[1400px] \x70x-[\x36vw] \x70y-16 \x6dd:\x70y-24"}>
        <div className="grid [gap:3rem] [@media(min-width:768px)]:[grid-template-columns:repeat(3,minmax(0px,1fr))]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className={"plus-mark \x74ext-[#\x4298B5F] \x73cale-125"} />
              <span className={"display-heading \x74ext-xl"}>{BUSINESS.logoLead} <span className={"\x74ext-[#\x4298B5F]"}>{BUSINESS.logoAccent}</span></span>
            </div>
            <p className={"mt-4 \x74ext-sm \x74ext-[#\x469F9F7]/\x355 \x6ceading-relaxed"}>{BUSINESS.footerBlurb}</p>
          </div>
          <div>
            <h4 className={"label-tech \x74ext-[#\x4298B5F] mb-4"}>Navigation</h4>
            <ul className={"\x73pace-y-2.\x35"}>
              <li>
                <a className={"\x74ext-sm \x74ext-[#\x469F9F7]/\x370 \x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#about">About</a>
              </li>
              <li>
                <a className={"\x74ext-sm \x74ext-[#\x469F9F7]/\x370 \x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#services">Services</a>
              </li>
              <li>
                <a className={"\x74ext-sm \x74ext-[#\x469F9F7]/\x370 \x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#projects">Projects</a>
              </li>
              <li>
                <a className={"\x74ext-sm \x74ext-[#\x469F9F7]/\x370 \x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#process">Process</a>
              </li>
              <li>
                <a className={"\x74ext-sm \x74ext-[#\x469F9F7]/\x370 \x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#reviews">Reviews</a>
              </li>
              <li>
                <a className={"\x74ext-sm \x74ext-[#\x469F9F7]/\x370 \x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={"label-tech \x74ext-[#\x4298B5F] mb-4"}>Contact</h4>
            <ul className={"\x73pace-y-3 \x74ext-sm \x74ext-[#\x469F9F7]/\x370"}>
              <li className="flex items-center [gap:0.75rem]"><svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
              <li className="flex items-center [gap:0.75rem]"><svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
              <li className="flex items-center [gap:0.75rem]"><svg className={"\x74ext-[#\x4298B5F]"} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg> {BUSINESS.address}</li>
            </ul>
          </div>
        </div>
        <div className={"mt-14 flex flex-col items-center justify-between \x62order-t \x62order-white/\x310 pt-8 \x6dd:\x66lex-row [gap:1rem]"}>
          <p className={"\x74ext-xs \x74ext-[#\x469F9F7]/\x340"}>© 2026 {BUSINESS.name}. All rights reserved.</p>
          <div className={"flex \x74ext-xs \x74ext-[#\x469F9F7]/\x340 [gap:1.5rem]"}>
            <a className={"\x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#">Privacy</a>
            <a className={"\x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#">Terms</a>
            <a className={"\x68over:\x74ext-[#\x4298B5F] transition-colors"} href="#">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


const SERVICE_ICONS = [
  <><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></>,
  <><path d="m14.622 17.897-10.68-2.913" /><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" /><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" /></>,
  <><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" /><path d="M7 16v6" /><path d="M13 19v3" /><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" /></>,
  <><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>,
  <><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></>,
  <><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /><path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" /></>,
  <><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></>,
  <><path d="M13 4h3a2 2 0 0 1 2 2v14" /><path d="M2 20h3" /><path d="M13 20h9" /><path d="M10 12v.01" /><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" /></>,
  <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>,
];

// Fades [data-reveal] blocks in as they scroll into view. Content stays visible
// without JavaScript or when the visitor prefers reduced motion.
function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    root.classList.add("reveal-ready");
    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

// Tracks the mouse for the custom crosshair cursor and the hero spotlight.
function usePointer() {
  const [pointer, setPointer] = useState({ x: -100, y: -100, px: 50, py: 40, hover: false, active: false });
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !window.matchMedia("(pointer: fine)").matches) return;
      const target = event.target instanceof Element ? event.target : null;
      setPointer({
        x: event.clientX,
        y: event.clientY,
        px: (event.clientX / window.innerWidth) * 100,
        py: (event.clientY / window.innerHeight) * 100,
        hover: !!target?.closest("a, button, input, textarea, select, label"),
        active: true,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return pointer;
}

// Recomputes a 0..1 value from an element's position while the page scrolls.
function useScrollValue<T extends HTMLElement>(compute: (rect: DOMRect, viewportHeight: number) => number, decorative = false) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState<number | null>(null);
  const computeRef = useRef(compute);
  computeRef.current = compute;
  useEffect(() => {
    if (decorative && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (ref.current) setValue(computeRef.current(ref.current.getBoundingClientRect(), window.innerHeight));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [decorative]);
  return { ref, value };
}

function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}

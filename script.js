/* ============================================================================
   EDIT ME — everything you'll want to personalize lives in this CONFIG object.
   You shouldn't need to touch the code below CONFIG to update content.
   See USER_GUIDE.md for a full walkthrough.
   ============================================================================ */
const CONFIG = {

  // --- Landing / welcome screen -------------------------------------------
  landing: {
    title: "A little thank-you,<br>for all of you.",
    subtitle: "Turn your sound on — there's a small soundtrack to this.",
  },

  // --- Hero / personalized welcome ----------------------------------------
  // "greeting" is typed out letter by letter when the page loads.
  hero: {
    greeting: "Hi, team.",
    message: "Before I clear out my desk, I wanted to put something together — a small, honest thank-you for the years we spent building things (and surviving deploys) together.",
  },

  // --- Background music ------------------------------------------------------
  // IMPORTANT: no actual songs are bundled with this template for copyright
  // reasons. Add your own licensed MP3 files to the /music folder and point
  // "src" at them. The first track plays automatically when someone clicks
  // "Enter" on the landing screen (this satisfies browser autoplay rules,
  // since it happens directly on that click). The floating widget in the
  // bottom-left lets visitors pause, skip, or mute at any time. Tracks loop
  // continuously through the list.
  music: {
    tracks: [
      { title: "See You Again", artist: "Wiz Khalifa", src: "track-1.mp3" },
      { title: "Track Two", artist: "Artist Name", src: "music/track-2.mp3" },
      { title: "Track Three", artist: "Artist Name", src: "music/track-3.mp3" },
    ],
  },

  // --- Timeline: highlights over your time at the company ------------------
  timeline: [
    { date: "August 2025", title: "Day one", text: "Medyo kulba kay new environment og wala ko naanad makipag interact sa mga tao og mahadlok masayop kay basin kasuk an pero normal raman kasuk an pero mahadlok gihapon." },
    { date: "October 2025", title: "Naka Adopt na sa environment", text: "Mao naning time nga nag enjoy nako kay naa nakoy na learn nga bag o samot na about sa labor code og malingaw paminaw sa mga client samot nag sa SEnA . Naa napud salig si Miss Nette & Miss Sara nako nga akoy mo atobang sa mga client about sa concern nila sa Unemployment Benefit." },
    { date: "December 2025", title: "Happy at the same time kay Sad", text: "Happy kay nakit an nako ako kaugalingon nga naa gyuy improvement samot na sa communication skills dili na kaayo ko mauwaw og atubang og nga client og nalingaw ko sa year end party then sad siya kay mahuman na amo contract og wala koy idea if ma renew ba siya or dili pero still positive mindset gihapon." },
    { date: "January 2026", title: "So we are back again guys ", text: "Nalipay kay na renew paa pay another months na mag gain og experience og knowledge og grateful kaayo ko kay natagaan og another chance" },
    { date: "July 2026", title: "The end is near", text: "Naa koy new achievement unlock haha kay pwede nako mo approve sa COU. Ge sulit nalang ang reaming weeks kay hapit na mahuman ang contract as GIP. Grateful kaayo ko ani nga experience  og nalingaw ra gyud ko sa akong pag stay ari." },
  ],

  // --- Shoutouts: flip cards naming specific people or teams -----------------
  // "initial" shows on the front as a little avatar badge (usually one or
  // two letters). Tapping a card flips it to reveal the message.
  cards: [
    { initial: "A", name: "Antoinette", role: "", message: "Hello Miss Nette, Thank you sa pagsalig sa akoa  I hope na deliver ra nako og tarong ang mga task na imo gepabuhat sa akoa. Mo congrats rako daan nimo miss Nette basin mao nani last nato kita diay niya dili nako ka congrats puhon kabaw naka para asa nang congrats haha mingawon man ko sa imong samarian blood uy haha wala nakoy sultian nga okay rana oii kalma lang hahaha pero bitaw miss Nette, Thank you and" },
    { initial: "K", name: "Kevin", role: "", message: "Hello sir Kev, Thank you kay willing ra gyud ka mo tubag sa akong mga pangutana naa ra gyud ka mo guide namo ba approachable kaayo ka kay ikaw ra gyud amo kaduolan og dali about sa mga pangutana sa client nga maglisod mig tubag or dili mi ka tubag. Salamat sad sir Kev sa opportunity na mo host sa monday program. Thank you kaayo sir Kev." },
    { initial: "S", name: "Shanine", role: "", message: "Hello miss Shanine, Thank you miss sa pagsalig nimo nako sa pag encode sa mga Tav Checklist ninyo. Salamat miss Shanine sa pag save nako katong naa client nga nasuko kay ngano kuno ge emailan siya na approve pero wala pa diay na approve og Salamat sad pag save nako atong daghan kaayo COU need e approve kay wala si miss Nette og Sir Kev ikaw gyud nag approve ato tanan nga daghan kaayo. Wala nakoy sultian taga abot nako sa office na Good Morning miss Shanine. Thank you sa tanan miss Shanine." },
    { initial: "T", name: "The whole team", role: "", message: "Sa Tanan TCFO family salamat kaayo sa pag salig namong lima og pag hatag og opportunity namo nga ma part sa TCFO family nag enjoy ra gyud mi. Grateful gyud kaayo ko kay sa pag process nako sa COU permi naa koy na realize nga dili tanan tao mahatagan og opportunity nga maka trabaho mao grateful kaayo ko kay na part ko sa TCFO family nga pinaagi sa GIP program. Thank you guys" },
  ],

  // --- Farewell letter -------------------------------------------------------
  // Revealed after the envelope is clicked open.
  farewell: {
    paragraphs: [
      "I just wanna say thank you everyone for this remarkable experience ako gyud ni siya e cherish na experience and moments kay sa almost 1 year nako pag stay ari or pag work daghan kaayo ko na learn na skills dili sa work asta sa personal skills nag improve akong communication skills and daghan kaayo ko gain pud na experience na worth it e treasure.",
      "Wala gyuy kabutangan ako pagpasalamat ani nga team kay getagaan gyud ko og pagsalig sa mga task og mag grow.",
      "",
      "Even if we're apart, we're still friends, right?",
    ],
    signoff: "— K.",
  },

  // --- Memory wall: seed notes so the board isn't empty on day one --------
  memoryWall: {
    seedEntries: [
    ],
  },

  // --- Closing section -------------------------------------------------------
  closing: {
    title: "Even if we're apart, the bond we made will never disappear.",
    message: "Thank you for everything — I won't forget it.",
  },
};

/* ============================================================================
   Below this line: site behavior. Content edits belong in CONFIG above.
   ============================================================================ */
const SECTION_ORDER = ["hero", "timeline", "cards", "farewell", "wall", "closing"];

document.addEventListener("DOMContentLoaded", () => {
  initLanding();
  initParticleCanvas();
  initCursorGlow();
  initScrollProgress();
  initNavDots();
  initRevealOnScroll();
  initHero();
  initHeroParallax();
  initTimeline();
  initCards();
  initFarewellEnvelope();
  initBackgroundMusic();
  initMemoryWall();
  initClosing();
  initConfettiButton();
});

/* ---------------------------------------------------------------------------
   Landing screen: Enter button starts the background music (satisfying the
   browser's autoplay policy via the click gesture) and fades into the site.
   ------------------------------------------------------------------------- */
function initLanding() {
  const landing = document.getElementById("landing");
  const enterBtn = document.getElementById("enterBtn");
  const site = document.getElementById("site");
  const titleEl = document.getElementById("landingTitle");
  const subtitleEl = document.getElementById("landingSubtitle");
  if (!landing || !enterBtn) return;

  titleEl.innerHTML = CONFIG.landing.title;
  subtitleEl.textContent = CONFIG.landing.subtitle;

  enterBtn.addEventListener("click", () => {
    if (window.startBackgroundMusic) window.startBackgroundMusic();

    landing.classList.add("is-leaving");
    site.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "";

    setTimeout(() => {
      landing.style.display = "none";
      document.getElementById("navDots").classList.add("is-visible");
      document.getElementById("musicWidget").classList.add("is-visible");
    }, 1000);
  });

  document.body.style.overflow = "hidden";
}

/* ---------------------------------------------------------------------------
   Ambient particle canvas: soft drifting bokeh, matches the dusk palette.
   ------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width, height, particles;
  const palette = ["244,162,97", "255,209,102", "46,196,182", "246,243,238"];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  function makeParticles() {
    const count = Math.min(70, Math.floor((width * height) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.6,
      speed: Math.random() * 0.18 + 0.03,
      drift: Math.random() * 0.3 - 0.15,
      alpha: Math.random() * 0.35 + 0.08,
      color: palette[Math.floor(Math.random() * palette.length)],
      phase: Math.random() * Math.PI * 2,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const t = performance.now() / 1000;
    particles.forEach((p) => {
      const twinkle = 0.6 + 0.4 * Math.sin(t * 0.6 + p.phase);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha * twinkle})`;
      ctx.fill();
      if (!reduceMotion) {
        p.y -= p.speed;
        p.x += p.drift * 0.2;
        if (p.y < -5) { p.y = height + 5; p.x = Math.random() * width; }
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  makeParticles();
  window.addEventListener("resize", () => { resize(); makeParticles(); });
  draw();
}

/* ---------------------------------------------------------------------------
   Cursor glow that follows the pointer (desktop only)
   ------------------------------------------------------------------------- */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  if (window.matchMedia("(hover: none)").matches) return;
  window.addEventListener("pointermove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

/* ---------------------------------------------------------------------------
   Scroll progress bar (top of page)
   ------------------------------------------------------------------------- */
function initScrollProgress() {
  const fill = document.getElementById("scrollFill");
  if (!fill) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = pct + "%";
  };
  document.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------------------------------------------------------------------------
   Side navigation dots: one per section, highlights the active section,
   click to jump.
   ------------------------------------------------------------------------- */
function initNavDots() {
  const nav = document.getElementById("navDots");
  if (!nav) return;

  const sections = SECTION_ORDER
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  sections.forEach((section) => {
    const dot = document.createElement("button");
    dot.className = "nav-dot";
    dot.setAttribute("aria-label", "Go to " + (section.dataset.section || section.id));
    const label = document.createElement("span");
    label.className = "nav-dot__label";
    label.textContent = section.dataset.section || section.id;
    dot.appendChild(label);
    dot.addEventListener("click", () => section.scrollIntoView({ behavior: "smooth" }));
    dot.dataset.target = section.id;
    nav.appendChild(dot);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nav.querySelectorAll(".nav-dot").forEach((dot) => {
            dot.classList.toggle("is-active", dot.dataset.target === entry.target.id);
          });
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ---------------------------------------------------------------------------
   Generic reveal-on-scroll for [data-reveal] elements
   ------------------------------------------------------------------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.setProperty("--reveal-delay", delay);
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach((item) => observer.observe(item));
}

/* ---------------------------------------------------------------------------
   Hero: typewriter greeting + message content
   ------------------------------------------------------------------------- */
function initHero() {
  const textEl = document.getElementById("heroGreetingText");
  const messageEl = document.getElementById("heroMessage");
  if (messageEl) messageEl.textContent = CONFIG.hero.message;
  if (!textEl) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const text = CONFIG.hero.greeting;

  if (reduceMotion) {
    textEl.textContent = text;
    return;
  }

  let i = 0;
  function typeNext() {
    if (i <= text.length) {
      textEl.textContent = text.slice(0, i);
      i++;
      setTimeout(typeNext, 55);
    }
  }
  setTimeout(typeNext, 400);
}

/* ---------------------------------------------------------------------------
   Hero parallax: the hero content drifts subtly opposite the cursor,
   desktop only, for a bit of depth.
   ------------------------------------------------------------------------- */
function initHeroParallax() {
  const inner = document.getElementById("heroInner");
  const hero = document.getElementById("hero");
  if (!inner || !hero) return;
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    inner.style.transform = `translate(${px * -14}px, ${py * -10}px)`;
  });
  hero.addEventListener("pointerleave", () => {
    inner.style.transform = "translate(0, 0)";
  });
}

/* ---------------------------------------------------------------------------
   Timeline: builds alternating left/right cards from CONFIG.timeline
   ------------------------------------------------------------------------- */
function initTimeline() {
  const list = document.getElementById("timelineList");
  if (!list) return;

  CONFIG.timeline.forEach((item) => {
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <p class="timeline-item__date">${escapeHTML(item.date)}</p>
      <h3 class="timeline-item__title">${escapeHTML(item.title)}</h3>
      <p class="timeline-item__text">${escapeHTML(item.text)}</p>
    `;
    list.appendChild(el);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );
  list.querySelectorAll(".timeline-item").forEach((i) => observer.observe(i));
}

/* ---------------------------------------------------------------------------
   Shoutouts: flip cards built from CONFIG.cards. Tap to flip; tap again
   (or tap another card) to flip back.
   ------------------------------------------------------------------------- */
function initCards() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  CONFIG.cards.forEach((person) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-card__inner">
        <div class="flip-card__face flip-card__face--front">
          <div class="flip-card__avatar">${escapeHTML(person.initial || "?")}</div>
          <p class="flip-card__name">${escapeHTML(person.name)}</p>
          <p class="flip-card__role">${escapeHTML(person.role || "")}</p>
          <span class="flip-card__hint">tap to flip</span>
        </div>
        <div class="flip-card__face flip-card__face--back">
          <p class="flip-card__back-name">${escapeHTML(person.name)}</p>
          <div class="flip-card__message-scroll">
            <p class="flip-card__message">${escapeHTML(person.message)}</p>
          </div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("is-flipped"));
    grid.appendChild(card);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  grid.querySelectorAll(".flip-card").forEach((c) => observer.observe(c));
}

/* ---------------------------------------------------------------------------
   Farewell letter: click the envelope to open it, which then reveals the
   letter's paragraphs one at a time.
   ------------------------------------------------------------------------- */
function initFarewellEnvelope() {
  const envelope = document.getElementById("envelopeBtn");
  const card = document.getElementById("farewellCard");
  const body = document.getElementById("farewellBody");
  const signoff = document.getElementById("farewellSignoff");
  if (!envelope || !card) return;

  CONFIG.farewell.paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    body.appendChild(p);
  });
  if (signoff) signoff.textContent = CONFIG.farewell.signoff || "";

  let opened = false;
  envelope.addEventListener("click", () => {
    if (opened) return;
    opened = true;
    envelope.classList.add("is-open");
    envelope.setAttribute("aria-label", "Letter opened");

    setTimeout(() => {
      card.classList.add("is-open");
      card.scrollIntoView({ behavior: "smooth", block: "center" });

      const paragraphs = body.querySelectorAll("p");
      paragraphs.forEach((p, i) => {
        setTimeout(() => p.classList.add("is-visible"), 300 + i * 350);
      });
      setTimeout(() => signoff.classList.add("is-visible"), 300 + paragraphs.length * 350 + 200);
    }, 500);
  });
}

/* ---------------------------------------------------------------------------
   Background music: a small floating widget (bottom-left) that plays,
   pauses, skips, and mutes a looping playlist. The landing screen's Enter
   button calls window.startBackgroundMusic() directly on the click so the
   browser treats it as a user-initiated play (satisfying autoplay rules).
   ------------------------------------------------------------------------- */
function initBackgroundMusic() {
  const audio = document.getElementById("audioEl");
  const widget = document.getElementById("musicWidget");
  const discBtn = document.getElementById("musicDiscBtn");
  const nextBtn = document.getElementById("musicNextBtn");
  const muteBtn = document.getElementById("musicMuteBtn");
  const titleEl = document.getElementById("musicTitle");
  const artistEl = document.getElementById("musicArtist");
  if (!audio || !widget) return;

  const tracks = CONFIG.music.tracks || [];
  let currentIndex = 0;
  audio.volume = 0.55;

  function loadTrack(index, autoplay) {
    if (tracks.length === 0) return;
    currentIndex = (index + tracks.length) % tracks.length;
    const track = tracks[currentIndex];
    audio.src = track.src;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist || "";
    if (autoplay) audio.play().catch(() => setPlayingState(false));
  }

  function setPlayingState(isPlaying) {
    discBtn.classList.toggle("is-spinning", isPlaying);
  }

  window.startBackgroundMusic = () => {
    if (tracks.length === 0) return;
    loadTrack(0, true);
  };

  discBtn.addEventListener("click", () => {
    if (!audio.src) { loadTrack(0, true); return; }
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });

  nextBtn.addEventListener("click", () => loadTrack(currentIndex + 1, true));

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
    muteBtn.classList.toggle("is-muted", audio.muted);
  });

  audio.addEventListener("play", () => setPlayingState(true));
  audio.addEventListener("pause", () => setPlayingState(false));
  audio.addEventListener("ended", () => loadTrack(currentIndex + 1, true));
  audio.addEventListener("error", () => {
    if (!audio.src) return;
    artistEl.textContent = "file not found — see /music";
  });
}

/* ---------------------------------------------------------------------------
   Memory wall / guestbook: visitors can pin a note. Notes are saved in this
   browser's localStorage (see USER_GUIDE.md) alongside the seed entries
   from CONFIG.
   ------------------------------------------------------------------------- */
function initMemoryWall() {
  const board = document.getElementById("wallBoard");
  const form = document.getElementById("wallForm");
  const nameInput = document.getElementById("wallName");
  const messageInput = document.getElementById("wallMessage");
  if (!board || !form) return;

  const STORAGE_KEY = "farewell-site-memory-wall";
  const tilts = [-4, -2.5, -1, 1.5, 2.5, 4, -3.5, 3];

  function loadEntries() {
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch (e) { stored = []; }
    return [...(CONFIG.memoryWall.seedEntries || []), ...stored];
  }

  function saveEntry(entry) {
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
    catch (e) { stored = []; }
    stored.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }

  function renderNote(entry, index) {
    const note = document.createElement("div");
    note.className = "sticky-note";
    note.style.setProperty("--tilt", tilts[index % tilts.length] + "deg");
    note.innerHTML = `
      <p class="sticky-note__message">${escapeHTML(entry.message)}</p>
      <p class="sticky-note__name">— ${escapeHTML(entry.name)}</p>
    `;
    board.appendChild(note);
  }

  function renderAll() {
    board.innerHTML = "";
    loadEntries().forEach((entry, i) => renderNote(entry, i));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !message) return;

    const entry = { name, message };
    saveEntry(entry);
    renderNote(entry, board.children.length);

    nameInput.value = "";
    messageInput.value = "";
    board.lastElementChild.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  renderAll();
}

/* ---------------------------------------------------------------------------
   Closing section content
   ------------------------------------------------------------------------- */
function initClosing() {
  const title = document.getElementById("closingTitle");
  const sub = document.getElementById("closingSub");
  if (title) title.textContent = CONFIG.closing.title;
  if (sub) sub.textContent = CONFIG.closing.message;
}

/* ---------------------------------------------------------------------------
   Confetti burst button: lightweight DOM-based confetti, no libraries.
   ------------------------------------------------------------------------- */
function initConfettiButton() {
  const btn = document.getElementById("confettiBtn");
  if (!btn) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    btn.style.display = "none";
    return;
  }

  const colors = ["#f4a261", "#ffd166", "#2ec4b6", "#ef8a76", "#f6f3ee"];

  btn.addEventListener("click", () => {
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      const size = 6 + Math.random() * 6;
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.width = size + "px";
      piece.style.height = size * 0.4 + "px";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.setProperty("--drift", Math.random() * 200 - 100 + "px");
      piece.style.setProperty("--spin", Math.random() * 720 - 360 + "deg");
      piece.style.animationDuration = 2.4 + Math.random() * 1.6 + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4200);
    }
  });
}

/* ---------------------------------------------------------------------------
   Small utility: escape user-supplied text before inserting as HTML.
   ------------------------------------------------------------------------- */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

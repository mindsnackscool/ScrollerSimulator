/**
 * ══════════════════════════════════════════════
 *  SCROLLER SIMULATOR — CONFIGURATION
 * ══════════════════════════════════════════════
 */

const CONFIG = {

  // ── Video lists by platform ──────────────────
  normalVideos: {
    tiktok: [
      "videos/normal/tiktok/#animationart #digitalanimation #animati_7433057630093856033.mp4",
      "videos/normal/tiktok/#iceonflame #fractals #fractal #fractala_7488007509299580182.mp4",
      "videos/normal/tiktok/#mindblown #hypnotic #boostyourbrain #ha_7326577435623918880.mp4",
      "videos/normal/tiktok/#technomusic #fractal #animation #vortex_7385548496977382688.mp4",
      "videos/normal/tiktok/#trippy #trippyart #trippyvideos #trippy_7254970383030357275.mp4",
      "videos/normal/tiktok/4–6 breathing exercise filmed on a beach_7613823466759916832.mp4",
      "videos/normal/tiktok/5 Fun Brain Teasers 🧠 #gameshow #brainte_7395184580048719110.mp4",
      "videos/normal/tiktok/Brain Teasers That Will Break Your Brain_7362578269796879659.mp4",
      "videos/normal/tiktok/The sacred geometry of Mandelbrot Fracta_7296362883640790305.mp4",
      "videos/normal/tiktok/This 10 second breathing technique will _7569282898751245582.mp4",
      "videos/normal/tiktok/Tricky brain teasers 🧠 #gameshow #puzzle_7391478110304177413.mp4",
      "videos/normal/tiktok/🧠 Classic Brain Teaser Puzzles.. #braint_7508009368068164870.mp4",
      "videos/normal/tiktok/🧠 Try Solving This Clever Puzzle.. #brai_7514310097015819576.mp4",
    ],
    youtube: [
      "videos/normal/youtube/1 Minute Breathe Bubble ｜ Breathing Exer__v7nbvdyhtw.mp4",
      "videos/normal/youtube/Breathing exercise for stress and anxiet_eZBa63NZbbE.mp4",
      "videos/normal/youtube/Hexagonal Tangram Wooden Puzzle Solved 🧩_EASIqBqnXXc.mp4",
      "videos/normal/youtube/Homeward - A Mandelbrot Fractal Zoom (2K_N0lec_cIwZM.mp4",
      "videos/normal/youtube/If you love puzzle games, brain teasers,_7_ptgZqqRwU.mp4",
      "videos/normal/youtube/If you love puzzle games, brain teasers,_PYyN1PlTTdQ.mp4",
      "videos/normal/youtube/If you love puzzle games, brain teasers,_RsIi1iwGb-w.mp4",
      "videos/normal/youtube/Kaleidoscope, A Mandelbrot Fractal Zoom _KSViE4nDfE4.mp4",
      "videos/normal/youtube/Timeless - A Mandelbrot Fractal Zoom (2K_HqSJ6A6tcU8.mp4",
    ],
    instagram: [
      "videos/normal/instagram/Video by aminshaykho_CyB19MzPvIP.mp4",
      "videos/normal/instagram/Video by breathing.ai_DMLhooCogdg.mp4",
      "videos/normal/instagram/Video by breathwrk_DDrw1YMOD1q.mp4",
      "videos/normal/instagram/Video by chakrahealingvibes_DG0Y321y8Ir.mp4",
      "videos/normal/instagram/Video by echoesoflifehealing_DQ7ITUNADGQ.mp4",
      "videos/normal/instagram/Video by ezzshow85_DBRLdyMOFF6.mp4",
      "videos/normal/instagram/Video by johnmcmillan_themindscaper_DBGG0OEy7m1.mp4",
      "videos/normal/instagram/Video by namicommunicate_CnxFbxXOOpl.mp4",
      "videos/normal/instagram/Video by noellereidmd_DFf80vPSXBj.mp4",
      "videos/normal/instagram/Video by normanmarkets_C-NrWD4vYsj.mp4",
    ],
    facebook: [
      // Facebook reels are not indexed by search engines —
      // paste direct fb.watch or facebook.com/reel/ links here and run:
      // yt-dlp --cookies-from-browser firefox -o "videos/normal/facebook/%(title).40s_%(id)s.%(ext)s" <URL>
    ],
  },

  // Your videos to evaluate
  myVideos: [
    "videos/mine/OddRhythmV1.mp4",
  ],

  // ── Platform mode ────────────────────────────
  platformMode: "all",

  // ── Appearance rules ─────────────────────────
  minScrollsBeforeMine: 10,
  initialChance: 0.15,
  chanceIncreasePerScroll: 0.08,
  maxChance: 0.85,

  // ── Behaviour ────────────────────────────────
  showSourceTag: false,
  loopVideos: true,
  startMuted: false,
};

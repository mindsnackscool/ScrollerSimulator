/**
 * ══════════════════════════════════════════════
 *  SCROLLER SIMULATOR — CONFIGURATION
 * ══════════════════════════════════════════════
 */

const CONFIG = {

  // ── Video lists by platform ──────────────────
  normalVideos: {
    tiktok: [
      "videos/normal/tiktok/2-4-6-4_breathing_resets_your_energy_flo_7612204885651574049.mp4",
      "videos/normal/tiktok/3D_brain_teaser_puzzle_tutorial_no.1_puz_7099349980674034949.mp4",
      "videos/normal/tiktok/A_little_wooden_brain_teaser_puzzle_to_g_7170119032929307950.mp4",
      "videos/normal/tiktok/Breathe_with_me_let_these_sink_in_everyt_7590556748809866510.mp4",
      "videos/normal/tiktok/Day_one_of_posting_fractals_everyday_unt_7398471582961782048.mp4",
      "videos/normal/tiktok/Float_with_us_for_a_few_deep_breaths._de_7418972557832883487.mp4",
      "videos/normal/tiktok/Hope_you_like_this_one_brainteaser_puzzl_7486061336791715079.mp4",
      "videos/normal/tiktok/Just_a_moment_to_reset._DeepBreaths_Inha_7063512121090428206.mp4",
      "videos/normal/tiktok/No_One_Can_Solve_This_Brain_Teaser_Puzzl_7434908651069967671.mp4",
      "videos/normal/tiktok/Take_some_deep_breaths._Let_more_light_i_7513644797110979886.mp4",
      "videos/normal/tiktok/The_hardest_but_most_satisfying_jigsaw_p_7126975005690187013.mp4",
      "videos/normal/tiktok/The_power_to_create_peace_begins_with_yo_7565790148105997623.mp4",
      "videos/normal/tiktok/Video_5_in_series_of_10._432Hz_is_the_FI_7316850883852029192.mp4",
      "videos/normal/tiktok/fractalart_fractal_hypnotic_hypnoticart__7442751149045861654.mp4",
    ],
    instagram: [
      "videos/normal/instagram/Video_by_aaronlemke_DKdyLJpOFBZ.mp4",
      "videos/normal/instagram/Video_by_anrejohn_DQKp6K3jWwB.mp4",
      "videos/normal/instagram/Video_by_banahwinn_DM90CeDgYzo.mp4",
      "videos/normal/instagram/Video_by_brightondenevan_C9K0poTPhin.mp4",
      "videos/normal/instagram/Video_by_brucelipton_DUosDsRD1Fn.mp4",
      "videos/normal/instagram/Video_by_everyday_naturalist_DQxQVPeEa1e.mp4",
      "videos/normal/instagram/Video_by_geometriasagrada.en_DArSNGivQLN.mp4",
      "videos/normal/instagram/Video_by_livefreelaurad_DQZNePrEaTy.mp4",
      "videos/normal/instagram/Video_by_lovetuner528hz_CkZgtbCLrV_.mp4",
      "videos/normal/instagram/Video_by_matigekunstintelligentie_DVQjsY5AppY.mp4",
      "videos/normal/instagram/Video_by_storybites.__DGykqtUzzpY.mp4",
      "videos/normal/instagram/Video_by_weswalz713_DPzj1vxjick.mp4",
    ],
    youtube: [
      "videos/normal/youtube/4-7-8_Calm_Breathing_Exercise___fqr8XNubEI.mp4",
      "videos/normal/youtube/4_Reasons_to_NOT_Vertically_Mo_gGRGJvqy9p8.mp4",
      "videos/normal/youtube/ASMR_Clearing_Your_Foggy_Mind__DP-qqpI431M.mp4",
      "videos/normal/youtube/Breathing_Trick_Takes_Away_Str__S-Xyfp3D3k.mp4",
      "videos/normal/youtube/Can_you_Guess_the_Fractal_shor_e9CCJ0OV-UM.mp4",
      "videos/normal/youtube/Extremely_satisfying_Fractal_J_7ygeZ4M5aks.mp4",
      "videos/normal/youtube/Headspace_Breathing_Technic_-__-YHRb2S4uvg.mp4",
      "videos/normal/youtube/I_cannot_believe_it_was_that_d_pAI-wFhvkYo.mp4",
      "videos/normal/youtube/Imagine_falling_into_the_Mande_HcyGjt3pC1w.mp4",
      "videos/normal/youtube/Quick_meditation_to_ground_you_z5iC0g3zjwI.mp4",
      "videos/normal/youtube/Reiki_ASMR_Energy_Healing_vh6lcO95NP4.mp4",
      "videos/normal/youtube/Satisfying_Dice_Roll_and_Drop__SbI5EWTE4Uk.mp4",
    ],
    facebook: [
      // Facebook reels are not indexed by search engines —
      // paste direct fb.watch or facebook.com/reel/ links here and run:
      // yt-dlp --cookies-from-browser firefox -o "videos/normal/facebook/%(title).40s_%(id)s.%(ext)s" <URL>
    ],
  },

  // Your videos to evaluate
  myVideos: [
    "videos/mine/ConstructiveBreathingCapybara.mp4",
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

/**
 * Video metadata — view counts, titles, sources
 * Used when "Show Info" toggle is enabled
 */
const METADATA = {
  // YouTube
  "videos/normal/youtube/Can_you_Guess_the_Fractal_shor_e9CCJ0OV-UM.mp4": {
    title: "Can you Guess the Fractal?",
    views: 2629807,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/4_Reasons_to_NOT_Vertically_Mo_gGRGJvqy9p8.mp4": {
    title: "4 Reasons to NOT Vertically Mount Your Graphics Card",
    views: 1288840,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/Imagine_falling_into_the_Mande_HcyGjt3pC1w.mp4": {
    title: "Imagine falling into the Mandelbrot Fractals",
    views: 6501998,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/Extremely_satisfying_Fractal_J_7ygeZ4M5aks.mp4": {
    title: "Extremely satisfying Fractal Jigsaw",
    views: 2864807,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/I_cannot_believe_it_was_that_d_pAI-wFhvkYo.mp4": {
    title: "I cannot believe it was that difficult",
    views: 108651368,
    platform: "youtube",
    author: "@puzzlesolving"
  },
  "videos/normal/youtube/Satisfying_Dice_Roll_and_Drop__SbI5EWTE4Uk.mp4": {
    title: "Satisfying Dice Roll and Drop Perfect Loop",
    views: 142589595,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/4-7-8_Calm_Breathing_Exercise___fqr8XNubEI.mp4": {
    title: "4-7-8 Calm Breathing Exercise",
    views: 3042236,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/Breathing_Trick_Takes_Away_Str__S-Xyfp3D3k.mp4": {
    title: "Breathing Trick Takes Away Stress and Anxiety",
    views: 1190988,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/ASMR_Clearing_Your_Foggy_Mind__DP-qqpI431M.mp4": {
    title: "ASMR Clearing Your Foggy Mind Instantly",
    views: 198464,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/Reiki_ASMR_Energy_Healing_vh6lcO95NP4.mp4": {
    title: "Reiki ASMR Energy Healing",
    views: 354685,
    platform: "youtube",
    author: "@shorts"
  },
  "videos/normal/youtube/Headspace_Breathing_Technic_-__-YHRb2S4uvg.mp4": {
    title: "Headspace Breathing Technic",
    views: 205220,
    platform: "youtube",
    author: "@headspace"
  },
  "videos/normal/youtube/Quick_meditation_to_ground_you_z5iC0g3zjwI.mp4": {
    title: "Quick meditation to ground you into this moment",
    views: 50407,
    platform: "youtube",
    author: "@shorts"
  },

  // TikTok (views not fetched — platform makes it hard)
  "videos/normal/tiktok/Take_some_deep_breaths._Let_more_light_i_7513644797110979886.mp4": {
    title: "Take some deep breaths. Let more light in",
    platform: "tiktok",
    author: "@headspace"
  },
  "videos/normal/tiktok/Float_with_us_for_a_few_deep_breaths._de_7418972557832883487.mp4": {
    title: "Float with us for a few deep breaths",
    platform: "tiktok",
    author: "@headspace"
  },
  "videos/normal/tiktok/Day_one_of_posting_fractals_everyday_unt_7398471582961782048.mp4": {
    title: "Day one of posting fractals everyday",
    platform: "tiktok",
    author: "@thefractalguy"
  },
  "videos/normal/tiktok/fractalart_fractal_hypnotic_hypnoticart__7442751149045861654.mp4": {
    title: "Fractal art hypnotic animation",
    platform: "tiktok",
    author: "@steveland_art"
  },
  "videos/normal/tiktok/The_hardest_but_most_satisfying_jigsaw_p_7126975005690187013.mp4": {
    title: "The hardest but most satisfying jigsaw puzzle",
    platform: "tiktok",
    author: "@henrypuzzles"
  },
  "videos/normal/tiktok/The_power_to_create_peace_begins_with_yo_7565790148105997623.mp4": {
    title: "The power to create peace begins with you",
    platform: "tiktok",
    author: "@lovetuner528hz"
  },
  "videos/normal/tiktok/Just_a_moment_to_reset._DeepBreaths_Inha_7063512121090428206.mp4": {
    title: "Just a moment to reset. Deep Breaths",
    platform: "tiktok",
    author: "@headspace"
  },
  "videos/normal/tiktok/2-4-6-4_breathing_resets_your_energy_flo_7612204885651574049.mp4": {
    title: "2-4-6-4 breathing resets your energy flow",
    platform: "tiktok",
    author: "@daily.breathing"
  },
  "videos/normal/tiktok/Video_5_in_series_of_10._432Hz_is_the_FI_7316850883852029192.mp4": {
    title: "432Hz — the fifth healing frequency",
    platform: "tiktok",
    author: "@grantempowerment"
  },
  "videos/normal/tiktok/Hope_you_like_this_one_brainteaser_puzzl_7486061336791715079.mp4": {
    title: "Brain teaser puzzle challenge",
    platform: "tiktok",
    author: "@pinkpencilmath"
  },
  "videos/normal/tiktok/3D_brain_teaser_puzzle_tutorial_no.1_puz_7099349980674034949.mp4": {
    title: "3D brain teaser puzzle tutorial no.1",
    platform: "tiktok",
    author: "@splendidtoys"
  },
  "videos/normal/tiktok/A_little_wooden_brain_teaser_puzzle_to_g_7170119032929307950.mp4": {
    title: "A little wooden brain teaser puzzle",
    platform: "tiktok",
    author: "@pieces.of.amber"
  },
  "videos/normal/tiktok/No_One_Can_Solve_This_Brain_Teaser_Puzzl_7434908651069967671.mp4": {
    title: "No One Can Solve This Brain Teaser Puzzle",
    platform: "tiktok",
    author: "@theezzshow"
  },
  "videos/normal/tiktok/Breathe_with_me_let_these_sink_in_everyt_7590556748809866510.mp4": {
    title: "Breathe with me, let these sink in",
    platform: "tiktok",
    author: "@queenpoweracademyy"
  },

  // Instagram (views not fetched)
  "videos/normal/instagram/Video_by_brightondenevan_C9K0poTPhin.mp4": {
    title: "Fractal DMT Molecules",
    platform: "instagram",
    author: "@brightondenevan"
  },
  "videos/normal/instagram/Video_by_everyday_naturalist_DQxQVPeEa1e.mp4": {
    title: "Fractals in Nature: Efficient Patterns Everywhere",
    platform: "instagram",
    author: "@everyday_naturalist"
  },
  "videos/normal/instagram/Video_by_livefreelaurad_DQZNePrEaTy.mp4": {
    title: "What we pay attention to affects our physiology",
    platform: "instagram",
    author: "@livefreelaurad"
  },
  "videos/normal/instagram/Video_by_anrejohn_DQKp6K3jWwB.mp4": {
    title: "Fractals — repeating patterns seen in nature",
    platform: "instagram",
    author: "@anrejohn"
  },
  "videos/normal/instagram/Video_by_matigekunstintelligentie_DVQjsY5AppY.mp4": {
    title: "What do Fractals Sound Like part II",
    platform: "instagram",
    author: "@matigekunstintelligentie"
  },
  "videos/normal/instagram/Video_by_aaronlemke_DKdyLJpOFBZ.mp4": {
    title: "Vibe coded some fractals over the weekend",
    platform: "instagram",
    author: "@aaronlemke"
  },
  "videos/normal/instagram/Video_by_brucelipton_DUosDsRD1Fn.mp4": {
    title: "The Fractal Geometry of Nature (2 of 2)",
    platform: "instagram",
    author: "@brucelipton"
  },
  "videos/normal/instagram/Video_by_weswalz713_DPzj1vxjick.mp4": {
    title: "Creating Mind-Bending Fractals with Metal and Swift",
    platform: "instagram",
    author: "@weswalz713"
  },
  "videos/normal/instagram/Video_by_geometriasagrada.en_DArSNGivQLN.mp4": {
    title: "The Barnsley fern — a fascinating fractal",
    platform: "instagram",
    author: "@geometriasagrada.en"
  },
  "videos/normal/instagram/Video_by_storybites.__DGykqtUzzpY.mp4": {
    title: "It's a fractal — when you're obsessed",
    platform: "instagram",
    author: "@storybites._"
  },
  "videos/normal/instagram/Video_by_lovetuner528hz_CkZgtbCLrV_.mp4": {
    title: "Breathwork with the 528Hz Lovetuner",
    platform: "instagram",
    author: "@lovetuner528hz"
  },
  "videos/normal/instagram/Video_by_banahwinn_DM90CeDgYzo.mp4": {
    title: "528 Hz Golden Ratio Frequencies",
    platform: "instagram",
    author: "@banahwinn"
  },
};

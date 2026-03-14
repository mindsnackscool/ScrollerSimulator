/**
 * Scroller Simulator — Core Engine
 */
(function () {
  "use strict";

  // ── State ──────────────────────────────────
  const state = {
    queue: [],
    currentIndex: 0,
    normalSinceLastMine: 0,
    watchedNormal: new Set(),
    watchedMine: new Set(),
    hasInteracted: false,
    isPaused: false,
    platformMode: CONFIG.platformMode || "all",
    showInfo: false,
  };

  // ── DOM refs ───────────────────────────────
  const container  = document.getElementById("feed-container");
  const sourceTag  = document.getElementById("source-tag");
  const pauseIcon  = document.getElementById("pause-icon");
  const tapOverlay = document.getElementById("tap-overlay");
  const progressEl = document.getElementById("progress");
  const videoDesc  = document.getElementById("video-desc");
  const videoStats = document.getElementById("video-stats");

  // ── Slides (we keep 3 in the DOM: prev, current, next) ──
  let slides = { above: null, current: null, below: null };

  // ═══════════════════════════════════════════
  //  PLATFORM HELPERS
  // ═══════════════════════════════════════════

  function getNormalVideos() {
    if (state.platformMode === "all") {
      // Flatten all platform arrays
      return Object.values(CONFIG.normalVideos).flat();
    }
    return CONFIG.normalVideos[state.platformMode] || [];
  }

  // ═══════════════════════════════════════════
  //  QUEUE BUILDER — decides what plays next
  // ═══════════════════════════════════════════

  function shouldPickMine() {
    if (CONFIG.myVideos.length === 0) return false;
    if (state.normalSinceLastMine < CONFIG.minScrollsBeforeMine) return false;

    const extra = state.normalSinceLastMine - CONFIG.minScrollsBeforeMine;
    const chance = Math.min(
      CONFIG.initialChance + extra * CONFIG.chanceIncreasePerScroll,
      CONFIG.maxChance
    );
    return Math.random() < chance;
  }

  function pickVideo() {
    const normalPool = getNormalVideos();
    const isMine = state.platformMode === "mine" ? true : shouldPickMine();
    const pool = isMine ? CONFIG.myVideos : normalPool;
    const watched = isMine ? state.watchedMine : state.watchedNormal;

    // Find unwatched videos in this pool
    let unwatched = pool.filter((v) => !watched.has(v));

    // If all watched, reset this pool
    if (unwatched.length === 0) {
      watched.clear();
      unwatched = [...pool];
    }

    // Random pick from unwatched
    const src = unwatched[Math.floor(Math.random() * unwatched.length)];
    watched.add(src);

    if (isMine) {
      state.normalSinceLastMine = 0;
    } else {
      state.normalSinceLastMine++;
    }

    return { src, isMine };
  }

  function ensureQueue() {
    while (state.queue.length <= state.currentIndex + 2) {
      state.queue.push(pickVideo());
    }
  }

  // ═══════════════════════════════════════════
  //  SLIDE MANAGEMENT
  // ═══════════════════════════════════════════

  function createSlide(videoObj) {
    const div = document.createElement("div");
    div.className = "video-slide hidden-slide";

    const video = document.createElement("video");
    video.src = videoObj.src;
    video.playsInline = true;
    video.preload = "auto";
    video.loop = CONFIG.loopVideos;
    video.muted = !state.hasInteracted || CONFIG.startMuted;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    div.appendChild(video);
    div.dataset.isMine = videoObj.isMine;
    container.appendChild(div);
    return div;
  }

  function removeSlide(slide) {
    if (!slide) return;
    const vid = slide.querySelector("video");
    if (vid) {
      vid.pause();
      vid.removeAttribute("src");
      vid.load();
    }
    slide.remove();
  }

  function renderSlides() {
    ensureQueue();

    const prevSlide = slides.above;
    const currSlide = slides.current;
    const nextSlide = slides.below;

    // Build new slides
    const newCurrent = createSlide(state.queue[state.currentIndex]);
    const newAbove = state.currentIndex > 0
      ? createSlide(state.queue[state.currentIndex - 1])
      : null;
    const newBelow = createSlide(state.queue[state.currentIndex + 1]);

    // Remove old
    removeSlide(prevSlide);
    removeSlide(currSlide);
    removeSlide(nextSlide);

    // Position new slides
    if (newAbove) {
      newAbove.classList.remove("hidden-slide");
      newAbove.classList.add("above");
    }
    newCurrent.classList.remove("hidden-slide");
    newCurrent.classList.add("current");
    newBelow.classList.remove("hidden-slide");
    newBelow.classList.add("below");

    slides = { above: newAbove, current: newCurrent, below: newBelow };

    // Play current
    const vid = newCurrent.querySelector("video");
    vid.currentTime = 0;
    vid.play().catch(() => {});

    // Update UI
    updateSourceTag();
    updateProgress();
  }

  // ═══════════════════════════════════════════
  //  UI UPDATES
  // ═══════════════════════════════════════════

  function updateSourceTag() {
    const item = state.queue[state.currentIndex];
    if (CONFIG.showSourceTag && item.isMine) {
      sourceTag.textContent = "MINE";
      sourceTag.classList.remove("hidden");
    } else {
      sourceTag.classList.add("hidden");
    }
    updateVideoDesc();
    updateVideoStats();
  }

  function formatCount(n) {
    if (!n) return null;
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    return n.toString();
  }

  // Always visible: author, title, platform
  function updateVideoDesc() {
    const item = state.queue[state.currentIndex];
    const meta = (typeof METADATA !== "undefined") && METADATA[item.src];

    if (!meta) {
      videoDesc.innerHTML = "";
      return;
    }

    videoDesc.innerHTML = `
      ${meta.author ? `<div class="desc-author">${meta.author}</div>` : ""}
      ${meta.title ? `<div class="desc-title">${meta.title}</div>` : ""}
    `;
  }

  // Toggled via Info button: views, likes, shares (right side column)
  function updateVideoStats() {
    if (!state.showInfo) {
      videoStats.classList.add("hidden");
      return;
    }

    const item = state.queue[state.currentIndex];
    const meta = (typeof METADATA !== "undefined") && METADATA[item.src];

    if (!meta || (!meta.views && !meta.likes && !meta.shares && !meta.comments)) {
      videoStats.classList.add("hidden");
      return;
    }

    let html = "";

    if (meta.views) {
      html += `<div class="stat-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        <span class="stat-value">${formatCount(meta.views)}</span>
      </div>`;
    }

    if (meta.likes) {
      html += `<div class="stat-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <span class="stat-value">${formatCount(meta.likes)}</span>
      </div>`;
    }

    if (meta.comments) {
      html += `<div class="stat-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"/></svg>
        <span class="stat-value">${formatCount(meta.comments)}</span>
      </div>`;
    }

    if (meta.shares) {
      html += `<div class="stat-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
        <span class="stat-value">${formatCount(meta.shares)}</span>
      </div>`;
    }

    videoStats.innerHTML = html;
    videoStats.classList.remove("hidden");
  }

  function updateProgress() {
    const windowSize = 8;
    const start = Math.max(0, state.currentIndex - windowSize + 1);
    const end = state.currentIndex + 1;

    progressEl.innerHTML = "";
    for (let i = start; i < end; i++) {
      const dot = document.createElement("div");
      dot.className = "progress-dot" + (i === state.currentIndex ? " active" : "");
      if (state.queue[i] && state.queue[i].isMine) {
        dot.style.background = i === state.currentIndex
          ? "#ff4757"
          : "rgba(255, 71, 87, 0.4)";
      }
      progressEl.appendChild(dot);
    }
  }

  // ═══════════════════════════════════════════
  //  PLATFORM MODE SELECTOR
  // ═══════════════════════════════════════════

  function buildModeSelector() {
    const platforms = Object.keys(CONFIG.normalVideos);
    const selector = document.createElement("div");
    selector.className = "mode-selector";
    selector.id = "mode-selector";

    const options = ["all", ...platforms, "mine"];
    options.forEach((mode) => {
      const btn = document.createElement("button");
      btn.className = "mode-btn" + (mode === state.platformMode ? " active" : "");
      btn.textContent = mode === "all" ? "All" : mode.charAt(0).toUpperCase() + mode.slice(1);
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        switchMode(mode);
      });
      selector.appendChild(btn);
    });

    // Info toggle button
    const sep = document.createElement("div");
    sep.style.cssText = "width:1px;background:rgba(255,255,255,0.2);margin:2px 2px;";
    selector.appendChild(sep);

    const infoBtn = document.createElement("button");
    infoBtn.className = "mode-btn";
    infoBtn.textContent = "Info";
    infoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      state.showInfo = !state.showInfo;
      infoBtn.classList.toggle("active", state.showInfo);
      updateVideoStats();
    });
    selector.appendChild(infoBtn);

    document.body.appendChild(selector);
  }

  function switchMode(mode) {
    state.platformMode = mode;
    state.queue = [];
    state.currentIndex = 0;
    state.normalSinceLastMine = 0;
    state.watchedNormal.clear();
    state.watchedMine.clear();

    // Update active button (skip Info button)
    document.querySelectorAll(".mode-btn").forEach((btn) => {
      if (btn.textContent === "Info") return;
      btn.classList.toggle("active", btn.textContent.toLowerCase() === mode);
    });

    renderSlides();
  }

  // ═══════════════════════════════════════════
  //  NAVIGATION
  // ═══════════════════════════════════════════

  function goNext() {
    state.currentIndex++;
    renderSlides();
  }

  function goPrev() {
    if (state.currentIndex <= 0) return;
    state.currentIndex--;
    renderSlides();
  }

  // ═══════════════════════════════════════════
  //  SWIPE HANDLING
  // ═══════════════════════════════════════════

  let touchStartY = 0;
  let touchStartTime = 0;
  let isDragging = false;
  let dragOffset = 0;

  const SWIPE_THRESHOLD = 50;
  const VELOCITY_THRESHOLD = 0.3;

  tapOverlay.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    isDragging = true;
    dragOffset = 0;

    if (slides.current) slides.current.classList.add("dragging");
    if (slides.above)   slides.above.classList.add("dragging");
    if (slides.below)   slides.below.classList.add("dragging");
  }, { passive: true });

  tapOverlay.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    dragOffset = e.touches[0].clientY - touchStartY;

    if (slides.current) slides.current.style.transform = `translateY(${dragOffset}px)`;
    if (slides.above)   slides.above.style.transform = `translateY(calc(-100% + ${dragOffset}px))`;
    if (slides.below)   slides.below.style.transform = `translateY(calc(100% + ${dragOffset}px))`;
  }, { passive: true });

  tapOverlay.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;

    const elapsed = Date.now() - touchStartTime;
    const velocity = Math.abs(dragOffset) / elapsed;
    const isTap = Math.abs(dragOffset) < 10 && elapsed < 300;

    if (slides.current) slides.current.classList.remove("dragging");
    if (slides.above)   slides.above.classList.remove("dragging");
    if (slides.below)   slides.below.classList.remove("dragging");

    if (isTap) {
      handleTap();
      resetSlidePositions();
      return;
    }

    const swipedEnough = Math.abs(dragOffset) > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD;

    if (swipedEnough && dragOffset < 0) {
      goNext();
    } else if (swipedEnough && dragOffset > 0) {
      goPrev();
    } else {
      resetSlidePositions();
    }
  }, { passive: true });

  function resetSlidePositions() {
    if (slides.current) slides.current.style.transform = "";
    if (slides.above)   slides.above.style.transform = "";
    if (slides.below)   slides.below.style.transform = "";
  }

  // Keyboard (desktop testing)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); goNext(); }
    if (e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
  });

  // Mouse wheel (desktop testing)
  let wheelCooldown = false;
  document.addEventListener("wheel", (e) => {
    if (wheelCooldown) return;
    wheelCooldown = true;
    setTimeout(() => { wheelCooldown = false; }, 500);

    if (e.deltaY > 0) goNext();
    else if (e.deltaY < 0) goPrev();
  }, { passive: true });

  // ═══════════════════════════════════════════
  //  TAP TO PLAY/PAUSE & UNMUTE
  // ═══════════════════════════════════════════

  function handleTap() {
    if (!state.hasInteracted) {
      state.hasInteracted = true;
      const vid = slides.current && slides.current.querySelector("video");
      if (vid) vid.muted = false;
      return;
    }

    const vid = slides.current && slides.current.querySelector("video");
    if (!vid) return;

    if (vid.paused) {
      vid.play().catch(() => {});
      state.isPaused = false;
      pauseIcon.classList.add("hidden");
    } else {
      vid.pause();
      state.isPaused = true;
      pauseIcon.classList.remove("hidden");
    }
  }

  // ═══════════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════════

  function init() {
    const normalPool = getNormalVideos();
    const totalVideos = state.platformMode === "mine" ? CONFIG.myVideos.length : normalPool.length + CONFIG.myVideos.length;

    if (totalVideos === 0) {
      container.innerHTML = `
        <div style="color:#888; text-align:center; padding:40px; font-size:16px; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); max-width:320px;">
          <div style="font-size:48px; margin-bottom:20px;">📱</div>
          <strong style="color:#fff; font-size:18px;">No videos yet</strong>
          <p style="margin-top:12px; line-height:1.5;">
            Add video files to <code>videos/normal/[platform]/</code> and <code>videos/mine/</code>,
            then list them in <code>js/config.js</code>.
          </p>
        </div>
      `;
    } else {
      renderSlides();
    }

    buildModeSelector();
  }

  init();
})();

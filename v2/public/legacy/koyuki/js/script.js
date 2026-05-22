(() => {
  "use strict";

  /* -------------------------------------------------
     Lightbox (post-image)
     ------------------------------------------------- */
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox?.querySelector(".lightbox-img");
  const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");

  if (lightbox && lightboxImg && lightboxCaption && lightboxClose) {
    const open = (src, caption) => {
      lightboxImg.src = src;
      lightboxImg.alt = caption || "";
      lightboxCaption.textContent = caption || "";
      lightbox.hidden = false;
      lightbox.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
    };

    const close = () => {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
      document.documentElement.style.overflow = "";
    };

    document.querySelectorAll(".post-image, .card").forEach((el) => {
      el.addEventListener("click", () => {
        const src = el.getAttribute("data-src");
        const caption = el.getAttribute("data-caption");
        if (src) open(src, caption);
      });
    });

    lightboxClose.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !lightbox.hidden) close();
    });
  }

  /* -------------------------------------------------
     Tab filter (Instagram feed)
     ------------------------------------------------- */
  const tabs = document.querySelectorAll(".tab");
  const posts = document.querySelectorAll(".post");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });
      posts.forEach((post) => {
        const cat = post.getAttribute("data-category");
        post.classList.toggle("is-hidden", filter !== "all" && cat !== filter);
      });
    });
  });

  /* -------------------------------------------------
     Heart toggle on action click (first action = like)
     ------------------------------------------------- */
  document.querySelectorAll(".post").forEach((post) => {
    const likeBtn = post.querySelector(".post-actions .post-action:first-child");
    const likesEl = post.querySelector(".post-likes strong");
    if (!likeBtn || !likesEl) return;

    let baseCount = parseInt(likesEl.textContent, 10) || 0;
    let liked = false;

    likeBtn.addEventListener("click", () => {
      liked = !liked;
      likeBtn.classList.toggle("is-liked", liked);
      likesEl.textContent = (baseCount + (liked ? 1 : 0)).toString();
    });
  });

  /* -------------------------------------------------
     Page top button
     ------------------------------------------------- */
  const pageTop = document.querySelector(".page-top");
  if (pageTop) {
    const updateVisibility = () => {
      if (window.scrollY > 300) {
        pageTop.classList.add("visible");
      } else {
        pageTop.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    pageTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------
     Reveal-on-scroll
     ------------------------------------------------- */
  const revealTargets = document.querySelectorAll(".about, .post, .contact");
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }
})();

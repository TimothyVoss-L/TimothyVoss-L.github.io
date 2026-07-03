/**
 * ==========================================================
 * Portfolio Website
 * File : js/main.js
 * Description :
 * Project Entry
 * ==========================================================
 */

"use strict";

/* ==========================================================
   Wait Until DOM Loaded
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio initialized.");

    initializePortfolio();

});

/* ==========================================================
   Initialize
========================================================== */

function initializePortfolio() {

    initializeTheme();

    initializeTyping();

    initializeScrollAnimation();

    initializeNavigation();

    initializeExternalLinks();

}

/* ==========================================================
   Navigation
========================================================== */

function initializeNavigation() {

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {

                return;

            }

            const target = document.querySelector(targetId);

            if (!target) {

                return;

            }

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}

/* ==========================================================
   External Links
========================================================== */

function initializeExternalLinks() {

    const links = document.querySelectorAll('a[target="_blank"]');

    links.forEach(link => {

        link.setAttribute("rel", "noopener noreferrer");

    });

}

/* ==========================================================
   Theme
========================================================== */

function initializeTheme() {

    if (typeof initTheme === "function") {

        initTheme();

    }

}

/* ==========================================================
   Typing
========================================================== */

function initializeTyping() {

    if (typeof initTyping === "function") {

        initTyping();

    }

}

/* ==========================================================
   Animation
========================================================== */

function initializeScrollAnimation() {

    if (typeof initAnimation === "function") {

        initAnimation();

    }

}

/* ==========================================================
   Window Loaded
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================================
   Resize
========================================================== */

window.addEventListener("resize", () => {

    // Reserved for future responsive interactions.

});

/* ==========================================================
   Scroll
========================================================== */

window.addEventListener("scroll", () => {

    // Reserved for future scroll features.

});

/* ==========================================================
   Visibility Change
========================================================== */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        console.log("Page Hidden");

    } else {

        console.log("Page Visible");

    }

});

/* ==========================================================
   Error Handler
========================================================== */

window.addEventListener("error", (event) => {

    console.error(

        "JavaScript Error:",

        event.message

    );

});

/* ==========================================================
   End Of File
========================================================== */
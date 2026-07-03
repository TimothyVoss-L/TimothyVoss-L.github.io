/**
 * ==========================================================
 * Portfolio Website
 * File : js/animation.js
 * Description :
 * Scroll Reveal Animation
 * ==========================================================
 */

"use strict";

/* ==========================================================
   Initialize Animation
========================================================== */

function initAnimation() {

    initializeRevealAnimation();

}

/* ==========================================================
   Reveal Animation
========================================================== */

function initializeRevealAnimation() {

    const animatedElements = document.querySelectorAll(

        ".fade-in, .slide-up, .slide-down, .slide-left, .slide-right, .scale-in, .zoom-in, .rotate-in, .blur-reveal, .stagger"

    );

    if (animatedElements.length === 0) {

        return;

    }

    const observer = new IntersectionObserver(

        handleIntersection,

        {

            root: null,

            rootMargin: "0px 0px -10% 0px",

            threshold: 0.15

        }

    );

    animatedElements.forEach(element => {

        observer.observe(element);

    });

}

/* ==========================================================
   Intersection Callback
========================================================== */

function handleIntersection(entries, observer) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {

            return;

        }

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

    });

}

/* ==========================================================
   Optional Utility
   Reset Animation
========================================================== */

function resetAnimation(selector) {

    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {

        element.classList.remove("active");

    });

}

/* ==========================================================
   Optional Utility
   Play Animation
========================================================== */

function playAnimation(selector) {

    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {

        element.classList.add("active");

    });

}

/* ==========================================================
   Refresh Observer
========================================================== */

function refreshAnimation() {

    initializeRevealAnimation();

}

/* ==========================================================
   End Of File
========================================================== */
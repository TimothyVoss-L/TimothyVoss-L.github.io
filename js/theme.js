/**
 * ==========================================================
 * Portfolio Website
 * File : js/theme.js
 * Description :
 * Theme Controller
 * ==========================================================
 */

"use strict";

/* ==========================================================
   Constants
========================================================== */

const THEME_STORAGE_KEY = "portfolio-theme";

const THEME_LIGHT = "light";

const THEME_DARK = "dark";

/* ==========================================================
   Initialize Theme
========================================================== */

function initTheme() {

    const toggleButton = document.getElementById("theme-toggle");

    if (!toggleButton) {

        return;

    }

    const savedTheme = getSavedTheme();

    applyTheme(savedTheme);

    toggleButton.addEventListener("click", toggleTheme);

}

/* ==========================================================
   Toggle Theme
========================================================== */

function toggleTheme() {

    const isDarkMode = document.body.classList.contains("dark");

    const nextTheme = isDarkMode
        ? THEME_LIGHT
        : THEME_DARK;

    applyTheme(nextTheme);

    saveTheme(nextTheme);

}

/* ==========================================================
   Apply Theme
========================================================== */

function applyTheme(theme) {

    if (theme === THEME_DARK) {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

        theme = THEME_LIGHT;

    }

    updateThemeIcon(theme);

}

/* ==========================================================
   Update Theme Icon
========================================================== */

function updateThemeIcon(theme) {

    const icon = document.querySelector("#theme-toggle i");

    if (!icon) {

        return;

    }

    icon.className = "";

    if (theme === THEME_DARK) {

        icon.classList.add("fa-solid");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.add("fa-solid");

        icon.classList.add("fa-moon");

    }

}

/* ==========================================================
   Save Theme
========================================================== */

function saveTheme(theme) {

    localStorage.setItem(

        THEME_STORAGE_KEY,

        theme

    );

}

/* ==========================================================
   Get Saved Theme
========================================================== */

function getSavedTheme() {

    const savedTheme = localStorage.getItem(

        THEME_STORAGE_KEY

    );

    if (

        savedTheme === THEME_LIGHT ||

        savedTheme === THEME_DARK

    ) {

        return savedTheme;

    }

    return getSystemTheme();

}

/* ==========================================================
   System Theme
========================================================== */

function getSystemTheme() {

    const prefersDark = window.matchMedia(

        "(prefers-color-scheme: dark)"

    ).matches;

    return prefersDark

        ? THEME_DARK

        : THEME_LIGHT;

}

/* ==========================================================
   Listen System Theme Change
========================================================== */

const mediaQuery = window.matchMedia(

    "(prefers-color-scheme: dark)"

);

mediaQuery.addEventListener(

    "change",

    (event) => {

        const savedTheme = localStorage.getItem(

            THEME_STORAGE_KEY

        );

        if (savedTheme) {

            return;

        }

        applyTheme(

            event.matches

                ? THEME_DARK

                : THEME_LIGHT

        );

    }

);

/* ==========================================================
   End Of File
========================================================== */
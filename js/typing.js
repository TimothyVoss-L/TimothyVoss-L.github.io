/**
 * ==========================================================
 * Portfolio Website
 * File : js/typing.js
 * Description :
 * Hero Typing Animation
 * ==========================================================
 */

"use strict";

/* ==========================================================
   Typing Configuration
========================================================== */

const typingTexts = [

    "AI Engineer",

    "LLM Engineer",

    "Agent Developer",

    "Prompt Engineer",

    "RAG System Builder"

];

const typingSpeed = 90;

const deletingSpeed = 45;

const pauseTime = 1800;

/* ==========================================================
   Runtime State
========================================================== */

let typingIndex = 0;

let characterIndex = 0;

let deleting = false;

let typingElement = null;

/* ==========================================================
   Initialize
========================================================== */

function initTyping() {

    typingElement = document.getElementById("typing-text");

    if (!typingElement) {

        return;

    }

    typeLoop();

}

/* ==========================================================
   Main Loop
========================================================== */

function typeLoop() {

    const currentText = typingTexts[typingIndex];

    if (!deleting) {

        typingElement.textContent = currentText.substring(

            0,

            characterIndex + 1

        );

        characterIndex++;

        if (characterIndex === currentText.length) {

            deleting = true;

            setTimeout(

                typeLoop,

                pauseTime

            );

            return;

        }

        setTimeout(

            typeLoop,

            typingSpeed

        );

    }

    else {

        typingElement.textContent = currentText.substring(

            0,

            characterIndex - 1

        );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            typingIndex++;

            if (typingIndex >= typingTexts.length) {

                typingIndex = 0;

            }

        }

        setTimeout(

            typeLoop,

            deletingSpeed

        );

    }

}

/* ==========================================================
   End Of File
========================================================== */
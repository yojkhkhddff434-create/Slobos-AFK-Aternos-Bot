"use strict";

/* ========================================================
   UNIVERSAL DIRECT TARGET GLOW UI THEME (DB GAMING)
   ======================================================== */

/* 1. Global Background Fix (With Semi-Transparent 3D Background Overlay) */
html, body, #app {
    background: 
        linear-gradient(rgba(8, 11, 16, 0.88), rgba(8, 11, 16, 0.88)),
        url('https://images.wallpapersden.com/image/ws-4k-control-resonant-gaming_93268.jpg') no-repeat center center fixed !important;
    background-size: cover !important;
    color: #e2e8f0 !important;
}

/* 2. Navigation Tabs (Console, Files, Databases, etc.) */
nav a, header a, a[href*="/server/"] {
    background-color: rgba(16, 24, 38, 0.85) !important;
    border: 1px solid rgba(0, 255, 136, 0.3) !important;
    color: #00ff88 !important;
    border-radius: 8px !important;
    font-weight: bold !important;
    backdrop-filter: blur(8px) !important;
    transition: all 0.2s ease-in-out !important;
}

nav a:hover, header a:hover, a[href*="/server/"]:hover {
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.6) !important;
    border-color: #00ff88 !important;
    color: #ffffff !important;
    transform: translateY(-2px);
}

/* 3. Server Controls (Start, Restart, Stop Buttons) */
button {
    border-radius: 8px !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
    transition: all 0.2s ease !important;
}

button[class*="green"], button:nth-child(1) {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%) !important;
    box-shadow: 0 0 12px rgba(0, 255, 136, 0.5) !important;
    color: #ffffff !important;
    border: none !important;
}

button[class*="red"] {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%) !important;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.5) !important;
    color: #ffffff !important;
    border: none !important;
}

/* 4. Stat Cards (Uptime, CPU, Memory, Disk Boxes) */
div[class*="grid"] > div, 
main div > div > div {
    background-color: rgba(15, 21, 34, 0.82) !important;
    border: 1px solid rgba(0, 255, 136, 0.25) !important;
    border-radius: 12px !important;
    backdrop-filter: blur(10px) !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5) !important;
    transition: all 0.25s ease-in-out !important;
}

div[class*="grid"] > div:hover {
    border-color: #00ff88 !important;
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.4) !important;
    transform: translateY(-2px);
}

/* 5. Terminal Console Window & Command Input */
main pre, main code, input {
    background-color: rgba(5, 7, 10, 0.9) !important;
    border: 1px solid rgba(0, 255, 136, 0.4) !important;
    border-radius: 10px !important;
    color: #00ff88 !important;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8) !important;
}

input:focus {
    border-color: #00ff88 !important;
    box-shadow: 0 0 12px rgba(0, 255, 136, 0.5) !important;
}

/* Text Highlights */
h1, h2, h3 {
    color: #ffffff !important;
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.5) !important;
}


/* ========================================================
   UPGRADED & MODIFIED ADMINISTRATIVE OVERVIEW (ADMIN UI)
   ======================================================== */

/* 1. Global Admin Background with Cybernetic Grid & Glow */
.content-wrapper, .right-side {
    background: 
        radial-gradient(circle at 50% 0%, rgba(0, 255, 136, 0.08) 0%, transparent 60%),
        linear-gradient(rgba(6, 8, 13, 0.92), rgba(6, 8, 13, 0.95)),
... (162 lines left)

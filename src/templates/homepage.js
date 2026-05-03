export const homepageTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <meta name="theme-color" content="#3498db">
  <link rel="icon" type="image/x-icon" href="https://i.ibb.co/fGrCfrRb/android-chrome-192x192.png">
  <title>BFMS - Homepage</title>
  <style>
  /* Mobile-First Responsive Design */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap');

  :root {
      --primary-blue: #3498db;
      --dark-blue: #2c3e50;
      --light-grey: #ecf0f1;
      --white: #ffffff;
      --text-dark: #34495e;
      --text-light: #ecf0f1;
      --accent-green: #2ecc71;
      --warning-orange: #f39c12;
      --error-red: #e74c3c;
      --header-bg: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
      --footer-bg: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
      --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.15);
      --border-radius: 8px;
      --border-radius-lg: 12px;
      --spacing-xs: 4px;
      --spacing-sm: 8px;
      --spacing-md: 16px;
      --spacing-lg: 24px;
      --spacing-xl: 32px;
      --font-size-xs: 0.75rem;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-xl: 1.25rem;
      --font-size-2xl: 1.5rem;
      --font-size-3xl: 1.875rem;
      --font-size-4xl: 2.25rem;
  }

  * {
      box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: var(--light-grey);
    color: var(--text-dark);
    font-size: var(--font-size-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    animation: fadeIn 0.5s ease-in-out;
  }

  /* Mobile-First Container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-md);
    background: var(--white);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    animation: slideUpFadeIn 0.8s ease-out;
  }

  /* Responsive Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    color: var(--dark-blue);
    margin-top: 0;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
    font-weight: 600;
  }

  h1 {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-sm);
  }

  h2 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
  }

  h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-sm);
  }

  p {
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-base);
  }

  /* Links */
  a {
    color: var(--primary-blue);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  a:hover, a:focus {
    color: var(--dark-blue);
    text-decoration: underline;
    outline: 2px solid var(--primary-blue);
    outline-offset: 2px;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(var(--spacing-xl)); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideUpFadeIn {
    from { opacity: 0; transform: translateY(var(--spacing-lg)); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes swing {
    0%, 100% { transform: rotate(0deg); }
    10% { transform: rotate(1.5deg); }
    20% { transform: rotate(-1.5deg); }
    30% { transform: rotate(1deg); }
    40% { transform: rotate(-1deg); }
    50% { transform: rotate(0.5deg); }
    60% { transform: rotate(-0.5deg); }
    70% { transform: rotate(0.25deg); }
    80% { transform: rotate(-0.25deg); }
    90% { transform: rotate(0.1deg); }
  }

  @keyframes tracking-in-expand {
    0% { letter-spacing: -0.5em; opacity: 0; }
    40% { opacity: 0.6; }
    100% { opacity: 1; }
  }

  @keyframes pulse-red-dot {
    0% { transform: scale(0.8); opacity: 0.7; }
    100% { transform: scale(1.2); opacity: 1; }
  }

  /* Header - Mobile Optimized */
  header {
    background: var(--header-bg);
    color: var(--text-light);
    padding: var(--spacing-lg) var(--spacing-md);
    text-align: center;
    border-bottom: 3px solid var(--primary-blue);
    border-bottom-left-radius: var(--border-radius-lg);
    border-bottom-right-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
  }

  header h1 {
    color: var(--white);
    font-size: var(--font-size-xl);
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.02em;
    -webkit-animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  header h1:hover {
    animation: swing 0.8s ease infinite;
    color: #ffeb3b;
  }

  /* Navigation Toggle Button - Touch Friendly */
  .nav-toggle {
    display: block;
    position: fixed;
    top: var(--spacing-lg);
    right: var(--spacing-md);
    background: var(--primary-blue);
    color: var(--white);
    border: none;
    width: 48px;
    height: 48px;
    border-radius: var(--border-radius);
    cursor: pointer;
    z-index: 1001;
    box-shadow: var(--shadow);
    transition: all 0.2s ease;
    font-size: var(--font-size-xl);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-toggle:hover, .nav-toggle:focus {
    background-color: var(--dark-blue);
    transform: scale(1.05);
    outline: 2px solid var(--white);
    outline-offset: 2px;
  }

  .nav-toggle:active {
    transform: scale(0.95);
  }

  /* Navigation Menu - Mobile Slide-in */
  nav {
    background-color: var(--dark-blue);
    position: fixed;
    top: 0;
    right: -320px;
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    box-shadow: -5px 0 20px rgba(0,0,0,0.3);
    transition: right 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1000;
    padding-top: 80px;
    border-left: 1px solid rgba(255,255,255,0.1);
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }

  nav.nav-open {
    right: 0;
  }

  nav ul {
    list-style: none;
    padding: var(--spacing-lg);
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  nav ul li {
    width: 100%;
  }

  nav a {
    color: var(--light-grey);
    font-weight: 500;
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--border-radius);
    transition: all 0.2s ease;
    position: relative;
    display: block;
    text-align: left;
    font-size: var(--font-size-base);
    min-height: 44px;
    display: flex;
    align-items: center;
  }

  nav a:hover, nav a:focus {
    background-color: var(--primary-blue);
    color: var(--white);
    text-decoration: none;
    outline: 2px solid var(--white);
    outline-offset: -2px;
  }

  /* Disabled links for blocked users */
  nav.blocked-user a:not(.logout-link) {
    pointer-events: none;
    opacity: 0.5;
    background-color: #6c757d;
  }

  nav.blocked-user a.logout-link {
    pointer-events: auto;
    opacity: 1;
    background-color: var(--error-red);
  }

  .logout-link {
    background-color: var(--error-red);
    color: var(--white);
    margin-top: var(--spacing-md);
  }

  .logout-link:hover, .logout-link:focus {
    background-color: #c82333;
  }

  /* Overlay for mobile nav */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* Notification Dot */
  .notification-dot::after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 12px;
    height: 12px;
    background-color: var(--error-red);
    border-radius: 50%;
    animation: pulse-red-dot 1s infinite alternate;
    border: 2px solid var(--white);
  }

  /* Welcome Heading */
  .welcome-heading {
    color: var(--primary-blue);
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 25px;
    animation: slideUpFadeIn 1s ease-out;
  }

  /* Alert Boxes (Warning, Blocked, Guest, Notification) */
  .alert-box {
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    text-align: center;
    position: relative;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    animation: slideUp 0.8s ease-in-out;
  }
  .alert-box .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  .alert-box .close-btn:hover {
    transform: rotate(90deg) scale(1.1);
    color: var(--dark-blue);
  }
  .alert-title {
    font-weight: bold;
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  .alert-text {
    margin: 5px 0;
  }
  .alert-info {
    font-style: italic;
    font-size: 0.9em;
    margin: 5px 0;
  }
  .alert-info-large {
    font-size: 1.1em;
    font-weight: bold;
    margin-top: 15px;
  }

  .warning-box {
    background-color: #fff8e1;
    border: 2px solid var(--warning-orange);
    color: #8a6d3b;
  }
  .warning-box .alert-title, .warning-box .alert-text {
    color: var(--warning-orange);
  }
  .warning-box .close-btn { color: var(--warning-orange); }

  .blocked-box {
    background-color: #fcebeb;
    border: 2px solid var(--error-red);
    color: #a94442;
  }
  .blocked-box .alert-title, .blocked-box .alert-text {
    color: var(--error-red);
  }
  .blocked-box .blocked-link {
    color: var(--error-red);
    font-weight: bold;
  }
  .blocked-box .blocked-link:hover {
    color: #bd2130;
  }
  .blocked-box .close-btn { color: var(--error-red); }

  .guest-box {
    background-color: #e0f7fa;
    border: 2px solid #00acc1;
    color: #006064;
  }
  .guest-box .alert-title { color: #00acc1; }
  .guest-box .action-link {
    color: var(--primary-blue);
    font-weight: bold;
    display: inline-block;
    padding: 8px 15px;
    background-color: var(--white);
    border: 1px solid var(--primary-blue);
    border-radius: 5px;
    margin-top: 10px;
    transition: all 0.3s ease;
  }
  .guest-box .action-link:hover {
    background-color: var(--primary-blue);
    color: var(--white);
    text-decoration: none;
  }
  .guest-box .close-btn { color: #00acc1; }

  .notification-box {
    background-color: #e8f5e9;
    border: 2px solid var(--accent-green);
    color: #2e7d32;
    text-align: left;
  }
  .notification-box .alert-title { color: var(--accent-green); text-align: center; }
  .notification-box .close-btn { color: var(--accent-green); }
  .notification-list {
    list-style-type: none;
    padding: 0;
    margin-top: 15px;
  }
  .notification-item {
    background-color: var(--white);
    border: 1px solid #dcdcdc;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.95em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .mark-read-btn {
    background: var(--primary-blue);
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .mark-read-btn:hover {
    background-color: var(--dark-blue);
    transform: scale(1.05);
  }

  /* Super Admin Prompt */
  .admin-mode-banner {
    background-color: var(--accent-green);
    border: 2px solid #28a745;
    padding: 12px;
    margin: 20px 0;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
    color: var(--white);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    animation: slideUpFadeIn 0.8s ease-out;
  }

  /* Search Bar - Mobile Optimized */
  .search-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-sm);
    margin: var(--spacing-xl) 0;
    animation: slideUp 0.8s ease-in-out;
    position: relative;
    padding: 0 var(--spacing-md);
  }

  #homeSearchBar {
    padding: var(--spacing-md) var(--spacing-lg);
    width: 100%;
    max-width: 400px;
    border-radius: var(--border-radius);
    border: 2px solid var(--primary-blue);
    font-weight: 400;
    font-size: var(--font-size-base);
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
    min-height: 44px;
  }

  #homeSearchBar:focus {
    outline: 2px solid var(--primary-blue);
    outline-offset: 2px;
    border-color: var(--dark-blue);
    background-color: #eaf5ff;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
  }

  .search-btn, .clear-btn {
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    font-size: var(--font-size-base);
    font-weight: 600;
    transition: all 0.2s ease;
    box-shadow: var(--shadow);
    min-height: 44px;
    min-width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-btn {
    background-color: var(--warning-orange);
    color: var(--white);
  }

  .search-btn:hover, .search-btn:focus {
    background-color: #e67e22;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    outline: 2px solid var(--warning-orange);
    outline-offset: 2px;
  }

  .clear-btn {
    background-color: #95a5a6;
    color: var(--white);
  }

  .clear-btn:hover, .clear-btn:focus {
    background-color: #7f8c8d;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    outline: 2px solid #95a5a6;
    outline-offset: 2px;
  }

  .suggestion-item {
    padding: var(--spacing-md) var(--spacing-lg);
    cursor: pointer;
    border-bottom: 1px solid var(--light-grey);
    color: var(--text-dark);
    text-align: left;
    font-size: var(--font-size-sm);
    transition: background-color 0.2s ease;
    min-height: 44px;
    display: flex;
    align-items: center;
  }

  .suggestion-item:last-child {
    border-bottom: none;
  }

  .suggestion-item:hover, .suggestion-item:focus {
    background-color: var(--light-grey);
    outline: 2px solid var(--primary-blue);
    outline-offset: -2px;
  }

  #searchResultsContainer {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 400px;
    background: var(--white);
    border: 1px solid var(--primary-blue);
    border-top: none;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    box-shadow: var(--shadow-lg);
    z-index: 100;
    max-height: 250px;
    overflow-y: auto;
    display: none;
  }

  /* Content Sections - Mobile Optimized */
  .section-card {
    background: var(--white);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow);
    border: 1px solid var(--light-grey);
    transition: all 0.3s ease;
  }

  .section-card:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-blue);
  }

  .section-card h3 {
    color: var(--primary-blue);
    border-bottom: 2px solid var(--light-grey);
    padding-bottom: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-xl);
    font-weight: 600;
  }

  .hero-section-content {
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
    color: var(--white);
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    font-size: var(--font-size-lg);
    line-height: 1.6;
    position: relative;
    overflow: hidden;
  }

  .hero-section-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hero-pattern" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23hero-pattern)"/></svg>');
    opacity: 0.1;
  }

  .hero-section-content > * {
    position: relative;
    z-index: 1;
  }

  .responsive-image {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }
    height: auto;
    display: block;
    margin: 25px auto;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .responsive-image:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
  ul {
    list-style: disc;
    margin-left: 25px;
    padding: 0;
  }
  ul li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
  ul li strong {
    color: var(--primary-blue);
  }

  /* Call to Action */
  .call-to-action-section {
    text-align: center;
    padding: 40px 30px;
    background: var(--primary-blue); /* Solid color for CTA */
    color: var(--white);
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
  .call-to-action-section h3 {
    color: var(--white);
    margin-bottom: 20px;
    font-size: 2em;
  }
  .call-to-action-section p {
    font-size: 1.1em;
    margin-bottom: 25px;
  }
  .cta-button {
    display: inline-block;
    background: var(--dark-blue);
    color: var(--white);
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 30px;
    margin: 0 10px 15px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  .cta-button:hover {
    background: #3a536b;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    text-decoration: none;
  }
  .contact-link, .feedback-link {
    color: var(--white);
    font-weight: bold;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  .contact-link:hover, .feedback-link:hover {
    color: #ffeb3b; /* Yellow highlight on hover */
  }

  /* Footer - Mobile Optimized */
  footer {
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-md);
    margin-top: var(--spacing-xl);
    font-weight: 400;
    background: var(--footer-bg);
    color: var(--text-light);
    border-top: 3px solid var(--primary-blue);
    border-top-left-radius: var(--border-radius-lg);
    border-top-right-radius: var(--border-radius-lg);
    box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
    animation: slideUp 1s ease-out;
  }

  footer p {
    margin: 0;
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  /* Responsive Design - Mobile First */
  /* Small phones (320px and up) */
  @media (max-width: 480px) {
    :root {
      --spacing-lg: 16px;
      --spacing-xl: 24px;
      --font-size-xl: 1.125rem;
      --font-size-2xl: 1.25rem;
    }

    .container {
      padding: var(--spacing-sm);
      margin: 0 var(--spacing-sm);
      border-radius: var(--border-radius);
    }

    header {
      padding: var(--spacing-md) var(--spacing-sm);
      min-height: 50px;
    }

    header h1 {
      font-size: var(--font-size-lg);
      letter-spacing: 0;
    }

    .nav-toggle {
      width: 44px;
      height: 44px;
      font-size: var(--font-size-lg);
    }

    nav {
      width: 280px;
    }

    .search-section {
      padding: 0 var(--spacing-sm);
    }

    #homeSearchBar {
      max-width: 100%;
    }

    .search-btn, .clear-btn {
      min-width: 70px;
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .section-card {
      padding: var(--spacing-md);
      margin-bottom: var(--spacing-md);
    }

    .hero-section-content {
      padding: var(--spacing-lg) var(--spacing-md);
      font-size: var(--font-size-base);
    }

    .welcome-heading {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-md);
    }

    footer {
      padding: var(--spacing-lg) var(--spacing-sm);
    }
  }

  /* Medium phones and small tablets (481px to 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    .container {
      padding: var(--spacing-md);
      margin: 0 var(--spacing-md);
    }

    header h1 {
      font-size: var(--font-size-xl);
    }

    nav {
      width: 300px;
    }

    .search-section {
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--spacing-md);
    }

    #homeSearchBar {
      max-width: 300px;
    }

    .search-btn, .clear-btn {
      flex: 1;
      max-width: 120px;
    }

    .section-card {
      padding: var(--spacing-lg);
    }

    .hero-section-content {
      padding: var(--spacing-xl) var(--spacing-lg);
    }
  }

  /* Large tablets and small desktops (769px to 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    .container {
      max-width: 900px;
      padding: var(--spacing-lg);
    }

    header h1 {
      font-size: var(--font-size-2xl);
    }

    .nav-toggle {
      display: none;
    }

    nav {
      position: static;
      width: auto;
      height: auto;
      box-shadow: none;
      border-radius: var(--border-radius-lg);
      margin: var(--spacing-lg) auto;
      background: var(--dark-blue);
    }

    nav ul {
      flex-direction: row;
      justify-content: center;
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    nav ul li {
      width: auto;
      margin: 0;
    }

    nav a {
      padding: var(--spacing-md) var(--spacing-lg);
      border-radius: var(--border-radius);
      transition: all 0.2s ease;
    }

    nav a:hover, nav a:focus {
      background-color: var(--primary-blue);
      transform: translateY(-2px);
    }

    .overlay {
      display: none;
    }

    .search-section {
      gap: var(--spacing-lg);
    }

    #homeSearchBar {
      max-width: 400px;
    }

    .features {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-lg);
    }
  }

  /* Large desktops (1025px and up) */
  @media (min-width: 1025px) {
    .container {
      max-width: 1200px;
      padding: var(--spacing-xl);
    }

    header h1 {
      font-size: var(--font-size-3xl);
    }

    nav ul {
      gap: var(--spacing-lg);
    }

    .features {
      grid-template-columns: repeat(3, 1fr);
    }

    .search-section {
      gap: var(--spacing-xl);
    }

    #homeSearchBar {
      max-width: 500px;
    }
  }

  /* Extra large screens (1440px and up) */
  @media (min-width: 1440px) {
    .container {
      max-width: 1400px;
    }

    header h1 {
      font-size: var(--font-size-4xl);
    }

    .features {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    :root {
      --primary-blue: #0066cc;
      --dark-blue: #000000;
      --white: #ffffff;
      --text-dark: #000000;
      --light-grey: #cccccc;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Print styles */
  @media print {
    .nav-toggle,
    .overlay,
    .search-section,
    footer {
      display: none !important;
    }

    .container {
      box-shadow: none;
      border: 1px solid #000;
    }

    .section-card {
      break-inside: avoid;
      border: 1px solid #000;
      margin-bottom: 20px;
    }
  }
  </style>
</head>
<body>
  <header>
    <h1 class="bouncing-text">BARCODE FILING MANAGEMENT SYSTEM!</h1>
    <!--<h2>Intelligent & Efficient Physical Resource Management Solution</h2> -->
    <button id="navToggle" class="nav-toggle">☰</button> <!-- NEW: Toggle button -->
  </header>
  
  <div id="overlay" class="overlay"></div> <!-- NEW: Overlay element -->

  <nav id="mainNav" class="{{navClass}}"> <!-- Added ID for JS -->
    <ul>
      {{navLinks}}
    </ul>
  </nav>

  <!-- Search Bar Start -->
  <div class="search-section">
    <input type="text" id="homeSearchBar" placeholder="Search homepage..." oninput="handleSearchInput(event)">
    <button onclick="searchHomepage()" class="search-btn">
      &#128269; Search
    </button>
    <button onclick="clearSearchBar()" class="clear-btn">
      Clear
    </button>
    <div id="searchResultsContainer"></div>
  </div>
  <!-- Search Bar End -->

  <div class="container">
    <h2 class="welcome-heading">Welcome, {{username}}! 😄</h2>
    {{superAdminPrompt}}
    {{blockedMessage}}
    {{warningMessage}}
    {{loginPrompt}}
    {{notificationSection}}
    {{includeScreenCaptureScript}}

    {{contentSections}}
  </div>

  <footer>
    <p>&copy; 2025 Barcode Filing Management System. All rights reserved.</p>
  </footer>
  <script>
  // This function is a placeholder and should be defined elsewhere in your Cloudflare Worker logic
  // or passed in if it's external.
  function includeScreenCaptureScript() {
    // Return an empty string or actual script tag if needed
    return '';
  }

  const currentUserEmail = '{{loggedInUserEmail}}';
  async function markNotificationAsRead(notificationId) {
    try {
        const response = await fetch('/mark-notification-read', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: notificationId, user_email: currentUserEmail })
        });
        if (response.ok) {
            document.getElementById('notif-' + notificationId).style.display = 'none';
            const notificationBox = document.getElementById('notificationBox');
            const remainingNotifications = notificationBox.querySelectorAll('.notification-item:not([style*="display: none"])').length;
            if (remainingNotifications === 0) {
                notificationBox.style.display = 'none';
                const notificationLink = document.querySelector('.nav a[href="/notifications/items"]');
                if (notificationLink) {
                    notificationLink.classList.remove('notification-dot');
                }
            }
        } else {
            alert('Failed to mark notification as read.');
        }
    } catch (error) {
        console.error('Error marking notification as read:', error);
        alert('An error occurred while marking the notification as read.');
    }
  }

  // --- Navigation Toggle Logic for Homepage ---
  document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');

    if (navToggle && mainNav && overlay) {
        navToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling to document and closing immediately
            mainNav.classList.toggle('nav-open');
            overlay.classList.toggle('active'); // Toggle overlay active class
        });

        // Close nav when clicking overlay
        overlay.addEventListener('click', () => {
            mainNav.classList.remove('nav-open');
            overlay.classList.remove('active');
        });

        // Close nav when clicking a link inside (optional, but good UX for mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close if on a small screen where the nav is hideable (max-width: 768px in CSS)
                if (window.innerWidth <= 768) { 
                    mainNav.classList.remove('nav-open');
                    overlay.classList.remove('active');
                }
            });
        });

        // Close nav when clicking outside, but not on the toggle button or nav itself
        document.addEventListener('click', (event) => {
            const isClickInsideNav = mainNav.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                overlay.classList.remove('active');
            }
        });
    }
  });
  // --- End Navigation Toggle Logic ---


  function searchHomepage() {
    const searchBar = document.getElementById('homeSearchBar');
    const query = searchBar.value.trim();
    if (!query) {
      alert('Please enter a search query.');
      searchBar.focus();
      return;
    }
    window.location.href = '/search?query=' + encodeURIComponent(query);
  }

  let searchTimeout;

  function handleSearchInput(event) {
    const searchBar = document.getElementById('homeSearchBar');
    const query = searchBar.value.trim();
    const searchResultsContainer = document.getElementById('searchResultsContainer');

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (query.length > 1) {
      searchTimeout = setTimeout(() => {
        fetchSuggestions(query);
      }, 50);
    } else {
      searchResultsContainer.innerHTML = '';
      searchResultsContainer.style.display = 'none';
    }
  }

  async function fetchSuggestions(query) {
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    searchResultsContainer.innerHTML = '';

    try {
      const response = await fetch('/search/suggestions?query=' + encodeURIComponent(query));
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      const suggestions = await response.json();

      if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
          const suggestionItem = document.createElement('div');
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.textContent = suggestion;
          suggestionItem.onclick = () => {
            document.getElementById('homeSearchBar').value = suggestion;
            searchResultsContainer.innerHTML = '';
            searchResultsContainer.style.display = 'none';
            searchHomepage();
          };
          searchResultsContainer.appendChild(suggestionItem);
        });
        searchResultsContainer.style.display = 'block';
      } else {
        searchResultsContainer.style.display = 'none';
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      searchResultsContainer.innerHTML = '';
      searchResultsContainer.style.display = 'none';
    }
  }

  document.addEventListener('click', (event) => {
    // Original search bar related click handler
    const searchBar = document.getElementById('homeSearchBar');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const searchButton = document.querySelector('.search-btn');

    const isClickInsideSearchArea = (searchBar && searchBar.contains(event.target)) ||
                                   (searchResultsContainer && searchResultsContainer.contains(event.target)) ||
                                   (searchButton && searchButton.contains(event.target)) ||
                                   (event.target.classList && event.target.classList.contains('clear-btn'));
    if (!isClickInsideSearchArea && searchResultsContainer) {
      searchResultsContainer.style.display = 'none';
    }
  });

  function clearSearchBar() {
    const searchBar = document.getElementById('homeSearchBar');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    if (searchBar) searchBar.value = '';
    if (searchResultsContainer) {
      searchResultsContainer.innerHTML = '';
      searchResultsContainer.style.display = 'none';
    }
  }
  </script>
</body>
</html>`;
import styles from "./Footer.module.css";

export default function SocialIcons() {
  return (
    <nav className={styles.social} aria-label="Redes sociales">
      {/* Instagram */}
      <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.3-.4 1.3-.1 1.7-.1 4.9-.1z"/>
          <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
          <circle cx="18.4" cy="5.6" r="1.4"/>
        </svg>
      </a>

      {/* Facebook */}
      <a href="https://facebook.com/tu_cuenta" target="_blank" rel="noreferrer" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
          <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.2 8.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.5v7C18.3 21.2 22 17 22 12z"/>
        </svg>
      </a>

      {/* TikTok */}
      <a href="https://www.tiktok.com/@tu_cuenta" target="_blank" rel="noreferrer" aria-label="TikTok">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
          <path d="M12.75 2c.5 0 .9.4.9.9 0 3.7 2.9 6.6 6.6 6.6.5 0 .9.4.9.9v2c0 .5-.4.9-.9.9-2.1 0-4.1-.7-5.7-1.9v6.2c0 3.5-2.9 6.4-6.4 6.4S2.5 21.1 2.5 17.6s2.9-6.4 6.4-6.4c.5 0 .9.4.9.9v2c0 .5-.4.9-.9.9-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2V2.9c0-.5.4-.9.9-.9h2z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
          <path d="M12 2C6.5 2 2 6.3 2 11.7c0 2.1.7 4 1.8 5.6L2 22l4.9-1.7c1.5.9 3.2 1.4 5.1 1.4 5.5 0 10-4.3 10-9.7S17.5 2 12 2zm0 17c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9 1 1-2.8-.2-.3c-.9-1.3-1.3-2.8-1.3-4.3C4 7.3 7.6 4 12 4c4.3 0 8 3.3 8 7.7 0 4.3-3.7 7.6-8 7.6zm4.4-5.5c-.2-.1-1.2-.6-1.4-.6-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.3.1-.5 0s-1-.4-1.9-1.2c-.7-.6-1.2-1.3-1.4-1.5-.1-.2 0-.4.1-.5s.2-.3.3-.4c.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.9 3.5.5.2.9.3 1.2.4.5.2.9.2 1.2.1.4-.1 1.2-.5 1.3-.9.2-.5.2-1 .1-1.1-.1-.2-.2-.2-.4-.3z"/>
        </svg>
      </a>

      {/* YouTube */}
      <a href="https://youtube.com/@tu_cuenta" target="_blank" rel="noreferrer" aria-label="YouTube">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
          <path d="M21.8 8s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-0.9C16.7 5 12 5 12 5h0s-4.7 0-7 .1c-.4 0-1.2 0-2 0.9-.6.6-.8 2.1-.8 2.1S2 9.7 2 11.3v1.5c0 1.6.2 3.2.2 3.2s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.2 6.8.2 6.8.2s4.7 0 7-.1c.4 0 1.2 0 2-0.9.6-.6.8-2.1.8-2.1s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zM10 14.7v-5.4l5.2 2.7-5.2 2.7z"/>
        </svg>
      </a>

      {/* Spotify */}
      <a href="https://open.spotify.com/playlist/tu_playlist" target="_blank" rel="noreferrer" aria-label="Spotify">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12c6.7 0 12-5.4 12-12S18.7 0 12 0zm5.5 17.4c-.2.4-.6.6-1 .4-2.9-1.8-6.6-2.2-11-1.2-.4.1-.8-.2-.9-.6s.2-.8.6-.9c4.8-1.1 9-0.7 12.2 1.4.4.2.5.7.1 1zm1.4-3.1c-.3.5-.9.6-1.3.3-3.3-2-8.3-2.6-12.2-1.4-.5.1-1-.2-1.1-.7s.2-1 .7-1.1c4.4-1.3 9.9-.7 13.7 1.6.4.2.5.8.2 1.3zm.1-3.3c-3.9-2.3-10.4-2.5-14.2-1.4-.6.2-1.2-.1-1.4-.7-.2-.6.1-1.2.7-1.4 4.4-1.2 11.5-1 15.9 1.6.5.3.7 1 .4 1.6-.3.6-1 .7-1.4.3z"/>
        </svg>
      </a>
    </nav>
  );
}

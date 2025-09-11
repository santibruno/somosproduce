"use client";
import styles from "./YouTubeEmbed.module.css";

/**
 * @param {{ url: string, title?: string }} props
 */
export default function YouTubeEmbed({ url, title = "Video" }) {
  // Admitimos url completa o solo ID
  const idMatch = url.match(/(?:v=|\.be\/)([\w-]{11})/);
  const videoId = idMatch ? idMatch[1] : url;

  return (
    <div className={styles.wrapper} aria-label={title}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

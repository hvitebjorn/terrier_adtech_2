// Tiny terrier silhouette mark — abstract, tenacious profile.
// Uses currentColor so it inherits.
function TerrierMark({ size = 22, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={style} className="terrier-mark" aria-hidden="true">
      {/* Stylized terrier profile — tilted head, perked ears, beard */}
      <path
        d="M5 18 Q5 14 8 13 L9 9 Q9 7 11 7 L12 11 L15 10 Q19 9 22 11 Q26 13 27 17 L27 20 L26 22 L24 22 L24 24 L21 24 L21 22 L13 22 L13 25 L10 25 L10 22 Q7 22 5 20 Z"
        fill="currentColor"
      />
      {/* eye dot in negative space */}
      <circle cx="20" cy="15" r="1" fill="var(--paper, #faf7f1)" />
    </svg>
  );
}

window.TerrierMark = TerrierMark;

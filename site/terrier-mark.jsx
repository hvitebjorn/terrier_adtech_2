// Brand symbol — green circle "T" mark.
function TerrierMark({ size = 22, style }) {
  return (
    <img
      src={(window.__resources && window.__resources.symbol) || "logos/symbol-green.png"}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className="terrier-mark"
      style={{ display: 'inline-block', verticalAlign: 'middle', transform: 'translateY(-2px)', ...(style || {}) }}
    />
  );
}

window.TerrierMark = TerrierMark;

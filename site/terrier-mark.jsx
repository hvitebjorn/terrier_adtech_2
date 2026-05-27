// Brand symbol — green circle "T" mark.
function TerrierMark({ size = 22, style }) {
  return (
    <img
      src="logos/symbol.png"
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

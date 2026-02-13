import imgFooter from "../assets/footer/footer.jpg";

export default function FooterExpanded() {
  return (
    <div className="w-full">
      <img
        src={imgFooter}
        alt="Footer"
        className="w-full h-auto block"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}

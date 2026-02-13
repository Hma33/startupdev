import { Link } from "wouter";
import { useCurrency } from "./CurrencyContext";

export default function Navbar() {

  const { toggleCurrency, currency } = useCurrency();

  const LinkArea = ({ href, left, top, width, height, label, onClick }: { href?: string, left: number, top: number, width: number, height: number, label: string, onClick?: () => void }) => {
    const style = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    };
    const className = "absolute cursor-pointer z-50 hover:bg-black/5 transition-colors rounded";

    if (onClick) {
      return (
        <div
          onClick={onClick}
          className={className}
          style={style}
          aria-label={label}
          title={label}
          role="button"
          tabIndex={0}
        />
      );
    }

    return (
      <Link href={href || "#"}>
        <div
          className={className}
          style={style}
          aria-label={label}
          title={label}
        />
      </Link>
    );
  };

  return (
    <>
      {/* Logo Area */}
      <LinkArea href="/" left={15} top={10} width={120} height={30} label="Home" />

      {/* Navigation Links */}
      {/* Demo: left 245 */}
      <LinkArea href="/ourtech" left={240} top={10} width={35} height={20} label="Our Tech" />

      {/* Pricing: left 286 */}
      <LinkArea href="/pricing" left={280} top={10} width={45} height={20} label="Pricing" />

      {/* Story: left 337 */}
      <LinkArea href="/story" left={330} top={10} width={35} height={20} label="Story" />

      {/* Start Now Button */}
      <LinkArea href="/contact" left={418} top={10} width={52} height={20} label="Start Now" />

      {/* Currency Switcher */}
      {/* Based on search results, the flag/text area is around left 372-408, top 10-25 */}
      {/* The exact location might vary slightly between AED and THB versions but is generally in the same spot */}
      <LinkArea
        onClick={toggleCurrency}
        left={370}
        top={10}
        width={45}
        height={20}
        label={`Switch Currency (Current: ${currency})`}
      />
    </>
  );
}

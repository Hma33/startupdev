

interface PricingButtonProps {
    className?: string; // For absolute positioning and sizing (width)
    onClick?: () => void;
    label?: string;
}

export default function PricingButton({ className = "", onClick, label = "Add to cart" }: PricingButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`absolute bg-[#050200] h-[16px] rounded-[10px] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer z-10 border-none p-0 outline-none ${className}`}
        >
            <span className="font-['Inter',sans-serif] font-semibold text-[8px] text-white leading-none">
                {label}
            </span>
        </button>
    );
}

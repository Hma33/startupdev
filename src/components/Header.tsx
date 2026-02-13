
import { Link } from "wouter";
import { useCurrency } from "./CurrencyContext.tsx";
import imgNewLogo1 from "figma:asset/e713618512479f1538f4a632dcfec79221d05752.png";
import imgEllipse9 from "figma:asset/b5c0b52f33c4c4ddb72b51ed99cafd62664728d2.png";

function Group6() {
    return (
        <div className="absolute contents left-[418px] top-[10px]">
            <div className="absolute bg-black h-[16px] left-[418px] rounded-[20px] top-[10px] w-[52px]" />
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[11px] leading-[normal] left-[426px] not-italic text-[7px] text-white top-[13px] w-[34px] whitespace-pre-wrap">Start Now</p>
        </div>
    );
}

export default function Header() {
    const { currency, toggleCurrency } = useCurrency();

    return (
        <div className="absolute w-full h-[70px] top-0 left-0 z-50">
            <div className="absolute h-0 left-0 top-[34px] w-[490px]">
                <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490 1">
                        <line id="Line 1" stroke="var(--stroke-0, #DDDDDD)" x2="490" y1="0.5" y2="0.5" />
                    </svg>
                </div>
            </div>

            <Link href="/">
                <div className="cursor-pointer">
                    <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-[37px] not-italic text-[15px] text-black top-[12px] w-[85px] whitespace-pre-wrap">DEV LOOM</p>
                    <div className="absolute left-[15px] size-[17px] top-[10px]" data-name="newLogo 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewLogo1} />
                    </div>
                </div>
            </Link>

            <Link href="/ourtech">
                <p className="absolute cursor-pointer font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[245px] not-italic text-[8px] text-black top-[14px] w-[40px] whitespace-pre-wrap hover:text-gray-600 transition-colors">Our Tech</p>
            </Link>

            <Link href="/pricing">
                <p className="absolute cursor-pointer font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[290px] not-italic text-[8px] text-black top-[14px] w-[35px] whitespace-pre-wrap hover:text-gray-600 transition-colors">Pricing</p>
            </Link>

            <Link href="/story">
                <p className="absolute cursor-pointer font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[337px] not-italic text-[8px] text-black top-[14px] w-[25px] whitespace-pre-wrap hover:text-gray-600 transition-colors">Story</p>
            </Link>

            {/* Currency Switch */}
            <div onClick={toggleCurrency} className="cursor-pointer hover:opacity-70 transition-opacity">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[390px] not-italic text-[8px] text-black top-[15px] w-[18px] whitespace-pre-wrap">{currency}</p>
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[383px] not-italic text-[8px] text-black top-[15px] w-[18px] whitespace-pre-wrap">-</p>
                <div className="absolute left-[372px] size-[8px] top-[16px]">
                    <img alt="" className="block max-w-none size-full" height="8" src={imgEllipse9} width="8" />
                </div>
            </div>

            <Link href="/contact">
                <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <Group6 />
                </div>
            </Link>
        </div>
    );
}

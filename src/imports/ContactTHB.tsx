import imgImage13 from "figma:asset/3a460f31f07e6c0f5f2d962f8ed1c4e795d07732.png";
import imgNewLogo1 from "figma:asset/e713618512479f1538f4a632dcfec79221d05752.png";
import imgEllipse9 from "figma:asset/0172ce04760da70fe4496cc39b414a4740d772d0.png";

import AbsoluteFadeIn from "../components/AbsoluteFadeIn";


function StateLayer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Start Build Now</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-[#f26522] content-stretch flex items-center justify-center left-[198px] overflow-clip rounded-[100px] top-[904px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[418px] top-[10px]">
      <div className="absolute bg-black h-[16px] left-[418px] rounded-[20px] top-[10px] w-[52px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[11px] leading-[normal] left-[426px] not-italic text-[7px] text-white top-[13px] w-[34px] whitespace-pre-wrap">Start Now</p>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#f8f8f6] relative w-full h-[982px]" data-name="Contact">
      <AbsoluteFadeIn triggerTop={78} triggerHeight={25} delay={0.1}>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#f26522] text-[15px] text-center top-[78px] w-[65px] whitespace-pre-wrap">Contact</p>
        <div className="absolute flex h-[15px] items-center justify-center left-[120px] top-[79px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[15px]">
              <div className="absolute inset-[-6px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 6">
                  <line id="Line 12" stroke="var(--stroke-0, black)" strokeWidth="6" x2="15" y1="3" y2="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[14px] items-center justify-center left-[370px] top-[78px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[14px]">
              <div className="absolute inset-[-6px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 6">
                  <line id="Line 13" stroke="var(--stroke-0, black)" strokeWidth="6" x2="14" y1="3" y2="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFadeIn>


      <AbsoluteFadeIn triggerTop={145} triggerHeight={400} delay={0.1}>
        <div className="absolute bg-[#f26522] h-[385px] left-[110px] rounded-[2px] top-[145px] w-[263px]" />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[normal] left-[127px] not-italic text-[9px] text-white top-[160px] w-[100px] whitespace-pre-wrap">Contact</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[127px] not-italic text-[6px] text-white top-[181px] w-[35px] whitespace-pre-wrap">{`First Name `}</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[127px] not-italic text-[6px] text-white top-[221px] w-[35px] whitespace-pre-wrap">Last Name</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[127px] not-italic text-[6px] text-white top-[261px] w-[35px] whitespace-pre-wrap">{`Country `}</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[127px] not-italic text-[6px] text-white top-[261px] w-[35px] whitespace-pre-wrap">{`Country `}</p>
        <div className="absolute bg-white h-[15px] left-[127px] rounded-[4px] top-[195px] w-[233px]" />
        <div className="absolute bg-white h-[15px] left-[127px] rounded-[4px] top-[195px] w-[233px]" />
        <div className="absolute bg-white h-[15px] left-[127px] rounded-[4px] top-[235px] w-[233px]" />
        <div className="absolute bg-white h-[15px] left-[127px] rounded-[4px] top-[275px] w-[233px]" />
        <div className="absolute bg-white h-[15px] left-[126px] rounded-[4px] top-[314px] w-[233px]" />
        <div className="absolute bg-white h-[15px] left-[126px] rounded-[4px] top-[354px] w-[107px]" />
        <div className="absolute bg-white h-[15px] left-[252px] rounded-[4px] top-[354px] w-[107px]" />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[126px] not-italic text-[6px] text-white top-[300px] w-[107px] whitespace-pre-wrap">Email address</p>
        <div className="absolute bg-white h-[112px] left-[127px] rounded-[4px] top-[395px] w-[233px]" />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[127px] not-italic text-[6px] text-white top-[381px] w-[107px] whitespace-pre-wrap">Message</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[125px] not-italic text-[6px] text-white top-[340px] w-[107px] whitespace-pre-wrap">Country code</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[7px] leading-[normal] left-[252px] not-italic text-[6px] text-white top-[340px] w-[107px] whitespace-pre-wrap">Phone/Whatsapp</p>
        <div className="absolute bg-black h-[17px] left-[110px] top-[546px] w-[35px]" />
        <div className="absolute bg-black h-[17px] left-[110px] top-[546px] w-[48px]" />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[117px] not-italic text-[8px] text-white top-[549px] w-[34px] whitespace-pre-wrap">Submit</p>
      </AbsoluteFadeIn>
      <div className="absolute h-0 left-0 top-[34px] w-[490px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490 1">
            <line id="Line 1" stroke="var(--stroke-0, #DDDDDD)" x2="490" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[15px] leading-[normal] left-[37px] not-italic text-[15px] text-black top-[12px] w-[85px] whitespace-pre-wrap">DEV LOOM</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[245px] not-italic text-[8px] text-black top-[14px] w-[25px] whitespace-pre-wrap">Demo</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[337px] not-italic text-[8px] text-black top-[14px] w-[25px] whitespace-pre-wrap">Story</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[390px] not-italic text-[8px] text-black top-[15px] w-[18px] whitespace-pre-wrap">THB</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[383px] not-italic text-[8px] text-black top-[15px] w-[18px] whitespace-pre-wrap">-</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[286px] not-italic text-[8px] text-black top-[14px] w-[35px] whitespace-pre-wrap">Pricing</p>
      <div className="absolute left-[15px] size-[17px] top-[10px]" data-name="newLogo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewLogo1} />
      </div>
      <Group />
      <div className="absolute left-[372px] size-[8px] top-[16px]">
        <img alt="" className="block max-w-none size-full" height="8" src={imgEllipse9} width="8" />
      </div>

    </div>
  );
}
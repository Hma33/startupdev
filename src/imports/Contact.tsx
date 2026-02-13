
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



export default function Contact() {
  return (
    <div className="bg-[#f8f8f6] relative w-full h-[984px]" data-name="Contact">
      <AbsoluteFadeIn triggerTop={78} triggerHeight={25} delay={0.1}>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#f26522] text-[15px] text-center top-[78px] w-[65px] whitespace-pre-wrap">Contact</p>
        <div className="absolute flex h-[15px] items-center justify-center left-[120px] top-[79px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
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
        <div className="absolute flex h-[14px] items-center justify-center left-[370px] top-[78px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
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


    </div>
  );
}
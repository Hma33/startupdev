import { useState } from "react";
import { getAEDPricing, type Duration, AnimatedText } from "../components/PricingTabs";
import AbsoluteFadeIn from "../components/AbsoluteFadeIn";
import FooterExpanded from "../components/FooterExpanded";


import imgRectangle14 from "figma:asset/0434a5c361df22799d10e1a63bfcfa56f6673f85.png";
import imgRectangle20 from "figma:asset/cd5689000dea8d68abf01a1970b0cd56ac53cf2b.png";
import imgRectangle21 from "figma:asset/a08d9b3fb5f2e49433e68ac2ea8762c6a7475ea8.png";
import imgRectangle120 from "figma:asset/329a5251d8aab36c0e0087bee88ef85008e14bc8.png";
import imgRectangle23 from "figma:asset/85534aa99b7afefb2c7983599c98f10d171e14ae.png";
import imgRectangle24 from "figma:asset/5ef15747cb80728b678c56f6e3e0ee3cfa9eb0cf.png";
import imgRectangle25 from "figma:asset/29acf675b7ccf853eb08b7597e82f2c5dbec8190.png";
import imgImage13 from "figma:asset/3a460f31f07e6c0f5f2d962f8ed1c4e795d07732.png";






export default function Pricing() {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [duration] = useState<Duration>(3);
  const pricing = getAEDPricing(duration);

  return (
    <div className="bg-[#f8f8f6] relative h-[3700px] w-full" data-name="Pricing">
      <AbsoluteFadeIn triggerTop={30} triggerHeight={250} delay={0.1}>
        <div className="absolute h-[250px] left-0 top-[20px] w-[490px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle14} />
        </div>
      </AbsoluteFadeIn>
      <div className="absolute bg-[#f26522] h-[25px] left-[-15px] top-[240px] w-[505px]" />
      <div className="absolute flex h-[25px] items-center justify-center left-[140px] top-[240px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[25px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                <line id="Line 6" stroke="var(--stroke-0, white)" x2="25" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[280px] top-[240px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[25px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                <line id="Line 6" stroke="var(--stroke-0, white)" x2="25" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[25px] items-center justify-center left-[400px] top-[240px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[25px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                <line id="Line 6" stroke="var(--stroke-0, white)" x2="25" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[18px] leading-[normal] left-[38px] not-italic text-[15px] text-black top-[98px] w-[207px] whitespace-pre-wrap">Pricing</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18px] leading-[normal] left-[167px] not-italic text-[20px] text-black top-[317px] w-[179px] whitespace-pre-wrap">Choose Your Plan</p>

      <div className="absolute bg-[#f26522] h-[152px] left-[77px] rounded-[10px] top-[375px] w-[340px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[240.5px] not-italic text-[#f26522] text-[15px] text-center top-[970px] w-[207px] whitespace-pre-wrap">Our Upcoming</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[90px] not-italic text-[12px] text-white top-[394px] w-[44px] whitespace-pre-wrap">Starter</p>
      <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[90px] not-italic text-[8px] text-white top-[416px] w-[164px] whitespace-pre-wrap">
        <p className="mb-0">Best for: Personal portfolios, Landing pages, Digital business cards.</p>
        <p>&nbsp;</p>
      </div>
      <AbsoluteFadeIn triggerTop={390} triggerHeight={119} delay={0.2}>
        <ul className="absolute block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[119px] leading-[0] left-[270px] list-disc not-italic text-[8px] text-white top-[390px] w-[140px] whitespace-pre-wrap">
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Single-page scrolling layout (sections for Home, About, Services, Contact).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">1 Contact Form (delivered to email).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Updates: 1 Text/Image update request per month.</span>
          </li>
          <li className="ms-[12px]">
            <span className="leading-[15px]">Turnaround: 3-5 Business Days.</span>
          </li>
        </ul>
      </AbsoluteFadeIn>
      <AbsoluteFadeIn triggerTop={1417} triggerHeight={20} delay={0.3}>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[245.5px] not-italic text-[#1e1e1e] text-[15px] text-center top-[1417px] w-[207px] whitespace-pre-wrap">{`Timeline & Effort`}</p>
      </AbsoluteFadeIn>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[91px] not-italic text-[#1e1e1e] text-[15px] top-[1537px] w-[46px] whitespace-pre-wrap">1 - 2</p>
      <div className="absolute h-[70px] left-[56px] rounded-[10px] top-[1064px] w-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle20} />
      </div>
      <div className="absolute h-[70px] left-[186px] rounded-[10px] top-[1064px] w-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle21} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] leading-[normal] left-[186px] not-italic text-[#1e1e1e] text-[7px] top-[1144px] w-[84px] whitespace-pre-wrap">Inventory Management</p>
      <div className="absolute h-[70px] left-[317px] rounded-[10px] top-[1064px] w-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle120} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] leading-[normal] left-[316px] not-italic text-[#1e1e1e] text-[7px] top-[1144px] w-[50px] whitespace-pre-wrap">E-Commerce</p>
      <div className="absolute h-[70px] left-[54px] rounded-[10px] top-[1204px] w-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle23} />
      </div>
      <div className="absolute h-[70px] left-[184px] rounded-[10px] top-[1204px] w-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle24} />
      </div>
      <div className="absolute h-[70px] left-[314px] rounded-[10px] top-[1204px] w-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle25} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] leading-[normal] left-[54px] not-italic text-[#1e1e1e] text-[7px] top-[1284px] w-[50px] whitespace-pre-wrap">Logistics App</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] leading-[normal] left-[184px] not-italic text-[#1e1e1e] text-[7px] top-[1284px] w-[86px] whitespace-pre-wrap">Enterprise Level Website</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] leading-[normal] left-[314px] not-italic text-[#1e1e1e] text-[7px] top-[1284px] w-[62px] whitespace-pre-wrap">Personal website</p>
      <div className="absolute bg-[#f26522] h-[17px] left-[212px] rounded-[10px] top-[1383px] w-[65px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[221px] not-italic text-[8px] text-white top-[1387px] w-[57px] whitespace-pre-wrap">Iterate Fast</p>
      <div className="absolute left-[56px] size-[9px] top-[1507px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F26522)" id="Ellipse 1" r="4.5" />
        </svg>
      </div>
      <div className="absolute flex h-[148px] items-center justify-center left-[60px] top-[1516px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[148px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 1">
                <line id="Line 9" stroke="var(--stroke-0, black)" x2="148" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[18px] leading-[normal] left-[130px] not-italic text-[8px] text-black top-[1452px] w-[256px] whitespace-pre-wrap">Stop paying 15,000 AED agency fees. Professional, secure, and fast websites starting at 94 AED/Month. No deposit required.</p>
      <div className="absolute font-['Inter:Light',sans-serif] font-light leading-[0] left-[91px] not-italic text-[8px] text-black top-[1579px] w-[371px]">
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Requirement Gathering: Deep dive into brand guidelines, target audience, and functional needs.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Scope Definition: Finalizing the sitemap and feature list.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul>
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Contracting: Signing the Master Services Agreement (MSA) and processing the initial deposit.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[normal] left-[91px] not-italic text-[10px] text-black top-[1560px] w-[105px] whitespace-pre-wrap">Negotiation</p>
      <div className="absolute border border-black border-solid h-[17px] left-[91px] rounded-[5px] top-[1507px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[98px] not-italic text-[8px] text-black top-[1510px] w-[22px] whitespace-pre-wrap">Day</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[92px] not-italic text-[#1e1e1e] text-[15px] top-[2042px] w-[46px] whitespace-pre-wrap">7</p>
      <div className="absolute left-[56px] size-[9px] top-[2015px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F26522)" id="Ellipse 1" r="4.5" />
        </svg>
      </div>
      <div className="absolute font-['Inter:Light',sans-serif] font-light h-[78px] leading-[0] left-[92px] not-italic text-[8px] text-black top-[2089px] w-[374px]">
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Migration: Moving the site from the staging server to the live production server.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">DNS Configuration: Pointing the domain name to the new host.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Security Check: Installing SSL certificates.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul>
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Training: Providing a walkthrough on how to update content.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[normal] left-[92px] not-italic text-[10px] text-black top-[2065px] w-[105px] whitespace-pre-wrap">Launch Date</p>
      <div className="absolute border border-black border-solid h-[17px] left-[92px] rounded-[5px] top-[2011px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[99px] not-italic text-[8px] text-black top-[2014px] w-[22px] whitespace-pre-wrap">Day</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[91px] not-italic text-[#1e1e1e] text-[15px] top-[1850px] w-[46px] whitespace-pre-wrap">4-6</p>
      <div className="absolute left-[56px] size-[9px] top-[1820px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F26522)" id="Ellipse 1" r="4.5" />
        </svg>
      </div>
      <div className="absolute flex h-[186px] items-center justify-center left-[60px] top-[1829px] w-[0.974px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.7deg]">
          <div className="h-0 relative w-[186.003px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 186.003 1">
                <line id="Line 11" stroke="var(--stroke-0, black)" x2="186.003" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute font-['Inter:Light',sans-serif] font-light h-[80px] leading-[0] left-[91px] not-italic text-[8px] text-black top-[1897px] w-[371px]">
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Frontend Development: converting designs into responsive HTML/CSS/JavaScript.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Backend Integration: Setting up the Content Management System (CMS) and database.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Staging Deployment: Uploading the site to a private server for testing.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul>
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">{`QA & Testing: Checking for bugs, mobile responsiveness, and browser compatibility.`}</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[normal] left-[91px] not-italic text-[10px] text-black top-[1873px] w-[105px] whitespace-pre-wrap">System Deployment</p>
      <div className="absolute border border-black border-solid h-[17px] left-[91px] rounded-[5px] top-[1820px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[98px] not-italic text-[8px] text-black top-[1823px] w-[22px] whitespace-pre-wrap">Day</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[91px] not-italic text-[#1e1e1e] text-[15px] top-[1694px] w-[46px] whitespace-pre-wrap">3 - 4</p>
      <div className="absolute left-[56px] size-[9px] top-[1664px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #F26522)" id="Ellipse 1" r="4.5" />
        </svg>
      </div>
      <div className="absolute flex h-[148px] items-center justify-center left-[60px] top-[1673px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[148px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 1">
                <line id="Line 9" stroke="var(--stroke-0, black)" x2="148" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute font-['Inter:Light',sans-serif] font-light h-[66px] leading-[0] left-[91px] not-italic text-[8px] text-black top-[1736px] w-[378px]">
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Wireframing: Sketching the structural layout of key pages.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul className="mb-0">
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">{`High-Fidelity Mockups: Applying colors, typography, and imagery to create the actual "look and feel."`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">&nbsp;</p>
        <ul>
          <li className="list-disc ms-[12px] whitespace-pre-wrap">
            <span className="leading-[normal]">Feedback Loop: Two rounds of client revisions to finalize the aesthetic.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[16px] leading-[normal] left-[91px] not-italic text-[10px] text-black top-[1717px] w-[141px] whitespace-pre-wrap">{`Design Draft & Prototyping`}</p>
      <div className="absolute border border-black border-solid h-[17px] left-[91px] rounded-[5px] top-[1664px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[98px] not-italic text-[8px] text-black top-[1667px] w-[22px] whitespace-pre-wrap">Day</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#1e1e1e] text-[15px] text-center top-[2252px] w-[207px] whitespace-pre-wrap">FAQ</p>

      <div className="absolute bg-[#f26522] h-[235px] left-[58px] rounded-[10px] top-[2290px] w-[376px]" />
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2305px] w-[357px]" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2313px] w-[312px] whitespace-pre-wrap">How is Dev Loom Innovations different from a typical web design agency?</p>
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2335px] w-[357px]" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2343px] w-[312px] whitespace-pre-wrap">{`What do you mean by 'joining your ecosystem?`}</p>
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2365px] w-[357px]" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2373px] w-[312px] whitespace-pre-wrap">Do I own my website and data, or do you?</p>
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2395px] w-[357px]" />
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2425px] w-[357px]" />
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2425px] w-[357px]" />
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2455px] w-[357px]" />
      <div className="absolute bg-black h-[27px] left-[68px] rounded-[15px] top-[2485px] w-[357px]" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2403px] w-[312px] whitespace-pre-wrap">What happens if I need to update content later? Do I need to code?</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2433px] w-[312px] whitespace-pre-wrap">Do you offer support after the launch?</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2462px] w-[312px] whitespace-pre-wrap">I’ve heard of WordPress/Wix. Why do you use your custom technology instead?</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[9px] leading-[normal] left-[90px] not-italic text-[7px] text-white top-[2493px] w-[312px] whitespace-pre-wrap">Where is my website hosted?</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[297px] not-italic text-[7px] text-white top-[249px] w-[86px] whitespace-pre-wrap">See our price</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[417px] not-italic text-[7px] text-white top-[248px] w-[63px] whitespace-pre-wrap">Enterprise Level</p>
      <div className="absolute bg-[#050200] h-[16px] left-[87px] rounded-[10px] top-[496px] w-[115px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[122px] not-italic text-[8px] text-white top-[499px] w-[45px] whitespace-pre-wrap">Add to cart</p>
      {/* Starter price section */}
      <AbsoluteFadeIn triggerTop={455} triggerHeight={60} delay={0.4}>
        <div className="absolute left-[90px] top-[455px] w-[160px]">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ color: '#fff', fontSize: 7, fontFamily: "'Inter', sans-serif", textDecoration: 'line-through', opacity: 0.85 }}>AED <AnimatedText delay={30}>{pricing.starter.originalPrice.toLocaleString()}</AnimatedText></span>
          </div>
          <p style={{ color: '#fff', fontSize: 7, fontFamily: "'Inter', sans-serif", fontWeight: 500, margin: 0 }}>AED</p>
          <p style={{ color: '#fff', fontSize: 22, fontFamily: "'Inter', sans-serif", fontWeight: 800, margin: '0', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 4 }}><AnimatedText delay={60}>{pricing.starter.price}</AnimatedText><span style={{ fontSize: 8, fontWeight: 500 }}>{pricing.starter.suffix}</span></p>
        </div>
      </AbsoluteFadeIn>
      <div className="absolute flex h-[122px] items-center justify-center left-[260px] top-[390px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[122px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 1">
                <line id="Line 25" stroke="var(--stroke-0, white)" x2="122" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f26522] h-[159px] left-[77px] rounded-[10px] top-[537px] w-[340px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[90px] not-italic text-[12px] text-white top-[556px] w-[80px] whitespace-pre-wrap">The Growth</p>
      <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[90px] not-italic text-[8px] text-white top-[578px] w-[164px] whitespace-pre-wrap">
        <p className="mb-0">Best for: Small businesses, Local services, Clinics, Restaurants.</p>
        <p>&nbsp;</p>
      </div>
      <AbsoluteFadeIn triggerTop={552} triggerHeight={119} delay={0.5}>
        <ul className="absolute block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[119px] leading-[0] left-[270px] list-disc not-italic text-[8px] text-white top-[552px] w-[140px] whitespace-pre-wrap">
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">5 Dedicated Pages (e.g., Home, About Us, Services, Gallery/Projects, Contact).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Everything in Starter.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Basic SEO Setup (Meta tags, keywords for Google indexing).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">2 hours of content updates/maintenance per month.</span>
          </li>
          <li className="ms-[12px]">
            <span className="leading-[15px]">7-10 Business Days.</span>
          </li>
        </ul>
      </AbsoluteFadeIn>
      <div className="absolute bg-[#050200] h-[16px] left-[87px] rounded-[10px] top-[658px] w-[115px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[122px] not-italic text-[8px] text-white top-[661px] w-[45px] whitespace-pre-wrap">Add to cart</p>
      {/* Growth price section */}
      <AbsoluteFadeIn triggerTop={617} triggerHeight={60} delay={0.6}>
        <div className="absolute left-[90px] top-[617px] w-[160px]">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ color: '#fff', fontSize: 7, fontFamily: "'Inter', sans-serif", textDecoration: 'line-through', opacity: 0.85 }}>AED <AnimatedText delay={30}>{pricing.growth.originalPrice.toLocaleString()}</AnimatedText></span>
          </div>
          <p style={{ color: '#fff', fontSize: 7, fontFamily: "'Inter', sans-serif", fontWeight: 500, margin: 0 }}>AED</p>
          <p style={{ color: '#fff', fontSize: 22, fontFamily: "'Inter', sans-serif", fontWeight: 800, margin: '0', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: 4 }}><AnimatedText delay={60}>{pricing.growth.price.toLocaleString()}</AnimatedText><span style={{ fontSize: 8, fontWeight: 500 }}>{pricing.growth.suffix}</span></p>
        </div>
      </AbsoluteFadeIn>
      <div className="absolute flex h-[130px] items-center justify-center left-[260px] top-[552px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[130px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 1">
                <line id="Line 26" stroke="var(--stroke-0, white)" x2="130" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f26522] h-[221px] left-[77px] rounded-[10px] top-[709px] w-[340px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[90px] not-italic text-[12px] text-white top-[728px] w-[100px] whitespace-pre-wrap">The Professional</p>
      <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[34px] leading-[normal] left-[90px] not-italic text-[8px] text-white top-[750px] w-[164px] whitespace-pre-wrap">
        <p className="mb-0">Best for: Established companies, Corporate profiles, Service providers needing detailed breakdowns.</p>
        <p>&nbsp;</p>
      </div>
      <AbsoluteFadeIn triggerTop={724} triggerHeight={166} delay={0.7}>
        <ul className="absolute block font-['Inter:Semi_Bold',sans-serif] font-semibold h-[166px] leading-[0] left-[270px] list-disc not-italic text-[8px] text-white top-[724px] w-[140px] whitespace-pre-wrap">
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">{` 7 Dedicated Pages (e.g., Home, About, Service A, Service B, Blog/News, FAQ, Contact).`}</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Everything in Growth.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Advanced SEO: Schema markup and sitemap submission.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Performance: Speed optimization (Image compression + caching).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Priority Support + 4 hours of updates per month.</span>
          </li>
          <li className="ms-[12px]">
            <span className="leading-[15px]">Priority Support + 4 hours of updates per month.</span>
          </li>
        </ul>
      </AbsoluteFadeIn>
      <div className="absolute bg-[#050200] h-[16px] left-[87px] rounded-[10px] top-[830px] w-[115px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[122px] not-italic text-[8px] text-white top-[833px] w-[45px] whitespace-pre-wrap">Add to cart</p>
      {/* Pro price section */}

      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] leading-[normal] left-[55px] not-italic text-[#1e1e1e] text-[7px] top-[1145px] w-[50px] whitespace-pre-wrap">Point of Sale</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[25px] leading-[normal] left-[56px] not-italic text-[5px] text-black top-[1163px] w-[113px] whitespace-pre-wrap">{`Dev Loom POS tells you what’s next. We’ve combined industrial-grade reliability with predictive machine learning to create a commerce engine. `}</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[25px] leading-[normal] left-[187px] not-italic text-[5px] text-black top-[1162px] w-[113px] whitespace-pre-wrap">Dev Loom Inventory is a high-concurrency engine that synchronizes your stock, procurement, and logistics into a single, intelligent flow.</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[22px] leading-[normal] left-[317px] not-italic text-[5px] text-black top-[1162px] w-[113px] whitespace-pre-wrap">Dev Loom E-Commerce platforms are built with a “Performance-First” philosophy, combining serverless agility with edge-computing speed.</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[16px] not-italic text-[7px] text-white top-[247px] w-[86px] whitespace-pre-wrap">Live in 7 days</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[164px] not-italic text-[7px] text-white top-[247px] w-[86px] whitespace-pre-wrap">Stop paying 15,000 AED</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[297px] not-italic text-[7px] text-white top-[249px] w-[86px] whitespace-pre-wrap">See our price</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[417px] not-italic text-[7px] text-white top-[248px] w-[63px] whitespace-pre-wrap">Enterprise Level</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light h-[43px] leading-[normal] left-[233px] not-italic text-[9px] text-black text-center top-[997px] w-[274px] whitespace-pre-wrap">{`We Are Not an Agency. We Are Your R&D Department.Traditional websites go stale the moment they launch. We’re building an ecosystem that keeps yours evolving.`}</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[22px] leading-[normal] left-[184px] not-italic text-[5px] text-black top-[1301px] w-[113px] whitespace-pre-wrap">{`At Dev Loom Innovations, we don’t just design pages; we engineer digital asserts. `}</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[22px] leading-[normal] left-[314px] not-italic text-[5px] text-black top-[1301px] w-[113px] whitespace-pre-wrap">{`We now beyond generic templates to build Custom Personal Websites that reflect your unique professional identity through high-end engineering. `}</p>
      <AbsoluteFadeIn triggerTop={1301} triggerHeight={22} delay={0.9}>
        <p className="absolute font-['Inter:Light',sans-serif] font-light h-[22px] leading-[normal] left-[54px] not-italic text-[5px] text-black top-[1301px] w-[113px] whitespace-pre-wrap">At Dev Loom Innovations, we build custom logistics and booking engines that work as hard as you do.</p>
      </AbsoluteFadeIn>
      <div className="absolute top-[2950px] w-full left-0">
        <FooterExpanded />
      </div>

    </div>
  );
}


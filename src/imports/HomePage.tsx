import { useState } from "react";
import { getAEDPricing, Duration } from "../components/PricingTabs";
import HomePricingToggle from "../components/HomePricingToggle";
import svgPaths from "./svg-drvqlofcbj";
import AbsoluteFadeIn from "../components/AbsoluteFadeIn";
import FooterExpanded from "../components/FooterExpanded";
import imgBannerfull1 from "figma:asset/00fe7fef91f22709605b3366ab5f6176e753b031.png";

import imgRectangle6 from "figma:asset/636fea1b50f8e9610c5714372ce97b24e59862de.png";
import imgNewLogo1 from "figma:asset/e713618512479f1538f4a632dcfec79221d05752.png";
import imgImage7 from "figma:asset/f06dc6fdac911e4899928595f4ed9f7257b0ce7c.png";


function Group1() {
  return (
    <div className="absolute contents left-[-41px] top-[207px]">
      <div className="absolute h-[183px] left-[-41px] top-[207px] w-[572px]" data-name="bannerfull 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBannerfull1} />
      </div>
    </div>
  );
}

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
    <div className="bg-[#f26522] content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[28px] items-center justify-center left-1/2 top-[202px] w-[70px]" data-name="Button">
      <Content />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Start with US</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute bg-[#f26522] content-stretch flex items-center justify-center left-[46px] overflow-clip rounded-[100px] top-[2185px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[43px] top-[715px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] left-[44px] not-italic text-[8px] text-black top-[748px] w-[274px] whitespace-pre-wrap">The Financial Model</p>
      <div className="absolute bg-[#f26522] border border-black border-solid h-[17px] left-[44px] rounded-[10px] top-[718px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[52px] not-italic text-[8px] text-white top-[722px] w-[15px] whitespace-pre-wrap">1/3</p>

      <div className="absolute bg-black h-[255px] left-[43px] rounded-[10px] top-[783px] w-[403px]" />
      <div className="absolute bg-white h-[239px] left-[50px] rounded-[10px] top-[790px] w-[388px]" />
      <div className="absolute flex h-[187px] items-center justify-center left-[80px] top-[811px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[187px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 1">
                <line id="Line 8" stroke="var(--stroke-0, black)" x2="187" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[19px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[857px] w-[274px] whitespace-pre-wrap">We treat web development as a service, not a product. In a volatile market, liquidity is king.</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[32px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[908px] w-[274px] whitespace-pre-wrap">By using an OpEx (Operating Expense) model, businesses can deduct the subscription from their taxes immediately as an expense, rather than depreciating a large asset over years.</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[32px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[966px] w-[274px] whitespace-pre-wrap">{`We remove the "Sunk Cost Fallacy." If the service doesn't perform, you stop paying. This puts the pressure on us to deliver constant value every quarter.`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[842px] w-[91px] whitespace-pre-wrap">“The Philosophy”</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[893px] w-[91px] whitespace-pre-wrap">“Budget Optimization”</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[951px] w-[116px] whitespace-pre-wrap">{`The "Zero-Lock" Guarantee:`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[96px] not-italic text-[15px] text-black top-[811px] w-[306px] whitespace-pre-wrap">Financial Agility</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[43px] top-[1060px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] left-[44px] not-italic text-[8px] text-black top-[1093px] w-[274px] whitespace-pre-wrap">The Technology</p>
      <div className="absolute bg-[#f26522] border border-black border-solid h-[17px] left-[44px] rounded-[10px] top-[1063px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[52px] not-italic text-[8px] text-white top-[1067px] w-[15px] whitespace-pre-wrap">2/3</p>

      <div className="absolute bg-black h-[289px] left-[43px] rounded-[10px] top-[1128px] w-[403px]" />
      <div className="absolute bg-white h-[271px] left-[50px] rounded-[10px] top-[1136px] w-[388px]" />
      <div className="absolute flex h-[203px] items-center justify-center left-[80px] top-[1156px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[203px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 1">
                <line id="Line 9" stroke="var(--stroke-0, black)" x2="203" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[29px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[1202px] w-[274px] whitespace-pre-wrap">{`While WordPress sites often struggle with "code bloat," Python-based backends are lean. Expect faster PageSpeed scores, which directly correlates to higher Google Search rankings.`}</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[32px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[1263px] w-[274px] whitespace-pre-wrap">Python is the native language of Artificial Intelligence. Building your site in Python means we can easily integrate custom AI chatbots, predictive analytics, or automation tools later without rebuilding from scratch.</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[32px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[1327px] w-[274px] whitespace-pre-wrap">{`Python frameworks are less prone to the "automated bot attacks" that plague 40% of the web (WordPress). We provide enterprise-grade security as standard, not as a paid plugin.`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[1187px] w-[91px] whitespace-pre-wrap">“Performance Metrics”</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[1248px] w-[91px] whitespace-pre-wrap">“The AI Advantage”</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[96px] not-italic text-[8px] text-black top-[1312px] w-[144px] whitespace-pre-wrap">{`"Fort Knox Security"`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[96px] not-italic text-[15px] text-black top-[1156px] w-[306px] whitespace-pre-wrap">{` Future-Proof Engineering`}</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[47px] top-[1449px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] left-[48px] not-italic text-[8px] text-black top-[1482px] w-[274px] whitespace-pre-wrap">The 72-Hour Sprint</p>
      <div className="absolute bg-[#f26522] border border-black border-solid h-[17px] left-[48px] rounded-[10px] top-[1452px] w-[30px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[56px] not-italic text-[8px] text-white top-[1456px] w-[15px] whitespace-pre-wrap">2/3</p>

      <div className="absolute bg-black h-[289px] left-[47px] rounded-[10px] top-[1517px] w-[403px]" />
      <div className="absolute bg-white h-[271px] left-[54px] rounded-[10px] top-[1525px] w-[388px]" />
      <div className="absolute flex h-[203px] items-center justify-center left-[84px] top-[1545px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[203px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 1">
                <line id="Line 9" stroke="var(--stroke-0, black)" x2="203" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[29px] leading-[normal] left-[100px] not-italic text-[8px] text-black top-[1591px] w-[274px] whitespace-pre-wrap">{`We’ve audited the agency workflow and removed the "fluff"—no 2-hour discovery calls or 20-page design mockups that go nowhere.`}</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[32px] leading-[normal] left-[100px] not-italic text-[8px] text-black top-[1652px] w-[274px] whitespace-pre-wrap">We use a proprietary internal library of Python components. This allows us to assemble a custom, high-performance site at the speed of a template.</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light h-[32px] leading-[normal] left-[100px] not-italic text-[8px] text-black top-[1716px] w-[274px] whitespace-pre-wrap">{`Your site isn't just built fast; it lives on high-speed servers optimized for the Middle East (AWS or Google Cloud regions), ensuring local users experience zero latency.`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[100px] not-italic text-[8px] text-black top-[1576px] w-[91px] whitespace-pre-wrap">Eliminating Friction</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[100px] not-italic text-[8px] text-black top-[1637px] w-[110px] whitespace-pre-wrap">{`The "Ready-to-Scale" Stack`}</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[11px] leading-[normal] left-[100px] not-italic text-[8px] text-black top-[1701px] w-[144px] whitespace-pre-wrap">Enterprise Hosting Included</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[100px] not-italic text-[15px] text-black top-[1545px] w-[306px] whitespace-pre-wrap">{` The 72-Hour Sprint`}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[102px] top-[250px]">
      <div className="absolute bg-black h-[180px] left-[102px] rounded-[10px] top-[250px] w-[285px]" />
      <div className="absolute h-[168px] left-[110px] rounded-[10px] top-[256px] w-[271px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-60 pointer-events-none rounded-[10px] size-full" src={imgRectangle6} />
      </div>
      <div className="absolute bg-black h-[4px] left-[236px] rounded-bl-[5px] rounded-br-[5px] top-[256px] w-[19px]" />
      <div className="absolute bg-[rgba(0,0,0,0.7)] h-[110px] left-[150px] rounded-[5px] top-[309px] w-[59px]" />
      <div className="absolute bg-[rgba(0,0,0,0.8)] h-[146px] left-[236px] rounded-[2px] top-[273px] w-[136px]" />
      <div className="absolute left-[119px] size-[4px] top-[414px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 5" r="2" />
        </svg>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] top-[415px] w-[14px]" />
      <div className="absolute left-[119px] size-[4px] top-[286px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 5" r="2" />
        </svg>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] top-[287px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[152px] top-[279px] w-[11px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[154px] top-[294px] w-[11px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[152px] top-[297px] w-[41px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[152px] top-[300px] w-[41px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[152px] top-[303px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[152px] top-[306px] w-[20px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[165px] top-[279px] w-[11px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[245px] top-[277px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[245px] top-[277px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[5px] left-[242px] top-[283px] w-[58px]" />
      <div className="absolute bg-[#d9d9d9] h-[5px] left-[117px] top-[270px] w-[23px]" />
      <div className="absolute bg-[#d9d9d9] h-[3px] left-[166px] top-[263px] w-[11px]" />
      <div className="absolute bg-[#d9d9d9] h-[5px] left-[182px] top-[262px] w-[23px]" />
      <div className="absolute left-[119px] size-[4px] top-[281px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 5" r="2" />
        </svg>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] top-[282px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[337px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] rounded-[0.5px] top-[338px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[331px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] rounded-[0.5px] top-[332px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[325px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] rounded-[0.5px] top-[326px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[319px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] rounded-[0.5px] top-[320px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[313px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] rounded-[0.5px] top-[314px] w-[10px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[307px]" />
      <div className="absolute bg-[#d9d9d9] left-[119px] rounded-[1px] size-[4px] top-[301px]" />
      <div className="absolute bg-[#d9d9d9] left-[197px] rounded-[1px] size-[4px] top-[285px]" />
      <div className="absolute bg-[#d9d9d9] left-[161px] rounded-[1px] size-[4px] top-[262px]" />
      <div className="absolute bg-[#d9d9d9] left-[240px] rounded-[1px] size-[4px] top-[276px]" />
      <div className="absolute bg-[#d9d9d9] left-[203px] rounded-[1px] size-[4px] top-[285px]" />
      <div className="absolute bg-[#d9d9d9] h-[2px] left-[125px] rounded-[0.5px] top-[308px] w-[10px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[119px] not-italic text-[2px] text-black top-[277px] w-[10px] whitespace-pre-wrap">/Building</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[119px] not-italic text-[2px] text-white top-[277px] w-[10px] whitespace-pre-wrap">/Building</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[201px] not-italic text-[2px] text-white top-[294px] w-[8px] whitespace-pre-wrap">2h ago</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[157px] not-italic text-[2.5px] text-white top-[286px] w-[10px] whitespace-pre-wrap">Search</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[123px] not-italic text-[3px] text-white top-[262px] w-[16px] whitespace-pre-wrap">Dev Loom</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[119px] not-italic text-[2px] text-white top-[295px] w-[13px] whitespace-pre-wrap">/Workspace</p>
      <div className="absolute left-[116px] size-[5px] top-[261px]" data-name="newLogo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewLogo1} />
      </div>
      <div className="absolute left-[153px] size-[6px] top-[314px]" data-name="newLogo 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewLogo1} />
      </div>
      <div className="absolute bg-[#f26522] h-[26px] left-[242px] rounded-[1px] top-[292px] w-[39px]" />
      <div className="absolute bg-[#1e1e1e] h-[9px] left-[251px] rounded-[1px] top-[314px] w-[19px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[259px] not-italic text-[2px] text-white top-[317px] w-[10px] whitespace-pre-wrap">Inventory</p>
      <div className="absolute bg-[#d9d9d9] left-[253px] rounded-[1px] size-[5px] top-[316px]" />
      <div className="absolute bg-[#f26522] h-[26px] left-[243px] rounded-[1px] top-[326px] w-[39px]" />
      <div className="absolute bg-[#1e1e1e] h-[9px] left-[252px] rounded-[1px] top-[348px] w-[19px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[260px] not-italic text-[2px] text-white top-[351px] w-[11px] whitespace-pre-wrap">Enterprise</p>
      <div className="absolute bg-[#d9d9d9] left-[254px] rounded-[1px] size-[5px] top-[350px]" />
      <div className="absolute bg-[#f26522] h-[26px] left-[284px] rounded-[1px] top-[326px] w-[39px]" />
      <div className="absolute bg-[#1e1e1e] h-[9px] left-[293px] rounded-[1px] top-[348px] w-[19px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[301px] not-italic text-[2px] text-white top-[351px] w-[10px] whitespace-pre-wrap">Company</p>
      <div className="absolute bg-[#d9d9d9] left-[295px] rounded-[1px] size-[5px] top-[350px]" />
      <div className="absolute bg-[#f26522] h-[26px] left-[283px] rounded-[1px] top-[292px] w-[39px]" />
      <div className="absolute bg-[#1e1e1e] h-[9px] left-[292px] rounded-[1px] top-[314px] w-[19px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[300px] not-italic text-[2px] text-white top-[317px] w-[10px] whitespace-pre-wrap">POS</p>
      <div className="absolute bg-[#d9d9d9] left-[294px] rounded-[1px] size-[5px] top-[316px]" />
      <div className="absolute bg-[#f26522] h-[26px] left-[324px] rounded-[1px] top-[292px] w-[39px]" />
      <div className="absolute bg-[#1e1e1e] h-[9px] left-[333px] rounded-[1px] top-[314px] w-[19px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[341px] not-italic text-[2px] text-white top-[317px] w-[10px] whitespace-pre-wrap">Logistics</p>
      <div className="absolute bg-[#d9d9d9] left-[335px] rounded-[1px] size-[5px] top-[316px]" />
      <div className="absolute h-0 left-[236px] top-[281px] w-[136px]">
        <div className="absolute inset-[-0.2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 0.2">
            <line id="Line 32" stroke="var(--stroke-0, white)" strokeWidth="0.2" x2="136" y1="0.1" y2="0.1" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#f26522] h-[9px] left-[152px] rounded-[2px] top-[404px] w-[56px]" />
      <div className="absolute bg-[#f26522] h-[9px] left-[161px] rounded-[2px] top-[358px] w-[46px]" />
      <div className="absolute left-[153px] size-[4px] top-[407px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 5" r="2" />
        </svg>
      </div>
      <div className="absolute bg-[#d9d9d9] left-[201px] rounded-[1px] size-[5px] top-[406px]" />
      <div className="absolute left-[202.5px] size-[2px] top-[407.5px]">
        <div className="absolute inset-[-8.09%_-11.18%_-8.09%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.32361 2.32361">
            <g id="Vector 1">
              <path d={svgPaths.p2f898200} fill="var(--fill-0, #D9D9D9)" />
              <path d={svgPaths.p30e1e00} stroke="var(--stroke-0, black)" strokeWidth="0.2" />
            </g>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[159px] not-italic text-[2.5px] text-white top-[408px] w-[13px] whitespace-pre-wrap">Ask Loom</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[3px] leading-[normal] left-[165px] not-italic text-[2.5px] text-white top-[361px] w-[26px] whitespace-pre-wrap">The price is amazing</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[6px] leading-[normal] left-[153px] not-italic text-[2.5px] text-white top-[329px] w-[44px] whitespace-pre-wrap">Based on your needs. we could deliver during a week.</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[2px] leading-[normal] left-[153px] not-italic text-[2.5px] text-white top-[325px] w-[19px] whitespace-pre-wrap">Good morning!</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[2px] leading-[normal] left-[161px] not-italic text-[2.5px] text-white top-[316px] w-[19px] whitespace-pre-wrap">Loom Assistant</p>
    </div>
  );
}

function AttachFile() {
  return (
    <div className="absolute left-[151px] size-[3px] top-[293px]" data-name="attach_file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g clipPath="url(#clip0_1_1414)" id="attach_file">
          <path d={svgPaths.pac3c200} fill="var(--fill-0, white)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1414">
            <rect fill="white" height="3" width="3" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative size-[7px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p53ee940} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute left-[151px] size-[5px] top-[285px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
        <g clipPath="url(#clip0_1_1257)" id="search">
          <path d={svgPaths.p1ef91500} fill="var(--fill-0, white)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1257">
            <rect fill="white" height="5" width="5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}









export default function HomePage() {
  const [duration, setDuration] = useState<Duration>(12);
  const pricing = getAEDPricing(duration);
  return (
    <div className="bg-[#f8f8f6] relative w-full h-[4500px]" data-name="Home page">
      <AbsoluteFadeIn triggerTop={207} triggerHeight={183} delay={0.1}>
        <Group1 />
      </AbsoluteFadeIn>

      <AbsoluteFadeIn triggerTop={70} triggerHeight={500} delay={0.2}>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[54px] leading-[normal] left-[51px] not-italic text-[15px] text-[rgba(0,0,0,0.8)] top-[70px] w-[177px] whitespace-pre-wrap">{`"Get a Enterprise-Level Website for the Price of a Lunch.`}</p>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[#f26522] text-[15px] text-center top-[488px] w-[207px] whitespace-pre-wrap">{`The "Why Us"`}</p>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-1/2 not-italic text-[15px] text-black text-center top-[514px] w-[306px] whitespace-pre-wrap">Moves Fast, and Tech should be Keep up</p>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-1/2 not-italic text-[13px] text-[rgba(30,30,30,0.5)] text-center top-[540px] w-[296px] whitespace-pre-wrap">SEO-optimized platform in under a week</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[34px] leading-[normal] left-[298px] not-italic text-[7px] text-[rgba(0,0,0,0.5)] top-[106px] w-[153px] whitespace-pre-wrap">Stop paying 15,000 AED agency fees. Professional, secure, and fast websites starting at 94 AED/Month. No deposit required.</p>
        <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[297px] not-italic text-[8px] text-black top-[72px] whitespace-nowrap">
          <p className="mb-0">{`Stop paying 15,000 AED agency fees. `}</p>
          <p className="text-[#f26522]">-Deployment in a week.</p>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[77px] leading-[normal] left-[118px] not-italic text-[10px] text-[rgba(0,0,0,0.7)] top-[583px] w-[274px] whitespace-pre-wrap">{`We’ve eliminated the friction of traditional web development by removing massive deposits and months of "design bureaucracy." With Dev Loom Innovations, the client receives a custom-coded, SEO-optimized platform in under a week, backed by a flexible "Netflix-style" pricing model.`}</p>
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] left-[255px] not-italic text-[#f26522] text-[8px] text-center top-[670px] w-[274px] whitespace-pre-wrap">{` "Tech and Pricing" advantages`}</p>
        <Button />
      </AbsoluteFadeIn>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[17px] leading-[normal] left-[46px] not-italic text-[13px] text-black top-[2096px] w-[160px] whitespace-pre-wrap">{`The "Future-Proof`}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[40px] leading-[normal] left-[47px] not-italic text-[8px] text-[rgba(30,30,30,0.7)] top-[2121px] w-[160px] whitespace-pre-wrap">{`We Are Not an Agency. We Are Your R&D Department.Traditional websites go stale the moment they launch. We’re building an ecosystem that keeps yours evolving.`}</p>
      <Content1 />
      <div className="absolute bg-[#f26522] h-[616px] left-[20px] rounded-[10px] top-[2370px] w-[144px]" />
      <div className="absolute bg-[#050200] h-[16px] left-[34px] rounded-[10px] top-[2533px] w-[115px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[68px] not-italic text-[8px] text-white top-[2535px] w-[45px] whitespace-pre-wrap">Add to cart</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[31px] leading-[normal] left-[31px] not-italic text-[8px] text-white top-[2414px] w-[119px] whitespace-pre-wrap">
        <p className="mb-0">Best for: Personal portfolios, Landing pages, Digital business cards.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[300px] leading-[0] left-[37px] not-italic text-[8px] text-white top-[2567px] w-[119px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15px] not-italic">Structure</span>
          <span className="leading-[15px]">{`: `}</span>
        </p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="leading-[15px] mb-0">Single-page scrolling layout (sections for Home, About, Services, Contact).</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15px] not-italic">Features</span>
          <span className="leading-[15px]">:</span>
        </p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">1 Contact Form (delivered to email).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Social Media Links integration.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Click-to-Call / Click-to-WhatsApp buttons.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Google Maps integration.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Updates: 1 Text/Image update request per month.</span>
          </li>
          <li className="ms-[12px]">
            <span className="leading-[15px]">Turnaround: 3-5 Business Days.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[34px] not-italic text-[8px] text-white top-[2486px] w-[21px] whitespace-pre-wrap">AED</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[96px] not-italic text-[8px] text-white top-[2469px] w-[44px] whitespace-pre-wrap">AED {pricing.starter.originalPrice.toLocaleString()}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[105px] not-italic text-[8px] text-white top-[2509px] w-[27px] whitespace-pre-wrap">{pricing.starter.suffix}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[21px] leading-[normal] left-[55px] not-italic text-[24px] text-white top-[2495px] w-[47px] whitespace-pre-wrap">{pricing.starter.price}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[normal] left-[29px] not-italic text-[10px] text-white top-[2387px] w-[39px] whitespace-pre-wrap">Starter</p>
      <div className="absolute bg-[#040000] h-[11px] left-[34px] top-[2469px] w-[49px]" />
      <div className="absolute bg-[#f26522] h-[181px] left-0 top-[1839px] w-[490px]" />
      <AbsoluteFadeIn triggerTop={715} triggerHeight={200} delay={0.1}>
        <Group2 />
      </AbsoluteFadeIn>
      <AbsoluteFadeIn triggerTop={1060} triggerHeight={200} delay={0.1}>
        <Group3 />
      </AbsoluteFadeIn>
      <AbsoluteFadeIn triggerTop={1449} triggerHeight={200} delay={0.1}>
        <Group4 />
      </AbsoluteFadeIn>
      <div className="absolute bg-[#f26522] h-[177px] left-[220px] rounded-[10px] top-[2060px] w-[244px]" />
      <div className="absolute flex h-[60px] items-center justify-center left-[241px] top-[2155px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[60px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
                <line id="Line 11" stroke="var(--stroke-0, white)" x2="60" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[48px] items-center justify-center left-[241px] top-[2079px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[48px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
                <line id="Line 12" stroke="var(--stroke-0, white)" x2="48" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <AbsoluteFadeIn triggerTop={2060} triggerHeight={200} delay={0.1}>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[40px] leading-[12px] left-[256px] not-italic text-[8px] text-white top-[2077px] w-[190px] whitespace-pre-wrap">
          Most web developers hand over the keys and walk away. At Dev Loom Innovations, your website launch is just day one. We are a software product startup actively developing the next generation of automated business tools.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[71px] leading-[12px] left-[256px] not-italic text-[8px] text-white top-[2152px] w-[190px] whitespace-pre-wrap">{`By partnering with us today, you ensure your digital foundation is ready to integrate seamlessly with the powerful analytics, AI, and automation tools on our roadmap. Don't just buy a website intended for today; invest in a platform built for tomorrow.`}</p>
      </AbsoluteFadeIn>
      <div className="absolute h-0 left-[31px] top-[2461px] w-[117px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 1">
            <line id="Line 19" stroke="var(--stroke-0, white)" x2="117" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[37px] not-italic text-[8px] text-white top-[2469px] w-[46px] whitespace-pre-wrap">save {pricing.starter.savePercent}</p>
      <div className="absolute h-0 left-[94px] top-[2475px] w-[46px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 1">
            <line id="Line 20" stroke="var(--stroke-0, white)" x2="46" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#f26522] h-[616px] left-[172px] rounded-[10px] top-[2370px] w-[144px]" />
      <div className="absolute bg-[#050200] h-[16px] left-[186px] rounded-[10px] top-[2533px] w-[115px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[220px] not-italic text-[8px] text-white top-[2535px] w-[45px] whitespace-pre-wrap">Add to cart</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[31px] leading-[normal] left-[183px] not-italic text-[8px] text-white top-[2414px] w-[119px] whitespace-pre-wrap">
        <p className="mb-0">Best for: Small businesses, Local services, Clinics, Restaurants.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[363px] leading-[0] left-[189px] not-italic text-[8px] text-white top-[2567px] w-[119px] whitespace-pre-wrap">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15px] mb-0">{`Structure: `}</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="leading-[15px] mb-0">5 Dedicated Pages (e.g., Home, About Us, Services, Gallery/Projects, Contact).</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15px] mb-0">Features:</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Everything in Starter.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Basic SEO Setup (Meta tags, keywords for Google indexing).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Pop-up Inquiry Form or Lead Magnet.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Image Gallery (up to 20 images).</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Updates: 2 hours of content updates/maintenance per month.</span>
          </li>
          <li className="ms-[12px]">
            <span className="leading-[15px]">Turnaround: 7-10 Business Days.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[193px] not-italic text-[8px] text-white top-[2486px] w-[21px] whitespace-pre-wrap">AED</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[239px] not-italic text-[8px] text-white top-[2468px] w-[43px] whitespace-pre-wrap">AED {pricing.growth.originalPrice.toLocaleString()}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[274px] not-italic text-[8px] text-white top-[2509px] w-[28px] whitespace-pre-wrap">{pricing.growth.suffix}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[21px] leading-[normal] left-[207px] not-italic text-[24px] text-white top-[2495px] w-[71px] whitespace-pre-wrap">{pricing.growth.price.toLocaleString()}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[normal] left-[181px] not-italic text-[10px] text-white top-[2387px] w-[135px] whitespace-pre-wrap">The Growth (5 Pages)</p>
      <div className="absolute bg-[#040000] h-[11px] left-[186px] top-[2469px] w-[47px]" />
      <div className="absolute h-0 left-[183px] top-[2461px] w-[117px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 1">
            <line id="Line 19" stroke="var(--stroke-0, white)" x2="117" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[189px] not-italic text-[8px] text-white top-[2469px] w-[44px] whitespace-pre-wrap">save {pricing.growth.savePercent}</p>
      <div className="absolute h-0 left-[239px] top-[2473px] w-[43px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 1">
            <line id="Line 22" stroke="var(--stroke-0, white)" x2="43" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#f26522] h-[616px] left-[326px] rounded-[10px] top-[2370px] w-[144px]" />
      <div className="absolute bg-[#050200] h-[16px] left-[340px] rounded-[10px] top-[2533px] w-[115px]" />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[9px] leading-[normal] left-[374px] not-italic text-[8px] text-white top-[2535px] w-[45px] whitespace-pre-wrap">Add to cart</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[40px] leading-[normal] left-[337px] not-italic text-[8px] text-white top-[2414px] w-[119px] whitespace-pre-wrap">
        <p className="mb-0">Best for: Established companies, Corporate profiles, Service providers needing detailed breakdowns.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[393px] leading-[0] left-[342px] not-italic text-[8px] text-white top-[2567px] w-[119px] whitespace-pre-wrap">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[15px] mb-0">{`Structure: `}</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="leading-[15px] mb-0">7 Dedicated Pages (e.g., Home, About, Service A, Service B, Blog/News, FAQ, Contact).</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] mb-0">Features:</p>
        <p className="leading-[15px] mb-0">&nbsp;</p>
        <ul className="list-disc">
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
            <span className="leading-[15px]">{`Analytics: Google Analytics & Search Console setup + Monthly Report.`}</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Blog Setup (if requested) to share company news.</span>
          </li>
          <li className="mb-0 ms-[12px]">
            <span className="leading-[15px]">Updates: Priority Support + 4 hours of updates per month.</span>
          </li>
          <li className="ms-[12px]">
            <span className="leading-[15px]">Turnaround: 10-14 Business Days.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[348px] not-italic text-[8px] text-white top-[2486px] w-[22px] whitespace-pre-wrap">AED</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[393px] not-italic text-[8px] text-white top-[2469px] w-[51px] whitespace-pre-wrap">AED {pricing.pro.originalPrice.toLocaleString()}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[8px] leading-[normal] left-[426px] not-italic text-[8px] text-white top-[2509px] w-[28px] whitespace-pre-wrap">{pricing.pro.suffix}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[21px] leading-[normal] left-[361px] not-italic text-[24px] text-white top-[2495px] w-[66px] whitespace-pre-wrap">{pricing.pro.price.toLocaleString()}</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[14px] leading-[normal] left-[335px] not-italic text-[10px] text-white top-[2387px] w-[135px] whitespace-pre-wrap">The Professional (7 Pages)</p>
      <div className="absolute bg-[#040000] h-[11px] left-[340px] top-[2469px] w-[47px]" />
      <div className="absolute h-0 left-[337px] top-[2461px] w-[117px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 1">
            <line id="Line 19" stroke="var(--stroke-0, white)" x2="117" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[9px] leading-[normal] left-[342px] not-italic text-[8px] text-white top-[2469px] w-[45px] whitespace-pre-wrap">save {pricing.pro.savePercent}</p>
      <div className="absolute h-0 left-[393px] top-[2475px] w-[45px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 1">
            <line id="Line 24" stroke="var(--stroke-0, white)" x2="45" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group />
      <AttachFile />
      <div className="absolute flex items-center justify-center left-[149px] size-[7px] top-[270px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <KeyboardArrowDown />
        </div>
      </div>
      <Search />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[normal] left-1/2 not-italic text-[15px] text-black text-center top-[2281px] w-[306px] whitespace-pre-wrap">Our Package</p>
      <HomePricingToggle duration={duration} setDuration={setDuration} className="absolute left-1/2 -translate-x-1/2 top-[2314px]" />


      <AbsoluteFadeIn triggerTop={1839} triggerHeight={181} delay={0.1}>
        <div className="absolute h-[181px] left-[-140px] top-[1839px] w-[1089px]" data-name="image 7">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[401.89%] left-[-0.07%] max-w-none top-[-133.96%] w-[100.14%]" src={imgImage7} />
          </div>
        </div>
      </AbsoluteFadeIn>


      <div className="absolute left-[198px] size-[4px] top-[360px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 5" r="2" />
        </svg>
      </div>
      <div className="absolute top-[3050px] w-full left-0">
        <FooterExpanded />
      </div>
    </div>
  );
}

import React from 'react';
import imgNewLogo6 from "../assets/footer/6f34d5024cf5761bbb97c670a0751fc429924eba.png";
import img171 from "../assets/footer/b09f1c7194143ba2e4175025bf9b741cb674e6e8.png";
import img255 from "../assets/footer/ae9236fb2c99d28d7913e0c77c28fa5ee9371501.png";
import imgUntitledDesign25 from "../assets/footer/b142d6bfe3e5528023c4114c29edd86c2d8754c3.png";

const FooterResponsive = () => {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#E0E0E0',
            padding: '60px 8%',
            position: 'relative',
            backgroundImage: `
                linear-gradient(rgba(232, 118, 68, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(232, 118, 68, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            borderTop: '1px solid rgba(232, 118, 68, 0.1)'
        }} className="font-['Inter']">

            <div className="flex justify-between items-end flex-wrap gap-10 md:flex-row flex-col items-start md:items-end">

                {/* Left Side */}
                <div className="flex flex-col gap-5 max-w-[500px]">
                    {/* Small stylized orange 'a' logo -> using imgNewLogo6 */}
                    <div className="mb-2.5 w-10 h-10">
                        <img src={imgNewLogo6} alt="Logo" className="w-full h-full object-contain" />
                    </div>

                    <div>
                        <h2 className="text-[#333333] text-[28px] leading-[1.3] font-medium">We don’t sell the website,</h2>
                        <h2 className="text-[#E87644] text-[28px] leading-[1.3] font-semibold">We provide Business Solution.</h2>
                    </div>

                    <p className="text-[12px] text-[#222] font-semibold mt-5">@2026 Dev Loom Innovations.</p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col md:items-end gap-[30px] w-full md:w-auto flex-row justify-between md:flex-col items-start">
                    {/* Vertical list of navigation links */}
                    <ul className="list-none text-left md:text-right space-y-3 m-0 p-0">
                        <li><a href="#" className="no-underline text-[#333] text-[14px] font-medium hover:text-[#E87644] transition-colors">Demo</a></li>
                        <li><a href="#" className="no-underline text-[#E87644] text-[14px] font-semibold transition-colors">Pricing</a></li>
                        <li><a href="#" className="no-underline text-[#333] text-[14px] font-medium hover:text-[#E87644] transition-colors">Contact</a></li>
                        <li><a href="#" className="no-underline text-[#333] text-[14px] font-medium hover:text-[#E87644] transition-colors">Security</a></li>
                    </ul>

                    {/* Three black social media icons */}
                    <div className="flex gap-[15px]">
                        <a href="#" className="text-[#333] text-[20px] hover:text-[#E87644] hover:-translate-y-0.5 transition-all w-5 h-5 block">
                            <img src={img171} alt="Facebook" className="w-full h-full object-contain brightness-0 opacity-80" />
                        </a>
                        <a href="#" className="text-[#333] text-[20px] hover:text-[#E87644] hover:-translate-y-0.5 transition-all w-5 h-5 block">
                            <img src={img255} alt="Instagram" className="w-full h-full object-contain brightness-0 opacity-80" />
                        </a>
                        <a href="#" className="text-[#333] text-[20px] hover:text-[#E87644] hover:-translate-y-0.5 transition-all w-5 h-5 block">
                            <img src={imgUntitledDesign25} alt="TikTok" className="w-full h-full object-contain brightness-0 opacity-80" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FooterResponsive;

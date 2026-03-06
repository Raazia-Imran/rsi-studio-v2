"use client";
import React, { useRef, useEffect } from "react";
import "./AiCards.css";

type AiItem = {
  title: string;
  description: string;
  img: string;
  pathD: string;
  gradientId: string;
};

const aiItems: AiItem[] = [
  {
    title: "UX Copy That Clicks",
    description: "We use AI to create effective copies like CTAs and microcopy that speaks.",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0f8e5e4eed26b3df33dbf_Frame%20427321588%20(10)%20(1).avif",
    pathD: "M369.152 151L268.05 151C260.251 151 252.899 147.356 248.175 141.15L231.31 118.993C226.587 112.786 219.235 109.143 211.435 109.143L110.716 109.143L26.1299 109.143C12.3352 109.143 1.15234 97.9601 1.15233 84.1654L1.15232 -0.000131476",
    gradientId: "gradient1",
  },
  {
    title: "Visuals, Instantly on Point",
    description: "We generate custom visuals using AI for faster concept directions, brand-ready",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame%202147226580%20%281%29.avif",
    pathD: "M2 102L2 0",
    gradientId: "gradient2",
  },
  {
    title: "Data-Led Design Decisions",
    description: "We predict user behavior before launch with AI-powered heatmaps that help us",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fd7c6c69d5e8b586e825_Frame%202147226653%20(2)%20(1).avif",
    pathD: "M0.152324 151L101.254 151C109.054 151 116.406 147.356 121.13 141.15L137.994 118.993C142.718 112.786 150.07 109.143 157.87 109.143L258.589 109.143L343.175 109.143C356.97 109.143 368.152 97.9602 368.152 84.1655L368.152 -7.04408e-05",
    gradientId: "gradient3",
  },
  {
    title: "Smarter & Faster Wireframes",
    description: "We rapidly turn ideas into functional wireframes using AI tools, with less",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame%202147226581%20%281%29.avif",
    pathD: "M369.152 1.00014L268.1 1.00013C260.272 1.00013 252.897 4.66959 248.176 10.9132L231.309 33.2211C226.588 39.4647 219.213 43.1342 211.386 43.1342L110.716 43.1342L26.1299 43.1342C12.3352 43.1341 1.15237 54.317 1.15237 68.1117L1.15236 153",
    gradientId: "gradient4",
  },
  {
    title: "Launch Quicker, Spend Less",
    description: "AI reduces revisions and guesswork and makes your website ready to launch",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fe116b9d3d649da7d5ef_Frame%20427321588%20(13)%20(1).avif",
    pathD: "M1.16456 0.075793L1.16455 98.0001",
    gradientId: "gradient5",
  },
  {
    title: "No Blank Canvas Struggles",
    description: "AI generates editable mockups from prompts so we can skip the slow start",
    img: "https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68c0fdca701e60e4fb26c2fa_Frame%20427321588%20(11)%20(1).avif",
    pathD: "M0.152337 1.00014L101.205 1.00013C109.032 1.00013 116.407 4.66959 121.128 10.9132L137.996 33.2211C142.717 39.4647 150.092 43.1342 157.919 43.1342L258.589 43.1342L343.175 43.1342C356.969 43.1341 368.152 54.317 368.152 68.1117L368.152 153",
    gradientId: "gradient6",
  },
];

// Reusable Card component
const AiCard: React.FC<{ item: AiItem; idx: number; followerRefs: any }> = ({ item, idx, followerRefs }) => (
  <div className="ai-item">
    <div className="ai-svg-code w-embed">
      <svg
  width="250"
  height="152"
  viewBox="0 0 370 152"  // adjust per path if needed
  fill="none"
>
        <path
          className="motion-path"
          d={item.pathD}
          stroke={`url(#${item.gradientId})`}
          strokeWidth="2"
          opacity={0.5}
        />
        <circle
          ref={(el) => { if (el) followerRefs.current[idx] = el; }}
          r="4"
          fill={`url(#${item.gradientId})`}
          data-offset="0"
        />
        <defs>
          <linearGradient id={item.gradientId} x1="0" y1="0" x2="370" y2="0">
            <stop offset="0%" stopColor="#F6A6FF" stopOpacity={0.55} />
            <stop offset="100%" stopColor="#7F21FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div className="ai-item-inner">
      <div className="ai-item-content">
        <h3>
          {item.title.split(" ")[0]} <em>{item.title.split(" ").slice(1).join(" ")}</em>
        </h3>
        <p>{item.description}</p>
      </div>
      <div className="ai-pos">
        <img src={item.img} alt={item.title} className="ai-img" />
      </div>
    </div>
  </div>
);

const ManagePresence: React.FC = () => {
  const followerRefs = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    const pathEls = document.querySelectorAll<SVGPathElement>(".motion-path");
    const followers = followerRefs.current;

    const animate = () => {
      pathEls.forEach((path, idx) => {
        const follower = followers[idx];
        if (!path || !follower) return;

        const length = path.getTotalLength();
        let offset = (parseFloat(follower.getAttribute("data-offset") || "0") + 2) % length;

        const point = path.getPointAtLength(offset);
        follower.setAttribute("cx", point.x.toString());
        follower.setAttribute("cy", point.y.toString());
        follower.setAttribute("data-offset", offset.toString());
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="container-main">
      {/* Header */}
      <div className="spacer-56 center-aline-pc">
        <div className="spacer-16 center-aline-pc">
          <div className="section_tag-wapper">
            <div className="section_tag-title"><div className="body-r">AI-Powered Design</div></div>
          </div>
          <h2 className="heading-h2 text-color-main">
            Smarter Design, <em>Supercharged by AI</em>
          </h2>
          <p className="body-l width-max-42rem text-color-secondary">
            From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.
          </p>
        </div>
      </div>

      {/* Top 3 cards */}
      <div className="ai-items-rows">
        {aiItems.slice(0, 3).map((item, idx) => (
          <AiCard key={idx} item={item} idx={idx} followerRefs={followerRefs} />
        ))}
      </div>

      {/* Logo section */}
      <div className="ai-logo-section">
        <div className="ai-logo-pos">
          <img
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68b61fd952b78aa1c579683c_Frame%202147224744.svg"
            alt="AI Logo"
            className="ai-logo"
          />
          <div className="ai-logo-bg-pos-wrap">
            <div className="ai-logo-bg-pos"></div>
            <div className="ai-logo-bg-pos logo-grad-2"></div>
          </div>
        </div>
      </div>

      {/* Bottom 3 cards */}
      <div className="ai-items-rows">
        {aiItems.slice(3, 6).map((item, idx) => (
          <AiCard key={idx + 3} item={item} idx={idx + 3} followerRefs={followerRefs} />
        ))}
      </div>
    </div>
  );
};

export default ManagePresence;
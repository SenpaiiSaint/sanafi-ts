import React, { useState } from "react";
import "./Navbar.css";

interface MenuItem {
  title: string;
  link: string;
  subMenu?: { title: string; link: string }[];
}

const menuData: MenuItem[] = [
  {
    title: "Products",
    link: "#",
    subMenu: [
      { title: "Personal Finance AI", link: "#" },
      { title: "Financial Insights API", link: "#" },
      { title: "Subscription Management", link: "#" },
    ],
  },
  {
    title: "Developers",
    link: "#",
    subMenu: [
      { title: "API Reference", link: "#" },
      { title: "SDKs & Libraries", link: "#" },
      { title: "Integration Guide", link: "#" },
    ],
  },
  {
    title: "Resources",
    link: "#",
    subMenu: [
      { title: "Docs", link: "#" },
      { title: "Guides", link: "#" },
      { title: "Blog", link: "#" },
      { title: "Case Studies", link: "#" },
    ],
  },
  {
    title: "Use Cases",
    link: "#",
    subMenu: [
      { title: "Consumers", link: "#" },
      { title: "FinTechs", link: "#" },
      { title: "Banks & Hedge Funds", link: "#" },
      { title: "Regulatory Compliance", link: "#" },
    ],
  },
  {
    title: "Company",
    link: "#",
    subMenu: [
      { title: "About Us", link: "#" },
      { title: "Careers", link: "#" },
      { title: "Press", link: "#" },
      { title: "Contact", link: "#" },
    ],
  },
  {
    title: "Pricing",
    link: "#",
    subMenu: [
      { title: "Personal", link: "#" },
      { title: "Business", link: "#" },
      { title: "Enterprise", link: "#" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          SanaFi
        </a>
        <ul className="menu">
          {menuData.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a href={item.link} className="menu-title">
                {item.title}
              </a>
              {item.subMenu && (
                <div className="submenu">
                  <ul>
                    {item.subMenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a href={sub.link}>{sub.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="button login-btn">Log in</button>
          <div className="button-wrapper">
            <button className="button signup-btn">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
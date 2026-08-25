"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["Research", "/research"],
  ["Professor", "/professor"],
  ["Publications", "/publications"],
  ["Patents", "/patents"],
  ["Presentations", "/presentations"],
  ["Members", "/members"],
  ["News", "/news"],
  ["Gallery", "/gallery"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="PEC Lab home">
          <span className="brand-mark">PEC</span>
          <span className="brand-copy">
            <strong>PEC LAB</strong>
            <small>PUSAN NATIONAL UNIVERSITY</small>
          </span>
        </Link>
        <button
          className={open ? "menu-button open" : "menu-button"}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          <span /><span /><span />
        </button>
        <nav id="site-navigation" className={open ? "nav open" : "nav"}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      {open && <button className="nav-overlay" aria-label="Close menu" onClick={() => setOpen(false)} />}
    </header>
  );
}

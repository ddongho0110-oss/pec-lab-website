"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">PEC</span>
          <span className="brand-copy">
            <strong>PEC LAB</strong>
            <small>PUSAN NATIONAL UNIVERSITY</small>
          </span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

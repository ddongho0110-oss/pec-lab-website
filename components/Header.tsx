"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

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

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className={`header-inner ${styles.headerInner}`}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="PEC Lab home"
        >
          <img
            src="/images/logos/pec-lab.png"
            alt="PEC Lab — Photoelectrochemistry Lab"
          />
        </Link>

        <button
          className={open ? "menu-button open" : "menu-button"}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={open ? "nav open" : "nav"}
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <button
          className="nav-overlay"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}

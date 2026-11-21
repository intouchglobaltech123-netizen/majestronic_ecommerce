"use client";
import Script from "next/script";
import markup from "../lib/markup";

/** The storefront: markup is server-rendered, store.js wires the hero, router, catalog, cart and wishlist. */
export default function Store() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/store.js?v=c0e54c25f0" strategy="afterInteractive" />
    </>
  );
}

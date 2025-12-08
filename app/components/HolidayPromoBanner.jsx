"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HolidayPromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Small delay before showing to create the dropdown effect
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setTimeout(() => setIsClosed(true), 300);
  };

  if (isClosed) return null;

  return (
    <div
      className={`holiday-banner-wrapper ${
        isVisible ? "holiday-banner-open" : "holiday-banner-closed"
      }`}
    >
      <Link href="/gift-cards" className="block">
        <div className="holiday-banner">
          {/* Decorative elements */}
          <div className="holiday-sparkles">
            <span className="sparkle">✦</span>
            <span className="sparkle">✦</span>
            <span className="sparkle">✦</span>
          </div>

          {/* Main content */}
          <div className="holiday-banner-content">
            <span className="holiday-icon">🎁</span>
            <p className="holiday-text">
              <span className="holiday-highlight">Give the gift of relaxation</span>
              {" "}— Treat someone special to a spa gift card this holiday season!
            </p>
            <span className="holiday-cta-btn">Shop Gift Cards</span>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="holiday-close-btn"
            aria-label="Close banner"
          >
            ✕
          </button>

          {/* Decorative border lights */}
          <div className="holiday-lights">
            <span className="light red"></span>
            <span className="light gold"></span>
            <span className="light green"></span>
            <span className="light red"></span>
            <span className="light gold"></span>
            <span className="light green"></span>
            <span className="light red"></span>
            <span className="light gold"></span>
            <span className="light green"></span>
            <span className="light red"></span>
            <span className="light gold"></span>
            <span className="light green"></span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HolidayPromoBanner;


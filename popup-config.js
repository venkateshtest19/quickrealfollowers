/* 
  =========================================
  MULTI-POPUP CONFIGURATION
  =========================================
  Instructions:
  1. Set 'activePopupId' to 1 or 2 to choose which one shows.
  2. Set 'isEnabled' to false to turn OFF all popups.
  3. Edit 'popups[0]' for Popup 1 settings.
  4. Edit 'popups[1]' for Popup 2 settings.
  =========================================
*/

const popupConfig = {
  isEnabled: true,          // SET TO false TO DISABLE ALL POPUPS
  activePopupId: 1,         // CHOOSE: 1 for Popup 1 Apple, 2 for Popup 2 Meditation

  // Array of Popup Definitions
  popups: [
    // ===========================
    // POPUP 1 SETTINGS Apple
    // ===========================
    {
      id: 1,
      timing: {
        showAfterMs: 2000,       // Show after 2 seconds
        enableCloseAfterMs: 15000 // Enable close after 15 seconds
      },
      // 📐 LAYOUT & SIZE CONTROL
  layout: {
    // Width Options: "400px" (small), "800px" (large), "100%" (full screen)
    width: "100%", 
    
    // Height Options: "auto" (fits content), "100vh" (full screen height)
    height: "100vh", 
    
    // Border Radius: "0px" (square/full screen), "20px" (rounded)
    borderRadius: "0px",
    
    // Positioning: "center" (default), "bottom-right", "top-left"
    position: "center"
  },

  // 🎨 VISUAL STYLING (Fonts, Colors, Sizes)
  styling: {
    // Colors
    themeColor: "#ff0000",      // Sage Green (Border, Button, Close X)
    textColor: "#2d3748",       // Dark Gray (Headings)
    subTextColor: "#718096",    // Light Gray (Body text)
    bgColor: "#fefcf9",         // Cream White (Popup Background)
    overlayColor: "rgba(45, 55, 72, 0.85)", // Dark Overlay
    
    // Typography Sizes
    titleFontSize: "1.8rem",      // e.g., "1.5rem", "24px"
    bodyFontSize: "1.1rem",     // e.g., "1rem", "16px"
    buttonFontSize: "1.1rem",   // e.g., "1.1rem", "18px"
    
    // Button Styles
    buttonBg: "#000000",        // Button Background
    buttonText: "#ffffff",      // Button Text Color
    buttonHover: "#000000",     // Button Hover Color
    buttonRadius: "50px",       // "50px" (pill), "8px" (rounded rect)
    
    // Image Styles
    imageSize: "150px",         // Width of image ("100%", "200px")
    imageRadius: "12px",        // "50%" (circle), "0px" (square)
    imageMargin: "20px"         // Space below image
  },

  // 📝 CONTENT & LINKS
  content: {
    // Image Settings (Leave imageUrl empty "" to hide image)
    imageUrl: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-768x432.png",
    imageAlt: "",
    
    // Text Content
    title: " Apple Pay Say",
    message: "We Confirm your order and $299 has been deducted Successfuly.\n If not done by you, Kindly contact support immediately.",
    
    
    // Coupon/Code Section (Set codeValue to "" to hide it)
   // codeLabel: "Use Promo Code:",
   // codeValue: "PEACE20", 
    
    // Button & Links
    buttonText: "Call Apple Support Now",
    buttonLink: "#enroll", // Can be external (https://...) or internal (#enroll)
    openInNewTab: false,    // Set to true if buttonLink is an external website
    
    footerNote: "Calling immediately may resolve issues quicker. "
    }
  },

    // ===========================
    // POPUP 2 SETTINGS Meditation
    // ===========================
    {
      id: 2,
      timing: {
        showAfterMs: 5000,       // Show after 5 seconds (different timing)
        enableCloseAfterMs: 10000 // Enable close after 10 seconds
      },
      // 📐 LAYOUT & SIZE CONTROL
  layout: {
    // Width Options: "400px" (small), "800px" (large), "100%" (full screen)
    width: "500px", 
    
    // Height Options: "auto" (fits content), "100vh" (full screen height)
    height: "auto", 
    
    // Border Radius: "0px" (square/full screen), "20px" (rounded)
    borderRadius: "16px",
    
    // Positioning: "center" (default), "bottom-right", "top-left"
    position: "center"
  },

  // 🎨 VISUAL STYLING (Fonts, Colors, Sizes)
  styling: {
    // Colors
    themeColor: "#87a878",      // Sage Green (Border, Button, Close X)
    textColor: "#2d3748",       // Dark Gray (Headings)
    subTextColor: "#718096",    // Light Gray (Body text)
    bgColor: "#fefcf9",         // Cream White (Popup Background)
    overlayColor: "rgba(45, 55, 72, 0.85)", // Dark Overlay
    
    // Typography Sizes
    titleFontSize: "2rem",      // e.g., "1.5rem", "24px"
    bodyFontSize: "1.1rem",     // e.g., "1rem", "16px"
    buttonFontSize: "1.2rem",   // e.g., "1.1rem", "18px"
    
    // Button Styles
    buttonBg: "#87a878",        // Button Background
    buttonText: "#ffffff",      // Button Text Color
    buttonHover: "#5f7a52",     // Button Hover Color
    buttonRadius: "50px",       // "50px" (pill), "8px" (rounded rect)
    
    // Image Styles
    imageSize: "250px",         // Width of image ("100%", "200px")
    imageRadius: "12px",        // "50%" (circle), "0px" (square)
    imageMargin: "20px"         // Space below image
  },

  // 📝 CONTENT & LINKS
  content: {
    // Image Settings (Leave imageUrl empty "" to hide image)
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c24597?w=400&h=300&fit=crop",
    imageAlt: "Meditation Offer",
    
    // Text Content
    title: " Find Your Inner Peace",
    message: "Join our community today! Get <strong>20% OFF</strong> your first month + a free guided meditation audio.",
    
    // Coupon/Code Section (Set codeValue to "" to hide it)
    codeLabel: "Use Promo Code:",
    codeValue: "PEACE20", 
    
    // Button & Links
    buttonText: "Claim My Discount",
    buttonLink: "#enroll", // Can be external (https://...) or internal (#enroll)
    openInNewTab: false,    // Set to true if buttonLink is an external website
    
    footerNote: "Offer valid for new enrollments only. Terms apply."
      }
    }
  ]
};

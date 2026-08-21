/* 
  =========================================
  MULTI-POPUP LOADER ENGINE
  Reads specific popup data based on activePopupId
  =========================================
*/

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Check Config & Select Active Popup
    if (typeof popupConfig === 'undefined' || !popupConfig.isEnabled) return;
    
    // Determine which popup object to use (Index is ID - 1)
    const activeIndex = popupConfig.activePopupId - 1;
    const currentPopup = popupConfig.popups[activeIndex];

    // If the selected ID doesn't exist, stop
    if (!currentPopup) return;

    const l = currentPopup.layout;
    const s = currentPopup.styling;
    const c = currentPopup.content;
    const t = currentPopup.timing;

    // 2. Create Dynamic CSS based on Config
    const style = document.createElement('style');
    
    let justify = "center";
    let align = "center";
    if(l.position === "bottom-right") { justify = "flex-end"; align = "flex-end"; }
    if(l.position === "top-left") { justify = "flex-start"; align = "flex-start"; }

    style.textContent = `
      .pm-popup-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: ${s.overlayColor}; z-index: 99999;
        display: flex; justify-content: ${justify}; align-items: ${align};
        opacity: 0; visibility: hidden; transition: opacity 0.3s ease;
        padding: 20px;
      }
      .pm-popup-overlay.pm-visible { opacity: 1; visibility: visible; }
      
      .pm-popup-box {
        background: ${s.bgColor}; 
        padding: 40px; 
        border-radius: ${l.borderRadius};
        width: ${l.width}; 
        height: ${l.height};
        max-height: 90vh;
        overflow-y: auto;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2); 
        position: relative;
        border-top: 5px solid ${s.themeColor}; 
        animation: pmSlideInFromTop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      
      @keyframes pmSlideInFromTop { 
        0% { transform: translateY(-50px); opacity: 0; } 
        100% { transform: translateY(0); opacity: 1; } 
      }
      
      .pm-popup-img {
        width: ${s.imageSize}; height: auto; object-fit: cover;
        border-radius: ${s.imageRadius}; margin: 0 auto ${s.imageMargin} auto;
        display: block;
      }

      .pm-popup-title { 
        color: ${s.textColor}; 
        font-size: ${s.titleFontSize}; 
        margin-bottom: 15px; 
        font-weight: 700; 
        line-height: 1.2;
      }
      
      .pm-popup-msg { 
        color: ${s.subTextColor}; 
        margin-bottom: 20px; 
        font-size: ${s.bodyFontSize}; 
        line-height: 1.6; 
      }
      
      .pm-code-container { margin: 15px 0; }
      .pm-code-label { color: ${s.subTextColor}; font-size: 0.9rem; display: block; margin-bottom: 5px; }
      .pm-code-badge { 
        background: #f0fdf4; color: ${s.themeColor}; 
        padding: 10px 20px; 
        border: 2px dashed ${s.themeColor}; 
        border-radius: 8px; 
        font-weight: bold; 
        font-family: monospace; 
        font-size: 1.5rem; 
        display: inline-block; 
      }
      
      .pm-btn-primary { 
        display: inline-block; 
        padding: 16px 32px; 
        background: ${s.buttonBg}; 
        color: ${s.buttonText}; 
        border-radius: ${s.buttonRadius}; 
        font-weight: 600; 
        font-size: ${s.buttonFontSize};
        text-decoration: none; 
        transition: all 0.3s; 
        border: none; 
        cursor: pointer; 
        width: 100%; 
        margin-top: 10px; 
      }
      .pm-btn-primary:hover { background: ${s.buttonHover}; transform: translateY(-2px); }
      
      .pm-footer-note { font-size: 0.85rem; color: #999; margin-top: 15px; font-style: italic; }
      
      .pm-close-btn { 
        position: absolute; top: 15px; right: 20px; 
        background: none; border: none; 
        font-size: 2.5rem; color: #ddd; 
        cursor: not-allowed; line-height: 1; 
        transition: color 0.3s, cursor 0.3s; 
        z-index: 10;
      }
      .pm-close-btn.pm-active { color: ${s.themeColor}; cursor: pointer; }
      .pm-close-btn.pm-active:hover { color: ${s.textColor}; }
    `;
    document.head.appendChild(style);

    // 3. Build HTML Structure
    const overlay = document.createElement('div');
    overlay.className = 'pm-popup-overlay';
    overlay.id = 'pm-global-popup';
    
    const targetAttr = c.openInNewTab ? 'target="_blank" rel="noopener"' : '';
    const codeHtml = c.codeValue ? `
      <div class="pm-code-container">
        <span class="pm-code-label">${c.codeLabel}</span>
        <span class="pm-code-badge">${c.codeValue}</span>
      </div>
    ` : '';

    overlay.innerHTML = `
      <div class="pm-popup-box">
        <button id="pm-close-x" class="pm-close-btn" aria-label="Close">×</button>
        
        ${c.imageUrl ? `<img src="${c.imageUrl}" alt="${c.imageAlt}" class="pm-popup-img">` : ''}
        
        <h3 class="pm-popup-title">${c.title}</h3>
        <p class="pm-popup-msg">${c.message}</p>
        
        ${codeHtml}
        
        <a href="${c.buttonLink}" ${targetAttr} class="pm-btn-primary" onclick="closePMPopup()">${c.buttonText}</a>
        <p class="pm-footer-note">${c.footerNote}</p>
      </div>
    `;
    document.body.appendChild(overlay);

    // 4. Logic: Show & Timer using Current Popup's Timing
    const closeBtn = document.getElementById('pm-close-x');
    
    setTimeout(() => {
      overlay.classList.add('pm-visible');
    }, t.showAfterMs);

    setTimeout(() => {
      closeBtn.classList.add('pm-active');
      closeBtn.removeAttribute('disabled');
      closeBtn.onclick = closePMPopup;
    }, t.showAfterMs + t.enableCloseAfterMs);

    window.closePMPopup = function() {
      overlay.classList.remove('pm-visible');
      setTimeout(() => overlay.remove(), 300);
    };
  });
})();

/**
 * Handles the 3D tilt effect for feature cards based on mouse position
 */
function setupCardTiltEffect(): void {
  const cards = document.querySelectorAll<HTMLElement>('.feature-card');
  
  cards.forEach((card: HTMLElement) => {
    let bounds: DOMRect;
    let rafId: number | null = null;
    
    function rotateToMouse(e: MouseEvent): void {
      // Cancel any pending animation frame to avoid queuing multiple updates
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      // Use requestAnimationFrame for smoother performance
      rafId = requestAnimationFrame(() => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        
        card.style.transform = `
          perspective(1000px)
          scale3d(1.01, 1.01, 1.01)
          rotate3d(
            ${-center.y / 200},
            ${center.x / 200},
            0,
            ${Math.log(distance)}deg
          )
        `;
        
        // Update the gradient angle for the border animation
        const borderElement = card.querySelector<HTMLElement>('.card-border');
        if (borderElement) {
          borderElement.style.setProperty('--gradient-angle', 
            `${Math.atan2(center.y, center.x) * (180 / Math.PI)}deg`
          );
        }
        
        rafId = null;
      });
    }
    
    function resetStyles(): void {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      card.style.transform = `
        perspective(1000px)
        rotate3d(0, 0, 0, 0deg)
        scale3d(1, 1, 1)
      `;
    }
    
    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    });
    
    card.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', rotateToMouse);
      resetStyles();
    });
  });
}

/**
 * Animates the gradient border for feature cards
 */
function setupGradientAnimation(): void {
  const borderElements = document.querySelectorAll<HTMLElement>('.card-border');
  
  borderElements.forEach((element: HTMLElement) => {
    let angle = 0;
    let animationFrameId: number;
    
    function updateGradient(): void {
      angle = (angle + 1) % 360;
      element.style.setProperty('--gradient-angle', `${angle}deg`);
      animationFrameId = requestAnimationFrame(updateGradient);
    }
    
    animationFrameId = requestAnimationFrame(updateGradient);
    
    // Clean up animation when element is removed
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && !document.contains(element)) {
          cancelAnimationFrame(animationFrameId);
          observer.disconnect();
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

/**
 * Initialize all card effects when the DOM is loaded
 */
function initCardEffects(): void {
  setupCardTiltEffect();
  setupGradientAnimation();
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initCardEffects);

export {};

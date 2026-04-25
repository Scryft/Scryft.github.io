/**
 * Scryft - Main UI logic
 * Very minimal for the WIP homepage
 */

document.addEventListener('DOMContentLoaded', () => {
    const disabledElements = document.querySelectorAll('.disabled');
    
    const showBubble = (x, y) => {
        const bubble = document.createElement('div');
        bubble.className = 'toast-bubble';
        bubble.textContent = "Still building this!";
        
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        
        document.body.appendChild(bubble);
        
        // Cleanup
        setTimeout(() => {
            bubble.remove();
        }, 1500);
    };

    disabledElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            // Get click coordinates or element center
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            // Position at bottom for header/general elements
            const centerY = rect.bottom;
            
            showBubble(centerX, centerY);
        });
    });
});
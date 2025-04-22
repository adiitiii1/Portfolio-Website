document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for name and subtitle
    const nameElement = document.getElementById('typed-name');
    const subtitleElement = document.getElementById('typed-subtitle');
    
    // Text to type
    const nameText = 'Aditi Chaubey';
    const subtitleText = 'Student BBA DBE | Zonal Representative | HR Intern';
    const faamgText = ' @FAAMG.dev';
    
    // Function to create typing animation
    function typeWriter(element, text, i, fnCallback) {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i+1);
        
        // Random typing speed for realistic effect
        const delay = Math.random() * 50 + 50;
        
        setTimeout(function() {
          typeWriter(element, text, i + 1, fnCallback);
        }, delay);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
    
    // Function to start the typing animation loop
    function startTyping() {
      // Clear elements
      nameElement.textContent = '';
      subtitleElement.textContent = '';
      subtitleElement.innerHTML = '';
      
      // Start typing name
      setTimeout(function() {
        typeWriter(nameElement, nameText, 0, function() {
          // After name is typed, start typing subtitle
          setTimeout(function() {
            typeWriter(subtitleElement, subtitleText, 0, function() {
              // After subtitle is typed, add the FAAMG link
              const faamgLink = document.createElement('a');
              faamgLink.href = 'https://faamg.dev/';
              faamgLink.target = '_blank';
              faamgLink.className = 'faamg-link';
              faamgLink.textContent = '@FAAMG.dev';
              
              // Type the space before the link
              subtitleElement.innerHTML += ' ';
              subtitleElement.appendChild(faamgLink);
              
              // After everything is typed, wait and then restart
              setTimeout(function() {
                // Clear and restart
                nameElement.innerHTML = '';
                subtitleElement.innerHTML = '';
                setTimeout(startTyping, 150);
              }, 1000); // Wait 1 seconds before clearing
            });
          }, 150);
        });
      }, 1000);
    }
    
    // Start the typing animation
    startTyping();
  });
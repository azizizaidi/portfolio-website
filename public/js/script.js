/**
 * Portfolio Website for Muhammad Azizi bin Zaidi
 * Full-Stack Software Engineer
 * 
 * Main JavaScript file - handles all interactions and animations
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing...");
    
    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const themeToggle = document.getElementById('theme-toggle-btn');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contact-form');
    const codeTabs = document.querySelectorAll('.code-tab');
    const codeBlocks = document.querySelectorAll('.code-block');
    const testimonialIndicators = document.querySelectorAll('.indicator');
    
    // Initialize theme from localStorage if exists
    initTheme();
    
    // Initialize typing animation for code blocks
    debugCodeBlocks();
    initCodeTyping();
    
    // Initialize code tabs
    initCodeTabs();
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navToggle) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        // Add background to header on scroll
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
        
        // Animate sections on scroll
        animateSectionsOnScroll();
    });
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // Save theme preference to localStorage
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    if (testimonialIndicators.length) {
        testimonialIndicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.dataset.index);
                const testimonials = document.querySelectorAll('.testimonial-card');
    
                if (isNaN(index) || !testimonials[index]) return;
    
                // Hide all testimonials
                testimonials.forEach(t => {
                    t.classList.remove('active');
                    t.style.display = 'none';
                });
    
                // Show selected testimonial
                testimonials[index].classList.add('active');
                testimonials[index].style.display = 'block';
    
                // Update indicator
                testimonialIndicators.forEach(i => i.classList.remove('active'));
                indicator.classList.add('active');
            });
        });
    }
    

    
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject')?.value || '';
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission (in real implementation, this would send data to server)
            showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
        });
    }
    
    // Initialize all interactive elements
    initProgressBars();
    animateOnScroll();
    initScrollReveal();
    updateActiveNavLink();
    
    /**
     * Functions
     */
    
    // Initialize theme from localStorage
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Debugging function to inspect code blocks
    function debugCodeBlocks() {
        const codeBlocks = document.querySelectorAll('.code-block');
        console.log(`Found ${codeBlocks.length} code blocks`);
        
        codeBlocks.forEach((block, index) => {
            const codeElement = block.querySelector('code');
            if (codeElement) {
                console.log(`Block ${index + 1} content length:`, codeElement.textContent.length);
                console.log(`Block ${index + 1} sample:`, codeElement.textContent.substring(0, 50) + "...");
            } else {
                console.log(`Block ${index + 1} has no code element`);
            }
        });
    }

    /**
     * Initialize typing animation for code blocks
     */
    function initCodeTyping() {
        console.log("Initializing code typing animation");
        
        // Get all code blocks
        const codeBlocks = document.querySelectorAll('.code-block');
        
        // Store original content of each code block
        codeBlocks.forEach(block => {
            const codeElement = block.querySelector('code');
            if (codeElement) {
                // Get the code content and trim whitespace
                const originalCode = codeElement.textContent.trim();
                console.log("Original code length:", originalCode.length);
                
                // Store it in data attribute
                block.dataset.originalCode = originalCode;
                
                // Clear the code element for typing animation
                codeElement.textContent = '';
                codeElement.classList.add('typing');
                
                // If this is the active block, start typing
                if (block.classList.contains('active')) {
                    console.log("Starting typing for active block");
                    setTimeout(() => {
                        typeCode(codeElement, originalCode, () => {
                            block.classList.add('typed');
                        });
                    }, 500);
                }
            }
        });
    }
    
    /**
     * Initialize code tabs functionality
     */
    function initCodeTabs() {
        const codeTabs = document.querySelectorAll('.code-tab');
        const codeBlocks = document.querySelectorAll('.code-block');
        
        // Add click event to each tab
        codeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;
                console.log(`Tab clicked: ${tabId}`);
                
                // Update active tab
                document.querySelectorAll('.code-tab').forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                
                // Update active code block
                codeBlocks.forEach(block => {
                    // Fade out current block
                    if (block.classList.contains('active')) {
                        block.style.opacity = '0';
                        block.style.transform = 'translateY(10px)';
                        
                        // After fade out animation, hide the block and show the new one
                        setTimeout(() => {
                            block.classList.remove('active');
                            block.setAttribute('aria-hidden', 'true');
                            
                            // Activate the matching code block
                            const targetBlock = document.querySelector(`.code-block[data-content="${tabId}"]`);
                            if (targetBlock) {
                                targetBlock.classList.add('active');
                                targetBlock.setAttribute('aria-hidden', 'false');
                                
                                // Trigger fade in animation
                                setTimeout(() => {
                                    targetBlock.style.opacity = '1';
                                    targetBlock.style.transform = 'translateY(0)';
                                }, 50);
                                
                                // Check if this block has already been typed
                                const codeElement = targetBlock.querySelector('code');
                                if (codeElement && codeElement.textContent === '' && targetBlock.dataset.originalCode) {
                                    console.log("Starting typing for newly activated block");
                                    setTimeout(() => {
                                        typeCode(codeElement, targetBlock.dataset.originalCode, () => {
                                            targetBlock.classList.add('typed');
                                        });
                                    }, 300);
                                }
                            }
                        }, 300); // Match the CSS transition duration
                    }
                });
            });
            
            // Make tabs keyboard navigable
            tab.setAttribute('role', 'tab');
            tab.setAttribute('tabindex', '0');
            tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
            
            // Add keyboard support
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    tab.click();
                } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    
                    // Find current tab index
                    const tabs = Array.from(codeTabs);
                    const currentIndex = tabs.indexOf(tab);
                    let nextIndex;
                    
                    // Determine which tab to focus next
                    if (e.key === 'ArrowRight') {
                        nextIndex = (currentIndex + 1) % tabs.length;
                    } else {
                        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                    }
                    
                    // Focus the next tab
                    tabs[nextIndex].focus();
                }
            });
        });
        
        // Set ARIA attributes for accessibility
        const tabsList = document.querySelector('.code-tabs');
        if (tabsList) {
            tabsList.setAttribute('role', 'tablist');
        }
        
        // Set initial ARIA states for code blocks
        codeBlocks.forEach(block => {
            block.setAttribute('role', 'tabpanel');
            block.setAttribute('aria-hidden', block.classList.contains('active') ? 'false' : 'true');
        });
    }
    
    /**
     * Type code animation - Fixed version
     * @param {HTMLElement} element - The code element to type into
     * @param {string} text - The full text to type
     * @param {Function} onComplete - Callback when typing is complete
     */
    function typeCode(element, text, onComplete) {
        // Store the current text content
        let typedText = '';
        
        // Make sure the text isn't empty or undefined
        if (!text || text.trim() === '') {
            console.error("No text to type");
            return;
        }
        
        // Format and clean the code text
        const cleanedText = text.trim();
        
        // Split the text into lines
        const lines = cleanedText.split('\n');
        
        // Configuration
        const typingSpeed = 30; // milliseconds per character
        const typingVariance = 15; // random variance
        const linePause = 400; // pause at the end of each line
        
        let lineIndex = 0;
        let charIndex = 0;
        
        // Function to type the current line
        function typeLine() {
            // Check if we've finished all lines
            if (lineIndex >= lines.length) {
                if (onComplete) onComplete();
                return;
            }
            
            // Get the current line
            const currentLine = lines[lineIndex];
            
            // If we're at the end of the current line
            if (charIndex >= currentLine.length) {
                typedText += '\n';
                element.innerHTML = typedText;
                lineIndex++;
                charIndex = 0;
                
                // Pause at the end of each line
                setTimeout(typeLine, linePause);
                return;
            }
            
            // Type the next character
            const char = currentLine.charAt(charIndex);
            
            // Handle special characters for HTML display
            let displayChar = char;
            if (char === '<') displayChar = '&lt;';
            if (char === '>') displayChar = '&gt;';
            if (char === '&') displayChar = '&amp;';
            
            typedText += displayChar;
            element.innerHTML = typedText;
            charIndex++;
            
            // Add occasional typing mistakes and corrections for realism
            const shouldMakeMistake = Math.random() < 0.01; // 1% chance of typo
            
            if (shouldMakeMistake && char !== ' ' && charIndex < currentLine.length - 1) {
                // Make a typo
                const wrongChar = getRandomChar();
                typedText += wrongChar;
                element.innerHTML = typedText;
                
                // Then delete it after a brief pause
                setTimeout(() => {
                    typedText = typedText.slice(0, -1);
                    element.innerHTML = typedText;
                    
                    // Continue typing after correction
                    const variance = Math.floor(Math.random() * typingVariance) - (typingVariance / 2);
                    const delay = typingSpeed + variance;
                    setTimeout(typeLine, delay + 200);
                }, 300);
                
                return;
            }
            
            // Add occasional longer pauses to simulate thinking
            const shouldPause = Math.random() < 0.03; // 3% chance of pause
            const pauseTime = shouldPause ? Math.random() * 500 + 200 : 0;
            
            // Random typing speed variance for more realistic effect
            const variance = Math.floor(Math.random() * typingVariance) - (typingVariance / 2);
            const delay = typingSpeed + variance + pauseTime;
            
            // Schedule the next character
            setTimeout(typeLine, delay);
        }
        
        // Helper function to get a random character for typos
        function getRandomChar() {
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789[]{}();:,.';
            return chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        // Start typing
        typeLine();
    }
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        // Get all sections and their positions
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Animate sections when they come into view
    function animateSectionsOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('fade-in');
            }
        });
    }
    
    // Initialize scroll reveal animations
    function initScrollReveal() {
        const elementsToReveal = [
            ...document.querySelectorAll('.service-card'),
            ...document.querySelectorAll('.project-card'),
            ...document.querySelectorAll('.expertise-card'),
            ...document.querySelectorAll('.timeline-item'),
            ...document.querySelectorAll('.process-feature')
        ];
        
        if ('IntersectionObserver' in window) {
            const appearOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -100px 0px"
            };
            
            const appearOnScroll = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('fade-in-up');
                                entry.target.style.opacity = 1;
                            }, index * 100); // Staggered animation
                            
                            observer.unobserve(entry.target);
                        }
                    });
                }, 
                appearOptions
            );
            
            elementsToReveal.forEach(element => {
                element.style.opacity = 0;
                appearOnScroll.observe(element);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            elementsToReveal.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fade-in-up');
                    element.style.opacity = 1;
                }, index * 100);
            });
        }
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        // Lists of elements to animate with different effects
        const fadeElements = document.querySelectorAll('.fade-trigger');
        const slideElements = document.querySelectorAll('.slide-trigger');
        
        if ('IntersectionObserver' in window) {
            // Fade in animation
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            // Slide in animation
            const slideObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                        slideObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe elements
            fadeElements.forEach(element => fadeObserver.observe(element));
            slideElements.forEach(element => slideObserver.observe(element));
        } else {
            // Fallback
            fadeElements.forEach(element => element.classList.add('fade-in'));
            slideElements.forEach(element => element.classList.add('slide-in'));
        }
    }
    
    // Initialize progress bars animation
    function initProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        if (progressBars.length && 'IntersectionObserver' in window) {
            const progressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const percent = entry.target.dataset.percent;
                        entry.target.style.width = `${percent}%`;
                        progressObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            progressBars.forEach(bar => {
                progressObserver.observe(bar);
            });
        }
    }
    
    // Show form success/error message
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('form-message');
        messageElement.classList.add(type === 'error' ? 'form-error' : 'form-success');
        messageElement.textContent = message;
        
        // Insert message after form
        if (contactForm) {
            contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
            
            // Auto remove message after 5 seconds
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
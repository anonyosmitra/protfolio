// script.js

document.addEventListener("DOMContentLoaded", function () {
    const lines = [
        "Welcome to My Portfolio",
        "$ About Me",
        "Hi, I'm [Your Name], a passionate programmer with expertise in [Your Skills]. I love creating web applications and solving complex problems.",
        "$ My Projects",
        "Project 1 - Description",
        "Project 2 - Description",
        "Project 3 - Description",
        "$ Contact Me",
        "You can reach me at [Your Email Address]."
    ];

    const typingElement = document.getElementById("typewriter-text");
    let lineIndex = 0;
    let charIndex = 0;

    function typeNextLine() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                if (lines[lineIndex][charIndex] === '[') {
                    // Find the closing bracket and extract the link text and URL
                    const closingBracketIndex = lines[lineIndex].indexOf(']', charIndex);
                    if (closingBracketIndex !== -1) {
                        const linkText = lines[lineIndex].substring(charIndex + 1, closingBracketIndex);
                        const linkUrl = lines[lineIndex].substring(closingBracketIndex + 2); // Skip ']' and ' '

                        // Create an anchor element and set its href and innerText
                        const link = document.createElement('a');
                        link.href = linkUrl;
                        link.innerText = linkText;

                        // Append the anchor element to the typingElement
                        typingElement.appendChild(link);

                        // Update charIndex
                        charIndex = closingBracketIndex + linkUrl.length + 3; // Skip ']' and ' ' and '('
                    }
                } else {
                    typingElement.textContent += lines[lineIndex][charIndex];
                    charIndex++;
                }
                setTimeout(typeNextLine, 50); // Delay between typing characters
            } else {
                lineIndex++;
                charIndex = 0;
                typingElement.innerHTML += "<br>"; // Move to the next line
                setTimeout(typeNextLine, 1000); // Delay between lines
            }
        }
    }

    typeNextLine(); // Start typing animation
});

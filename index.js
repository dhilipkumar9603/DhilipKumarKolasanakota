
const overlayButtonN = document.getElementById("nutri");
const overlayButtonS = document.getElementById("safe");

const closeButtons = document.getElementsByClassName("closeOverlay");

// Show Nutri overlay
overlayButtonN.addEventListener("click", function () {
    document.getElementById("overlayN").style.display = "flex";
    
});

// Show SafeNest overlay
overlayButtonS.addEventListener("click", function () {
    document.getElementById("overlayS").style.display = "flex";
    
});

// Close overlays (loop through all close buttons)
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
    document.getElementById("overlayN").style.display = "none";
    document.getElementById("overlayS").style.display = "none";
    
    });
}

// Smooth scroll to sections
function scrollto(k) {
    const sectionIds = ["section-about", "section-skills", "section-projects", "section-contact"];
    const targetId = sectionIds[k];
    const targetElement = document.getElementById(targetId);
    const container = document.getElementById("movable");

    if (targetElement && container) {
        container.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
}

// ScrollSpy functionality
const sectionIds = ["section-about", "section-skills", "section-projects", "section-contact"];
const navIds = ["nav-about", "nav-skills", "nav-projects", "nav-contact"];
const movable = document.getElementById("movable");

movable.addEventListener("scroll", () => {
    const scrollPos = movable.scrollTop;
    let closestIndex = 0;
    let minDiff = Infinity;

    sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        const diff = Math.abs(section.offsetTop - scrollPos);
        if (diff < minDiff) {
            minDiff = diff;
            closestIndex = index;
        }
    });
    // Remove 'active' from elements with given IDs
    navIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove("active");
    });

    // Remove 'active' from all elements with given class names
    navIds.forEach(className => {
        const elements = document.getElementsByClassName(className);
        Array.from(elements).forEach(el => el.classList.remove("active"));
    });

    // Add 'active' to the element with current ID
    const activeIdEl = document.getElementById(navIds[closestIndex]);
    if (activeIdEl) activeIdEl.classList.add("active");

    // Add 'active' to all elements with the current class name
    const activeClassEls = document.getElementsByClassName(navIds[closestIndex]);
    Array.from(activeClassEls).forEach(el => el.classList.add("active"));

});
// Dynamic background effect
//document.addEventListener('mousemove', function(e) {
  //  const x = e.clientX;
    //const y = e.clientY;

  //  document.body.style.background = `
    //    radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 2px, transparent 1000px),
   //     linear-gradient(20deg,rgb(79, 87, 104), #0f2027, #203a43,rgb(124, 136, 141))
    //`;
//});

let ageEl = document.getElementById('age_script');

setInterval(() => {
    let time = (new Date() - new Date(2003, 11, 4)) / (1000 * 60 * 60 * 24 * 365.25);
    ageEl.innerText = time.toString().substring(0, 11);
}, 50);


function centerNav(event, targetId) 
{
    // Prevent the default behavior of the link
    event.preventDefault();
  
    // Get the target element based on the provided targetId
    var targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      // Get the height of the viewport
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
      // Calculate the offset to scroll to the center of the target element
      var targetOffset = targetElement.offsetTop - (viewportHeight / 2) + (targetElement.offsetHeight / 2);
  
      // Scroll to the center of the target element
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth' 
      });
    }
}
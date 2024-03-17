// This script will be compiled into the JS bundle automatically.
/* ------------- Disable disqus ads ----------------------- */	

// Function to remove Disqus ads
function removeDisqusAds() {
    // Select the Disqus thread element
    var disqus = document.querySelector('#disqus_thread');
    
    // Check if Disqus thread element exists
    if (disqus) {
        // Function to remove ads
        function removeAds() {
            // Select ad elements within the Disqus thread
            var ads = disqus.querySelectorAll('.ad');
            
            // Remove each ad element
            ads.forEach(function(ad) {
                ad.remove();
            });
        }
        
        // Call removeAds function after a delay to ensure Disqus has fully loaded
        setTimeout(removeAds, 2000); // Adjust the delay as needed
    }
}

// Call the function to remove Disqus ads
removeDisqusAds();
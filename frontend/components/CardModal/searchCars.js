document.getElementById('learnMoreBtn').addEventListener('click', function() {
  
    var tipoDoCarro = "basic";
    
    
    var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(tipoDoCarro + ' car');
    
    
    window.open(googleSearchUrl, '_blank');
  });
  
    const p = document.querySelector('.acctno');
        
    const donateBtn  = document.querySelector('.donate');

  donateBtn.addEventListener('click', () => {
    
    if (p.innerHtml === " ") {
      p.innerHtml ="St.Cecilia Choir, 1234567891011,G.T Bank";
    } else {
      p.innerHtml = " ";
    }

   });
   
   
   let selectTag = document.getElementById('select');
  
  
   function navigateToLink(selectElement) {
            var url = selectElement.value;
            if (url) {
                window.open(url, '_blank');
            }
        }
  

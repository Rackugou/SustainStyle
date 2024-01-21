document.getElementById('toggleButton').addEventListener('click', function() {
    var image = document.getElementById('kaartimg');
    var button = document.getElementById('toggleButton');
    
    if (image.style.display === 'none') {
      image.style.display = 'block';
      button.innerHTML = 'Locatie &#9660;';

    } else {
      image.style.display = 'none';
      button.innerHTML = 'Locatie &#9650;';
    }
  });
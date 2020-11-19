function showModal() {
    document.querySelector('.overlay').style.display = "inline";
    document.querySelector('.modal').classList.add('show__modal');
    
    
    
  }
  function closeModal() {
    document.querySelector('.modal').classList.add('close__modal');
    window.location.reload();
    document.querySelector('.overlay').style.display = "none";
  }

// nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle && navToggle.addEventListener('click', () => {
  mainNav.style.display = mainNav.style.display === 'block' ? '' : 'block';
});

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

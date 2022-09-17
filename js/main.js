const elSiteThemeToggler = document.querySelector('.site_header_theme_tungler');

elSiteThemeToggler.addEventListener('click', function(){
  document.body.classList.toggle('dark_mode');
});
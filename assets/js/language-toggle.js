document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('languageToggle');
  const langLabel = document.getElementById('langLabel');
  
  if (!languageToggle) return;
  
  // Get current language from URL
  function getCurrentLanguage() {
    const path = window.location.pathname;
    return path.includes('/de/') ? 'de' : 'en';
  }
  
  // Get the URL for the other language
  function getSwitchUrl() {
    const currentPath = window.location.pathname;
    const currentLang = getCurrentLanguage();
    
    if (currentLang === 'de') {
      // Switch from DE to EN
      return currentPath.replace('/de/', '/');
    } else {
      // Switch from EN to DE
      // Handle root path specially
      if (currentPath === '/' || currentPath === '') {
        return '/de/';
      }
      return '/de' + currentPath;
    }
  }
  
  // Update button state and label
  function updateLanguageToggle() {
    const currentLang = getCurrentLanguage();
    languageToggle.setAttribute('data-lang', currentLang);
    
    // Update label based on current language
    if (currentLang === 'de') {
      // Currently German, show EN as the option to switch to
      langLabel.textContent = 'EN';
    } else {
      // Currently English, show DE as the option to switch to
      langLabel.textContent = 'DE';
    }
  }
  
  // Handle click
  languageToggle.addEventListener('click', function() {
    const newUrl = getSwitchUrl();
    window.location.href = newUrl;
  });
  
  // Initialize
  updateLanguageToggle();
});
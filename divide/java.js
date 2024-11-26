function setActive(element) {
    document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
  }
  
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  const currentTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); 
  });
  
  document.querySelector('.subjects-header .buttons').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      alert('Button clicked: ' + event.target.textContent);
    }
  });
  
  function toggleDropdown() {
    document.querySelector('.dropdown-container').classList.toggle('open');
  }
  
  function selectOption(option) {
    document.querySelector('.dropdown-button span').textContent = option;
    document.querySelector('.dropdown-container').classList.remove('open');
  }
  
  // close dropdown list when clicking outside of it
  document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-container');
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('open');
    }
  });
  const dropdownContainer = document.querySelector('.dropdown-container');
    dropdownContainer.addEventListener('mouseover', () => {
      dropdownContainer.classList.add('open');
    });

    dropdownContainer.addEventListener('mouseout', () => {
      dropdownContainer.classList.remove('open');
    });
    document.addEventListener('click', function (event) {
        if (!dropdownContainer.contains(event.target)) {
          dropdownContainer.classList.remove('open');
        }
      });
      function setActive(element) {
        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
        element.classList.add('active');
      }
      

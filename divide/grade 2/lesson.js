let progress = 0;
    let currentPage = 0;

    const pages = document.querySelectorAll('.content');

    function showPage(pageIndex) {
      pages.forEach((page, index) => {
        page.style.display = index === pageIndex ? 'block' : 'none';
      });
    }

    function nextPage() {
      if (currentPage < pages.length - 1) {
        currentPage++;
        progress += 25; // Increase progress by 25% for each page
        document.getElementById('progressFill').style.width = progress + '%';
        showPage(currentPage);
      }
      if (progress >= 100) {
        window.location.href = 'asdasd'; // Link to another page
      }
    }

    // Initialize the first page
    showPage(currentPage);
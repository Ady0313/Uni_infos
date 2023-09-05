document.addEventListener('DOMContentLoaded', () => {
    const collegeData = document.getElementById('collegeData');
  
    // Fetch data from the server
    fetch('/allcolleges')
      .then(response => response.json())
      .then(data => {
        // Create table rows for each college
        const rows = data.map(college => {
          return `<tr>
                    <td>${college['COL 1']}</td>
                    <td>${college['COL 2']}</td>
                    <td>${college['COL 3']}</td>
                  </tr>`;
        });
  
        // Append rows to the table body
        collegeData.innerHTML = rows.join('');
      });
  });
  
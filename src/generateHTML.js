function generateHTML(teamMembersArray) {
  // Create a string variable to hold the HTML code
  let html = "";

  // Add the opening HTML tags and section
  html += `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Team Members: Roster</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        </head>
        <body>
          <div class="container">
            <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
              </div>
            </div>
            <div class="row justify-content-center">
    `;

  // Loop through the teamMembersArray array and generate HTML code for each member
  for (let i = 0; i < teamMembersArray.length; i++) {
    let member = teamMembersArray[i];
    html += `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${member.getemployeeName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${member.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${member.getemployeeId()}</li>
              
      `;

    // If the member is a Manager, add their office number to the HTML
    if (member.getRole() === "Manager") {
      html += `
          <li class="list-group-item">Role: ${member.getRole()}</li>
          <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
        `;
    }

    // If the member is an Engineer, add their GitHub username to the HTML
    if (member.getRole() === "Engineer") {
      html += `
          <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank" rel="noopener noreferrer">${member.getGithub()}</a></li>
        `;
    }

    // If the member is an Intern, add their school to the HTML
    if (member.getRole() === "Intern") {
      html += `
          <li class="list-group-item">School: ${member.getSchool()}</li>
          <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
        `;
    }

    // Add the closing tags for the member's card
    html += `
            </ul>
          </div>
        </div>
      `;
  }

  // Add the closing HTML tags
  html += `
            </div>
          </div>
        </body>
      </html>
    `;

  // Return the HTML code
  return html;
}

module.exports = generateHTML;

// Define global variables
let employees = []; // array to store employee data
let currentPage = 1; // current page of employee listing
const rowsPerPage = 5; // number of rows to display per page

// Define functions
function renderHeader() {
  const header = document.createElement("header");

  // create logo
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerText = "My Company";
  header.appendChild(logo);

  // create search bar
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search employee");
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm)
    );
    renderEmployeeTable(filteredEmployees);
  });
  searchContainer.appendChild(searchInput);
  header.appendChild(searchContainer);

  // create navigation menu
  const navMenu = document.createElement("nav");
  navMenu.classList.add("nav-menu");
  const navMenuToggle = document.createElement("button");
  navMenuToggle.classList.add("nav-menu-toggle");
  navMenuToggle.innerText = "☰";
  navMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
  navMenu.appendChild(navMenuToggle);
  const navMenuList = document.createElement("ul");
  navMenuList.classList.add("nav-menu-list");
  const employeeRegistration = document.createElement("li");
  const employeeRegistrationLink = document.createElement("a");
  employeeRegistrationLink.innerText = "Employee registration";
  employeeRegistrationLink.setAttribute("href", "#employee-registration");
  employeeRegistration.appendChild(employeeRegistrationLink);
  navMenuList.appendChild(employeeRegistration);
  const employeeListing = document.createElement("li");
  const employeeListingLink = document.createElement("a");
  employeeListingLink.innerText = "Employee listing";
  employeeListingLink.setAttribute("href", "#employee-listing");
  employeeListing.appendChild(employeeListingLink);
  navMenuList.appendChild(employeeListing);
  navMenu.appendChild(navMenuList);
  header.appendChild(navMenu);

  // append header to the body
  document.body.appendChild(header);
}

function renderFooter() {
  const footer = document.createElement("footer");
  const copyright = document.createElement("p");
  copyright.innerText = "© 2023 Your Name";
  footer.appendChild(copyright);

  // append footer to the body
  document.body.appendChild(footer);
}

function renderEmployeeRegistrationForm() {
  const employeeRegistration = document.createElement("section");
  employeeRegistration.setAttribute("id", "employee-registration");
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value.trim();
    const position = event.target.elements.position.value.trim();
    const about = event.target.elements.about.value.trim();
    const joiningDate = event.target.elements.joining_date.value;
    if (name && position && about && joiningDate) {
      const employee = {
        id: new Date().getTime(),
        name: name,
        position: position,
        about: about,
        joiningDate: joiningDate,
      };
      employees.push(employee);
      localStorage.setItem("employees", JSON.stringify(employees));
      renderEmployeeTable();
      event.target.reset();
      window.location.hash = "#employee-listing";
    }
  });
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = "Name";
  form.appendChild(nameLabel);

let userform = document.getElementById("form");

const retrieveEntries = () => {

  let entries = localStorage.getItem("user-entries");

  if (entries) {

    entries = JSON.parse(entries);

  } 

  else {

    entries = [];

  }

  return entries;

};

let userEntries = retrieveEntries();

const displayEntries = () => {

  const entries = retrieveEntries();

  console.log(entries);

  const tableEntries = entries

    .map((entry) => {

      const name1 = `<td align="center" style="padding:4px 8px">${entry.name}</td>`;

      const email1 = `<td align="center" style="padding:4px 8px">${entry.email}</td>`;

      const password1 = `<td align="center" style="padding:4px 8px">${entry.password}</td>`;

      const dob1 = `<td align="center" style="padding:4px 8px">${entry.dob}</td>`;

      const terms1 = `<td align="center" style="padding:4px 8px">${entry.terms}</td>`;

      const row = `<tr>${name1} ${email1} ${password1} ${dob1} ${terms1}</tr>`;

      return row;

    })

    .join("\n");

  const table = `<table border="2" style="margin-top:10px;"><tr>

    <th align="center" style="padding:12px;">Name</th>

    <th align="center" style="padding:12px;">Email</th>

    <th align="center" style="padding:12px;">Password</th>

    <th align="center" style="padding:12px;">Dob</th>

    <th align="center" style="padding:12px;">Accepted terms?</th>

    </tr>${tableEntries}</table>`;

  let details = document.getElementById("user-entries");

  details.innerHTML = table;

};

const saveUserForm = (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const dob = document.getElementById("dob").value;

  const terms = document.getElementById("terms").checked;

  const entry = {

    name,

    email,

    password,

    dob,

    terms,

  };

  userEntries.push(entry);

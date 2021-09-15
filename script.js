const saveInputsToStorage = (event) => {
  event.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let number = document.getElementById("number");

  if (name.value.length < 1) {
    alert("please enter a name");
    return;
  }
  if (number.value.length < 11) {
    alert("please enter a valid number");
    return;
  }

  if (email.value.length < 5) {
    alert("please enter a valid number");
    return;
  }

  let user = {
    name: name.value,
    email: email.value,
    number: number.value,
  };

  let users;

  //   userData.push(user);
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  } else {
    users = [];
  }

  console.log(users);
  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
};

const showSavedData = () => {
  let usersData = JSON.parse(localStorage.getItem("users"));

  console.log(usersData);

  let dataSection = document.getElementById("data");
  dataSection.innerHTML = `<table>
  <th>
    <tr>
    <td>Name</td>
    <td>Email</td>
    <td>Number</td>
    </tr>
</th>
<tbody>

    ${usersData.map((user) => {
      return `<tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.number}</td>
        </tr> `;
    })}
   

</tbody>
  </table>`;
};

let sum = 0;
let a = 0;
const emp = (e) => {
  e.preventDefault();
  a = a + 1;
  let name = document.getElementById("name").value;
  let jobrole = document.getElementById("select1").value;
  let department = document.getElementById("select2").value;
  let salary = document.getElementById("salary").value;
  let work = document.getElementById("work").value;
  let email = document.getElementById("email").value;

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  if (work <= 5) {
    td7.innerHTML = "junior";
  } else {
    td7.innerHTML = "senior";
  }

  td8.innerHTML = "delete";
  td8.style.backgroundColor = "red";
  td8.style.color = "white";
  td8.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  console.log(sum);
  console.log(a);
  td1.innerHTML = name;
  td2.innerHTML = jobrole;
  td3.innerHTML = department;
  td4.innerHTML = salary;
  td5.innerHTML = email;
  td6.innerHTML = work;
  sum = sum + Number(salary);
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
  document.getElementById("body").append(tr);
  document.getElementById("h1").innerHTML = sum;
  document.getElementById("h2").innerHTML = a;
};

document.getElementById("form").addEventListener("submit", emp);

const firstname = "Johannes"
const surname = "Potgieter"
export let johannesRole = "Intern"

// const display= firstname + " " + surname + " (" + role + ")"

const johannesDetails = `${firstname} ${surname}: ${johannesRole}`;

document.querySelector('#johannes').innerHTML = johannesDetails;
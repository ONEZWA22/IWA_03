const firstname = "Alex"
const surname = "Naidoo"
export let alexRole = "Head of Marketing"

const alexDetails = `${firstname} ${surname}: ${alexRole}`;

document.querySelector('#alex').innerHTML = alexDetails;
 
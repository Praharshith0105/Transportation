function submitProfile() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    // In a real-world scenario, you would likely send this data to a server for further processing
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Gender: ", gender);
    console.log("Email: ", email);

    // You can add additional logic here, such as displaying a confirmation message
    alert("Profile submitted successfully!");
    window.location.href = 'index.html';
}

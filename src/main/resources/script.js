const courses = [
    {
        id: "CS101",
        name: "Data Structures & Algorithms",
        duration: "12 Weeks",
        desc: "Learn arrays, trees, graphs, and algorithm optimization.",
        eligibility: "2nd Year CSE/IT Students"
    },
    {
        id: "ME204",
        name: "Robotics & Automation",
        duration: "8 Weeks",
        desc: "Introduction to kinematics, sensors, and industrial robots.",
        eligibility: "3rd Year Mechanical / ECE"
    },
    {
        id: "EC302",
        name: "Embedded Systems & IoT",
        duration: "10 Weeks",
        desc: "Microcontroller programming and smart sensor networks.",
        eligibility: "All Engineering Branches (Sem 4+)"
    }
];

const courseList = document.getElementById("course-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const regForm = document.getElementById("reg-form");
const regList = document.getElementById("reg-list");
const regCount = document.getElementById("reg-count");

let selectedCourse = "";
let registeredCourses = [];

// Display Courses
courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <h3>${course.id}: ${course.name}</h3>
    <p><strong>Duration:</strong> ${course.duration}</p>
    <p><strong>Description:</strong> ${course.desc}</p>
    <p><strong>Eligibility:</strong> ${course.eligibility}</p>
    <button onclick="openModal('${course.id} - ${course.name}')">Register</button>
  `;
    courseList.appendChild(card);
});

// Open Registration Modal
function openModal(courseName) {
    selectedCourse = courseName;
    modalTitle.innerText = "Register: " + courseName;
    modal.classList.remove("hidden");
}

// Close Modal
document.getElementById("close-btn").onclick = () => {
    modal.classList.add("hidden");
};

// Handle Form Submission
regForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("student-name").value;
    const roll = document.getElementById("student-id").value;

    registeredCourses.push(`${selectedCourse} — ${name} (${roll})`);
    updateRegisteredList();

    regForm.reset();
    modal.classList.add("hidden");
    alert("Successfully registered!");
};

// Update Registered Section
function updateRegisteredList() {
    regCount.innerText = registeredCourses.length;
    regList.innerHTML = registeredCourses.map(item => `<li>${item}</li>`).join("");
}
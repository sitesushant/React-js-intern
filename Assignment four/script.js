// Simple Student Management System
let students = [];
let editingIndex = -1;

// Regular expressions for validation
const nameRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadFromStorage();
    showStudents();
});

// Local Storage
function saveToStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

function loadFromStorage() {
    const stored = localStorage.getItem('students');
    if (stored) students = JSON.parse(stored);
}

// Validation
function validateInputs() {
    const name = document.getElementById('studentName').value.trim();
    const age = document.getElementById('studentAge').value;
    const email = document.getElementById('studentEmail').value.trim();
    
    if (!name || !nameRegex.test(name)) {
        showError('Name must be 2-50 characters, letters and spaces only');
        return false;
    }
    
    if (!age || age < 1 || age > 120) {
        showError('Age must be between 1 and 120');
        return false;
    }
    
    if (!email || !emailRegex.test(email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    // Check duplicate email
    if (students.some((s, i) => i !== editingIndex && s.email.toLowerCase() === email.toLowerCase())) {
        showError('Email already exists');
        return false;
    }
    
    return { name, age: parseInt(age), email };
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => errorDiv.style.display = 'none', 3000);
}

// CRUD Operations
function addStudent() {
    const data = validateInputs();
    if (!data) return;
    
    students.push({ id: Date.now(), ...data });
    saveToStorage();
    clearForm();
    showStudents();
    showResult('Student added successfully!');
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentAge').value = student.age;
    document.getElementById('studentEmail').value = student.email;
    
    editingIndex = index;
    document.getElementById('addBtn').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'inline-block';
    document.getElementById('cancelBtn').style.display = 'inline-block';
}

function updateStudent() {
    const data = validateInputs();
    if (!data) return;
    
    students[editingIndex] = { id: students[editingIndex].id, ...data };
    saveToStorage();
    cancelEdit();
    showStudents();
    showResult('Student updated successfully!');
}

function deleteStudent(index) {
    if (confirm('Delete this student?')) {
        students.splice(index, 1);
        saveToStorage();
        showStudents();
        showResult('Student deleted successfully!');
    }
}

function cancelEdit() {
    editingIndex = -1;
    clearForm();
    document.getElementById('addBtn').style.display = 'inline-block';
    document.getElementById('updateBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentAge').value = '';
    document.getElementById('studentEmail').value = '';
}

// Display
function showStudents() {
    const displayDiv = document.getElementById('studentsDisplay');
    
    if (students.length === 0) {
        displayDiv.innerHTML = '<p class="no-students">No students found. Add some students!</p>';
        return;
    }
    
    let html = '<div class="students-list-container">';
    students.forEach((student, index) => {
        html += `
            <div class="student-item">
                <div class="student-details">
                    <span class="student-name">${student.name}</span>
                    <span class="student-age">Age: ${student.age}</span>
                    <span class="student-email">${student.email}</span>
                </div>
                <div class="student-buttons">
                    <button onclick="editStudent(${index})" class="edit-btn">Edit</button>
                    <button onclick="deleteStudent(${index})" class="delete-btn">Delete</button>
                </div>
            </div>
        `;
    });
    html += '</div>';
    displayDiv.innerHTML = html;
}

// Filter Operations
function getNamesOnly() {
    const names = students.map(s => s.name);
    showResult('Names: ' + names.join(', '));
}

function filterUnder10() {
    const under10 = students.filter(s => s.age < 10);
    const result = under10.map(s => `${s.name} (${s.age})`).join(', ');
    showResult('Under 10: ' + (result || 'None'));
}

function calculateAverageAge() {
    if (students.length === 0) {
        showResult('No students to calculate average');
        return;
    }
    const average = students.reduce((sum, s) => sum + s.age, 0) / students.length;
    showResult(`Average age: ${average.toFixed(2)}`);
}

function checkAllGenZ() {
    const currentYear = new Date().getFullYear();
    const allGenZ = students.every(s => {
        const birthYear = currentYear - s.age;
        return birthYear >= 1997 && birthYear <= 2012;
    });
    showResult(`All GenZ: ${allGenZ ? 'Yes' : 'No'}`);
}

function listGenZStudents() {
    const currentYear = new Date().getFullYear();
    const genZ = students.filter(s => {
        const birthYear = currentYear - s.age;
        return birthYear >= 1997 && birthYear <= 2012;
    });
    const result = genZ.map(s => `${s.name} (${s.age})`).join(', ');
    showResult('GenZ students: ' + (result || 'None'));
}

function showResult(text) {
    const div = document.createElement('div');
    div.className = 'result-item info';
    div.textContent = text;
    document.getElementById('results').appendChild(div);
}

function clearResults() {
    document.getElementById('results').innerHTML = '';
}
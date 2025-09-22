// Simple Student Management System
let students = [];
let editingIndex = -1;
let deletingIndex = -1;

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
    addStudentWithAnimation();
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('editStudentName').value = student.name;
    document.getElementById('editStudentAge').value = student.age;
    document.getElementById('editStudentEmail').value = student.email;
    
    editingIndex = index;
    document.getElementById('editModal').style.display = 'block';
    document.getElementById('editErrorMessage').style.display = 'none';
}


function saveEditStudent() {
    const name = document.getElementById('editStudentName').value.trim();
    const age = document.getElementById('editStudentAge').value;
    const email = document.getElementById('editStudentEmail').value.trim();
    
    // Validate inputs
    if (!name || !nameRegex.test(name)) {
        showEditError('Name must be 2-50 characters, letters and spaces only');
        return;
    }
    
    if (!age || age < 1 || age > 120) {
        showEditError('Age must be between 1 and 120');
        return;
    }
    
    if (!email || !emailRegex.test(email)) {
        showEditError('Please enter a valid email address');
        return;
    }
    
    // Check duplicate email
    if (students.some((s, i) => i !== editingIndex && s.email.toLowerCase() === email.toLowerCase())) {
        showEditError('Email already exists');
        return;
    }
    
    // Update student
    students[editingIndex] = { 
        id: students[editingIndex].id, 
        name, 
        age: parseInt(age), 
        email 
    };
    
    saveToStorage();
    closeEditModal();
    showStudents();
    showResult('Student updated successfully!');
}

function showEditError(message) {
    const errorDiv = document.getElementById('editErrorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => errorDiv.style.display = 'none', 3000);
}

function deleteStudent(index) {
    const student = students[index];
    deletingIndex = index;
    
    // Display student info in modal
    document.getElementById('deleteStudentInfo').innerHTML = `
        <span class="student-name">${student.name}</span>
        <span class="student-age">Age: ${student.age}</span>
        <span class="student-email">${student.email}</span>
    `;
    
    document.getElementById('deleteModal').style.display = 'block';
}

function confirmDeleteStudent() {
    if (deletingIndex !== -1) {
        students.splice(deletingIndex, 1);
        saveToStorage();
        closeDeleteModal();
        showStudents();
        showResult('Student deleted successfully!');
    }
}


function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentAge').value = '';
    document.getElementById('studentEmail').value = '';
}

// Display
function showStudents() {
    const tableBody = document.getElementById('studentsTableBody');
    const tableContainer = document.querySelector('.table-container');
    
    if (students.length === 0) {
        tableContainer.innerHTML = '<p class="no-students">No students found. Add some students!</p>';
        return;
    }
    
    // Show table if it was hidden
    tableContainer.innerHTML = `
        <table id="studentsTable" class="students-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="studentsTableBody">
                <!-- Student rows will be inserted here -->
            </tbody>
        </table>
    `;
    
    // Re-get the table body after recreating the table
    const newTableBody = document.getElementById('studentsTableBody');
    
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="student-name">${student.name}</td>
            <td class="student-age">${student.age}</td>
            <td class="student-email">${student.email}</td>
            <td class="student-actions">
                <button onclick="editStudent(${index})" class="edit-btn">Edit</button>
                <button onclick="deleteStudent(${index})" class="delete-btn">Delete</button>
            </td>
        `;
        newTableBody.appendChild(row);
    });
}

// Add student with animation
function addStudentWithAnimation() {
    const data = validateInputs();
    if (!data) return;
    
    students.push({ id: Date.now(), ...data });
    saveToStorage();
    clearForm();
    
    // Show students and animate the new row
    showStudents();
    
    // Add animation to the last row (newly added)
    const tableBody = document.getElementById('studentsTableBody');
    const lastRow = tableBody.lastElementChild;
    if (lastRow) {
        lastRow.classList.add('new-row');
        
        // Remove the animation class after animation completes
        setTimeout(() => {
            lastRow.classList.remove('new-row');
        }, 2000);
    }
    
    showResult('Student added successfully!');
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

// Modal Control Functions
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    editingIndex = -1;
    document.getElementById('editStudentName').value = '';
    document.getElementById('editStudentAge').value = '';
    document.getElementById('editStudentEmail').value = '';
    document.getElementById('editErrorMessage').style.display = 'none';
}

function closeDeleteModal() {
    document.getElementById('deleteModal').style.display = 'none';
    deletingIndex = -1;
}

// Close modals when clicking outside
window.onclick = function(event) {
    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');
    
    if (event.target === editModal) {
        closeEditModal();
    }
    if (event.target === deleteModal) {
        closeDeleteModal();
    }
}

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEditModal();
        closeDeleteModal();
    }
});
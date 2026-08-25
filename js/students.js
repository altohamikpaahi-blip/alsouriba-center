// إدارة الطلاب محلياً (localStorage)
function getStudents() {
  return JSON.parse(localStorage.getItem("alsouriba_students")) || [];
}

function addStudent(studentData) {
  const students = getStudents();
  students.push(studentData);
  localStorage.setItem("alsouriba_students", JSON.stringify(students));
}

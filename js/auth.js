const defaultUsers = [
  { username: "admin", password: "admin123", role: "admin", name: "مدير النظام" },
  { username: "training", password: "training123", role: "training_manager", name: "مدير التدريب والجودة" },
  { username: "admin_staff", password: "adminstaff123", role: "administrative", name: "المسؤول الإداري" },
  { username: "finance", password: "finance123", role: "financial", name: "المسؤول المالي" },
  { username: "marketing", password: "marketing123", role: "marketing", name: "مسؤول التسويق والعلاقات" },
  { username: "technical", password: "technical123", role: "technical", name: "الدعم الفني واللوجستيات" },
  { username: "student", password: "student123", role: "student", name: "طالب متدرب" }
];

function initAuth() {
  if (!localStorage.getItem("alsouriba_users")) {
    localStorage.setItem("alsouriba_users", JSON.stringify(defaultUsers));
  }
}

function loginUser(username, password) {
  initAuth();
  const users = JSON.parse(localStorage.getItem("alsouriba_users"));
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    localStorage.setItem("current_user", JSON.stringify(user));
    return { success: true, role: user.role };
  }
  return { success: false, message: "اسم المستخدم أو كلمة المرور غير صحيحة" };
}

function logoutUser() {
  localStorage.removeItem("current_user");
  window.location.href = "login.html";
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("current_user"));
}

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const userNameEl = document.getElementById("user-name-display");
  if (userNameEl) {
    userNameEl.innerText = `${currentUser.name} (${getRoleTitle(currentUser.role)})`;
  }

  renderDashboardContent(currentUser.role);
});

function getRoleTitle(role) {
  const titles = {
    admin: "مدير النظام",
    training_manager: "مدير التدريب والجودة",
    administrative: "المسؤول الإداري",
    financial: "المسؤول المالي",
    marketing: "التسويق والعلاقات العامة",
    technical: "الدعم الفني واللوجستيات",
    student: "طالب"
  };
  return titles[role] || role;
}

function renderDashboardContent(role) {
  const contentArea = document.getElementById("dynamic-dashboard-content");
  if (!contentArea) return;

  let html = "";
  
  if (role === "admin" || role === "training_manager" || role === "administrative") {
    html += `
      <div class="stats-grid">
        <div class="stat-card">
          <h4>إجمالي الطلاب</h4>
          <span>142</span>
        </div>
        <div class="stat-card">
          <h4>الدورات النشطة</h4>
          <span>1</span>
        </div>
        <div class="stat-card">
          <h4>المدربون</h4>
          <span>4</span>
        </div>
        <div class="stat-card">
          <h4>نسبة الحضور العامة</h4>
          <span>88%</span>
        </div>
      </div>
    `;
  }

  if (role === "financial") {
    html += `
      <div class="stats-grid">
        <div class="stat-card">
          <h4>إجمالي الإيرادات</h4>
          <span>4,900,000 ج.س</span>
        </div>
        <div class="stat-card">
          <h4>المصروفات</h4>
          <span>1,200,000 ج.س</span>
        </div>
        <div class="stat-card">
          <h4>صافي الإيرادات</h4>
          <span>3,700,000 ج.س</span>
        </div>
        <div class="stat-card">
          <h4>الرسوم غير المسددة</h4>
          <span>350,000 ج.س</span>
        </div>
      </div>
    `;
  }

  if (role === "student") {
    html += `
      <div class="card" style="margin-bottom: 2rem;">
        <h3>مرحباً بك في بوابتك التدريبية</h3>
        <p>الدورة الحالية المسجل بها: <strong>الإسعافات الأولية والتمريض المنزلي</strong> (بالتعاون مع جمعية الهلال الأحمر السوداني)</p>
        <p>مكان التدريب: <strong>نادي السوريبة</strong> | الزمن: <strong>10 صباحاً - 1 ظهراً</strong></p>
      </div>
    `;
  }

  html += `
    <h3 style="margin-bottom: 1rem; color: var(--secondary);">الدورات والأنشطة المسجلة</h3>
    <table class="data-table">
      <thead>
        <tr>
          <th>اسم الدورة</th>
          <th>الجهة المتعاونة</th>
          <th>المدة</th>
          <th>الرسوم</th>
          <th>الحالة</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>الإسعافات الأولية والتمريض المنزلي</td>
          <td>جمعية الهلال الأحمر السوداني</td>
          <td>30 يوم</td>
          <td>35,000 جنيه سوداني</td>
          <td><span style="color: var(--primary); font-weight: bold;">نشط ومتاح</span></td>
        </tr>
      </tbody>
    </table>
  `;

  contentArea.innerHTML = html;
}

// إدارة الدورات التدريبية
function getCourses() {
  return JSON.parse(localStorage.getItem("alsouriba_courses")) || [
    { id: 1, name: "الإسعافات الأولية والتمريض المنزلي", partner: "الهلال الأحمر السوداني", price: "35,000 ج.س", duration: "30 يوم" }
  ];
}

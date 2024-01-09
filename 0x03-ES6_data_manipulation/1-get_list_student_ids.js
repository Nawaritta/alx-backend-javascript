export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((el) => el.id);
  }
  return [];
}

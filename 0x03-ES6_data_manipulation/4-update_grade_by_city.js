export default function updateStudentGradeByCity(studentsarray, city, newGrades) {
  return studentsarray
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: matchedGrade ? matchedGrade.grade : 'N/A',
      };
    });
}

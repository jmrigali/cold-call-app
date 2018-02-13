import React from 'react';

const Student = ({ student, removeStudent }) => {
  return (
    <div className="indivStudent">
      <a>{student}</a> <button className="remove" onClick={(e) => {
        removeStudent(student)
      }}>X</button>
    </div>
  )
}

export default Student;

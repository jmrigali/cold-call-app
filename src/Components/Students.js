import React from 'react';
import Student from './Student';

const Students = ({ classroom, removeStudent }) => {
    return (
      <div className="studentBox">
        {classroom.map(student=>(<Student key={student.id} student={student} removeStudent={removeStudent} />))}
      </div>
    )
}

export default Students;

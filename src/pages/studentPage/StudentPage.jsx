import React from 'react'
import StudentTable from '../../component/studentComponent/studentTableComponent/StudentTable'
import StudentAddBtn from '../../component/studentComponent/addStudentComponent/StudentAddBtn'

function StudentPage() {
    return (
        <>
            <StudentAddBtn />
            <StudentTable />
        </>
    )
}

export default StudentPage
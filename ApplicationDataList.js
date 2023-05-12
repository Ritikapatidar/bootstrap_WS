function ApplicationDataList({ data, role, handleDelete, handleEdit }) {
 
    return (
        <div className="table-responsive">
            {data.length > 0 && <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Full Name</td>   <td>Email</td>   <td>Address</td>   <td>Gender</td>   <td>Skills</td>   <td>10th marks</td>   <td>10th grade</td>   <td>10th year Of passing</td>   <td>12th marks</td>   <td>12th grade</td>   <td>12th year Of passing</td>   <td>Degree marks</td>   <td>Degree grade</td>   <td>Degree year Of passing</td> {role == 'admin' && <td>Edit</td>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {     
                         return (item.grade12 > 80 && item.grade>80) ? <tr style={{color:"green"}} key={index}><td>{item.fname} {item.mname} {item.lname}</td><td>{item.email}</td><td>{item.building} {item.area} {item.state} {item.city}</td><td>{item.gender}</td><td>{item.skill}</td>
                         <td>{item.marks}</td>  <td>{item.grade}</td><td>{item.year} </td>
                            <td>{item.marks12}</td><td>{item.grade12}</td><td>{item.year12} </td>
                             <td>{item.marksDegree}</td> <td>{item.gradeDegree}</td> <td>{item.yearDegree} </td>
                            {role == 'admin' && <td><button onClick={() => handleEdit(item.email)}>Edit</button><button onClick={() => handleDelete(item.email)}>Delete</button></td>} 
                            </tr>

                            : <tr key={index}><td>{item.fname} {item.mname} {item.lname}</td><td>{item.email}</td><td>{item.building} {item.area} {item.state} {item.city}</td><td>{item.gender}</td><td>{item.skill}</td>
                            <td>{item.marks}</td> <td>{item.grade}</td><td>{item.year} </td>
                               <td>{item.marks12}</td><td>{item.grade12}</td><td>{item.year12} </td>
                                <td>{item.marksDegree}</td> <td>{item.gradeDegree}</td> <td>{item.yearDegree} </td>
                               {role == 'admin' && <td><button onClick={() => handleEdit(item.email)}>Edit</button><button onClick={() => handleDelete(item.email)}>Delete</button></td>} 
                               </tr>
                    })}
                </tbody>
            </table>}

    
        </div>
    );
}

export default ApplicationDataList;
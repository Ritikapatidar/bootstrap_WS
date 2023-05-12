// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import ApplicationDataList from "./ApplicationDataList";
// function Home() {
//     const {name, role}=useParams();
//     const [detail, setdetail]=useState({})
//     const [detailArr, setdetailArr]=useState([])

//     const handleAddChange=(e)=>{
//         setdetail({...detail, [e.target.name]:e.target.value})
//        }

//     const handleAdd=(e)=>{
//         e.preventDefault();
//         detailArr.push(detail);
//         setdetailArr(detailArr);
//         setdetail({});
//         console.log(detailArr);
//     }

//     const handleDelete=(id)=>{
//     let newArr= detailArr.filter((item)=>item.email !== id)
//     setdetailArr(newArr);
//     }

//     const handleEdit=(id)=>{
//         console.log("edit",id);   
//        let newArr= detailArr.filter((item)=>item.email !== id)
//        let find= detailArr.find((item)=>item.email == id)
//        setdetailArr(newArr);
//        setdetail(find)
//        }

//     return ( 
//       <div className="container">
//         <h2 className="text-end">Hello {name}</h2>
//         <form onChange={handleAddChange}>
//         <h1 className='text-center'>Application Form</h1>
//         <div className="mb-3 row">
//          <label htmlFor="uname" className="htmlForm-label">Enter Name</label>
//          <div className="mb-3 col-4"> <input type="text" name="fname" id="fname" value={detail.fname || ''} className="form-control" placeholder="First Name"  /></div>
//          <div className="mb-3 col-4"> <input type="text" name="mname" id="mname" value={detail.mname || ''} className="form-control" placeholder="Middle Name"  /></div>
//          <div className="mb-3 col-4"> <input type="text" name="lname" id="lname" value={detail.lname || ''} className="form-control" placeholder="Last Name" /></div>
//        </div>
//        <div className="mb-3">
//          <label htmlFor="email" className="htmlForm-label">Enter email</label>
//          <input type="text" name="email" id="email" className="form-control" value={detail.email || ''} placeholder="email" />
//        </div>
//        <div className="mb-3 row">
//          <label htmlFor="Address" className="htmlForm-label">Enter Address</label>
//          <div className="mb-3 col-3"> <input type="text" name="building" id="building" value={detail.building || ''} className="form-control" placeholder="building" /></div>
//          <div className="mb-3 col-3"> <input type="text" name="area" id="area" value={detail.area || ''} className="form-control" placeholder="area" /></div>
//          <div className="mb-3 col-3"> <input type="text" name="state" id="state" value={detail.state || ''} className="form-control" placeholder="state" /></div>
//          <div className="mb-3 col-3"> <input type="text" name="city" id="city" value={detail.city || ''} className="form-control" placeholder="city" /></div>
//        </div>

//        <div className="mb-3 row">
//          <label htmlFor="Address" className="htmlForm-label">Gender</label>
//          <div className="mb-3 col-1"> Female <input type="radio" name="gender" value={'Female' || ''} placeholder="Female" /></div>
//          <div className="mb-3 col-1"> Male <input type="radio" name="gender" value="male" placeholder="male" /></div>
//        </div>
//        <div className="mb-3">
//        <label htmlFor="skill" className="htmlForm-label">Enter skills</label>
//          <input type="text" name="skill" id="skill" className="form-control"  value={detail.skill || ''} placeholder="skill" />
//        </div>

//        <h3>Education Details</h3>
//        <div className="mb-3 row">
//          <label htmlFor="Address" className="htmlForm-label">10th</label>
//          <div className="mb-3 col-3"> <input type="number" name="marks" id="marks" value={detail.marks || ''}  className="form-control" placeholder="marks" /></div>
//          <div className="mb-3 col-3"> <input type="text" name="grade" id="grade" value={detail.grade || ''}  className="form-control" placeholder="grade" /></div>
//          <div className="mb-3 col-3"> <input type="number" name="year" id="year" value={detail.year || ''}  className="form-control" placeholder="year of passing" /></div>
//        </div>

//        <div className="mb-3 row">
//          <label htmlFor="Address" className="htmlForm-label">12th</label>
//          <div className="mb-3 col-3"> <input type="number" name="marks12" id="marks12" value={detail.marks12 || ''}  className="form-control" placeholder="marks" /></div>
//          <div className="mb-3 col-3"> <input type="text" name="grade12" id="grade12" value={detail.grade12 || ''}  className="form-control" placeholder="grade" /></div>
//          <div className="mb-3 col-3"> <input type="number" name="year12" id="year12" value={detail.year12 || ''}  className="form-control" placeholder="year of passing" /></div>
//        </div>

//        <div className="mb-3 row">
//          <label htmlFor="Address" className="htmlForm-label">Degree</label>
//          <div className="mb-3 col-3"> <input type="number" name="marksDegree" value={detail.marksDegree || ''}  id="marksDegree" className="form-control" placeholder="marks" /></div>
//          <div className="mb-3 col-3"> <input type="text" name="gradeDegree" value={detail.gradeDegree || ''}  id="gradeDegree" className="form-control" placeholder="grade" /></div>
//          <div className="mb-3 col-3"> <input type="number" name="yearDegree" value={detail.yearDegree || ''}  id="yearDegree" className="form-control" placeholder="year of passing" /></div>
//        </div>
       
//       <button type="submit" onClick={handleAdd} className="btn btn-success">Add</button> 
//       </form>

//     <ApplicationDataList handleEdit={handleEdit} handleDelete={handleDelete} data={detailArr} role={role}/>
//       </div>
//      );
// }

// export default Home;






// TRY

import { useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationDataList from "./ApplicationDataList";
function Home() {
    const {name, role}=useParams();
    const [detail, setdetail]=useState({})
    const [detailArr, setdetailArr]=useState([])
    const [error, setError]=useState({})

    const handleAddChange=(e)=>{
        setdetail({...detail, [e.target.name]:e.target.value})
       }

    const validate=()=>{
        let err={}
        let flag=false;
        if(!detail.fname){
            err.fname="first name required";
            setError(err);
            flag=true;
        }
        if(!detail.mname){
            err.mname="middle name required";
            setError(err);
            flag=true;
        }
        if(!detail.lname){
            err.lname="Last name required";
            setError(err);
            flag=true;
        }
        if(!detail.email){
            err.email="email id required";
            setError(err);
            flag=true;
        }
        if(!detail.building){
            err.building="Enter building name";
            setError(err);
            flag=true;
        }
        if(!detail.area){
            err.area="Enter area";
            setError(err);
            flag=true;
        }
        if(!detail.state){
            err.state="Enter state";
            setError(err);
            flag=true;
        }
        if(!detail.city){
            err.city="Enter city";
            setError(err);
            flag=true;
        }

        if(!detail.gender){
            err.gender="Select gender";
            setError(err);
            flag=true;
        }
        if(!detail.skill){
            err.skill="Enter skills";
            setError(err);
            flag=true;
        }
        if(!detail.marks){
            err.marks="Enter marks";
            setError(err);
            flag=true;
        }
        if(!detail.grade){
            err.grade="Enter grade";
            setError(err);
            flag=true;
        }
        if(!detail.year){
            err.year="Enter passing year";
            setError(err);
            flag=true;
        }

        if(!detail.marks12){
            err.marks12="Enter marks";
            setError(err);
            flag=true;
        }
        if(!detail.grade12){
            err.grade12="Enter grade";
            setError(err);
            flag=true;
        }
        if(!detail.year12){
            err.year12="Enter passing year";
            setError(err);
            flag=true;
        }
        if(!detail.marksDegree){
            err.marksDegree="Enter marks";
            setError(err);
            flag=true;
        }
        if(!detail.gradeDegree){
            err.gradeDegree="Enter grade";
            setError(err);
            flag=true;
        }
        if(!detail.yearDegree){
            err.yearDegree="Enter passing year";
            setError(err);
            flag=true;
        }
        if(flag){
            return true;
        }
        else{
          setError({})
          return false;
        }
    }

    const handleAdd=(e)=>{
        e.preventDefault();
        if(!validate()){
        detailArr.push(detail);
        setdetailArr(detailArr);
        setdetail({});
        console.log(detailArr);
        }
    }

    const handleDelete=(id)=>{
    let newArr= detailArr.filter((item)=>item.email !== id)
    setdetailArr(newArr);
    }

    const handleEdit=(id)=>{
        console.log("edit",id);   
       let newArr= detailArr.filter((item)=>item.email !== id)
       let find= detailArr.find((item)=>item.email == id)
       setdetailArr(newArr);
       setdetail(find)
       }

    return ( 
      <div className="container">
        <h2 className="text-end">Hello {name}</h2>
        <form onChange={handleAddChange}>
        <h1 className='text-center'>Application Form</h1>
        <div className="mb-3 row">
         <label htmlFor="uname" className="htmlForm-label">Enter Name</label>
         <div className="mb-3 col-4"> <input type="text" name="fname" id="fname" value={detail.fname || ''} className="form-control" placeholder="First Name"  />
         <span className="error">{error.fname}</span></div>
         <div className="mb-3 col-4"> <input type="text" name="mname" id="mname" value={detail.mname || ''} className="form-control" placeholder="Middle Name"  />
         <span className="error">{error.mname}</span></div>
         <div className="mb-3 col-4"> <input type="text" name="lname" id="lname" value={detail.lname || ''} className="form-control" placeholder="Last Name" />
         <span className="error">{error.lname}</span></div>
       </div>
       <div className="mb-3">
         <label htmlFor="email" className="htmlForm-label">Enter email</label>
         <input type="text" name="email" id="email" className="form-control" value={detail.email || ''} placeholder="email" />
         <span className="error">{error.email}</span>
       </div>
       <div className="mb-3 row">
         <label htmlFor="Address" className="htmlForm-label">Enter Address</label>
         <div className="mb-3 col-3"> <input type="text" name="building" id="building" value={detail.building || ''} className="form-control" placeholder="building" />
         <span className="error">{error.building}</span></div>
         <div className="mb-3 col-3"> <input type="text" name="area" id="area" value={detail.area || ''} className="form-control" placeholder="area" />
         <span className="error">{error.area}</span></div>
         <div className="mb-3 col-3"> <input type="text" name="state" id="state" value={detail.state || ''} className="form-control" placeholder="state" />
         <span className="error">{error.state}</span></div>
         <div className="mb-3 col-3"> <input type="text" name="city" id="city" value={detail.city || ''} className="form-control" placeholder="city" />
         <span className="error">{error.city}</span></div>
       </div>

       <div className="mb-3 row">
         <label htmlFor="Address" className="htmlForm-label">Gender</label>
         <div className="mb-3 col-1"> Female <input type="radio" name="gender" value={'Female' || ''} placeholder="Female" /></div>
         <div className="mb-3 col-1"> Male <input type="radio" name="gender" value="male" placeholder="male" /></div>
         <span className="error">{error.gender}</span>
       </div>
       <div className="mb-3">
       <label htmlFor="skill" className="htmlForm-label">Enter skills</label>
         <input type="text" name="skill" id="skill" className="form-control"  value={detail.skill || ''} placeholder="skill" />
         <span className="error">{error.skill}</span>
       </div>

       <h3>Education Details</h3>
       <div className="mb-3 row">
         <label htmlFor="Address" className="htmlForm-label">10th</label>
         <div className="mb-3 col-3"> <input type="number" name="marks" id="marks" value={detail.marks || ''}  className="form-control" placeholder="marks" />
         <span className="error">{error.marks}</span>
         </div>
         <div className="mb-3 col-3"> <input type="text" name="grade" id="grade" value={detail.grade || ''}  className="form-control" placeholder="grade" />
         <span className="error">{error.grade}</span>
         </div>
         <div className="mb-3 col-3"> <input type="number" name="year" id="year" value={detail.year || ''}  className="form-control" placeholder="year of passing" />
         <span className="error">{error.year}</span>
         </div>
       </div>

       <div className="mb-3 row">
         <label htmlFor="Address" className="htmlForm-label">12th</label>
         <div className="mb-3 col-3"> <input type="number" name="marks12" id="marks12" value={detail.marks12 || ''}  className="form-control" placeholder="marks" />
         <span className="error">{error.marks12}</span></div>
         <div className="mb-3 col-3"> <input type="text" name="grade12" id="grade12" value={detail.grade12 || ''}  className="form-control" placeholder="grade" />
         <span className="error">{error.grade12}</span></div>
         <div className="mb-3 col-3"> <input type="number" name="year12" id="year12" value={detail.year12 || ''}  className="form-control" placeholder="year of passing" />
         <span className="error">{error.year12}</span></div>
       </div>

       <div className="mb-3 row">
         <label htmlFor="Address" className="htmlForm-label">Degree</label>
         <div className="mb-3 col-3"> <input type="number" name="marksDegree" value={detail.marksDegree || ''}  id="marksDegree" className="form-control" placeholder="marks" />
         <span className="error">{error.marksDegree}</span></div>
         <div className="mb-3 col-3"> <input type="text" name="gradeDegree" value={detail.gradeDegree || ''}  id="gradeDegree" className="form-control" placeholder="grade" />
         <span className="error">{error.gradeDegree}</span></div>
         <div className="mb-3 col-3"> <input type="number" name="yearDegree" value={detail.yearDegree || ''}  id="yearDegree" className="form-control" placeholder="year of passing" />
         <span className="error">{error.yearDegree}</span></div>
       </div>
       
      <button type="submit" onClick={handleAdd} className="btn btn-success">Add</button> 
      </form>

    <ApplicationDataList handleEdit={handleEdit} handleDelete={handleDelete} data={detailArr} role={role}/>
      </div>
     );
}

export default Home;



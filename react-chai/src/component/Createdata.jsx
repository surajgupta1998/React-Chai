import React, { useState,useEffect } from "react";
import "../component/Styles.Css"; // Import your custom CSS for styling the modal

const getDatafromLS=()=>{
  const data = localStorage.getItem('users');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const Createdata = ({isModalOpen,handleClose,entityData,setUsers,Users}) => {
  const handleAddUserSubmit=(e)=>{
    e.preventDefault();
    let user={
      name,
      age,
      hobbies,
      food,
    //   date,
      gender

    }
    setUsers([...Users,user]);
    setAge('')
    setName('')
    setHobbies('')
    setGender('')
    setFood('')
    // setIsModalOpen(false);
    handleClose();
    window.location.reload()
  }

  // const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  // const [users, setUsers]=useState(getDatafromLS());  
  const [name, setName]=useState('');
  const [gender, setGender]=useState('');
  const [food, setFood]=useState('');
  const [hobbies, setHobbies]=useState('');
  const [age, setAge]=useState('');
  
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(Users));
  },[Users])
  

  return (
    <div className="form-container">
      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2>Add User</h2>
            <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddUserSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Age</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setAge(e.target.value)} value={age}></input>
            <br></br>
            {/* <label>DOB</label>
            <DatePicker  selected={date} onChange={(date) => setDate(date)} /> */}
            <br></br>
            <label>Gender</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setGender(e.target.value)} value={gender}></input>
            <br></br>
            <label>Food</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFood(e.target.value)} value={food}></input>
            <br></br>
            <label>Hobbies</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setHobbies(e.target.value)} value={hobbies}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={() => handleClose()} // Close the modal
            >
              Cancel
            </button>
          </form>
          </div>
        </div>
        </div>)}
      
    </div>)
  
};

export default Createdata;

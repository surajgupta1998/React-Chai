import React,{useState,useEffect} from 'react'




const Edit=({isEdit,EditData,EditClose,setUsers,Users})=>{
   
    const handleEditUserSubmit=(e)=>{
        e.preventDefault();
        let user={
          name,
          age,
          hobbies,
          food,
          date,
          gender
        }
        setAge('')
        setName('')
        setHobbies('')
        setGender('')
        setFood('')
        EditClose(user);
        window.location.reload()
      }
  
    const [name, setName]=useState('');
    const [gender, setGender]=useState('');
    const [food, setFood]=useState('');
    const [hobbies, setHobbies]=useState('');
    const [age, setAge]=useState('');
    return(
      <>
      {isEdit && (
          <div className="custom-modal">
            <div className="modal-content">
              
              <div className='form-container'>
              <form autoComplete="off" className='form-group' onSubmit={handleEditUserSubmit}
          >
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} placeholder={EditData.name} value={name}></input>
            <br></br>
            <label>Age</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setAge(e.target.value)} placeholder={EditData.age}  value={age}></input>
            <br></br>
            <label>DOB</label>
            <DatePicker  selected={date} onChange={(date) => setDate(date)} />
            <br></br>
            <label>Gender</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setGender(e.target.value)} placeholder={EditData.gender} value={gender}></input>
            <br></br>
            <label>Food</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFood(e.target.value)} placeholder={EditData.food} value={food}></input>
            <br></br>
            <label>Hobbies</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setHobbies(e.target.value)} placeholder={EditData.hobbies} value={hobbies}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>

              EDIT
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={() => EditClose()} // Close the modal
            >
              Cancel
            </button>
          </form>
            </div>
          </div>
          </div>)}
      </>
    )
  }
  export default Edit
    
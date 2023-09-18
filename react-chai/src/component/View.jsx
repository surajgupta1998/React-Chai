 const View=({isViewopen,viewClose,entityData})=>{
  
  return(
    <>
    {isViewopen && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2>Add User</h2>
            <div className='form-container'>
          <form autoComplete="off" className='form-group'
         >
            <label>Name</label>
            <input type="text" className='form-control' required
             value={entityData.name}></input>
            <br></br>
            <label>Age</label>
            <input type="number" className='form-control' required
             value={entityData.age}></input>
            <br></br>
            <label>DOB</label>
            <DatePicker  selected={date} onChange={(date) => setDate(date)} />
            <br></br>
            <label>Gender</label>
            <input type="text" className='form-control' required
            value={entityData.gender}></input>
            <br></br>
            <label>Food</label>
            <input type="text" className='form-control' required
             value={entityData.food}></input>
            <br></br>
            <label>Hobbies</label>
            <input type="text" className='form-control' required
             value={entityData.hobbies}></input>
            <br></br>

          </form>

          <div>
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={() => viewClose()} // Close the modal
            >
              Cancel
            </button>
          </div>
          </div>
        </div>
        </div>)}
    </>
  )
}
export default View
  
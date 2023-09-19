import React, { useState } from "react";
import "./App.css";
import { Card } from "./component/card";
import View from "./component/View";
import Createdata from "./component/Createdata";
import Edit from './component/Edit'

const getDatafromLS = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function App() {
  const [Users, setUsers] = useState(getDatafromLS());
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [isViewopen, setIsviewOpen] = useState(false);
  const [EditData,setEditData] = useState({})
  const [isEdit,isEditopen]= useState(false)
  const [entityData, setEntityData] = useState({});
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const DeleteUser = (name) => {
    const updateData = Users.filter((element, index) => {
      return element.name !== name;
    });
    setUsers(updateData);
  };
  const showUser = (item) => {
    setEntityData(item);
    setIsviewOpen(true);
  };
  const editUser  = (item) => {
    
    setEditData(item)
    isEditopen(true)
  };
  const viewClose = () => {
    setIsviewOpen(false);
  };
  const EditModalHide=()=>{
    isEditopen(false)
  }
  const EditClose = (item)=>{
    if(item){
    const indexToRemove = Users.findIndex(obj => obj.name === EditData.name && obj.age === EditData.age);
    function removeAtIndex(arr, indexToRemove) {
      if (indexToRemove < 0 || indexToRemove >= arr.length) {
        // Index is out of bounds, return the original array.
        return arr;
      }
      return arr.filter((_, index) => index !== indexToRemove);
    }  
    var updatedArr
    if (indexToRemove !== -1) {
            updatedArr = Users.splice(indexToRemove, 0, item)
             }
             const newArray = removeAtIndex(Users, indexToRemove+1);
    setUsers(newArray)
    isEditopen(false)
  }
  else{
    isEditopen(false)
  }}
  return (
    <>
      <div
        key={entityData.name}
        style={{
          width: "100%",
          lineHeight: "50px",
          height: " 50px",
          marginBottom: "10px",
          backgroundColor: "gray",
        }}
      >
        <h1 style={{ display: "flex", marginLeft: "20px" }}>
          USER'S INVENTORY
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>LIST OF USERS</h4>
        <button
          className="btn btn-primary btn-md"
          onClick={() => setIsModalOpen(true)}
        >
          ADD USER
        </button>
      </div>
      <View
        isViewopen={isViewopen}
        viewClose={viewClose}
        entityData={entityData}
      />
      {/* <Card
        showUser={showUser}
        item={Users}
        setIsviewOpen={setIsviewOpen}
        DeleteUser={DeleteUser}
      /> */}
      <Edit
        isEdit={isEdit}
        EditData={EditData}
        EditClose={EditClose}
        setUsers={setUsers}
        Users={Users}

      />
      <Createdata
        isModalOpen={isModalOpen}
        handleClose={handleClose}
        entityData={entityData}
        setUsers={setUsers}
        Users={Users}
        
      />
      {Users.map((data, index) => (
        <Card
          index={index}
          item={data}
          showUser={showUser}
          setIsviewOpen={setIsviewOpen}
          DeleteUser={DeleteUser}
          editUser ={editUser}
        />
      ))}
    </>
  );
}
export default App
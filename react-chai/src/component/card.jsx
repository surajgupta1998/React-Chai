import React from 'react'

export const Card = (props) => {
    const { item, index, showUser, DeleteUser, editUser } = props
    const Agedata = item.age
    const bg = Agedata <= 25 ? 'green' : Agedata <= 50 ? 'purple' : 'orange';
    const cssdata = {
        borderRadius: "50%", backgroundColor: bg, width: "25px", marginTop: "10px",
        height: "25px"
    }


    return (<>
        
        <div key={index} style={{
            border: "1px solid black", borderRadius: "5px", float: "left",
            width: "25%",
            display: "block",
            margin: "10px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: " space-around",
                float: "left",
                width: "100%",
            }}>
                <p>Name :{item.name}</p>
                <div style={cssdata}></div>
            </div>
            <hr />
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
                <p>Age: {item.age}</p>
                <p>Dob: {item.date}</p>
                <p>Gender {item.gender}</p>
                <p>Food: {item.food}</p>
                <p>Hoobies {item.hobbies}</p>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "8px" }}>
                <button onClick={() => DeleteUser(item.name)}>Delete</button>
                <button onClick={() => showUser(item)}>view</button>
                <button onClick={() => editUser(item.name)}>Edit</button>
            </div>
        </div>
        </>
    )
}

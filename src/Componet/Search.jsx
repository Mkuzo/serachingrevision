import { useState } from "react";

export default function Search(){
    // elias wanyama
    const [searching,setSearching] = useState()
    const [searching2,setSearching2] = useState()
    const [store,setStore] = useState([])
    function handleInput1(e){
        setSearching(e.target.value.toUpperCase())
    }    
    function handleInput2(e){
        setSearching2(e.target.value)
    }
    function searchByName(){
        const getting = employees.filter(function(res){
            return res.name.includes(searching)
        })
        setStore(getting)
        console.log(getting)
    }
    function searchByDepartment(){
        const getting2 = employees.filter(function(res){
            return res.department.includes(searching2)
        })
        setStore(getting2)
        console.log(getting2)

    }
    function searchMoreThan45000(){
        const getting3 = employees.filter(function(res){
            return res.salary > 45000
        })
        setStore(getting3)
    }
    function searchRange(){
        const getting3 = employees.filter(function(res){
           return res.salary >= 30000 && res.salary <= 45000
        })
        setStore(getting3)
    }
    const employees = [
        { id: 1, name: "James", department: "IT", salary: 50000 },
        { id: 2, name: "Sarah", department: "HR", salary: 40000 },
        { id: 3, name: "Michael", department: "IT", salary: 45000 },
        { id: 4, name: "Linda", department: "Finance", salary: 60000 },
        { id: 5, name: "Brian", department: "HR", salary: 44000 }
    ];
    return(
        <div>
            <input type="text" placeholder="Search employees by name" onChange={handleInput1}/>
            <button onClick={searchByName}>Search by employee name</button>
            <input type="text" placeholder="Search employees by department" onChange={handleInput2}/>
            <button onClick={searchByDepartment}>Search By Employee department</button>
            <button onClick={searchMoreThan45000}>More Than 45000</button>
            <button onClick={searchRange}>Range between 30000 and 50000</button>
            {/* <input type="text" placeholder="Search employees by name"/> */}
            <div className="search-card">
                {employees.map(function(res){
                    return(
                    <div className="search" key={res.id}>
                        {/* {employees.map()} */}
                        <div className="text">
                            {res.name}
                        </div>
                        <div className="department">
                            {res.department}
                        </div>
                        <div className="salary">
                            {res.salary}
                        </div>
                    </div>
                    )
                })}
                </div>
                    <h1>Searched Thing</h1>
                <div className="searched-thing">
                    {store.length > 0 ? store.map(function(res){
                    return(
                    <div className="search" key={res.id}>
                    {/* {employees.map()} */}
                    <div className="text">
                        {res.name}
                    </div>
                    <div className="department">
                        {res.department}
                    </div>
                    <div className="salary">
                        {res.salary}
                    </div>
                </div>
                    )
                }):
                "Nothing Exits"}
                </div>
            </div>
        // </div>
    )
}
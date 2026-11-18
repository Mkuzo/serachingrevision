import { useState } from "react";
// import Search from "./Search";

export default function School(){
    const [search,setSearch]= useState()
    const [store,setStore]= useState([])
    const [store2,setStore2] = useState([])
    function handleStudentName(e){
        setSearch(e.target.value)
        console.log('search',search)
    }
    function clickStudentName(){
        const school2 = school.map(function(res){
            const getting = res.students.filter(function(res){
                return res.name.includes(search)
            })
            console.log(getting,'getting searched thing')
            return getting
        })
            // setStore(school2.flat(6))
            console.log(school2.flat(),'school 2')

        // setStore2(store)
        setStore(school2.flat())
    }
            console.log(store,'store')

    const school = [
        {
            id: 1,
            grade: "Grade 6",
            students: [
                { name: "John", marks: [70, 85, 90] },
                { name: "Mary", marks: [45, 60, 75] },
                { name: "Peter", marks: [80, 90, 95] }
            ]
        },
        {
            id: 2,
            grade: "Grade 7",
            students: [
                { name: "Grace", marks: [90, 95, 88] },
                { name: "David", marks: [35, 45, 50] },
                { name: "Sarah", marks: [65, 75, 80] }
            ]
        },
        {
            id: 3,
            grade: "Grade 8",
            students: [
                { name: "James", marks: [55, 60, 70] },
                { name: "Alice", marks: [95, 90, 85] },
                { name: "Brian", marks: [40, 50, 60] }
            ]
        }
    ];
    function handleabove80(){
        school.map(function(res){
           const getting = res.students.filter(function(res){
                return res.marks.some(function(res){
                    return res > 80
                })
            })
            console.log(getting)
            setStore(getting)
        })

    }
    return(
        <div>
            <input type="text" placeholder="search for a student by name" onChange={handleStudentName}/>
            <button onClick={clickStudentName}>Student Name</button>
            <button onClick={handleabove80}>Marks above 800</button>
            {school.map(function(res){
                return(
            <div className="card" key={res.id}>
                <div className="class">
                    {res.grade}
                </div>
                    <table className="student">
                        <tr>
                            <th>Name</th>
                            <th>Mask</th>
                        </tr>
                        {res.students.map(function(res){
                            return(
                                <tr>
                                    <td>{res.name}</td>
                                    <td>{res.marks}</td>
                                </tr>
                            )
                        })}
                        
                    </table>
            </div>
                )
            })}
            <h1>Searched Thing</h1>
            {store.length > 0 ? store.map(function(res){
                return(
            <div className="card" key={res.id}>
                <div className="class">
                    {res.grade}
                </div>
                    <table className="student">
                        <tr>
                            <th>Name</th>
                            <th>Mask</th>
                        </tr>
                        {/* {res..map(function(res){ */}
                            {/* return( */}

                                <tr>
                                    <td>{res.name}</td>
                                    {res.marks.map(function(res){
                                        return(
                                            <td>{res}</td>
                                        )
                                    })}
                                </tr>
                            {/* ) */}
                        {/* })} */}
                        
                    </table>
            </div>
                )
            }):""}
        </div>
    )
}
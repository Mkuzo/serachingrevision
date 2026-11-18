import { useEffect, useState } from "react";

export default function Home() {
        const products = [
        { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
        { id: 2, name: "Shoes", category: "Fashion", price: 2500 },
        { id: 3, name: "Phone", category: "Electronics", price: 30000 },
        { id: 4, name: "Shirt", category: "Fashion", price: 1500 },
        { id: 5, name: "Bag", category: "Accessories", price: 3000 },
        { id: 6, name: "Headphones", category: "Electronics", price: 4000 }
    ]; 
    const [search,setSearch] = useState()
    const [store,setStore] = useState([])
    const [search2,setSearch2] = useState()
    function getting(e){
        setSearch(e.target.value)
    }
    function gettingCategory(e){
        setSearch2(e.target.value)
    }
    function searchByProductname(){
       const saerching = products.filter(function(res){
            return res.name.includes(search)
        })
        console.log(saerching)
        setStore(saerching)
        console.log(search)
    }
    function searchByCategoryName(){
        const byCategory = products.filter(function(res){
            return res.category.includes(search2)
        })
        setStore(byCategory)
        console.log(byCategory)
    }
    function searchByPrice(){
        const byPrice = products.filter(function(res){
            return res.price === parseInt(search2)
        })
        setStore(byPrice)
    }
    function gettingPrice(e){
        setSearch2(e.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="Search Catergory Name" onChange={gettingCategory} />
            <input type="text" placeholder="Search Product Name" onChange={getting} />
            <input type="text" placeholder="Search Price" onChange={gettingPrice}/>
            <button onClick={searchByProductname}>Search By Name</button>
            <button onClick={searchByCategoryName}>Search By Category</button>
            <button onClick={searchByPrice}>ByPrice</button>
            <button>Electronics</button>
            {/* <button></button> */}
            <button>Fashion</button>
            <button>Accesories</button>
            <div className="div">
                            <h1>Searched Things</h1>
                                        {/* <div className="card-container"> */}
                {store.length > 0 ?                  
                store.map(function(res){
                    return(
                
                        // <div>
                        <div className="card">
                            <div className="text">
                                <h1>{res.name}</h1>
                                {/* <p>Price: {r$</p> */}
                            </div>
                        {/* </div> */}
                        </div>
                    )
                }): <p>Dose Not Exits </p> }
            </div>
            <div className="card-container">
            {products.map(function(res){
                return(
                 <div className="card">
                    <div className="text">
                        <h1>{res.category}</h1>
                        {/* <p>Price: {r$</p> */}
                    </div>
                </div>
                )
            })}
        </div>
                    <div className="card-container">
            {products.map(function(res){
                return(
                 <div className="card">
                    <div className="text">
                        <h1>{res.category}</h1>
                        {/* <p>Price: {r$</p> */}
                    </div>
                </div>
                )
            })}
        </div>
            <h1>Product name</h1>
        <div className="card-container">
            {products.map(function(res){
                return(
                 <div className="card">
                    <div className="text">
                        <h1>{res.name}</h1>
                        <p>Price: {res.price}$</p>
                    </div>
                </div>
                )
            })}
        </div>
        </div>
    )
}
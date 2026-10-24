const Navbar = ()=>{
    return(
        <div style={{display:"flex", justifyContent: "space-between", backgroundColor: "blueviolet", borderRadius: "10px"}} >

            <h3>Logo</h3>

            <ul style={{listStyle: "none", display:"flex", gap: "10px", }}>
                <a href="#"><li>home</li></a>
                <a href="#"><li>service</li></a> 
                <a href="#"><li>contact</li></a> 
            </ul>

        </div>
    )
}

export default Navbar
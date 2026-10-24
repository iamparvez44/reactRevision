// import React, { useEffect, useState } from "react";

// const Product = () => {
//   const [ans, setAns] = useState(null);
//   const [loader, setLoader] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/2")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         //   console.log(data);
//         setAns(data);
//         setLoader(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoader(false);
//       });
//   }, []);

//   console.log(ans);

//   return (
//     <div>
//       {loader && <h1>Loading...</h1>}

//       {error.length > 0 && <h1>{error}</h1>}

//       {ans && (
//         <>
//           <h1>{ans.title}</h1>
//           <img src={ans.image} alt="sss" />
//           <p>{ans.price}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Product;



import React, { useEffect, useState } from 'react'

const Product = () => {


    const [product, setProduct] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState("");
    const [productID, setProductID] = useState("");
    const [userInp, setUserInp] = useState("");


    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products/${productID}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProduct(data);
            setLoader(false)
            setError("")
        })
        .catch((error)=>{
            setError(error.message);
            setLoader(false)
            setProduct(null)
        })

    }, [productID])

    console.log(userInp);
    console.log(productID);


  return (
    <div>

        <h1>Products</h1>
        <input type="text"
         placeholder='enter product id' 
      
         onInput={(e)=>{

            setUserInp(e.target.value)
            
         }} />

         <button onClick={()=>{

            setProductID(userInp);

         }} >add ID</button>


         {loader && <h1>Loading...</h1>}
         {error.length > 0 && <h1>{error}</h1>}
         {product && (

            <>
                <h1>{product.title}</h1>
                <img src={product.image} alt="" />
                <p>{product.price}</p>
            </>
         )


         }

    </div>
  )
}

export default Product

import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductPages from './pages/ProductPages';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';

export default function App(){
  return (
    <div>
      <Header/>
      {/* define routes */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/products' element={<ProductPages/>}/>
        <Route path='/product/:id' element ={<ProductPage/>}/>

        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}




















//Ecommerse website
// import React, { useEffect, useState } from 'react'    //rfc and enter
// import FakeStore from './FakeStore';
// export default function App() {
//   let api = "https://fakestoreapi.com/products";
//   let [user, setUsers] = useState([]);

//   async function getDataFromApi() {
//     let response = await fetch(api);
//     let data = await response.json();
//     console.log(data);
//     setUsers(data);
//   }

//   useEffect(() => {
//     getDataFromApi();
//   }, [])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//             <h1><img src="https://tse3.mm.bing.net/th/id/OIP.Bg-URDHLCIF8y2MnDXed2AHaFF?w=218&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"></img>Emazon</h1>
//         </div>
//         <div>


//         </div>
//       </header>
//       <section className="App-body">
//         {user.map((user) => {
//           return (
//             <div className='cards' key={user.id}>
//               <div className="image">
//                 <img src={user.image} alt="image"></img>
//                 <br></br>
//                 <span>{user.rating.rate} &#9733; | {user.rating.count}</span><br/>
//                 <span>{user.category}</span>
//               </div>
//               <div className='details'>
//                 <h2>{user.title}</h2>
//                 <h6>Rs. {user.price}</h6>
//               </div>
//               <div className='wish-add'>
//                 <button className='b1'>Wishlist &#9825;</button>
//                 <button className='b2'>Add to cart &#xf07a;</button>
//               </div>
//             </div>
//           )
//         })}
//       </section>
//     </div>
//   )
// };
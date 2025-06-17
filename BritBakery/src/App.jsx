import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([{
    name: 'Bread',
    price: 5.00,
    description: 'Hey its Bread',
    image: '../Images/download.jpeg'
,    alt: 'Bread'},
{
    name: 'Bread',
    price: 5.00,
    description: 'Hey its Bread',
    image: '../Images/download2.jpeg',
    alt: 'Bread'},
{
    name: 'Bread',
    price: 5.00,
    description: 'Hey its Bread',
    image: '../Images/download3.jpeg',
    alt: 'Bread'},
{
    name: 'Bread',
    price: 5.00,
    description: 'Hey its Bread',
    image: '../Images/download4.jpeg',
    alt: 'Bread'},
{
    name: 'Bread',
    price: 5.00,
    description: 'Hey its Bread',
    image: '../Images/download5.jpeg',
    alt: 'Bread'}])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery products={products} /> } />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

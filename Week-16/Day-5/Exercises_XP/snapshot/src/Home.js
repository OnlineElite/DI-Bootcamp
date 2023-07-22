import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Galery from './components/Galery'
import './Snapshot.css'
import { useParams } from 'react-router-dom'

function Home() {

    const { category } = useParams()
    const [images, setImages] = useState([])
    const [categ, setCateg] = useState('')

    useEffect(()=>{
        setCateg(category)
    }, [category])

    const key ='SudfOrgkIM4WxN76nwjoWP10CznbdWETw0hegTCbV3Kbj3a4vBNRCb6P'


    useEffect(() => {
        const url = `https://api.pexels.com/v1/search?query=${category}`;
        fetch(url, {
          headers: {
            Authorization: key,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data)
            setImages(data.photos);
          })
          .catch((error) => {
            console.error("Error fetching images:", error);
          });
      }, [category]);

    function handellSearch(cat){
      setCateg(cat)
      
      const url = `https://api.pexels.com/v1/search?query=${cat}`;
      fetch(url, {
        headers: {
          Authorization: key,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setImages(data.photos);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
    }

  return (
    <div className="container">
      <Form handellSearch = {handellSearch}/>
      <Header/>
      <Galery images ={{first: images, second: categ}}  />
    </div>
  );
}

export default Home;

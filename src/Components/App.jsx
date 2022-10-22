import React, {useState} from "react"
import * as S from "styled-components"
import Modal from "react-modal"

export default function App(){

    const [openOne, setOpenOne] = useState(false)
    const [openTwo, setOpenTwo] = useState(false)
    const [openThree, setOpenThree] = useState(false)
    const [openFour, setOpenFour] = useState(false)

    function handleListOne(){
        setOpenOne(!openOne)
    }

    function handleListTwo(){
      setOpenTwo(!openTwo)
  }

   function handleListThree(){
     setOpenThree(!openThree)
}

   function handleListFour(){
     setOpenFour(!openFour)
}

    return(
       <S.Body>
        <header>

        </header>

        <main>
        
          <h1>Objetivo de desenvolvimento sustentável</h1>
         <section class="contain-boxes">
         
         <div class="ods-one">
         <button onClick={()=>{handleListOne()}} id="box-one">
            {openOne === false ? "":""}
         </button>
         {openOne && (
            <ul class="list-one">
              <p>AAAAA</p>
              <p>BBBBB</p>
              <p>CCCCC</p>
            </ul>
          )}
          </div>
         
         <div class='ods-two'>
         <button onClick={()=>{handleListTwo()}} id="box-two">
          {openTwo === false ? "":""}
         </button>
         {openTwo &&(
          <ul class="list-two">
            <p>hhhhhhh</p>
            <p>kkkkkkkkkk</p>
            <p>jjjjjjjjjjjj</p>
          </ul>
         )}
         </div>

         <div class="ods-three">
         <button onClick={()=>{handleListThree()}} id="box-three">
          {openThree === false ? "" : ""}
         </button>
         {openThree &&(
          <ul class="list-three">
            <p>hhhhhhh</p>
            <p>kkkkkkkkkk</p>
            <p>jjjjjjjjjjjj</p>
          </ul>
         )}
         </div>
         
         <div class="ods-four">
         <button onClick={()=>{handleListFour()}} id="box-four">
          {openFour === false ? "" : ""}
         </button>
         {openFour &&(
          <ul class="list-four">
            <p>hhhhhhh</p>
            <p>kkkkkkkkkk</p>
            <p>jjjjjjjjjjjj</p>
          </ul>
         )}
        
            </div>
          </section>
        </main>

        <footer>

        </footer>
       </S.Body>
    )
}
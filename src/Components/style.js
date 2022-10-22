import styled from "styled-components"

export const Body = styled.body`
width:100%;
height:96vh;
background:#FCE483;

.contain-boxes{
display:flex;
flex-direction:column;
}

#box-one, #box-two, #box-three, #box-four{
    width:10vw;
    height:15vh;
    border:1px solid black;
    margin-top:1em;
    margin-left:3em;
    border-radius:20px;
}

#contain-btn{
    background:transparent;
    border:none;
    margin-left:50%;
}

h1{text-align:center;}

.ods-one{display:flex;}
.ods-two{diplay:flex;}
.ods-three{diplay:flex;}
.ods-four{diplay:flex;}

.list-one, .list-two, two-three, .list-four{
    width:30%;
    border:2px solid black;
    margin-left:2em;
}
`
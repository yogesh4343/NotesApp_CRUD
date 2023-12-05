import React, { createContext, useContext, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { FaTrash } from "react-icons/fa";
import Editor from './Editor';
import App from './App';
import CreateNote from './CreateNote';


const Context = createContext()

const Note = ({ children }) => {

    const [state, setState] = useState({
        text: "",
        textarea: ""
    })
    const [changeIcon, setChangeIcon] = useState(true)
    const [getIdForUpdate, setGetIdForUpdate] = useState()
    const [array, setArray] = useState(localStorageFunc())


    function localStorageFunc() {
        let get = localStorage.getItem("notesApp")
        if (get === []) {
            return [];
        }
        else {
            return JSON.parse(get);
        }
    }


    function inputFunction(e) {
        setState((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }




    function addButtonFunc() {
        console.log("add BtnClick")
        const val = { id: new Date().getTime().toString(), state }
        console.log(val);
        setArray((prev)=>{
            return[
                ...prev,
                val
        ]
        })
        setState({
            text: "",
            textarea: ""
        })

    }



    useEffect(() => {
        localStorage.setItem("notesApp", JSON.stringify(array))
    }, [array])

    const updateBtn = (FuncId) => {
        setGetIdForUpdate(FuncId)

        setChangeIcon(false)

        array.map((cur, id) => {

            if (cur.id === FuncId) {
                setState({
                    text: cur.state.text,
                    textarea: cur.state.textarea
                })
            }
        })

    }



    const deleteBtnFunc = (i) => {
        console.log("delete id", i)
        let filterArray = array.filter((cur, ind) => {
            console.log("fun id ", cur.id, "and filtr id", i)
            return cur.id !== i
        })
        setArray(filterArray)



    }


    const updateButtonFunc = () => {

        if (changeIcon === false) {

            console.log("update icon ")

            // setArray(
            const ans = array && array.map((cur, i) => {
                if (cur.id === getIdForUpdate) {
                    console.log("cur" ,cur.state.text)

                    return { id:cur.id,
                            state:{
                        text:state.text,
                        textarea:state.textarea
                    } }

                }
                return cur

            })

            console.log(ans)

            setArray(ans)
        }

        setChangeIcon(true)
        setState({
            text:"",
            textarea:""
        })
    }







    return (
        <div>



            <Context.Provider value={{ inputFunction, addButtonFunc, updateButtonFunc, changeIcon, state }} >{children}</Context.Provider>
            <Wrapper >

                <div className="mainCont">
                    <div className="container">


                        {
                          array &&  array.map((cur, i) => {
                                {/* console.log(cur) */ }

                                return (<div className="data" key={cur.id}>
                                    <span className="indexShow"> {i + 1} </span>
                                    <div className="title"> {cur.state.text}  </div>
                                    <span className="movingWidth" />
                                    <div className="description"> {cur.state.textarea} </div>
                                    <div className="updateButton" onClick={() => updateBtn(cur.id)} > ✍🏻 </div>
                                    <div className="button" onClick={() => deleteBtnFunc(cur.id)}> <FaTrash /> </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

// console.log(Context)

// const ExportFunc = () => {
//     return useContext(Context)
// }
export const ExportFunc = () => {
    return useContext(Context)
}



export default Note
// export {Note , Context}










const Wrapper = styled.section`
.container{  margin: 1rem auto; display: flex; gap: 2rem; flex-wrap: wrap; display: contents; }
.data{position:relative; width:18rem; padding:1rem;  }
.data{ box-shadow:8px 9px 19px grey; border-radius:12px; font-size:15px;   }
.text{width:100%; padding:4px; margin: 12px 0px 12px 0px; border:none; font-size:italic;    }
.textarea{width:100%; padding:4px; margin: 0px 0px 12px 0px; border:none; font-size:italic;    }
.button{padding:12px; border-radius:50%; width:50px; height:50px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:-15px; position:absolute;  cursor:pointer;}
.updateButton{padding:12px; border-radius:50%; width:50px; height:50px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:40px; position:absolute;  cursor:pointer;}
.add{padding:12px; border-radius:50%; width:50px; height:50px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:70px; position:absolute;  cursor:pointer;}

.title{ width: 16rem; height: 3rem; padding:12px;  }
.description{ width: 16rem; height: 5rem; padding:12px;  }
.mainCont{display: flex;
    gap: 3.5rem;
    flex-wrap: wrap;
    padding:3.5rem;
    z-index:0;
}
.indexShow{  padding: .7rem; position:absolute;  top: -1rem; left:-1rem; border-radius: 50%; background:black; color:white; font-size:15px;      width: 40px;
    height: 40px; text-align: center; }

.button:hover{ background:white; color:red; font-size:2rem; transition: .4s ease; }
.updateButton:hover{ background:white; color:red; font-size:2rem; transition: .4s ease; }

.movingWidth{animation: borderAnimation 3s linear infinite;
    width: 0% ;
    height:.2rem;
    ${'' /* border: .1rem solid grey; */}
    display:flex;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
    ${'' /* border: .3rem radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 10%, var(--c2) 40%) 30;} */}
${'' /* animations keyframes  */}
}
@keyframes borderAnimation{
    0%{
        width:0% ;
    }
    50%{
        width:17%;
    }
    100%{
        width:35%
    }
}

${'' /* responsive  */}

@media only screen and (max-width: 890px) {
.content{gap:0px; }
}
`;

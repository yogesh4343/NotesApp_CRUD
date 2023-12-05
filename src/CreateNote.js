import React, { useState } from 'react'
import styled  from 'styled-components';
import { ExportFunc, ExportUpdate } from './Note';
// import { fadeIn } from 'react-animations'
// import { bounce } from 'react-animations';
// import Radium, {StyleRoot} from 'radium';


// import { ExportFunc } from './Note';



// console.log(props)


const CreateNote = () => {

    const {   state , inputFunction, addButtonFunc , updateButtonFunc , changeIcon } = ExportFunc()

    // console.log(state)


    
    

  return (

    <Wrapper>
       <div className="heading">   <p>CRUD Operator</p>      </div>
       <div className="container">
            <input type="text" name="text" className="text" onChange={inputFunction}  placeholder="Enter The Title..." value={state.text}  />
                <div className="textareamain">
                    <textarea name="textarea" id="textarea" onChange={inputFunction}  className="textarea" cols="40" rows="10" placeholder="Enter The Note..." value={state.textarea}  ></textarea>
                
                </div>

                {/* button   */}
                {/* <div className="button" onClick={addButtonFunc} > ＋ </div>  */}
                {/* <div className="updateButton" onClick={updateButtonFunc} > ✍🏻 </div>  */}
              { changeIcon === true ?  <div  className="button" onClick={addButtonFunc} > ＋ </div> :
                <div className="updateButton" onClick={updateButtonFunc} > ✍🏻 </div> }
        </div>

    </Wrapper>
  )
}

export default CreateNote














const Wrapper = styled.section`
.container{ width:40%;  margin:4rem auto; gap:1rem; box-shadow:8px 9px 19px grey; border-radius: 12px; padding:12px; position:relative;   }
.text{width:96%; padding:7px; margin:0rem 0rem 1rem 0px; border:none; font-style:italic;   }
.textareamain{
  height: 7rem;  
}
.textarea{ width:96%;   height: 7rem;    padding:6px; border:none; font-style:italic;  }
.button{padding:12px; border-radius:50%; width:60px; height:60px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:-15px; position:absolute;  font-size:25px; cursor:pointer;  animation: animatename 1.5s ease 1s infinite; }
.updateButton{padding:12px; border-radius:50%; width:60px; height:60px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom: -15px; right:-15px; position:absolute;  font-size:25px; cursor:pointer; animation:animatename 1.5s ease 1s infinite }


@keyframes animatename{
  0%{
    transform: scale(1 ,1);
  }
  50%{
    transform: scale(1.2 , 1.2);
  }
  100%{
    transform: scale(1 , 1);
  }
}

${'' /* responsive  */}

@media only screen and (max-width: 1100px) {
    .container{width:50%; }
}
@media only screen and (max-width: 900px) {
    .container{width:60%; }
}
@media only screen and (max-width: 750px) {
    .container{width:70%; }
}
@media only screen and (max-width: 690px) {
    .container{width:90%; }
}
`;
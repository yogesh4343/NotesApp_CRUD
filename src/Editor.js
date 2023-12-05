import React from 'react'
import styled  from 'styled-components';

const Editor = () => {
  return (
    <Wrapper>
    <div className="main_container">
      {/* <div className="main_container">
        <div className="inner_container"> 
        <h4>Updator</h4>
        <div className="title_editor"> <div className="name">Title Editor</div> <div className="ans">qw</div> </div>
        <div className="description_editor"> <div className="name">Description Editor</div> <div className="ans">desc</div> </div>
         </div>
      </div> */}
      <div className="container">
      {/* <div className="inner_container"> */}
            <input type="text" name="text" className="text"  placeholder="Enter The Title..."   />
                <div className="textareamain">
                    <textarea name="textarea" id="textarea" className="textarea" cols="40" rows="10" placeholder="Enter The Note..."  ></textarea>
                
                </div>

                {/* button   */}
                {/* <div className="button"  > ＋ </div>  */}
                {/* <div className="updateButton"  > ✍🏻 </div>  */}
                <div className="updateButton"  > Update  </div> 
        </div>
        </div>
        {/* </div> */}
    </Wrapper>
  )
}

export default Editor

// const Wrapper = styled.section`
// .main_container{
//     width:100vw;
//     height:100vh;
//     background:pink;
//     position:absolute;
//     top:0px;
// }
// `;

const Wrapper = styled.section`
.main_container{
    width:40%;
    height:40%;
    position:absolute;
    top:0px;
    z-index:10;
    background:grey;
}
.container{ width:40%;  margin:4rem auto; gap:1rem; box-shadow:8px 9px 19px grey; border-radius: 12px; padding:12px; position:relative; background:orange; }
.text{width:96%; padding:7px; margin:0rem 0rem 1rem 0px; border:none; font-style:italic;   }
.textarea{ width:96%;  padding:6px; border:none; font-style:italic;  }
.button{padding:12px; border-radius:50%; width:60px; height:60px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:-15px; position:absolute;  font-size:25px; cursor:pointer;  }
.updateButton{padding:12px; border-radius:50%; width:60px; height:60px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom: 55px; right:-15px; position:absolute;  font-size:25px; cursor:pointer;  }

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
    .container{width:75%; }
}
`;
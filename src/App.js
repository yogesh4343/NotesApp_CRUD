
import { useState } from 'react';
import styled  from 'styled-components';
import './App.css';
import CreateNote from './CreateNote';
import Editor from './Editor';
import { ChangeStateFunc, ExportFunc } from './Note';
// import { ChangeStateFunc, ExportFunc, Note } from './Note';
import Note from './Note';


function App() {






  return (
    <Note >

    <Wrapper>
      {/* <div className="app"> */}

        {/* <p>CRUD Application</p> */}

        <CreateNote />
      {/* <Editor /> */}


        {/* <Note /> */}
      {/* </div> */}
    </Wrapper>
    </Note>
  );
}

export default App;





const Wrapper = styled.section`

.app{
  font-family: 'Rajdhani', sans-serif;
}

p{
  width:100%;
  margin:30px 0px 30px 0px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:54px;
  text-shadow: 1px 1px 2px black;
}
`;
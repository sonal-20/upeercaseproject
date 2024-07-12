
import React ,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Up = () => {

    const buttonclick = () => {
        console.log("button click" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText)
     }
     
     const handleonChange = (event) =>{
       console.log("on change")
       setText(event.target.value)
     }

    const [text,setText] = useState("")
  return (
    <div className="d-flex flex-column align-items-center mb-3 p-3 ">
      <div className="w-50 mb-3  ">
        <InputGroup className='mb-3'>
          
          <Form.Control as="textarea" value={text} onChange={handleonChange} aria-label="With textarea" placeholder='Enter text to convert in upper case' rows={8} />
        </InputGroup>
      </div>
      <div>
        <Button variant="primary" onClick={buttonclick}>Convert</Button>
      </div>
    </div>
  )
}

export default Up

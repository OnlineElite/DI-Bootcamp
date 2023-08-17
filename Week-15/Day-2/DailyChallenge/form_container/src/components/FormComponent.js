import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import EnteredInformation from './EnteredInformation'
import '../FormStyle.css'
function FormComponent(){
 
    const [information, setInformation] = useState({
        fname : '',
        lname : '',
        age : '',
        gender : '',
        destination : '',
        nuts : 'No',
        lactose : 'No',
        vegan : 'No'
    })


    const handelChange =(e)=>{
        let _type = e.target.type
        let element = e.target
        let _value = e.target.value
        let _id = e.target.id
        console.log(e.target)
        console.log('_type:' ,_type, '_value:', _value,'_id:' , _id)
        switch(_type){
            case 'text': 
                        (_id === 'firstName')? setInformation({...information, fname : _value})
                        :(_id === 'lastName')? setInformation({...information, lname : _value})
                        : setInformation({...information, age : _value})
                        break;

            case 'radio': 
                        (_id === 'Male')? setInformation({...information, gender : _id})
                        : setInformation({...information, gender : _id})
                        break;

            case 'select-one':
                        setInformation({...information, destination : _value})
                        break;

            case 'checkbox': 
                            (_id === 'Nuts_Free')?
                                (element.checked)? setInformation({...information, nuts : 'Yes'})
                                : setInformation({...information, nuts : 'No'})
                            
                            :(_id === 'Lactose_Free')?
                                (element.checked)? setInformation({...information, lactose : 'Yes'})
                                : setInformation({...information, lactose : 'No'})
                            
                            : (element.checked)? setInformation({...information, vegan : 'Yes'})
                                : setInformation({...information, vegan : 'No'})
                            break;
                            

            default: setInformation({fname : 'hello',
            lname : 'hellow',
            age : '',
            gender : '',
            destination : '',
            nuts : 'No',
            lactose : 'No',
            vegan : 'No'})
        }
    }

    return(
        <div className='frm'>
            <h1>Sample form</h1>
            <form className='form'>
                <input onChange={handelChange} type='text' id='firstName' placeholder='First Name' name='firstName' />
                <input onChange={handelChange} type='text' id='lastName' placeholder='Last Name' name='lastName' />
                <input onChange={handelChange} type='text' id='age' placeholder='Age' name='age'/>
                <br/>
                <InputWithLabel onChange={handelChange} type='radio' label ='Male'  id='Male' name='gender' />
                <InputWithLabel onChange={handelChange} type='radio' label ='Female' id='Female' name='gender'  />
                
                
                <p>Select your destination</p>
                <select onChange={handelChange} type= 'option' name='destination' >
                    <option>--Plase choose a destination--</option>
                    <option>Thailand</option>
                    <option>Japan</option>
                    <option>Brazil</option>
                </select>
                <br/><br/>
                <p>Dietary restrictions:</p>
                <InputWithLabel onChange={handelChange} type='checkbox' label ='Nuts Free' id='Nuts_Free' name='Nuts_Free' />
                <InputWithLabel onChange={handelChange} type='checkbox' label ='Lactose Free' id='Lactose_Free' name='Lactose_Free' />
                <InputWithLabel onChange={handelChange} type='checkbox' label ='Vegan' id='Vegan' name='Vegan' />
                <br/>
                <button type='submit' >Submit</button>
            </form>
            <hr/>
            <EnteredInformation information = {information} />
        </div>
    )
}

export default FormComponent;
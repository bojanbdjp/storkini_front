import React, {useState} from 'react'
import Input from 'rsuite/Input';
import InputGroup from 'rsuite/InputGroup';
import SearchIcon from '@rsuite/icons/Search';
import AsyncSelect from 'react-select/async';
import api from '../../env'
import './SearchBar.css'



function SearchBar() {

    const [input, setinput] = useState('');

    const loadOptions = (input, callback) => {
        let newArr = [];
        api.get('/searchByName', {
            params: {
              name: input,
            }
          })
        .then(res => {
            if(res.data)
                callback(res.data.map(el => {return {label: el.name, value: el.type}} ))
         })
        .catch(err => console.log("greska: ", err))

        return newArr;
    }
    return (
        //<div className="row px-0">
            /* <div className="col-12 border mx-auto mainDiv" >
            <InputGroup className="inputGroup m-2" >
                <Input placeholder="Gde putujete.."/>
                <InputGroup.Button >
                    <SearchIcon style={{fontSize: '1.7em'}}/>
                </InputGroup.Button>
            </InputGroup>
            </div> */

            <div className="col-12 mx-auto mainDiv" >
            <AsyncSelect
                value={input}
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={(val) => setinput(val)}
            />
            </div>
            
        // </div>
    )
}

export default SearchBar

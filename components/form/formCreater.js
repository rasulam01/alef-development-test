import './formCreater.css'
import { useState, useEffect } from 'react'

export const FormCreater = ({ data, setData, hideCreater }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    
    
    const setNameValue = (e) => {
        setName(e.target.value)
    }
    const setAgeValue = (e) => {
        setAge(e.target.value)
    }

    const saveInfo = () => {
        const object = {
            name: name,
            age: age
        }
        const temp = [...data]
        temp.push(object)
        setData([...temp])             
        hideCreater()
        
    }

    return (
        <>
          <div className="form-creater">
              <div className="form-creater-shell">
                  <div className="form-creater-title">
                    Информация о человеке
                  </div>
                  <div className="form-creater-inputs">
                      <div className="form-creater-input">
                        <input type="text" value={name} placeholder="Имя" onChange={setNameValue} />
                      </div>
                      <div className="form-creater-input">
                        <input type="text" value={age} placeholder="Возраст" onChange={setAgeValue} />
                      </div>
                  </div>
                  <button className="form-creater-button" onClick={saveInfo}>Создать</button>
              </div>
          </div>
        </>
    )
}
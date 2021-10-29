import "./form.css";
import { useState } from "react";
import { FormCreater } from "./formCreater";

export const Form = ({ data, setData, setPersonal }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [visible, setVisible] = useState(false);
  

  const setNameValue = (e) => {
    setName(e.target.value);
  };
  const setAgeValue = (e) => {
    setAge(e.target.value);
  };
  const showCreater = () => {
    setVisible(true);
  };
  const hideCreater = () => {
    setVisible(false);
  };

  const deleteData = (pos) => {
      const temp = [...data]
      temp.splice(pos, 1)
      setData(temp)
      let items = JSON.parse(localStorage.getItem("data"));
      items.splice(pos, 1)
      console.log(items);
      localStorage.setItem("data", JSON.stringify(items));
      if (items.length === 0) {
        localStorage.removeItem("data");
      }
    

  }



  

  const saveData = () => {
      const object = {
          name: name,
          age: age
      }
      
      const temp = []
      temp.push(object)
      setPersonal(temp)
      localStorage.setItem('personal', JSON.stringify(temp))
      localStorage.setItem('data', JSON.stringify(data))

  }
  return (
    <>
      <div className="form">
        <div className="form-shell">
          <div className="form-shell-personal">
            <div className="form-shell-personal-title">
              <span>Персональные данные</span>
            </div>
            <div className="form-shell-personal-name">
              <div>Имя</div>
              <div>
                <input type="text" value={name} onChange={setNameValue} />
              </div>
            </div>
            <div className="form-shell-personal-age">
              <div>Возраст</div>
              <div>
                <input type="text" value={age} onChange={setAgeValue} />
              </div>
            </div>
          </div>
          <div className="form-shell-children">
            <div className="form-shell-children-title">
              <span>Дети (макс. 5): {data.length}/5</span>
              {data.length < 5 ? <button className="form-shell-children-add" onClick={showCreater}>
                + Добавить ребенка
              </button> : null}
              
            </div>
            <div className="form-shell-children-content">
              {data.map((child, pos) => (
                <div className="child-block" key={child.id}>
                  <div className="child-block-name">
                    <div>Имя</div>
                    <div>
                      <span>{child.name}</span>
                    </div>
                  </div>
                  <div className="child-block-age">
                    <div>Возраст</div>
                    <div>
                      <span>{child.age}</span>
                    </div>
                  </div>
                  <div className="child-block-delete" onClick={() => deleteData(pos)}>Удалить</div>
                </div>
              ))}
            </div>
            <button className="form-shell-children-save" onClick={saveData}>Сохранить</button>
          </div>
        </div>
        {visible ? (
          <>
            <FormCreater
              data={data}
              setData={setData}
              hideCreater={hideCreater}
            />
            <div className="cover" onClick={hideCreater} />
          </>
        ) : null}
      </div>
    </>
  );
};

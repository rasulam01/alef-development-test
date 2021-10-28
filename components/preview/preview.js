import "./preview.css";
import { useEffect } from "react";

export const Preview = ({ personal, data }) => {
  useEffect(() => {
    console.log(personal);
  });
  return (
    <>
      <div className="preview">
        <div className="preview-shell">
          <div className="preview-personal">
            <div className="preivew-personal-title">Персональные данные</div>
            <div className="preview-personal-info">
              {personal ? personal[0].name + ", " + personal[0].age + " лет " : null}
            </div>
          </div>
          <div className="preview-children">
            <div className="preview-children-title">Дети</div>
            <div className="preview-children-info">{data.map((child) => (
                <div className="preview-children-data" key={child.id}>
                  {child.name + ', ' + child.age + ' лет '}
                </div>
            ))}</div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import "../Discussions/style.scss";
import { NavLink } from "react-router-dom";
const Discussions = () => {
  return (
    <div id="discussions">
      <div className="blocks">
        <div className="blocks--greyBlock">
          <h2>Обсуждения</h2>
          <p>
            На данной странице человек может посмотреть актуальные проблемы, при
            необходимости добавить и присоединиться к обсуждению,
          </p>
          <button>Создать обсуждения</button>
        </div>
      </div>
    </div>
  );
};

export default Discussions;

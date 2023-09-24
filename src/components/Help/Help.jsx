import React from "react";
import "../Help/style.scss";
const Help = () => {
  return (
    <div id="help">
      <div className="block">
        <div className="block--reg">
          <center>
            <h1>Как зарегаться на наш сайт?</h1>
          </center>

          <div className="block--reg__greyBlock">
            <h2>
              Чтобы зарегаться нужно перейти в раздел регистрации,если у вас
              есть аккаунт то можете выполнить вход в разделе войти.
            </h2>
          </div>
        </div>
        <div className="block--blocks">
          <div className="block--blocks__3con">
            <div className="block--blocks__3con--con1"></div>
            <div className="block--blocks__3con--con2"></div>
            <div className="block--blocks__3con--con3"></div>
          </div>
          <div className="block--blocks__information">
            <div className="block--blocks__information--infoBlock">
            <h3>Нашу платформу можно сказать мостом между народом и гос
              органоми,что представляет наш сайт? пройдемся по пунктам: <br />
              1)это главная страница там можно расмотривать петиции и следить за
              свежими новостями так и расмотривать новые законы также за теми
              которые на стадии обсуждения,а также вы можете поддержать ту идею
              которая вам понравилась <br /> 2)это страница статьи там вы можете
              рассматривать интересные вам статьи и быть всегда в курсе новостей
              3)Интерактив эта
              </h3>
            </div>
          </div>
        </div>
        <div className="block--bok">
          <h1>Хотите развлечться?</h1>
          <div className="block--bok__bokk">
            <h2>
              Тогда мы вам предлагаем поучаствовать в наших различных
              юридических иннерактивов,при успешном прохождении вы получаете
              (point). C помощю point вы сможете участвовать в различных
              конкурсах
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

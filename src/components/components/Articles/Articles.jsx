import React, { useState } from "react";
import "./Article.scss";
import { ArrArticle } from "./ArrArticle.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import SendIcon from "@mui/icons-material/Send";
import { Dialog, DialogTitle } from "@mui/material";

const Article = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div id="article">
      {ArrArticle.map((el) => {
        return (
          <div className="blocks">
            <div className="blocks--block">
              <div className="blocks--block__image">
                <img src={el.img} alt="" />
              </div>
              <div className="blocks--block__icons">
                <FavoriteBorderIcon
                  className={`blocks--block__icons--favorite ${
                    isFavorite ? "favorite-selected" : ""
                  }`}
                  onClick={handleFavoriteClick}
                />

                <SendIcon
                  className="blocks--block__icons--send"
                  onClick={handleModalOpen}
                />
              </div>
              <div className="blocks--block__bio">
                <p>{el.biography}</p>
              </div>
              <Dialog
                
                open={modalOpen}
                onClose={handleModalClose}
              >
                <DialogTitle>Поделиться</DialogTitle>
                <div>
                  {" "}
                  <a href="https://web.whatsapp.com/">
                    <WhatsAppIcon />
                  </a>
                  <a href="https://web.telegram.org/a/">
                    <TelegramIcon />
                  </a>
                </div>
              </Dialog>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Article
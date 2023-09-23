import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComent: (comment: string) => void;
}
export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  const [likesQuantity, setLikesQuantity] = useState(0);
  function handleLikesQuantity() {
    setLikesQuantity(likesQuantity + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yujiarima17.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="8 de Setembro às 10:58 "
                dateTime="2023-09-08 10:58:30"
              >
                Cerca de uma hora atrás
              </time>
            </div>
            {/* adicionar o atributo title apenas para botoes apenas ícones */}
            <button title="Deletar Comentário" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
        </div>

        <p>{content}</p>
        <footer>
          <button onClick={handleLikesQuantity}>
            <ThumbsUp />
            Aplaudir <span>{likesQuantity}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

// props = objeto que contém todas as propriedades de um componente JSX
// propriedades alteram elementos visuais de um componentes mantendo a flexibilidade
//  de conteúdos semelhantes em componentes reutilizáveis
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { Comment } from "./Comment.js";
import { Avatar } from "./Avatar.js";
import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content {
  type: "paragraph" | "link";
  content: string;
}
interface PostProps {
  author: Author;
  publishedAt: Date;
  context: Content[];
}
export function Post({ author, publishedAt, postContent }: PostProps) {
  const [comments, setComments] = useState(["Post bacana !Hein"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleValidateComment(event: InvalidEvent<HTMLTextAreaElement>) {
    // customizacao do texto de erro padrão do HTML
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    // limpa o campo de textarea
    setNewCommentText("");
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function handleDeleteComments(commentToDelete: string) {
    // criar uma valor novo é melhor do que alterar um já existente.
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }
  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          {/* quando omitimos um valor bool de uma prop React, é sinalizado que será true  */}
          <Avatar hasBorder src={author.avatarUrl} alt="foto de perfil"/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {postContent.map((contentItem) => {
          if (contentItem.type === "paragraph") {
            return <p key={contentItem.content}>{contentItem.content}</p>;
          } else if (contentItem.type === "link") {
            return (
              <p>
                <a href="" key={contentItem.content}>
                  {contentItem.content}
                </a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        {/* prop name para pegar o input do usuário */}
        <textarea
          placeholder="Deixe um comentário!"
          name="comment"
          // praticando programação declativa, a textarea reflete o useState. iterando a textarea de forma indireta
          value={newCommentText}
          onChange={handleNewCommentChange}
          // prop ligada a invalidadacao da textarea quando nao é inserido valor
          onInvalid={handleValidateComment}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={handleDeleteComments}
            />
          );
        })}
      </div>
    </article>
  );
}

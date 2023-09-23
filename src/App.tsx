import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
// author : {avatar_url : "", name: "", role: ""}
// publishedAt : Date
// content : String

// simulando retorno do back-end
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yujiarima17.png",
      name: "Yuji Miguel Arima",
      role: "Student",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },

      {
        type: "paragraph",
        content: "Acesse e deixe seu feedback yuji.design",
      },
    ],
    publishedAt: new Date("2023-09-08 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://s2-ge.glbimg.com/bNmJbzbsU99o9naNsLC9feIwRSc=/0x0:1070x666/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/u/Q/PyTHHCSQOWvKafLB86AA/captura-de-tela-2022-01-25-as-10.28.06.png",
      name: "Casimiro Miguel",
      role: "Streamer",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo projeto pessoal. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },

      {
        type: "paragraph",
        content: "Acesse e deixe seu feedback caze.design",
      },
    ],
    publishedAt: new Date("2023-09-12 20:00:00"),
  },
];

//
function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              // propriedade key - identificacao de childs dentro de uma array
              <Post
                key={post.id}
                author={post.author}
                postContent={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;

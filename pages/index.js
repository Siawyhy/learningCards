import CardList from "../components/cardList/CardList.js";
import Head from "next/head.js";


const Home = () => (
  <>
    <Head>
      <title>Cards</title>
      <meta
        name="description"
        content="Учите, создавайте новые, карточки для изучения английского языка. Доступно без смс и регистрации">
      </meta>
    </Head>
    <main className="main">
      <CardList/>
    </main>
    <div className="abysal">
      <div className="abysal_wrapper">
        <div className="abysal_blur"></div>
      </div>
    </div>
  </>
)

export default Home;
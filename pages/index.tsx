import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sitio web con Grid</title>
        <link rel="stylesheet" href="main.css" />
      </Head>

      <main className={styles.main}>
        <section id="menu">
          <div className="tile about-tile">
            <a href="#about" id="boton">
              <div className="front"></div>
              <div className="back">ABOUT</div>
            </a>
          </div>
          <div className="tile projects-tile">
            <a href="#projects">
              <div className="front"></div>
              <div className="back">PROJECTS</div>
            </a>
          </div>
          <div className="tile posts-tile">
            <a href="#posts">
              <div className="front"></div>
              <div className="back">POSTS</div>
            </a>
          </div>
          <div className="tile contact-tile">
            <a href="#contact">
              <div className="front"></div>
              <div className="back">CONTACT</div>
            </a>
          </div>
        </section>

        <About />

        <section id="projects">
          <div className="tile main-photo">
            <h2>POSTS</h2>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              iusto soluta voluptate accusamus est praesentium at architecto
              nostrum inventore, a molestias eaque minus sequi magni distinctio
              fuga eveniet asperiores consequuntur.
            </div>
          </div>
          <div className="tile photo-2">
            <a href="#"></a>
          </div>
          <div className="tile photo-3">
            <a href="#"></a>
          </div>
          <div className="tile photo-4">
            <a href="#"></a>
          </div>
          <div className="tile photo-5">
            <a href="#"></a>
          </div>
          <div className="tile photo-17">
            <a href="#"></a>
          </div>
          <div className="tile photo-6">
            <a href="#"></a>
          </div>
          <div className="tile photo-7">
            <a href="#"></a>
          </div>
          <div className="tile photo-8">
            <a href="#"></a>
          </div>
          <div className="tile photo-9">
            <a href="#"></a>
          </div>
          <div className="tile photo-10">
            <a href="#"></a>
          </div>
          <div className="tile photo-11">
            <a href="#"></a>
          </div>
          <div className="tile photo-12">
            <a href="#"></a>
          </div>
          <div className="tile photo-13">
            <a href="#"></a>
          </div>
          <div className="tile photo-14">
            <a href="#"></a>
          </div>
          <div className="tile photo-15">
            <a href="#"></a>
          </div>
          <div className="tile photo-16">
            <a href="#"></a>
          </div>
        </section>

        <section id="posts">
          <div className="post post-1">
            <a href="#">
              <div className="title">
                <h3>La ciencia detras del arte</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente iure nesciunt atque nam illo dolore ipsa asperiores
                  cumque
                </p>
              </div>
            </a>
          </div>
          <div className="post post-2">
            <a href="#">
              <div className="title">
                <h3>La ciencia detras del arte</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente iure nesciunt atque nam illo dolore ipsa asperiores
                  cumque
                </p>
              </div>
            </a>
          </div>
          <div className="post post-3">
            <a href="#">
              <div className="title">
                <h3>La ciencia detras del arte</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente iure nesciunt atque nam illo dolore ipsa asperiores
                  cumque
                </p>
              </div>
            </a>
          </div>
          <div className="post post-4">
            <a href="#">
              <div className="title">
                <h3>La ciencia detras del arte</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente iure nesciunt atque nam illo dolore ipsa asperiores
                  cumque
                </p>
              </div>
            </a>
          </div>
          <div className="post post-5">
            <a href="#">
              <div className="title">
                <h3>La ciencia detras del arte</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente iure nesciunt atque nam illo dolore ipsa asperiores
                  cumque
                </p>
              </div>
            </a>
          </div>
          <div className="post post-6">
            <a href="#">
              <div className="title">
                <h3>La ciencia detras del arte</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente iure nesciunt atque nam illo dolore ipsa asperiores
                  cumque
                </p>
              </div>
            </a>
          </div>
        </section>

        <section id="contact">
          <form action="">
            <h2>CONTACT ME</h2>
            <label>Name</label>
            <input type="text" />

            <label>Subject</label>
            <input type="text" />

            <label>Subject</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>

            <input type="submit" value="Enviar" />
          </form>
          <div className="social-networks">
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

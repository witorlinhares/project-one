import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo/isologo-white.png'

document.addEventListener('mousemove', function(e) {
  const cursor = document.getElementById('cursor');
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header>

          <div class="navbar">
              <img a  class="logo_header" src={logo} alt="logo"/> 
              <ul class="links">
                <li><a href="#home">Início</a></li>
                <li><a href="#about">Sobre nós</a></li>
                <li><a href="#activity">Atuação</a></li>
                <li><a href="#testimonials">Clientes</a></li>
              </ul>
              <a href="#contact" class="action_btn">Orçamento</a>
              <div class="toggle_btn"><i class="fa-solid fa-bars"></i>
              </div>
          </div>

          <div class="dropdown_menu">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#activity">Atuação</a></li>
            <li><a href="#testimonials">Clientes</a></li>
            <li><a href="#contact" class="action_btn">Contato</a></li>
          </div>

        </header> 

        <main>
            <section id="home">
                <h1>Especialista em direito criminal<br/>defendendo seus direitos com<br/>integridade e profissionalismo</h1>
                <p>Com vasta experiência em casos complexos, nossa equipe está<br/>comprometida em oferecer uma defesa sólida
                    e estratégica,<br/> garantindo seus direitos em todas as etapas do processo.</p>
                <a class="btn_home" href="#">Falar com Especialista</a>
            </section>

            <section id="about">
                <div class="image_about">
                    <img class="img" src="../src/assets/images/image_section_about.jpg" alt="imagem"/>
                </div>

                <div class="info">
                    <p class="title_section_about">Dr. João Silva</p>
                    <p class="description_two">É Advogado criminal com 25 anos de experiência, doutorando em Direito Penal
                        pela Universidade de Salamanca. Mestre e pós-graduado em Direito Penal, formou-se pela Universidade
                        Federal Fluminense. Atuou no Sindicato da Polícia Federal do RJ e na operação Lava Jato. Autor de um
                        livro sobre gestão penitenciária, tem escritório no Centro do Rio de Janeiro, especializado em
                        defesa criminal em inquéritos, ações penais e procedimentos em todas as instâncias, incluindo STJ e
                        STF.</p>
                    <a href="#contact" class="btn_about">Entrar em contato</a>
                </div>
            </section>

            <section id="activity">

                <h1 class="title_section">Conheça nossas especialidades</h1>

                <div class="container">
                    <div class="card">
                        <div class="icon"></div>
                        <h1>Defesa criminal</h1>
                        <div class="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                                ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                                dignissimos quisquam, neque tenetur? Pariatur, cum?</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="icon"></div>
                        <h1>Atuação defensiva</h1>
                        <div class="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                                ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                                dignissimos quisquam, neque tenetur? Pariatur, cum?</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="icon"></div>
                        <h1>Prisões em flagrante</h1>
                        <div class="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                                ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                                dignissimos quisquam, neque tenetur? Pariatur, cum?</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="icon"></div>
                        <h1>Interposição de Recursos</h1>
                        <div class="content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis error est sequi. Ab et
                                ipsam aut, debitis repellat dolorum consequuntur rerum modi, molestias praesentium
                                dignissimos quisquam, neque tenetur? Pariatur, cum?</p>
                        </div>
                    </div>
                </div>
                <a class="btn_activity" href="#">Falar com Especialista</a>

            </section>

            <section id="testimonials" class="testimonials mySwiper">
                <div class="testimonials_box swiper-wrapper">

                    <div class="slide swiper-slide">
                        <p class="testimonials_text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.<br/>Perspiciatis
                            dignissimos consectetur non fugit quasi.</p>
                        <div class="person">
                            <img class="image_person" src="assets/images/1.png" alt="Person_one"/>
                            <div class="info_person">
                                <p class="name_person">Letícia</p>
                                <p class="details_person">Paraná</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide swiper-slide">
                        <p class="testimonials_text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.<br/>Perspiciatis
                            dignissimos consectetur non fugit quasi.</p>
                        <div class="person">
                            <img class="image_person" src="assets/images/2.png" alt="Person_two"/>
                            <div class="info_person">
                                <p class="name_person">André</p>
                                <p class="details_person">São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide swiper-slide">
                        <p class="testimonials_text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.<br/>Perspiciatis
                            dignissimos consectetur non fugit quasi.</p>
                        <div class="person">
                            <img class="image_person" src="assets/images/3.png" alt="Person_three"/>
                            <div class="info_person">
                                <p class="name_person">Bárbara</p>
                                <p class="details_person">Minas Gerais</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide swiper-slide">
                        <p class="testimonials_text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.<br/>Perspiciatis
                            dignissimos consectetur non fugit quasi.</p>
                        <div class="person">
                            <img class="image_person" src="assets/images/4.png" alt="Person_four"/>
                            <div class="info_person">
                                <p class="name_person">Joana</p>
                                <p class="details_person">Fortaleza</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide swiper-slide">
                        <p class="testimonials_text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.<br/>Perspiciatis
                            dignissimos consectetur non fugit quasi.</p>
                        <div class="person">
                            <img class="image_person" src="assets/images/5.png" alt="Person_five"/>
                            <div class="info_person">
                                <p class="name_person">Thiago</p>
                                <p class="details_person">Rio de Janeiro</p>
                            </div>
                        </div>
                    </div>

                    <div class="slide swiper-slide">
                        <p class="testimonials_text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.<br/>Perspiciatis
                            dignissimos consectetur non fugit quasi.</p>
                        <div class="person">
                            <img class="image_person" src="assets/images/6.png" alt="Person_six"/>
                            <div class="info_person">
                                <p class="name_person">Mariana</p>
                                <p class="details_person">Santa Catarina</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </section>
            <section id="contact">
                <h2 class="description_one">Entre em contato</h2>
                <div class="info5">
                    <form action="submit">
                        <div>
                            <label for="name">Nome:</label>
                            <input id="name" type="text" placeholder="Nome"/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input id="email" type="email" placeholder="E-mail"/>
                        </div>
                        <div>
                            <label for="phone">Telefone:</label>
                            <input id="phone" type="text" placeholder="Telefone"/>
                        </div>
                        <div>
                            <label for="message">Mensagem:</label>
                            <textarea id="message" placeholder="Mensagem"></textarea>
                        </div>
                        <button class="btn_general" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </main>

        <footer>
            <div class="footer_content">
                <div class="info_company">
                    <a><img class="logo_footer" src={logo} alt="logo"/></a>
                    <p>CNPJ: 38.481.564/0001-66</p>
                </div>
            </div>
            <div class="footer_copyrighy">&copy; 2024 Codixp - All rights reserverd.</div>
        </footer>
      </div>
    );
  }
}

export default App;

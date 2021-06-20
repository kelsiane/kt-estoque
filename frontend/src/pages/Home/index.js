import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/text10.png";
import mokaup from "../../img/mokaup.PNG";
import imgProduct from "../../img/ilustra-produtos.png";
import imgFornecedores from "../../img/ilustra-fornecedores.png";
import imgRelatorios from "../../img/ilustra-relatorios.png";
export default function Home() {
  return (
    <>
      <section>
        <div className="container-ini">
          <div className="container-nav" id="container-nav">
            <header>
              <nav>
                <img src={logo} align="left" alt="logo" />
                <a href="#container-nav">Página inicial</a>
                <a href="#container-funcionalidades">Funcionalidades</a>
                <a href="#footer">Contato</a>
                <Link to="/login">
                  <button>ACESSAR</button>
                </Link>
              </nav>
            </header>
          </div>
          <div className="container-home" id="container-home">
            <h1>TURBINE O CONTROLE DE ESTOQUE DA SUA EMPRESA</h1>
            <h2>
              Todos os produtos da sua empresa sob controle para você acessar de
              onde você estiver.
            </h2>
            <Link to="/login">
              <button>COMECE A USAR GRATUITAMENTE</button>
            </Link>
          </div>

          <div className="image">
            <img src={mokaup} height="50%" width="50%" alt="mokaup" />
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-funcionalidades"
          id="container-funcionalidades"
        >
          <i class="fa fa-cog" aria-hidden="true" height="50%" width="50%"></i>

          <h2>Funcionalidades</h2>

          <div className="container-grid">
            <div className="card">
              <img src={imgFornecedores} alt="fornecedores" />
              <h3>Cadastro de Fornecedores</h3>

              <p>
                Cadastrar seus fornecedores, fabricantes ajudará você a conhecer
                quem são seus melhores parceiros na hora de comprar.
              </p>
            </div>
            <div className="card">
              <img src={imgProduct} alt="produtos" />
              <h3>Cadastro de Produtos</h3>

              <p>
                Todos os produtos sob controle é o primeiro passo <br></br>
                para turbinar a gestão de estoque da sua empresa.
              </p>
            </div>
            <div className="card">
              <img src={imgRelatorios} alt="ilustra-relatorios" />
              <h3>Relatórios</h3>

              <p>
                Registre as movimentações de entrada e saída de <br></br>
                produtos do seu estoque de forma rápido e fácil.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="footer" id="footer">
        <h1>Fale conosco</h1>
        <div>
          <i class="fa fa-map-marker pr-10 text-default"></i>
          <a href="https://www.google.com.br/maps/place/Reserva+Extrativista+Prainha+Do+Canto+Verde/@-4.316114,-37.9514284,13z/data=!4m5!3m4!1s0x7b8660a806a763b:0xdb174ea328c034a8!8m2!3d-4.3172266!4d-37.9317999">
            Endereço: Prainha do Canto Verde, Beberibe, Ceará, 62840-000 Brasil.
          </a>
        </div>
        <div>
          <i class="fa fa-map-marker pr-10 text-default"></i>
          <a href="https://api.whatsapp.com/send?phone=5588981283542&text=Mande%20sua%20mensagem!">
            Celular: (88) 981293542
          </a>
        </div>
        <div>
          <i class="fa fa-map-marker pr-10 text-default"></i>
          <a href="mailto:kelsianesilva74@gmail.com?subject=Hello">
            Email: kelsianesilva74@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

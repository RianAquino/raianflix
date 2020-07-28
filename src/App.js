import React from 'react';

import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain 
        videoTitle="O Ralo do Oceano"
        videoDescription="Prestes a chegar em 2 milhões de inscritos, Davi Gamer grava vídeo sobre uma construção incrível feito em alto mar
        no jogo minecraft: o ralo do oceano. Assista e fique por dentro da aventura de Davi e da RedstoneGang."
        url="https://www.youtube.com/watch?v=E9S1IkDrGQU"
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </div>
  );
}

export default App;

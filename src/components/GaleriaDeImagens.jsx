import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiit9QRo2rIWyHxyuGGjStLZQoxMy71jhvwg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYsUg9Y0I3PCDGY0kA2F45HXQmtv1vyg0SA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUFxeac1M0SKu75qf9rv2VjNFtxp7o6r37A&s'
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQDxrokSDPq_C5_1Rt6ujce-X8KpuIoE8zw&s']);
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens;
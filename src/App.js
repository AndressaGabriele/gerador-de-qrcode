import { useState } from "react";
import QRCodeLink from "qrcode"
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,

    }, function(err, url){
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">
      <h1>Gerador QRcode</h1>
      <QRCode value={link} />
      <input
        className="input"
        placeholder="Digite seu link..."
        value={link}
        onChange={(e) => handleQrcode(e)}
      />
      <a href={qrcodeLink} download={'qrcode.png'}>Baixar o QRCode</a>
    </div>
  );
}

export default App;

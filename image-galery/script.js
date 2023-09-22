async function getFoto() {
    const img = new Image();
    const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=6pJV3K7B93fP_mmR31tE_zXipoY-1wqf8aUuukVWG3c';
    const res = await fetch(url);
    const data = await res.json();
    const src = await data.urls.regular;
    const urlSRc = `url(${src})`;
    img.src = await src;
    img.onload = () => {
      document.body.style.backgroundImage = urlSRc;
    };
  }

  getFoto()
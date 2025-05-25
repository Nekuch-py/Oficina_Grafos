`grafos.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Introdução a Grafos</title>
<style>
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
  header {
    text-align: center;
    margin-bottom: 3rem;
  }
  header h1 {
    font-size: 2.25rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  header h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0.5rem 0 0 0;
    font-style: italic;
  }
  main {
    width: 100%;
    max-width: 900px;
    background: rgba(255 255 255 / 0.1);
    border-radius: 15px;
    padding: 1.5rem 2rem;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  }
  .introducao {
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  .introducao strong {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    color: #ffd700;
  }
  .composicao {
    font-size: 1.2rem;
    line-height: 1.7;
    color: #e0e0e0;
  }
  .composicao .highlight {
    font-weight: 700;
    color: #ffb347;
  }
  @media (max-width: 600px) {
    body {
      padding: 1rem;
    }
    main {
      padding: 1rem 1.2rem;
    }
  }
</style>
</head>
<body>
<header>
  <h1>Universidade Tiradentes</h1>
  <h2>Análise e Desenvolvimento de Sistemas</h2>
</header>
<main>
  <section class="introducao">
    <strong>Introdução:</strong>
    Grafos são estruturas matemãticas entre elementos.
  </section>
  <section class="composicao">
    Eles são compostos por <span class="highlight">Vértices</span> e <span class="highlight">Arestas</span>.
  </section>
</main>
</body>
</html>

```
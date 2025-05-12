<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./styles/styles_procesar.css">
</head>
<body>
    <nav>
        <button onclick="location.href='index.html'">Inicio</button>
        <button onclick="location.href='pokedex.html'">Pokédex</button>
        <button onclick="location.href='formulario.html'">Formulario de Entrenador</button>
        <button onclick="location.href='dibujos.html'">Dibujos Animados</button>
        <button onclick="location.href='contacto.html'">Contacto</button>
        <button onclick="location.href='carrusel.html'">carrusel</button>
    </nav>
    <main>
        <section id = "datos">
            <?php
            echo "nombre: =" .htmlspecialchars($_POST["nombre"]);
            echo "<br>";
            echo "edad: =" .htmlspecialchars($_POST["edad"]);
            echo "<br>";
            echo "pokemon fav: =" .htmlspecialchars($_POST["pokemon"]);
            echo "<br>";
            echo "tipo fav de pokemon: =" .htmlspecialchars($_POST["tipos-pokemon"]);
            echo "<br>";
            echo "email: =" .htmlspecialchars($_POST["email"]);
            echo "<br>";
            echo "telefono: =" .htmlspecialchars($_POST["telefono"]);
            echo "<br>";
            echo "mensaje: =" .htmlspecialchars($_POST["mensaje"]);
            echo "<br>";
            ?>
        </section>
        <section id ="enviar">
        <p class = "enviara">Quieres enviar tus datos?, pulsa en </p><a href="enviar.html">enviar</a>
        <p class = "enviara">son incorrectos los datos? </p><a href="formulario.html">vlver a escribir</a>
        
        </section>

    </main>
    <footer>
        <p>© Pokémon es una marca registrada de Nintendo, Game Freak y Creatures Inc. Este sitio no oficial no está
            afiliado ni respaldado por ellos.</p>
    </footer>
</body>
</html>

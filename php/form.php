<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    <style>
        body {
            text-align: center;
            font-family: 'Arial';
            background-color: <?php echo $_POST["color"]; ?> ;
        }
        p {
            color: black;
        }
    </style>
    <body>
        <h1>Voici les informations vous concernant :</h1></br>
            
            <?php
            $pn = $_POST["surname"];
            $n = $_POST["name"];
            $bd = $_POST["birthday"];
            $pays = $_POST["country"];
            $city = $_POST["city"];
            $color = $_POST["color"];

            if(empty($pn) or empty($n)){
                echo "<p>Vous n'avez pas renseignez votre nom et prénom.</p>";
            }else{
                echo "<p> Vous vous appellez <strong><u>".$pn." ".$n."</strong></u>. </p>";
            }

            if (!empty($bd)){
                echo "<p>Vous êtes né le <strong><u>".$bd."</strong></u></p>";
            }
            else{
                echo "<p>Vous n'avez pas saisi votre date de naissance.</p>";
            }

            if (!empty($pays)){
                echo "<p>Vous êtes né en <strong><u>".$pays."</strong></u>. </p>";
            }
            else{
                echo "<p>Vous n'avez pas saisi de pays.</p>";
            }

            if (!empty($city)){
                echo "<p>Votre ville est <strong><u>".$city."</strong></u>. </p>";
            }
            else{
                echo "<p>Vous n'avez pas saisi de ville.</p>";
            }

            if (!empty($color)){
                echo "<p>Votre code couleur préférée est <strong><u>".$color."</strong></u> (appliquée en couleur arrière plan). </p>";
            }
            else{
                echo "<p>Vous n'avez pas saisi de couleur.</p>";
            }
            ?>
    </body>
</html>
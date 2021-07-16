<?php
    header('Access-Control-Allow-Origin: *');
    require_once('games.php');
    require_once('fighters.php');
    
    $game = new Game();
    $fighter = new Fighter();

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        if (isset($_GET['id'])) {
            //Getting a game and his fighters
            $sql = $game->getGame($_GET['id']);
            $fighters = $fighter->getFighters($_GET['id']);
            //Fetching data from the queries
            $data = $sql->fetch(PDO::FETCH_ASSOC);
            $data['fighters'] = $fighters->fetchAll(PDO::FETCH_ASSOC);  
        } else {
            $sql = $game->getGames();
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
        }
        header("HTTP/1.1 200 OK");
        echo json_encode($data);
        die();

    } else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['game']) AND isset($_POST['fighters'])) {
            $sql = $game->create($_POST['game']);
            if (!$sql) {
                header("HTTP/1.1 500 ERROR");
                echo json_encode(["Ha habido un error, pruebe otra vez."]);
                die();
            }
            header("HTTP/1.1 200 OK");
            echo json_encode("Todo correcto");
            die();
        } 
    } else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        if (isset($_GET['id'])) {
            $sql = $game->delete($_GET['id']);

            if (!$sql) {
                header("HTTP/1.1 500 ERROR");
                echo json_encode("No has seleccionado ningún juego");
                die();
            }
        }
        header("HTTP/1.1 200 OK");
        echo json_encode("Juego eliminado satisfactoriamente");
        die();  
    } else if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

        
    }

    header("HTTP/1.1 500 ERROR");
    echo json_encode("Error");
    die();
?>
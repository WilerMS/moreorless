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
            // Getting all available games
            $sql = $game->getGames();
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);
        }

            // Error Throw exception
            if (!$sql) {
                header("HTTP/1.1 500 ERROR");
                echo json_encode(["Ha habido un error, pruebe otra vez."]);
                die();
            }

        header("HTTP/1.1 200 OK");
        echo json_encode($data);
        die();

    } else if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $messages = array();
        $errors = array();

        $_data = json_decode(file_get_contents("php://input"), true);

        // Creating a new game with given data
        if (isset($_data['game'])) {

            $sql = $game->create($_data['game']);

                if (!$sql) {
                    header("HTTP/1.1 500 ERROR");
                    echo json_encode(["Ha habido un error, pruebe otra vez."]);
                    die();
                }
            
                // foreach ($_data['game']['fighters'] as $key => $value) {
                //     $sql = $fighter->create($value);
                //     if (!$sql) {$errors[] = $value;}
                // }

            $messages['game'] = "¡Genial, se ha creado tu juego correctamente!";
            // $messages['errors'] = $errors;

            header("HTTP/1.1 200 OK");
            echo json_encode($messages);
            die();
        }

        header("HTTP/1.1 422 ERROR");
        echo json_encode(["Faltan datos", $_data]);
        die();

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

        $_data = json_decode(file_get_contents("php://input"), true);

        if (isset($_data['game'])) {
            //Updating the current fighter id
            $sql = $game->update($_data['game']);

            // Error Throw exception
            if (!$sql) {
                header("HTTP/1.1 500 ERROR");
                echo json_encode(["Ha habido un error, pruebe otra vez."]);
                die();
            }

            $messages['game'] = "¡Genial, se ha creado tu juego correctamente!";

            header("HTTP/1.1 200 OK");
            echo json_encode($messages);
            die();

        }
        
    }

    header("HTTP/1.1 500 ERROR");
    echo json_encode(["Petición no permitida.", $_POST]);
    die();
?>
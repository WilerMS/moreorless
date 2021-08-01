<?php
    header('Access-Control-Allow-Origin: *');
    require_once('games.php');
    require_once('fighters.php');

    $game = new Game();
    $fighter = new Fighter();

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

        if (isset($_GET['idFighter'])) {
            //Getting a game and his fighters
            $sql = $fighter->getFighter($_GET['idFighter']);
            $data = $sql->fetch(PDO::FETCH_ASSOC);
        
        } else if (isset($_GET['idGame'])) {
            // Getting all available games
            $sql = $fighter->getFighters($_GET['idGame']);
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

        // Creating a new fighter with given data
        if (isset($_POST['fighters'])) {
            
            foreach ($_POST['fighters'] as $key => $value) {
                $sql = $fighter->create($value);
                if (!$sql) {$errors[] = $value;}
            }

            $messages['fighters'] = "¡Genial, se ha creado tu juego correctamente!";
            $messages['errors'] = $errors;

            header("HTTP/1.1 200 OK");
            echo json_encode($messages);
            die();
        }

    } else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

        if (isset($_GET['id'])) {
            
            $sql = $fighter->delete($_GET['id']);

            if (!$sql) {
                header("HTTP/1.1 500 ERROR");
                echo json_encode("Este peleador no ha sido eliminado");
                die();
            }
        }

        header("HTTP/1.1 200 OK");
        echo json_encode("Peleador eliminado satisfactoriamente");
        die();

    } else if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

        if (isset($_POST['fighter'])) {
            //Updating the current fighter id
            $sql = $fighter->update($_POST['fighter']);

            // Error Throw exception
            if (!$sql) {
                header("HTTP/1.1 500 ERROR");
                echo json_encode(["Ha habido un error, pruebe otra vez."]);
                die();
            }

        }

        header("HTTP/1.1 200 OK");
        echo json_encode(["El peleador se ha editado correctamente."]);
        die();

    }


?>
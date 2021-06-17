<?php
    require_once('database.php');
    $db = new Database();

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        if (isset($_GET['id'])) {
            $sql = $db->query("SELECT * FROM games WHERE id_game={$_GET['id']}");
            $fighters = $db->query("SELECT * FROM fighters WHERE id_game={$_GET['id']}");
            $data = $sql->fetch(PDO::FETCH_ASSOC);
            $data['fighters'] = $fighters->fetchAll(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($data);
            die();
        } else {
            $sql = $db->query("SELECT * FROM games");
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));
            die();
        }
    } else if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        
    } else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        
    } else if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        
    }
?>
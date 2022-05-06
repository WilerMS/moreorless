<?php
    require_once('database.php');

    class Game {
        
        private $db;

        function __construct() {
            $this->db = new Database();
        }

        // Get a game by id
        public function getGame($id) {
            $query = "SELECT * FROM games WHERE id_game=:id_game";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":id_game", $id);
            $sql->execute();
            return $sql;
        }
        
        // Get all games in the database
        public function getGames() {
            return $this->db->query("SELECT * FROM games");   
        }

        // Create a new game in database
        public function create($game) {
            $query = "  INSERT INTO games (name, description, title, background) 
                        VALUES (:name, :description, :title, :background);";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":name", $game['name']);
            $sql->bindParam(":description", $game['description']);
            $sql->bindParam(":title", $game['title']);
            $sql->bindParam(":background", $game['background']);
            $sql->execute();
            return $sql;
        }

        // Update a game by id
        public function update($game) {
            $query = "  UPDATE games
                        SET name=:name, description=:description, title=:title, background=:background
                        WHERE id_game=:id_game";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":name", $game['name']);
            $sql->bindParam(":id_game", $game['id_game']);
            $sql->bindParam(":description", $game['description']);
            $sql->bindParam(":title", $game['title']);
            $sql->bindParam(":background", $game['background']);
            $sql->execute();
            return $sql;
        }

        // Delete a game by id
        public function delete($id) {
            $query = "DELETE FROM games WHERE id_game=:id_game";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":id_game", $id);
            $sql->execute();
            return $sql;
        }

    }


?>
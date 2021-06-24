<?php
    require_once('database.php');

    class Game {
        
        private $db;

        function __construct() {
            $this->db = new Database();
        }

        // Get a game by id
        public function getGame($id) {
            return $this->db->query("SELECT * FROM games WHERE id_game={$id}"); 
        }
        
        // Get all games in the database
        public function getGames() {
            return $this->db->query("SELECT * FROM games");   
        }

        // Create a new game in database
        public function create($game) {
            $query = "  INSERT INTO games (name, description, title, background) 
                        VALUES ('{$game['name']}', '{$game['description']}', 
                                '{$game['title']}', '{$game['background']}')";
            return $this->db->query($query);
        }

        // Update a game by id
        public function update($game) {
            $query = "  UPDATE games 
                        SET name='{$game['name']}', description='{$game['description']}', 
                            title='{$game['title']}', background='{$game['background']}'
                        WHERE id_game='{$game['id']}'";
            return $this->db->query($query);
        }

        // Delete a game by id
        public function delete($id) {
            $query = "  DELETE FROM games WHERE id_game='{$id}'";
            return $this->db->query($query);
        }

    }


?>
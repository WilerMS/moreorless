<?php
    require_once('database.php');

    class Fighter {

        public $idGame;
        private $db;

        function __construct() {
            $this->db = new Database();
        }

        public function getFighter($id) {
            return $this->db->query("SELECT * FROM fighters WHERE id_fighter={$id}"); 
        }
        
        public function getFighters($idGame) {
            return $this->db->query("SELECT * FROM fighters  WHERE id_game={$idGame}");   
        }

        // create one figther
        public function create($fighter) {
            $query = "  INSERT INTO fighters (name, value, id_game, background) 
                        VALUES ('{$fighter['name']}', '{$fighter['value']}', 
                                '{$fighter['id_game']}', '{$fighter['background']}')";
            return $this->db->query($query);
        }

        // update a figther by id
        public function update($fighter) {
            $query = "  UPDATE fighters 
                        SET name='{$fighter['name']}', value='{$fighter['value']}', background='{$fighter['background']}'
                        WHERE id_game='{$fighter['id_game']}'";
            return $this->db->query($query);
        }

        //Delete a fighter by id
        public function delete($id) {
            $query = "  DELETE FROM games WHERE id_game='{$id}'";
            return $this->db->query($query);
        }

        public function createGameFighters($fighter) {
            $query = "  INSERT INTO games (name, description, title, background) 
                        VALUES ('{$game['name']}', '{$game['description']}', 
                                '{$game['title']}', '{$game['background']}')";
            return $this->db->query($query);
        }

        //Delete all fighters from a game
        public function deleteGameFighters($idGame) {
            $query = "  DELETE FROM fighters WHERE id_game='{$idGame}'";
            return $this->db->query($query);
        }
    }


?>
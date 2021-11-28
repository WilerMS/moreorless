<?php
    require_once('database.php');

    class Fighter {

        public $idGame;
        private $db;

        function __construct() {
            $this->db = new Database();
        }

        public function getFighter($idFigther) {
            return $this->db->query("SELECT * FROM fighters WHERE id_fighter={$idFigther}"); 
        }
        
        public function getFighters($idGame) {
            $query = "SELECT f.*, g.description
                      FROM fighters f
                      LEFT JOIN games g ON g.id_game=f.id_game
                      WHERE g.id_game={$idGame};";
            return $this->db->query($query);
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
                        WHERE id_fighter='{$fighter['id_fighter']}'";
            return $this->db->query($query);
        }

        //Delete a fighter by id
        public function delete($idFigther) {
            $query = "  DELETE FROM games WHERE id_game='{$idFigther}'";
            return $this->db->query($query);
        }

        //Delete all fighters from a game
        public function deleteGameFighters($idGame) {
            $query = "  DELETE FROM fighters WHERE id_game='{$idGame}'";
            return $this->db->query($query);
        }
    }


?>
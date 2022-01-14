<?php
    require_once('database.php');

    class Fighter {

        public $idGame;
        private $db;

        function __construct() {
            $this->db = new Database();
        }

        public function getFighter($idFigther) {
            $query = "SELECT * FROM fighters WHERE id_fighter=:id_fighter";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":id_fighter", $idFigther);
            $sql->execute();
            return $sql;
        }
        
        public function getFighters($idGame) {
            $query = "  SELECT f.*, g.description FROM fighters f
                        LEFT JOIN games g ON g.id_game=f.id_game
                        WHERE g.id_game=:id_game;";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":id_game", $idGame);
            $sql->execute();
            return $sql;
        }

        // create one figther
        public function create($fighter) {
            $query = "  INSERT INTO fighters (name, value, id_game, background) 
                        VALUES (:name, :value, :id_game, :background);";
            $sql = $this->db->prepare($query);
            $sql->bindParam(":name", $fighter['name']);
            $sql->bindParam(":value", $fighter['value']);
            $sql->bindParam(":id_game", $fighter['id_game']);
            $sql->bindParam(":background", $fighter['background']);
            $sql->execute();
            return $sql;
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
<?php

     class Database {

		public $host = "localhost";
		public $user = "root";
		public $pass = "";
		public $dbname = "moreorless_db";
		
		private $db;
		private $error;
		private $stmt;
		
		function __construct() {
			try {
				$this->db = new PDO("mysql:dbname={$this->dbname};host={$this->host}", $this->user, $this->pass);
				$this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$this->db->exec("set names utf8");
			}
				catch(PDOException $e) {
				return 'SomeThing wrong in Connect';
			}
		}
		
		// return conection
		public function getConection() {
			return $this->db;
		}

		// Prepare statement with query
		public function query($query) {
			$this->stmt = $this->db->query($query);
			return $this->stmt;
		}
		
		// Execute the prepared statement
		public function execute() {
			return $this->stmt;
		}	
	}


?>
<?php

     class Database {

		private $config;
		private $db;
		private $error;
		private $stmt;
		
		function __construct() {

			$this->config = json_decode(file_get_contents('config'), true);

			try {
				$this->db = new PDO("mysql:dbname={$this->config['dbname']};host={$this->config['host']}", $this->config['user'], $this->config['pass']);
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
			return $this->db->query($query);
		}

		// Prepare statement with query
		public function prepare($query) {
			return $this->db->prepare($query);
		}
		
		// Execute the prepared statement
		public function execute() {
			return $this->stmt;
		}	
	}


?>
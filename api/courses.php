<?php
header('Content-Type: application/json; charset=utf-8');

// Conexión a la base
$mysqli = new mysqli("localhost", "u878030305_admin", "7>G#?iKe]BAm", "u878030305_courses");

if ($mysqli->connect_errno) {
    echo json_encode(["error" => "Error de conexión: " . $mysqli->connect_error]);
    exit;
}

$result = $mysqli->query("SELECT * FROM courses");

$courses = [];
while ($row = $result->fetch_assoc()) {
    $row['days'] = json_decode($row['days']); // convertir ["Lunes","Martes"] a array
    $courses[] = $row;
}

echo json_encode($courses, JSON_UNESCAPED_UNICODE);

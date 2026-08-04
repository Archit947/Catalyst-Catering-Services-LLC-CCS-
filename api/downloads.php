<?php
// api/downloads.php
require_once 'db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all profile downloads
        try {
            $stmt = $conn->query("SELECT * FROM profile_downloads ORDER BY downloaded_at DESC");
            $downloads = $stmt->fetchAll();
            echo json_encode($downloads);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch downloads']);
        }
        break;

    case 'POST':
        // Log a new download
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || empty($data['name']) || empty($data['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
            break;
        }

        try {
            $stmt = $conn->prepare("INSERT INTO profile_downloads (name, email) VALUES (:name, :email)");
            $stmt->execute([
                ':name' => $data['name'],
                ':email' => $data['email']
            ]);
            echo json_encode(['success' => true]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to record download']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>

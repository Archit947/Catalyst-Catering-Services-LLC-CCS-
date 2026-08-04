<?php
// api/jobs.php
require_once 'db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all jobs
        try {
            $stmt = $conn->query("SELECT * FROM jobs ORDER BY created_at DESC");
            $jobs = $stmt->fetchAll();
            echo json_encode($jobs);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch jobs']);
        }
        break;

    case 'POST':
        // Add a new job
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || empty($data['title']) || empty($data['department']) || empty($data['location']) || empty($data['type']) || empty($data['description'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
            break;
        }

        try {
            $stmt = $conn->prepare("INSERT INTO jobs (title, department, location, type, description) VALUES (:title, :department, :location, :type, :description)");
            $stmt->execute([
                ':title' => $data['title'],
                ':department' => $data['department'],
                ':location' => $data['location'],
                ':type' => $data['type'],
                ':description' => $data['description']
            ]);
            echo json_encode(['success' => true, 'id' => $conn->lastInsertId()]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to add job']);
        }
        break;

    case 'DELETE':
        // Delete a job
        $data = json_decode(file_get_contents("php://input"), true);
        if (!$data || empty($data['id'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid ID']);
            break;
        }

        try {
            $stmt = $conn->prepare("DELETE FROM jobs WHERE id = :id");
            $stmt->execute([':id' => $data['id']]);
            echo json_encode(['success' => true]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to delete job']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>

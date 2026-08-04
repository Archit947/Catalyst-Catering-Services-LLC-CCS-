<?php
// api/contact.php
require_once 'db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all contact messages for the sales panel
        try {
            $stmt = $conn->query("SELECT * FROM contact_messages ORDER BY submitted_at DESC");
            $messages = $stmt->fetchAll();
            echo json_encode($messages);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch contact messages']);
        }
        break;

    case 'POST':
        // Process new contact form submission
        $data = json_decode(file_get_contents("php://input"), true);
        
        $name = $data['name'] ?? '';
        $email = $data['email'] ?? '';
        $phone = $data['phone'] ?? '';
        $company = $data['company'] ?? '';
        $subject = $data['subject'] ?? '';
        $message = $data['message'] ?? '';
        
        if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
            http_response_code(400);
            echo json_encode(['error' => 'All required fields must be filled.']);
            break;
        }

        try {
            $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, phone, company, subject, message) VALUES (:name, :email, :phone, :company, :subject, :message)");
            $stmt->execute([
                ':name' => $name,
                ':email' => $email,
                ':phone' => $phone,
                ':company' => $company,
                ':subject' => $subject,
                ':message' => $message
            ]);
            echo json_encode(['success' => true]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Database error while saving your message.']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>

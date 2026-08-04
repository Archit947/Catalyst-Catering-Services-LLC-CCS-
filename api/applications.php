<?php
// api/applications.php
require_once 'db.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Fetch all job applications for admin panel
        try {
            $stmt = $conn->query("SELECT * FROM job_applications ORDER BY applied_at DESC");
            $applications = $stmt->fetchAll();
            echo json_encode($applications);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to fetch applications']);
        }
        break;

    case 'POST':
        // Process new job application
        
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $phone = $_POST['phone'] ?? '';
        $jobTitle = $_POST['designation'] ?? '';
        
        if (empty($name) || empty($email) || empty($phone) || empty($jobTitle)) {
            http_response_code(400);
            echo json_encode(['error' => 'All fields are required.']);
            break;
        }

        // Handle File Upload
        if (!isset($_FILES['attachment']) || $_FILES['attachment']['error'] !== UPLOAD_ERR_OK) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid CV upload is required.']);
            break;
        }

        $uploadDir = __DIR__ . '/../uploads/cvs/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        $fileTmpPath = $_FILES['attachment']['tmp_name'];
        $fileName = $_FILES['attachment']['name'];
        
        // Generate a unique file name to prevent overwriting
        $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
        $newFileName = md5(time() . $fileName) . '.' . $fileExtension;
        $destPath = $uploadDir . $newFileName;
        
        // Save relative path for database (e.g. uploads/cvs/filename.pdf)
        $dbPath = 'uploads/cvs/' . $newFileName;

        if (move_uploaded_file($fileTmpPath, $destPath)) {
            try {
                $stmt = $conn->prepare("INSERT INTO job_applications (job_title, name, email, phone, cv_path) VALUES (:job_title, :name, :email, :phone, :cv_path)");
                $stmt->execute([
                    ':job_title' => $jobTitle,
                    ':name' => $name,
                    ':email' => $email,
                    ':phone' => $phone,
                    ':cv_path' => $dbPath
                ]);
                echo json_encode(['success' => true]);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Database error while saving application.']);
            }
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Error moving uploaded file.']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>

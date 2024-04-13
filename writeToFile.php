<?php
// Adatok fogadása POST kéréssel
$data = json_decode(file_get_contents('php://input'), true);

// Ha megérkeztek az adatok
if (!empty($data['data'])) {
    $dataToWrite = $data['data'];

    // Fájlba írás
    $file = 'items.txt';
    file_put_contents($file, $dataToWrite, FILE_APPEND | LOCK_EX);

    // Sikeres válasz küldése
    http_response_code(200);
    echo json_encode(array('message' => 'Adatok sikeresen írva a fájlba.'));
} else {
    // Hiba válasz küldése
    http_response_code(400);
    echo json_encode(array('message' => 'Hiba: Hiányzó adatok.'));
}
?>

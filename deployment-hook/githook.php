<?php

$secret = '5n6SK8nd2Nh6qc4g8V';

if ($_SERVER['HTTP_X_CUSTOM_TOKEN'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

$shellScript = '/var/apache/portfolio/deployment-hook/gitpull.sh';

$output = shell_exec($shellScript . ' 2>&1');

if ($output === null) {
    http_response_code(500);
    echo 'Error executing deploy script';
} else {
    echo 'Script output: ' . htmlspecialchars($output);
}

file_put_contents('/var/apache/portfolio/deployment-hook/recent.log', $output, FILE_APPEND);

?>
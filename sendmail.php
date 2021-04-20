<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$mail->setFrom('puxljak@mail.ru', 'Арканчик');

$mail->addAddress('serozhenkod@gmail.com');

$mail->Subject = 'Привет! Хочу ремонт';

$body = 'Вот и письмо';

if (trim(!empty($_POST['name']))) {
	$body .= '<p>Имя:' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
	$body .= '<p>email:' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['tel']))) {
	$body .= '<p>Телефон:' . $_POST['tel'] . '</p>';
}
if (trim(!empty($_POST['messange']))) {
	$body .= '<p>Сообщение:' . $_POST['messange'] . '</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $mail];

header('Content-type: application/json');
echo json_encode($response);

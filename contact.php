<?php
// echo "<pre>";
// var_dump($_post);
// echo "<pre>";

$page_flag = 0;
$clean = array();
$error = array();

// サニタイズ
if (!empty($_POST)) {
	foreach ($_POST as $key => $value) {
		$clean[$key] = htmlspecialchars($value, ENT_QUOTES);
	}
}

if (!empty($clean['btn_confirm'])) {
	$error = validation($clean);
	if (empty($error)) {
		$page_flag = 1;

		// セッション開始 + セッション変数（サーバーに保存）作成
		session_start();
		$_SESSION['page'] = true;
	}
} elseif (!empty($clean['btn_submit'])) {
	session_start();
	if (!empty($_SESSION['page']) && $_SESSION['page'] === true) {

	// セッション変数（の値）を削除
	unset($_SESSION['page']);

	$page_flag = 2;

	// 変数初期化、代入とタイムゾーン設定
	$headers = array();
	$from_name = '賀集真衣';
	$from_email = 'info@sbkunren.xsrv.jp';
	$auto_reply_subject = '';
	$auto_reply_text = '';
	$admin_reply_subject = '';
	$admin_reply_text = '';
	date_default_timezone_set('Asia/Tokyo');

	// メールヘッダー設定
	$headers = [
		'MIME-Version' => '1.0',
		'Content-Type' => 'text/plain; charset=UTF-8',
		'Content-Transfer-Encoding' => 'BASE64',
		'From' => mb_encode_mimeheader($from_name).'<'.$from_email.'>',
		'Sender' => mb_encode_mimeheader($from_name).'<'.$from_email.'>',
		'Reply-To' => $from_email,
		'Organization' => mb_encode_mimeheader($from_name),
	];

	// メールの件名
	$auto_reply_subject = 'お問い合わせありがとうございます。';

	// メールフッター
$mail_signature = <<< FOOTER
------------------------------------
賀集　真衣
TEL:080-2444-3411
EMAL:2018casmkaikashu@gmial.com
------------------------------------
FOOTER;

	// メールの本文
$auto_reply_text = <<< TEXT
{$clean['your_name']}　様
\n
お問い合わせありがとうございます。
できるだけ早くご連絡させていただきます。
\n
ご送信内容は以下になります。
=========================================
\n
TEXT;

	$auto_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
	$auto_reply_text .= "お名前：" . $clean['your_name'] . "　様\n";
	$auto_reply_text .= "メールアドレス：" . $clean['email'] . "\n";
	$auto_reply_text .= "お問い合わせ内容：" . "\n" . $clean['message'] . "\n\n";
	$auto_reply_text .= $mail_signature;

	// 自動返信メール送信
	mb_language('Japanese');
	mb_internal_encoding('UTF-8');
	mb_send_mail($clean['email'], $auto_reply_subject, $auto_reply_text, $headers);

	// 管理者宛メールの件名
	$admin_reply_subject = 'ホームページからのお問い合わせ';

	// 管理者宛メール本文
	$admin_reply_text = "下記の内容でお問い合わせがありました。\n\n";
	$admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n\n";
	$admin_reply_text .= "------------------------" . "\n";
	$admin_reply_text .= "お名前：" . $clean['your_name'] . "　様\n";
	$admin_reply_text .= "メールアドレス：" . $clean['email'] . "\n";
	$admin_reply_text .= "お問い合わせ内容：" . "\n" . $clean['message'] . "\n\n";

	// 管理者宛メール送信
	mb_send_mail($from_email, $admin_reply_subject, $admin_reply_text, $headers);
	} else {
		$page_flag = 0;
	}
}

// バリデーションチェック
function validation($data) {
	$error = array();

	// お名前：未入力チェック
	if (empty($data['your_name'])) {
		$error['your_name'] = '▲ お名前を入力してください';
	}
	// メアド：未入力と形式チェック
	if (empty($data['email'])) {
		$error['email'] = '▲ メールアドレスを入力してください';
	} elseif (!preg_match('/^[0-9a-z_.\/?-]+@([0-9a-z-]+\.)+[0-9a-z-]+$/', $data['email'])) {
		$error['email'] = '▲ メールアドレスを正しい形式で入力してください';
	}	
	// お問い合わせ内容：未入力チェック
	if (empty($data['message'])) {
		$error['message'] = '▲ お問い合わせ内容を入力してください';
	}
	return $error;
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="noindex">
	<title>Portfolio</title>
	<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">

	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Monoton&display|Zen+Kaku+Gothic+New&display|族=青星+一&家族=モノトン&家族=シッポリ+明朝+B1&家族=禅+丸+ゴシック&ディスプレイ=スワップ=swap" rel="stylesheet">
	
</head>
<body>

	<header class="js-header">
		<h1><a href="index.html">Portfolio</a></h1>


		<div class="hamburger">
			<span></span>
			<span></span>
			<span></span>
		</div>

		<nav class="globalMenuSp is-close">
			<ul>
				<li><a href="#about">ABOUT</a></li>
				<li><a href="#skills">SKILLS</a></li>
				<li><a href="#works">WORKS</a></li>
				<li><a href="#contact">CONTACT</a></li>
			</ul>
		</nav>


		
	</header>
	<!-- HEADER -->


	<main class="wrapper contact">
	<h2>お問い合わせフォーム</h2>	
	<?php if($page_flag === 1): ?>
		<div>
			<p>内容をご確認の上、送信ボタンを押してください。</p>
		</div>
		<form action="" method="post" class="contact confirm"></form>
		<div>
			<label>お名前</label>
			<p><?php echo $_POST['your_name']; ?>

			</p>
		</div>
		<div>
			<label>メールアドレス</label>
			<p><?php echo $_POST['email']; ?></p>
		</div>
		<div>
			<label>お問い合わせ内容</label>
			<p><?php echo nl2br($_POST['message'],false); ?> </p>
		</div>
		<div class="btn">
		<input type="submit" name="btn_back" value="戻る">
		<input type="submit" name="btn_submit" value="送信">
		</div>
		<input type="hidden" name="your_name" value="<?php echo $_POST['your_name']; ?> ">
		<input type="hidden" name="your_email" value="<?php echo $_POST['your_email']; ?> ">
		<input type="hidden" name="message" value="<?php echo $_POST['message']; ?> ">
		
		<?php elseif ($page_flag === 2): ?>
			<div class="thanks">
				<p>お問い合わせありがとうございます。</p>
				<p>できるだけ早くご連絡させていただきます。</p>
				<p>お急ぎの場合は下記までお電話ください。</p>
				<p>TEL：080-2444-3411</p>
			</div>
			<?php else: ?>	
	
	<form action="#" id="form">
		<div>
			<label for="name">お名前</label>
			<input type="text" id="name" name="your-name">
		</div>

		<div>
			<label for="email">メールアドレス</label>
			<input type="email" name="your-email" id="email">
		</div>

		<div>
			<label for="message">メッセージ</label>
			<textarea name="your-message" id="message"></textarea>
		</div>

		<input type="submit"  class="button" value="送信">
	</form>
<?php endif; ?>

	</main>

	
	


<footer id="footer">
	<nav class="nav02 wrapper js-fade">
		<ul>
			<li><a href="#about">About</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#works">Works</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
	
	<p><small>@maki kashu</small></p>
</footer>

<button type="button" class="page-top hide" aria-label="ページトップへスクロールします"><i class="fas fa-arrow-up my-btn"></i></button>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

	<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/8-1-6/js/8-1-6.js"></script>


	<script src="js/script.js"></script>

	


	



</body>
</html>

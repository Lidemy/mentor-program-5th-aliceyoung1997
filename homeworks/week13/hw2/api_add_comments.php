<?php 
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8'); //輸出 json 格式的資料
  header('Access-Control-Allow-Origin: *');
  if(empty($_POST['content']) || 
  empty($_POST['nickname']) ||
  empty($_POST['site_key'])
  ){
    $json= array(
      "ok" => false,
      "message" => "Please input missing fields"
    );
    $response = json_encode($json); // 變成json 格式
    echo $response;
    die();
  }

  $nickname = $_POST['nickname'];
  $content = $_POST['content'];
  $site_key = $_POST['site_key'];

  $sql = "INSERT INTO alice_discussions(site_key, nickname, content) VALUES (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $site_key, $nickname, $content);
  $result = $stmt->execute();

  if(!$result){
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $json = array(
    "ok" => true,
    "message" => "success"
  );

  $response = json_encode($json);
    echo $response;
  

?>
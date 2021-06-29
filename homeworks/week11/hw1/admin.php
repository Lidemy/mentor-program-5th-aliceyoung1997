<?php 
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  
  $username = NULL; 
  $user = NULL;
  $role=NULL;
  if(!empty($_SESSION['username'])){
    $username= $_SESSION['username'];
    $user = getUserFromUsername($username);
    $role = $user['role'];
  }
  
  if ($role !=="admin"){
    header("Location: index.php");
    exit();
  }
  $stmt = $conn->prepare(
  'SELECT id, role, nickname, username FROM alice_users ORDER BY id asc'
);
  $result= $stmt->execute();
  
  if(!$result){
    die('Error:' . $conn->error);
  }
  $result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Board</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    
      <a class="board__btn" href="logout.php">登出</a>
      <a class="board__btn" href="index.php">回留言板</a>     
    <section>
      <?php 
        while($row = $result->fetch_assoc()){
      ?>
      <div class="card">
        <div class="card__body">
          <div class="card__info">
            <span class="card__author edit">Username：<?php echo escape($row['username']); ?>
            </span>
            <span class="card__author edit">Nickname：<?php echo escape($row['nickname']); ?>
            </span>
            <span class ="admin">身分：<?php echo escape($row['role']); ?></span>
            <?php if($row['role'] ==="admin") {?>
                <a class="board__btn" href="update_role.php?role=normal&id=<?php echo escape($row['id']);?>">normal</a>
                <a class="board__btn" href="update_role.php?role=blocked&id=<?php echo escape($row['id']);?>">blocked</a>
              <?php } else if ($row['role'] ==="normal"){?> 
                <a class="board__btn" href="update_role.php?role=admin&id=<?php echo escape($row['id']);?>">admin</a>
                <a class="board__btn" href="update_role.php?role=blocked&id=<?php echo escape($row['id']);?>">blocked</a>
              <?php } else {?> 
                <a class="board__btn" href="update_role.php?role=normal&id=<?php echo escape($row['id']);?>">normal</a>
                <a class="board__btn" href="update_role.php?role=admin&id=<?php echo escape($row['id']);?>">admin</a>
              <?php } ?>
          </div>
        </div>
      </div>
      <?php } ?>
    </section>
    <hr/> 
    
  </main>
  <script>
  let btn = document.querySelector('.update-nickname')
  btn.addEventListener('click',function(){
    let form= document.querySelector('.board__nickname-form')
    form.classList.toggle('hide')
  })
  </script>
</body>
</html>

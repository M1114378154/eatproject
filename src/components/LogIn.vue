<template>
<div class="Login">
    <h1>好吃网</h1>
    <form action="/action_page.php">
    <label for="fname">账号</label>
    <input type="text" id="fname" name="firstname" placeholder="手机号码/用户名">

    <label for="lname">密码</label>
    <input type="password" id="lname" name="lastname" placeholder="请输入密码">

   <input type="submit" value="登录">
    <input type="submit2" value="注册">
  </form>
    </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    msg: String
  }
}
</script>

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
input[type=submit2] {
  width: 98%;
  background-color: skyblue;
  color: white;  
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}


input[type=submit2]:hover {
  background-color:skyblue;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>


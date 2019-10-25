<template>
  <div >
    <div class="Login">
      <h1>好吃网</h1>
       <form action="/action_page.php">
        <div class="logrow">
          <div class="col-25">
            <label class="log" for="fname">手机号/用户名</label>
          </div>

          <div class="col-75">
            <input type="logtext" id="fname" name="firstname" placeholder="手机号/用户名" />
          </div>
        </div>

        <div class="logrow">
          <div class="col-25">
            <label class="log" for="lname">密码</label>
          </div>
          <div class="col-75">
            <input type="logpassword" id="lname" name="lastname" placeholder="请输入密码" />
          </div>
        </div>

        <div class="logrow">
          <input type="logsubmit" value="登录" />
          <input type="logsubmit1" value="注册" />
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  props: {
    msg: String
  }
};
</script>

<style>
input[type="logtext"],
select,
textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  /* margin-right: 50%; */
}
input[type="logpassword"],
select,
textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
   /* margin-right: 50%; */
}

.log {
  padding: 12px 12px 12px 0;
  display: inline-block;
  margin-left: 50%;
}

input[type="logsubmit"] {
  background-color: #4caf50;

  color: white;
  padding: 12px 20px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  /* float: right; */
  text-align: center;
  width: 10%;
  /* margin-right: 1%; */
}

input[type="logsubmit"]:hover {
  background-color: #45a049;
}
input[type="logsubmit1"] {
  background-color: skyblue;

  color: white;
  padding: 12px 20px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  /* float: right; */
  text-align: center;
  width: 10%;
  margin-left: 7%;
}

input[type="logsubmit1"]:hover {
  background-color: #0099cc;
}

.container {
  border-radius: 5px;
  /* background-color: #f2f2f2; */
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 50%;
  margin-top: 6px;
}

/* 清除浮动 */
.logrow:after {
  content: "";
  display: table;
  clear: both;
}

/* 响应式布局 layout - 在屏幕宽度小于 600px 时， 设置为上下堆叠元素 */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="logsubmit"] {
    /* width: 50%; */
    margin-top: 0;
  }
}
</style>


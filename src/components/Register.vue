<template>
  <div >
    <div class="Register">
      <h1>注册好吃网</h1>

      <form action="/action_page.php">
        <div class="rerow">
          <div class="col-25">
            <label class="reg" for="fname">手机号/用户名</label>
          </div>

          <div class="col-75">
            <input type="retext" id="fname" name="firstname" placeholder="手机号/用户名" />
          </div>
        </div>

        <div class="rerow">
          <div class="col-25">
            <label class="reg" for="lname">密码</label>
          </div>
          <div class="col-75">
            <input type="password" id="lname" name="lastname" placeholder="请输入密码" />
          </div>
        </div>

        <div class="rerow">
          <input type="Resubmit" value="注册" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    msg: String
  }
};
</script>

<style>
/* .recontainer {
  box-sizing: border-box;
  
} */

input[type="retext"],
select,
textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  /* margin-right: 50%; */
}
input[type="password"],
select,
textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
   /* margin-right: 50%; */
}

.reg {
  padding: 12px 12px 12px 0;
  display: inline-block;
  margin-left: 50%;
}

input[type="Resubmit"] {
  background-color: #4caf50;

  color: white;
  padding: 12px 20px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  /* float: right; */
  text-align: center;
  width: 10%;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
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
.rerow:after {
  content: "";
  display: table;
  clear: both;
}

/* 响应式布局 layout - 在屏幕宽度小于 600px 时， 设置为上下堆叠元素 */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="resubmit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
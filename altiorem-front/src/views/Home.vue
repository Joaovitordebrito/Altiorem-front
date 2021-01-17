<template>
  <div class="home_holder">

    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>

    <div class="input_holder">
      <span>E-mail</span>
      <input type="text" placeholder="email@local.com">
    </div>

    <div class="input_holder">
      <span>Senha</span>
      <input type="password" placeholder="******">
    </div>

    <div class="main_btn_holder">
      <button>Login</button>
      <button>Cadastrar-se</button>
    </div>

    <div class="grid_or">
      <div></div>
      <span>ou</span>
      <div></div>
    </div>

    <div class="sec_btn_holder">
      <div class="item" style="background: #DB4437">
        <img src="../assets/google.png" alt="">
      </div>

      <div class="item">
        <img src="../assets/face.png" alt="">
      </div>

      <div class="item">
        <img src="../assets/apple.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.home_holder{
  background: url('../assets/Splash.png');
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7.7vw;
}

.logo{
  margin-bottom: 16px;
}

.input_holder{
  display: flex;
  flex-direction: column;
  width: 100%;
  span{
    font-size: 18px;
    margin-left: 8px;
  }
  input{
    height: 46px;
    border-radius: 7px;
    background: #EAEAEA;
    border: 2px solid #000000;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    padding: 16px;
    font-size: 18px;
  }
  margin: 0 0 16px 0;
}

.main_btn_holder{
  display: flex;
  width: 100%;
  flex-direction: column;
  button{
    box-shadow: 4px 4px 0px #000000;
    border-radius: 7px;
    border: 2px solid #000000;
    width: 100%;
    padding: 10px 16px;
    font-size: 18px;
  }
  :nth-child(1){
    margin-bottom: 16px;
    background: #37FF8B;
  }
  :nth-child(2){
    background: #B423FF;
  }
}

.grid_or{
  display: flex;
  width: 100%;
  margin-top: 26px;
  align-items: center;
  div{
    width: 100%;
    height: 2px;
    background: #000000;
    border-radius: 7px;
  }
  :nth-child(2){
    margin: 0 8px;
    font-size: 18px;
  }
}

.sec_btn_holder{
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.6vw;
  :nth-child(2){
    background: #4267B2;
  }
  :nth-child(3){
    background: #000000;
  }
}

.item{
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 7px;
  img{
    background: transparent;
  }
}
</style>
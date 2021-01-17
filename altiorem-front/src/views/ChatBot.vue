<template>
  <div class="chat_holder">
    <div class="chat_header">
      <div style="margin-top: 5px">
        <img src="../assets/back.png" alt="">
      </div>
      <div class="abs_img">
        <img src="../assets/logoNoLabel.png" alt="">
      </div>
    </div>

    <div class="chat_indeed">
      <div :class="item.sender === 'bot' ? 'bot_class' : 'user_class'" class="msg" v-for="(item, index) of mock_arr" :key="index">
        <p>{{item.message}}</p>
        <div :class="item.sender === 'bot' ? 'clip_bot' : 'clip_user'"></div>
      </div>
    </div>

    <div class="msg_sender">
      <input type="text" placeholder="Digite aqui sua resposta">
      <img src="../assets/send_msg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      mock_msgs: [
        {
          sender: 'bot',
          message: 'Bem vindo a Altiorem, sou o Alti e vou te ajudar a configurar seu perfil!'
        },
        {
          sender: 'bot',
          message: 'Qual seu nome?'
        },
        {
          sender: 'user',
          message: 'João Pedro Freitas'
        }
      ]
    }
  },
  computed: {
    mock_arr () {
      return this.mock_msgs.reverse() // eslint-disable-line
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.chat_holder{
  display: flex;
  flex-direction: column;
  background: url('../assets/Splash.png');
  width: 100vw;
  height: 100vh;
}

.chat_header{
  display: flex;
  padding: 16px;
  position: relative;
  width: 100%;
  align-items: center;
  div{
    flex: 1;
  }
}

.abs_img{
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  text-align: center;
}

.chat_indeed{
  flex: 1;
  background: #cccccc;
  padding: 8px;
  height: 200px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}

.msg{
  max-width: 60%;
  width: fit-content;
  p{
    margin: 0;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;

  }
  margin-bottom: 16px;
  position: relative;
}

.user_class{
  margin-left: auto;
  background: #37FF8B;
  color: #232323;
  border-radius: 8px 8px 0 8px;
  padding: 4px 16px 4px 8px;
  margin-right: 4px;
}

.clip_bot{
  position: absolute;
  bottom: 0;
  left: -12px;
  width: 24px;
  height: 18px;
  // margin-left: -22px;
  // margin-bottom: -4px;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: #B423FF;
}

.clip_user{
  bottom: 0;
  right: -12px;
  width: 24px;
  height: 18px;
  // margin-right: -22px;
  // margin-bottom: -4px;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: #37ff8b;
  position: absolute;
}

.bot_class{
  margin-right: auto;
  background: #B423FF;
  color: #fbfbfb;
  border-radius: 8px 8px 8px 0;
  padding: 4px 8px 4px 12px;
  margin-left: 4px;
}

.msg_sender{
  padding: 16px;
  display: flex;
  align-items: center;
  input{
    flex: 1;
    margin-right: 8px;
    padding: 16px 8px;
    border-radius: 7px;
    outline: none;
    background: #EAEAEA;
    border: 2px solid #000000;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
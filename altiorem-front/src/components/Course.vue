<template>
  <div class="course_holder">

    <div class="back" @click="go_back()">
      <img src="../assets/back.png" alt="">
    </div>

    <div class="course_header">
      <div class="shadow"></div>
      <img :src="selected_course.image" alt="">
      <h3>{{selected_course.title}}</h3>
    </div>
    
    <div class="abs_logo">
      <img src="../assets/logoNoLabel.png" alt="">
    </div>

    <div style="padding: 8px; flex: 1; height: 200px;">
      <div class="data_course">
        <h4> <span>Disponibilizado por:</span> {{selected_course.source}}</h4>
        <h4> <span>Carga horária:</span> {{selected_course.workload}}</h4>
        <h4> <span>Professor:</span> {{selected_course.teacher}}</h4>

        <div class="modules" v-for="(item, index) of selected_course.modules" :key="index">
          <p>Parte {{index + 1}}</p>
          <ul>
            <li v-for="(val, idx) of item.split(' / ')" :key="idx"> {{val}} </li>
          </ul>
        </div>

        <div class="btn">
          <button>Começar</button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'course',
  props: [
    'selected_course'
  ],
  methods: {
    go_back () {
      this.$emit('go-back')
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

.course_holder{
  background: url('../assets/Splash.png');
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.data_course{
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(205, 205, 205, 0.69);
  border-radius: 7px;
  height: 100%;
  h4{
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 16px 0;
  }
  span{
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    margin: 0 0 16px 0;
  }
  ul{
    padding: 0 0 0 24px;
    list-style: none;
    margin-top: 8px;
  }
  p{
    margin: 0;
    font-weight: 600;
    font-size: 18px;
  }
  li{
    font-size: 14px;
  }
}

.data_course h4{
  font-family: 'Montserrat';
}

.course_header{
  width: 100%;
  max-height: 242px;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  h3{
    position: absolute;
    bottom: 0;
    left: 16px;
    font-weight: 500;
    font-size: 24px;
    color: #e6e6e6;
  }
}

.abs_logo{
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  text-align: center;
}

.shadow{
  background: linear-gradient(0deg, #5C5C5C 0%, rgba(255, 255, 255, 0) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.btn{
  flex: 1;
  height: 10px;
  display: flex;
  align-items: flex-end;
  button{
    width: 100%;
    padding: 16px;
    background: #F4EA00;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 7px
  }
}

.back{
  position: absolute;
  top: 18px;
  left: 16px;
  z-index: 999;
}
</style>
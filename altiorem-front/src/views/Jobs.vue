<template>
  <div class="jobs_holder">
    <div class="list_header">
      <img src="../assets/logoNoLabel.png" alt="">
    </div>
    <div class="list_jobs">
      <div class="flex_header">
        <h2>Vagas pra você</h2>
        <transition-group name="increase">
          <img src="../assets/filter.svg" alt="" v-show="!filtering" @click="filtering = true" key="img">
          <input type="text" v-show="filtering" key="input" v-model="filter">
        </transition-group>
      </div>
      <div class="item" v-for="(item, index) of computed_jobs" :key="index">
        <img :src="item.image" alt="">
        <div>
          <h3>{{item.title}}</h3>
          <p>{{item.description}}</p>
          <button @click="select_course(item)">Ver mais detalhes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generic from '../assets/gen.png'

export default {
  name: 'Jobs',
  data () {
    return {
      filtering: false,
      filter: '',
      jobs: [
        {
          title: 'Estagiário frontend na SCALE',
          description: 'Junte-se uma das startups mais promissoras do Brasil',
          image: generic
        },
        {
          title: 'Estagiário backend na SCALE',
          description: 'Junte-se uma das startups mais promissoras do Brasil',
          image: generic
        },
        {
          title: 'Estagiário backend na SCALE',
          description: 'Junte-se uma das startups mais promissoras do Brasil',
          image: generic
        }
      ]
    }
  },
  computed: {
    computed_jobs () {
      return this.jobs.filter(el => (el.title).toLowerCase().includes(this.filter.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>
.jobs_holder{
  width: 100vw;
  height: 100vh;
  background: url('../assets/Splash.png');
  display: flex;
  flex-direction: column;
}

.list_header{
  text-align: center;
  padding: 16px;
  padding-bottom: 6px;
  box-shadow: 0 4px 8px rgba($color: #000000, $alpha: .25);
  width: 100%;
}

.list_jobs{
  padding: 16px;
  flex: 1;
  height: 10px;
  overflow: auto;
}

.item{
  background: #EEEEEE;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  border-radius: 7px;
  margin-bottom: 16px;
  h3{
    font-size: 24px;
    margin: 0;
  }
  p{
    font-family: 'Montserrat' serif;
    font-size: 12px;
  }
  img{
    width: 100%;
    max-height: 128px;
  }
  div{
    padding: 16px;
  }
  button{
    background: #F4EA00;
    border: 2px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 7px;
    padding: 16px;
    width: 100%;
    outline: none;
    font-size: 14px;
  }
}

.flex_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  input{
    width: 100%;
    height: 23px;
    padding: 16px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    background: #eaeaea;
    outline: none;
  }
}

</style>
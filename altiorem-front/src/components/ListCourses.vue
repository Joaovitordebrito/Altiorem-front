<template>
  <div class="list_holder">
    <div class="list_header">
      <img src="../assets/logoNoLabel.png" alt="">
    </div>

    <div class="courses_indeed">
     <p>Alguns cursos que encontramos pra você</p> 
     <div class="item" v-for="(item, index) of mock_courses" :key="index">
       <img :src="item.image" alt="">
       <div>
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
        <button @click="select_course(item)">Ver mais detalhes</button>
       </div>
     </div>

    </div>

    <div class="green_shadow"></div>
  </div>
</template>

<script>
import generic from '../assets/gen.png'

export default {
  name: 'ListCourses',
  data () {
    return {
      mock_courses: [
        {
          title: 'Desenvolvimento de sites',
          description: 'Aprenda a desenvolver sites simples para ingressar em uma empresa ou até mesmo realizar trabalhos como freelancer',
          image: generic,
          teacher: 'João Pedro',
          source: 'Scale Ads',
          workload: '12h',
          modules: [
            'Como iniciar o curso',
            'Softwares Recomendados / Criar a primeira página HTML / Criando cabeçalho',
            'Fundamentos CSS / Page Layouts / Listas'
          ]
        },
        {
          title: 'UI/UX básico',
          description: 'Aprenda a desenvolver interfaces para aplicativos e sites baseando-se nos principios de UI/UX profissionais',
          image: generic,
          teacher: 'João Pedro',
          source: 'Scale Ads',
          workload: '12h',
          modules: [
            'Como iniciar o curso',
            'Softwares Recomendados / Criar a primeira página HTML / Criando cabeçalho',
            'Fundamentos CSS / Page Layouts / Listas'
          ]
        },
        {
          title: 'Desenvolvimento de sites',
          description: 'Aprenda a desenvolver sites simples para ingressar em uma empresa ou até mesmo realizar trabalhos como freelancer',
          image: generic,
          teacher: 'Guilherme Cally',
          source: 'Cally S/A',
          workload: '12h',
          modules: [
            'Como iniciar o curso',
            'Softwares Recomendados / Criar a primeira página HTML / Criando cabeçalho',
            'Fundamentos CSS / Page Layouts / Listas'
          ]
        },
      ]
    }
  },
  methods: {
    select_course (item) {
      this.$emit('selected-course', item)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.list_holder{
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

.courses_indeed{
  flex: 1;
  overflow: auto;
  padding: 16px;
  height: 200px;
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

.item:last-of-type{
  margin-bottom: 60px;
}

.green_shadow{
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #00FF6B 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
}
</style>
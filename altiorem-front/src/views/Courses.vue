<template>
  <div class="courses_holder">
    <component
      :is="tab"
      @selected-course="val => select_course(val)"
      :selected_course="selected_course"
      @go-back="selected_course = null"
    />
  </div>
</template>

<script>
import listCourses from '../components/ListCourses'
import Course from '../components/Course'

export default {
  name: 'Courses',
  data () {
    return {
      selected_course: null
    }
  },
  methods: {
    select_course (val) {
      this.selected_course = val
    }
  },
  components: {
    'list_courses': listCourses,
    course: Course
  },
  computed: {
    tab () {
      if (this.selected_course === null) {
        return 'list_courses'
      }
      return 'course'
    }
  }
}
</script>

<style>

</style>
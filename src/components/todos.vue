<template>
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{todo.id}}</span>
          <p>{{todo.title}}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['todo']
}
</script>

<style scoped>
    h1 {
        font-size: 18px;
    }
    div {
        width: 250px;
        min-height: 200px;
        max-height: auto;
        margin-right: 10px;
    }
</style>
<template>
  <div id="app">
    <div class="elements">
      <todos v-for="todo in todos" :key="todo.id" :todo="todo" />
      <preolaider />
    </div>
    <Paginate
      v-model="page"
      :page-count="pages"
      :click-handler="pageChange"
      :prev-text="'Назад'"
      :next-text="'Вперед'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
    />
  </div>
</template>

<script>
import todos from "@/components/todos";
import preolaider from "@/components/preolaider";

export default {
  name: "App",
  data() {
    return {
      url: "https://jsonplaceholder.typicode.com/todos",
      amountTodosOnPage: 10,
      content: [],
      pages: 0,
      todos: [],
      page: 0,
    };
  },
  mounted() {
    let response = fetch(this.url);

    response.then((data) => {
      this.content = data.json();
      this.content.then((clientData) => {
        this.pages = Math.floor(clientData.length / this.amountTodosOnPage);
        this.todos = clientData.splice(0, this.amountTodosOnPage);
        console.log(clientData);
      });
    });

    response.catch((error) => console.log(error));
  },
  methods: {
    pageChange(val) {
      let start = this.amountTodosOnPage * (val - 1);
      let end = start + this.amountTodosOnPage;
      this.content.then((data) => (this.todos = data.slice(start, end)));

      document.querySelector(".elements").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
  created() {
    this.say("alexandr");
  },
  components: {
    todos,
    preolaider,
  },
};
</script>

<style>
* {
  list-style-type: none;
  outline: none;
  box-sizing: border-box;
}
.elements {
  width: 1000px;
  margin: 50px auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

.pagination {
  display: flex;
  justify-content: center;
}
</style>
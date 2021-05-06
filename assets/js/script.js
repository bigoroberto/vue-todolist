
const app = new Vue({

  el:'#app',

  data:{
    alertActive:false,
    strTodo:'',
    todos:[
      {
        todo:'Ripassare HTML/CSS',
        checked:false,
      },
      {
        todo:'Studiare Vue',
        checked:false,
      },
      {
        todo:'Amare Vue',
        checked:true,
      },
      {
        todo:'Alzarsi presto la mattina per ripassare',
        checked:false,
      },
    ],


  },
  methods:{

    removeTodo(index){
      this.todos.splice(index, 1);
    },
    addTodo(){
      if(this.strTodo.length > 2 ){
        this.todos.push(
          {
            todo: this.strTodo,
            checked:false
          });
          this.strTodo = '';
      }else{
        this.alertActive = true;
        setTimeout(()=>{
          this.alertActive = false;
        },2000);
      }
    }
  }
})
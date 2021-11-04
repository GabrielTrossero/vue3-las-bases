import { reactive, toRefs } from "vue";
export default function() {
    const data = reactive({
        todo: null,
        todos: []
    })

    const addData = () => {
        if (data.todo) {
            data.todos.push(data.todo);
        }
        
        data.todo = null;
    }

    const deleteData = (index) => {
        data.todos.splice(index, 1);
    }

    return {
        ...toRefs(data), //se utiliza para pasar todos los datos del objeto en atributos separados
        addData,
        deleteData
    }
}
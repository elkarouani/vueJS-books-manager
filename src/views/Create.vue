<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Book</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Book title:</label>
                        <input type="text" class="form-control" :value="name"/>
                    </div>
                    <div class="form-group">
                        <label>Autor name:</label>
                        <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="number" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
//   components: {
//     name: 'AddItem'
//   }
}
</script>

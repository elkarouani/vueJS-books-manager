<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Book</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="addItem">
                    <div class="form-group">
                        <label>Book title:</label>
                        <input type="text" class="form-control" v-model="book.book_title"/>
                    </div>
                    <div class="form-group">
                        <label>Autor name:</label>
                        <input type="text" class="form-control" v-model="book.autor_name"/>
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="number" class="form-control" v-model="book.price"/>
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
  // components: {
  //   name: 'AddItem'
  // },
  data () {
    return {
      book: {}
    }
  },
  methods: {
    addItem () {
      console.log('adding item ...')
      let uri = 'http://localhost:4000/books/add'
      // let headers = {
      //   'Access-Control-Allow-Origin': '*'
      // }
      // this.axios.post(uri, this.book, { headers: headers })
      this.axios.post(uri, this.book)
        .then(response => { console.log(response.data) })
        .catch(err => console.log(err))
    }
  }
}
</script>

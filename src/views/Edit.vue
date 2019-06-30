<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Book</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="updateBook">
                    <div class="form-group">
                        <label>Book Title:</label>
                        <input type="text" class="form-control" v-model="book.book_title" />
                    </div>
                    <div class="form-group">
                        <label>Author Name:</label>
                        <input type="text" class="form-control" v-model="book.autor_name" />
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="number" class="form-control" v-model="book.price" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Book" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return { book: {} }
  },
  created: function () { this.getBook() },
  methods: {
    getBook () {
      let uri = 'http://localhost:4000/books/edit/' + this.$route.params.id
      this.axios.get(uri).then((response) => { this.book = response.data })
    },
    updateBook () {
      let uri = 'http://localhost:4000/books/update/' + this.$route.params.id
      this.axios.post(uri, this.book).then((response) => { this.$router.push({ name: 'Show' }) })
    }
  }
}
</script>

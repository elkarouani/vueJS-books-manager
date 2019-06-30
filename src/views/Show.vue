<template>
    <div>
        <h1>Books</h1>

        <table class="table table-hover">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Book Title</td>
                    <td>Author Name</td>
                    <td>Price</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book._id">
                    <td>{{book._id}}</td>
                    <td>{{book.book_title}}</td>
                    <td>{{book.autor_name}}</td>
                    <td>{{book.price}}</td>
                    <td>
                        <router-link :to="{name: 'Edit', params: { id: book._id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      books: []
    }
  },
  created: function () { this.fetchBooks() },
  methods: {
    fetchBooks () {
      let uri = 'http://localhost:4000/books'
      this.axios.get(uri).then(response => {
        this.books = response.data
      })
    }
  }
}
</script>

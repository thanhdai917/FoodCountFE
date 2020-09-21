<template>
  <div class="text-center">
    <ul class="pagination">
      <li v-if="pagination.current_page > 1">
        <a
          href="javascript:void(0)"
          aria-label="Previous"
          v-on:click.prevent="changePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li
        v-for="(page,index) in pagesNumber"
        :class="{'active': page == pagination.current_page}"
        :key="index"
      >
        <a href="javascript:void(0)" v-on:click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li v-if="pagination.current_page < pagination.last_page">
        <a
          href="javascript:void(0)"
          aria-label="Next"
          v-on:click.prevent="changePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pagination:Object,
    offset: {
      type: Number,
      default: 4
    }
  },
  computed: {
    pagesNumber() {
        console.log(this.pagination.totals);
        if (!this.pagination.to) {
          return [];
        }
        let from = this.pagination.current_page - this.offset;
        if (from < 1) {
          from = 1;
        }
        let to = from + (this.offset * 2);
        var total_link = Math.floor(this.pagination.totals/this.pagination.limit) + 1;
        console.log(total_link);
        if (to >= total_link) {
          to = total_link;
        }
        let pagesArray = [];
        for (let page = from; page <= total_link; page++) {
          pagesArray.push(page);
        }
          return pagesArray;
    }
  },
  methods: {
    changePage(page) {
      this.pagination.current_page = page;
      this.$emit("paginate");
    }
  }
};
</script>

<style>
.active a{
    background-color: #c59d5f !important;
}
</style>
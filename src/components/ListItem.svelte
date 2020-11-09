<script lang="ts">
  import type { ListItem } from "../models";

  export let item: ListItem;
</script>

<span class={item.done && "list-item has-text-success"}>{item.title}</span>

<style>
  .list-item {
    text-decoration: line-through;
  }
</style>

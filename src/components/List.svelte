<script lang="ts">
  import ListItem from "./ListItem.svelte";
  import { store, selectedCategory } from "../store";

  const removeItem = (id: number) => {
    $store = $store.filter(elem => elem.id != id);
  }
</script>

<main>
  <ul class="container is-flex-direction-column">
    {#each $store as item}
      {#if item.category === $selectedCategory || $selectedCategory === ""}
        <li>
          <div class="box">
            <div class="level is-mobile">
              <div on:click={() => item.done = !item.done} class="is-clickable" >
                <ListItem {item}/>
              </div>
              <a class="delete" on:click={() => removeItem(item.id)}></a>
            </div>
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</main>

<style>
  .is-clickable {
    cursor: pointer;
    user-select: none;
  }
</style>

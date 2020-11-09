<script lang="ts">
  import { categories } from "../models";
  import { selectedCategory } from "../store";
</script>

<main>
  <nav class="tabs is-boxed is-centered">
    <div class="container">
      <ul>
        {#each categories as category}
          <li class:is-active={$selectedCategory === category}><a on:click={
            () => $selectedCategory = $selectedCategory === category ? "" : category
          }
          href="/#">{category}</a></li>
        {/each}
      </ul>
    </div>
  </nav>
</main>

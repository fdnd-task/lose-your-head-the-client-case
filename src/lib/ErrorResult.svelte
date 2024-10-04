<script>

  import Icon from "./Icon.svelte";

  export let data;
  export let result = data.scans;
</script>

<ul>

<li>
  <h3>{result.result[0].title}</h3>
  <div>
    <p>{result.result[0].amount}</p>
    <Icon name = "ondekte-fouten" />
  </div>
    
</li>

<li>
  <h3>{result.result[1].title}</h3>
  <div>
    <p>{result.result[1].amount}</p>
    <Icon name = "contrast-fouten" />
  </div>
    
</li> 

<li>
  <h3>{result.result[2].title}</h3>
  <div>
    <p>{result.result[2].amount}</p>
    <Icon name = "structuele-fouten" />
  </div>
</li> 
  
<li>
  <h3>{result.result[3].title}</h3>
  <div>
    <p>{result.result[3].amount}</p>
    <Icon name = "ontbrekende-alt-teksten" />
  </div>
    
</li>  

<li>
  <h3>{result.result[4].title}</h3>
  <div>
    <p>{result.result[4].amount}</p>
    <Icon name = "aria-label" />
  </div>
</li>
</ul>

<style>
  
  ul {
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  li {
    height: 20%;
    background-color: var(--color-background-section);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-padding);
  }

  li h3 {
    padding-bottom: 0.5em;
  }

  li div {
    --size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li div p {
    font-size: var(--size);
  }

</style>

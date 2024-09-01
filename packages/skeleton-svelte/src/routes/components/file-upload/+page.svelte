<script lang="ts">
	import { FileUpload } from '$lib/index.js';
  import { type FileUploadApi } from '$lib/components/FileUpload/types.js';

  //let files: File[];
  
  let fileUpload: FileUploadApi;

  function clearFiles() {    
    fileUpload.clearFiles();   
  }

  function clearRejectedFiles() {    
    fileUpload.clearRejectedFiles();   
  }

</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">File Upload</h1>
	</header>
	<section class="space-y-4">
	
  
    <section class="space-y-4">
      <h3 class="h3">Binding</h3>

      {#if fileUpload && fileUpload.acceptedFiles.length > 0} 
        <p>Accepted files:</p>
        {#each fileUpload.acceptedFiles as file}
          <pre class="pre">{file.name}</pre>
        {/each}
        <button on:click={clearFiles}>Remove files</button>
      {/if}

      {#if fileUpload && fileUpload.rejectedFiles.length > 0} 
        <p>Rejected files:</p>
        {#each fileUpload.rejectedFiles as rejectedFile}
          <pre class="pre">{rejectedFile.file.name} - {rejectedFile.errors}</pre>
        {/each}
        <button on:click={clearRejectedFiles}>Remove rejected files</button>
      {/if}     
     
      <FileUpload bind:_api={fileUpload} name="binding" maxFiles={2} />
    </section>	
	
</div>
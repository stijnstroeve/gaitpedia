
<script>

    import {isBlank} from './util';
    import {db} from '../firebase';

    const collection = db.collection('wikientries');

    let error = '';
    let newEntryOriginal = '';
    let newEntryDefinition = '';

    async function add(original, definition) {
        const entry = await collection.where('original', '==', original).get();

        if(!entry.empty) {
            error = 'Betekenis bestaat al.';
            return;
        }

        await collection.add({original, definition});
    }

    function addClicked() {

        if(isBlank(newEntryOriginal) || isBlank(newEntryDefinition)) {
            error = 'Niet ingevuld';
            return;
        }

        add(newEntryOriginal, newEntryDefinition);

        error = '';
        newEntryOriginal = '';
        newEntryDefinition = '';
    }

</script>

<div>
    <h2>Nieuwe betekenis</h2>
    {#if error}
        <p style="color: red;">{error}</p>
    {/if}
    <input required placeholder="Orgineel" bind:value={newEntryOriginal}>
    <input required placeholder="Betekenis" bind:value={newEntryDefinition}>
    <button on:click={addClicked}>Aanmaken</button>
</div>

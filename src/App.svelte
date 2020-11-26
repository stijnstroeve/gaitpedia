<script>
    import { db } from '../firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import NewEntry from './NewEntry.svelte';

    const collection = db.collection('wikientries');
    const entries = collectionData(collection, 'id').pipe(startWith([]));

    async function deleteEntry(id) {
        await collection.doc(id).delete();
    }

    function deleteClicked(entry) {

        if (confirm(`Weet je zeker dat je ${entry.original} wilt verwijderen?`)) {
            deleteEntry(entry.id);
        }
    }

</script>

<main>
    <h2>Gaitpedia</h2>
    {#each $entries as entry}
        <p on:click={() => deleteClicked(entry)}>{entry.original} = {entry.definition}</p>
    {/each}

    {#if $entries.length === 0}
        <p>Nog geen betekenissen gemaakt.</p>
    {/if}

    <NewEntry />

</main>
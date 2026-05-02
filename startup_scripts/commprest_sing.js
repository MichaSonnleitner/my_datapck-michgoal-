StartupEvents.registry("item", event => {

    event.create("compressed_singularity")
        .displayName("Compressed Singularity")
        .tooltip("A compressed version of the singularity.")
        .maxStackSize(1)
        .texture("kubejs:item/compressed_singularity");

});
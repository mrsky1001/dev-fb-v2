<script lang="ts">
    import CustomComponent from "../../CustomComponent/CustomComponent.svelte";
    import LogoSVG from "../../../../components/svg/btn-icons/LogoSVG.svelte";
    import logo from "../../../../assets/images/logo.svg";

    export let type = ''
    export let name = ''
    export let href = ''


</script>
{#if type.includes("mobile")}
    <a rel="noreferrer" href="{href}" target="_blank" class="-m-1.5 p-1.5">
        <span class="sr-only">{name}</span>
        <CustomComponent component="{LogoSVG}"/>
    </a>
{:else}
    <img
            src="{logo}"
            class="mr-3 h-6 sm:h-16"
            alt="{name}"
    />
    <!--    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">-->
    <!--    FOMA-BLOG-->
    <!--    </span>-->
    <!--    -->
    <!--    <a rel="noreferrer" href="{href}" target="_blank" class="btn btn-ghost normal-case text-xl">-->
    <!--        <span class="sr-only">{name}</span>-->
    <!--        <CustomComponent component="{LogoSVG}"/>-->
    <!--    </a>-->
{/if}

<style>
</style>

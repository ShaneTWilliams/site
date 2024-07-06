<script>
    import light from '$lib/static/pm_heraldic_mark_light2.png'
    import dark from '$lib/static/pm_heraldic_mark_dark2.png'
</script>

<div class="h-5">
    <img src={light} alt="" class="w-full h-full hidden dark:block" />
    <img src={dark} alt="" class="w-full h-full block dark:hidden" />
</div>

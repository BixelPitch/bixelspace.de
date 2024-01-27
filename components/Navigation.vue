<script lang="ts" setup>
const { locale } = useI18n();
const navigationPages = await queryContent()
  .where({
    navigation: true,
    _path:
      locale.value === "de"
        ? { $not: { $contains: "/en" } }
        : { $contains: "/en" },
  })
  .find();
</script>

<template>
  <nav class="h-16">
    <div class="flex justify-between content-center">
      <ul>
        <li>
          <ULink to="/">Home</ULink>
        </li>
      </ul>
    </div>
    <pre>{{ navigationPages }}</pre>
  </nav>
</template>

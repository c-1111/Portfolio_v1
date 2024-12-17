<template>
    <div class="exit_button">
        <p>←</p>
    </div>
</template>

<style scoped lang="sass">
.exit_button
  position: fixed
  bottom: 0
  margin-bottom:4rem
  transform: scale(1.5)
  background-color:#EDEDED
  color: white
  padding-inline: .1rem
  margin-inline: .5rem
.exit_button:hover 
  background-color: white
  color: black

@media (max-width: 640px) 
  .exit_button
    bottom: 85%
    left: 0
</style>
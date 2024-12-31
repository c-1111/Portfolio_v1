<template>
    <div class="exit_button">
      <svg width="24" height="8" viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg">
<path d="M4.72433 7.956C4.02166 7.11733 3.29633 6.392 2.54833 5.78C1.80033 5.168 1.02966 4.66933 0.236328 4.284V3.672C1.80033 2.87867 3.29633 1.65467 4.72433 0H5.91433C5.55166 0.770667 5.18899 1.45067 4.82633 2.04C4.46366 2.60667 4.11233 3.08267 3.77233 3.468V4.488C4.11233 4.85067 4.46366 5.32667 4.82633 5.916C5.18899 6.48267 5.55166 7.16267 5.91433 7.956H4.72433ZM3.60233 4.692V3.264H23.7643V4.692H3.60233Z"/>
</svg>

    </div>
</template>

<style scoped lang="sass">
.exit_button
  display: flex
  align-items: center
  justify-content: center
  width: 34px
  height: 34px
  position: fixed
  bottom: 4rem
  left: 0
  margin: auto
  background-color: rgba(230, 230 ,230 , 0.8)
  border: solid 1px #acacac
  mix-blend-mode: difference
  border-radius: 7px
  margin-left: 2rem

  svg
    fill: #acacac
.exit_button:hover 
  background-color: white
  svg
    fill: white

@media (max-width: 640px) 
  .exit_button
    bottom: 95%
    left: 2.5vw
    margin-left: 0

</style>
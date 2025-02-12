<template>
    <label class="checkbox cursor-pointer">
        <input type="checkbox" checked name="color" @click="handleClick">
        <span class="checkmark cursor-pointer"></span>
    </label>
</template>

<style>
.checkbox {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
.checkbox input {
    position: absolute;
    width: 0;
    left: 50px;
    height: 0;
    opacity: 0;
    cursor: pointer;
}
.checkbox .checkmark {
    position: relative;
    display: block;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 3px;
    outline: 1px solid #acacac;
    transition: all 0.2s ease;
    /* transform: scale(1.3); */
}
.checkbox:hover .checkmark {
    background: #f5f5f4;
    transition: all 0.2s ease;
}
.checkbox input:checked ~.checkmark {
    background: #3f7fed;
    outline: 1px solid rgb(95, 126, 240);
}
.checkbox .checkmark::after {
    position: absolute;
    display: block;
    content: "";
    left: 50%;
    top: 40%;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -moz-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
    transition: all 0.2s ease;
}
.checkbox input:checked~.checkmark::after {
    opacity: 1;
    transition: all 0.2s ease;
}
</style>

<script setup>
// Usamos defineEmits para emitir el evento
const emit = defineEmits();

// Esta función manejará el clic y emitirá el evento 'click'
function handleClick() {
  emit('click');  // Emitir el evento cuando el checkbox se hace clic
}
</script>
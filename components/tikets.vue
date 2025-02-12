<template>
    <div class="ticket-container">
      <div 
        v-for="(ticket, index) in tickets"
        :key="index"
        class="ticket"
        @mouseenter="startAutoScroll($event)"
        @mouseleave="stopAutoScroll($event)"
        @wheel="handleScroll($event)"
      >
        <img :src="ticket" alt="Ticket" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const tickets = ref([
    "/img/POS_printer/tickets/tix (1).webp",
    "/img/POS_printer/tickets/tix (1).png",
    "/img/POS_printer/tickets/tix (3).webp",
    "/img/POS_printer/tickets/tix (2).webp",
    "/img/POS_printer/tickets/tix (5).webp",
    "/img/POS_printer/tickets/tix (4).webp",
    "/img/POS_printer/tickets/tix (2).png"
  ]);
  
  const startAutoScroll = (event) => {
    const ticket = event.target.parentElement;
    ticket.scrollTop += 10; // Mueve la imagen ligeramente hacia abajo al hacer mouseenter
  };
  
  const stopAutoScroll = (event) => {
    // No se necesita nada en este momento para el mouseleave
  };
  
  const handleScroll = (event) => {
    event.preventDefault();
    const ticket = event.currentTarget;
    ticket.scrollTop += event.deltaY; // Permite el scroll manual con la rueda
  };
  </script>
  
  <style scoped>
  .ticket-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 96vw;
    overflow: hidden; /* Evita que las imágenes sobresalgan del contenedor */
  }
  
  .ticket {
    flex: 1;
    max-width: 12%;
    height: 62vh; /* Altura fija para cada ticket */
    overflow-y: auto; /* Permite el scroll dentro del ticket */
    border-radius: 0; /* Elimina bordes */
    box-shadow: none; /* Elimina sombras */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* La imagen empieza desde arriba */
  }
  
  .ticket img {
    width: 100%;
    height: auto;
    object-fit: contain; /* Asegura que la imagen completa se vea sin recorte */
    padding-top: 1rem;
    padding-bottom: 6rem;
  }
  
  /* Elimina las barras de scroll */
  .ticket::-webkit-scrollbar {
    display: none;
  }
  
  .ticket {
    -ms-overflow-style: none;  /* Para Internet Explorer */
    scrollbar-width: none;  /* Para Firefox */
  }
  
  /* Animación de desplazamiento al hacer mouseenter */
  .ticket img {
    transition: transform 0.3s ease-out;
  }
  
  .ticket:hover img {
    transform: translateY(-10px); /* Pequeño desplazamiento para indicar scrolleabilidad */
  }

  @media (max-width: 640px) {
  .ticket-container {
    justify-content: center; /* Centra los tickets en pantallas móviles */
    padding: 10px; /* Ajuste de espaciado */
  }

  .ticket {
    flex: 1 1 20%; /* Cada ticket ocupará el 100% del ancho */
    max-width: 100%; /* Hace que cada ticket ocupe toda la pantalla */
    margin-bottom: 10px; /* Espaciado entre los tickets */
    height: auto; /* Altura flexible */
  }
}
  </style>
  
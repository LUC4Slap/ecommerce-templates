<template>
  <NavBar/>
  <v-container fluid class="inicio-container w-100" style="padding: 0;">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Venda de Templates Profissionais</h1>
        <p>Crie sites incríveis com nossos templates modernos e responsivos.</p>
      </div>
    </section>
    <section>
      <ListaTemplates :lista="templates" />
    </section>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import ListaTemplates from '../components/ListaTemplares.vue'
import NavBar from '../components/NavBar.vue';
import { useSnacStore } from '../stores/snackbar'

// STORES
const snackbar = useSnacStore();

const templates = [
  {
    id: 1,
    nome: 'teste',
    valor: 25,
    descricao: 'teste descricao',
    tecnologias: [
      'html', 'css', 'js'
    ],
    autor: 'Lucas Almeida',
    quantidade: 1
  },
  {
    id: 2,
    nome: 'teste 2',
    valor: 45,
    descricao: 'teste descricao 2',
    tecnologias: [
      'html', 'css', 'js'
    ],
    autor: 'Lucas Almeida',
    quantidade: 1
  },
  {
    id: 3,
    nome: 'teste 3',
    valor: 45,
    descricao: 'teste descricao 3',
    tecnologias: [
      'html', 'css', 'js'
    ],
    autor: 'Lucas Almeida',
    quantidade: 1
  },
  {
    id: 4,
    nome: 'teste 4',
    valor: 65,
    descricao: 'teste descricao 4',
    tecnologias: [
      'react', 'scss', 'styled-components', 'typescript', 'nextjs', 'tailwindcss'
    ],
    autor: 'Lucas Almeida',
    quantidade: 1
  },
  {
    id: 5,
    nome: 'teste 5',
    valor: 45,
    descricao: 'teste descricao 5',
    tecnologias: [
      'node', 'typescript', 'nestjs', 'prisma'
    ],
    autor: 'Lucas Almeida',
    quantidade: 1
  },
  {
    id: 5,
    nome: 'teste 6',
    valor: 45,
    descricao: 'teste descricao 6',
    tecnologias: [
      'node', 'express', 'typeorm', 'postgresql', 'docker'
    ],
    autor: 'Lucas Almeida',
    quantidade: 1
  },
]

</script>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  min-height: 40vh;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  /* Azul para roxo */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  // border-radius: 0 0 12px 12px;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
</style>

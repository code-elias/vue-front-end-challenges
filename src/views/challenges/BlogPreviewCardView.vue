<template>
  <main class="">
    <div class="container">
      <div class="card card-decoration">
        <div class="card-header img-container">
          <img
            class="card-img"
            src="/images/illustration-article.svg"
            alt="HTML and CSS card banner"
          />
        </div>

        <div class="card-info">
          <a href="" class="card-label" target="_blank">Learning</a>
          <p class="card-date">Published 21 Dec 2023</p>
          <h2 class="card-title pointer">HTML & CSS foundations</h2>
          <p class="card-body">
            These languages are the backbone of every website, defining structure, content, and
            presentation.
          </p>
        </div>

        <div class="card-author">
          <div class="author-pfp img-container">
            <img src="/images/author-image.webp" alt="" class="author-pfp-img card-img" />
          </div>
          <a href="" class="author-name">Elias Golam</a>
        </div>
      </div>

      <!-- <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> -->
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../../assets/css/challenges/BlogPreviewCard.scss';
</style>

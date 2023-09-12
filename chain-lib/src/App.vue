<script setup>
import CardShowcaseSection from "./components/CardShowcaseSection.vue";
import FeatureSection from "./components/FeatureSection.vue";
import HeroSection from "./components/HeroSection.vue";
import AppLayout from "./components/layouts/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <template #main>
      <div>
        <h1 class="drop-list">something</h1>
        <h1 class="drop-list">something</h1>
        <h1 class="drop-list">something</h1>
      </div>

      <HeroSection />
      <FeatureSection />
      <CardShowcaseSection />

      <div class="bottom-heading">
        <h1 id="crypto">
          <span id="crypto-blue">Cryptocurrencies</span><br />we support
        </h1>
        <br />
        <h4>
          my name my name lorem ipsum dimsum lorem<br />
          lorem ipsum lorem ipsum lorem
        </h4>
      </div>

      <div class="bottom-icons">
        <img src="assets/s1.png" />
        <img src="assets/s2.png" />
        <img src="assets/s3.png" />
        <img src="assets/s4.png" />
        <img src="assets/s5.png" />
      </div>

      <table class="table">
        <tr>
          <th id="tabletop" colspan="3" class="th">data availble from</th>
          <th class="th">data available until</th>
        </tr>
        <tr>
          <th class="t-q">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae
            impedit, eaque corporis eos aspernatur perferendis sequi odit
            provident similique voluptatem cum consequuntur magnam! Quas commodi
            similique voluptatum consectetur voluptatibus.
          </th>
          <td class="symbol">cross</td>
          <td>something</td>
          <td>someting</td>
        </tr>
        <tr>
          <th class="t-q">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quas et obcaecati, officia tempora quam sed ipsum repudiandae eius
            totam, aliquam rerum vel, cumque saepe ducimus veniam recusandae.
            Voluptates, doloribus.
          </th>
          <td class="symbol">cross</td>
          <td>something</td>
          <td>someting</td>
        </tr>
        <tr>
          <th class="t-q">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque, totam! Debitis animi incidunt praesentium temporibus eum
            unde minus nihil perferendis, soluta doloribus, eveniet, ut ab.
            Facere aliquam quisquam sapiente molestias!
          </th>
          <td class="symbol">cross</td>
          <td>something</td>
          <td>someting</td>
        </tr>
      </table>

      <div id="cont2">
        <div id="bottom">
          <h1 id="subscibe">Subscibe to our newsletter</h1>
          <input id="email" type="email" placeholder="Email" />
        </div>
      </div>
    </template>
  </AppLayout>
</template>

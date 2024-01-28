opn
<script setup lang="ts">
useHead({
  title: "TechFes | Contact Us",
});
</script>

<template>
  <CommonHeroSection
      hero-title="Get in Touch"
      description="The team is open for your ideas, questions and needs."
  />

  <section class="flex mt-[100px] pb-[400px] container gap-8 bg-[url(@/assets/img/bg.jpg)]">
    <div class="w-1/2">
      <div class="text-primary font-medium text-sm"> Email Us </div>
      <h2 class="text-3xl font-bold leading-[40px] py-1">hello@techfes.com</h2>

      <br>
      <div class="text-primary font-bold text-sm"> Address </div>
      <h2 class="text-2xl font-semibold py-1">House #29, 4th Floor, Road #12, Sector 11, Dhaka - 1230</h2>
    </div>

    <form action="" method="get" class="form-example w-1/2 flex flex-col gap-4">
      <div class="form-example">
        <label for="name">Your Name </label> <br>
        <input type="text" name="name" id="name" placeholder="XXXXX" required class="border w-1/2 h-10 rounded-lg" style="padding: 8px" />
      </div>
      <div class="form-example">
        <label for="email">Your Email </label> <br>
        <input type="email" name="email" id="email" placeholder="xxxx@email.com" required class="border w-1/2 h-10 rounded-lg px-2" style="padding: 8px" />
      </div>
      <div class="form-example">
        <label for="subject">Subject </label> <br>
        <input type="text" name="subject" id="subject" placeholder="xxxx xxxx" required class="border w-1/2 h-10 rounded-lg px-2" style="padding: 8px" />
      </div>
      <div class="form-example">
        <label for="message">Your Message (optional) </label> <br>
        <textarea name="message" id="message" rows="5" cols="42" class="border rounded-lg" />
      </div>
      <div class="form-example">
        <input type="submit" value="Subscribe" class="px-8 py-2 border rounded border-primary cursor-pointer hover:bg-primary hover:text-primary-foreground" />
      </div>
    </form>
  </section>
</template>

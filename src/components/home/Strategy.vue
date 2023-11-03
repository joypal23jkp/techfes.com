<template>
  <div class="mb-[160px] h-[750px] w-full">
    <div
      class="container relative mx-auto h-full w-full py-[100px]"
      id="canvas"
    >
      <CommonSvgWaveLine class="z-999 absolute bottom-0" />

      <div class="absolute bottom-0">
        <CommonSvgApostrophe
          fill="#D70228"
          class="shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
        />
        <div class="relative w-[250px] pt-[28px]">
          <h1 class="text-2xl font-bold">Strategy</h1>
          <p class="relative z-10">
            Since our establishment, we are delivering of business Digital
            Products Solutions.
          </p>
          <gradient-text
            starting-color="#e66465"
            ending-color="transparent"
            text="1"
            class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
          />
        </div>
      </div>
      <div class="absolute bottom-[5rem] left-[30%]">
        <CommonSvgApostrophe
          fill="#184174"
          class="shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
        />

        <div class="relative w-[250px] pt-[28px]">
          <h1 class="text-2xl font-bold">Strategy</h1>
          <p>
            Since our establishment, we are delivering of business Digital
            Products Solutions.
          </p>
          <gradient-text
            starting-color="#e66465"
            ending-color="transparent"
            text="2"
            class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
          />
        </div>
      </div>

      <div class="absolute bottom-[16rem] left-[60%]">
        <CommonSvgApostrophe
          fill="#184174"
          class="shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
        />
        <div class="relative w-[250px] pt-[28px]">
          <h1 class="text-2xl font-bold">Strategy</h1>
          <p>
            Since our establishment, we are delivering of business Digital
            Products Solutions.
          </p>
          <gradient-text
            starting-color="#e66465"
            ending-color="transparent"
            text="3"
            class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
          />
        </div>
      </div>

      <div class="absolute bottom-[30rem] right-0">
        <CommonSvgApostrophe
          fill="#184174"
          class="shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
        />
        <div class="relative w-[250px] pt-[28px]">
          <h1 class="text-2xl font-bold">Strategy</h1>
          <p>
            Since our establishment, we are delivering of business Digital
            Products Solutions.
          </p>
          <gradient-text
            starting-color="#e66465"
            ending-color="transparent"
            text="4"
            class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
          />
        </div>
      </div>

      <div class="w-[600px] lg:min-h-[500px]">
        <h5 class="text-lg font-semibold text-primary-400">
          Our Simple Work Process
        </h5>
        <div class="py-4 text-[42px] font-bold leading-tight">
          Design and develop, websites & apps, focusing on human centered
          design.
        </div>
        <p class="text-base leading-normal">
          Since our establishment, we have been delivering high-quality and
          sustainable software solutions for corporate purposes of worldwide
          businesses Digital Brands Products Solutions.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const GradientText = defineComponent({
  props: {
    startingColor: {
      type: String,
    },
    endingColor: {
      type: String,
    },
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return () =>
      h("span", {
        class: props.className,
        style: {
          background: `-webkit-linear-gradient(${props.startingColor}, ${props.endingColor})`,
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        innerHTML: props.text,
      });
  },
});
</script>

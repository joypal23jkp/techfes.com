
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

const points = ref<HTMLCollectionOf<Element>>()
const pointPosition = ref<{x: number, y: number}[]>([])
const domPoints = ref<DOMPoint[]>();
const handleSegmentPoints = (_domPoints: DOMPoint[]) => {
  domPoints.value = _domPoints;
  if (points.value?.length) {
    for (let i = 0; i < points.value.length; i++) {
      // console.log(points.value?.item(i))
    }
  }
}

const pointsClientRects = ref<DOMRectList[]>([]);

onMounted(() => {
  points.value = document.getElementsByClassName('point')
  if (points.value?.length) {
    for (let i = 0; i < points.value.length; i++) {
      const _point = points.value[i];
      // const { x, y } = _point.getClientRects().item(0)!;
      console.log('Client Rects ::', _point.getClientRects());
      pointsClientRects.value.push(_point.getClientRects());
      // pointPosition.value.push({ x, y });
    }
    // if (points.value?.length) {
    //   for (let i = 0; i < points.value.length; i++) {
    //     // console.log(points.value?.item(i), domPoints.value[i]);
    //     points.value.item(i)!.style.top = `${domPoints.value![i].y}px`
    //   }
    // }
  }
})
</script>

<template>
  <div class="mb-[160px] h-[750px] w-full">
    <div
      class="container relative mx-auto h-full w-full py-[100px]"
      id="canvas"
    >
<!--      <CommonSvgWaveLine-->
<!--          class="z-999 fixed bottom-0"-->
<!--          x1="100" y1="250" x2="650" y2="0"-->
<!--          @on-segment-point-initialized="handleSegmentPoints"-->
<!--      />-->

      <div class="lg:max-w-[600px] lg:min-h-[500px] text-center lg:text-left">
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        <div class="flex flex-col items-center lg:absolute bottom-0">
          <CommonSvgApostrophe
              ref="points[0]"
              fill="#D70228"
              class="point w-20 h-20 shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
          />

          <div class="relative max-w-[250px] pt-[28px]">
            <h1 class="text-2xl font-bold">Planning</h1>
            <p class="relative z-10">
              Clearly outline the goals and objectives of the project.
              Identify and allocate necessary resources, including team members, tools, and materials.
            </p>
            <gradient-text
                starting-color="#e66465"
                ending-color="transparent"
                text="1"
                class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
            />
          </div>
        </div>

        <div class="flex flex-col items-center lg:absolute bottom-[2rem] left-[35%]">
          <CommonSvgApostrophe
              ref="points[1]"
              fill="#184174"
              class="point w-20 h-20 shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
          />

          <div class="relative max-w-[250px] pt-[28px]">
            <h1 class="text-2xl font-bold">Execution</h1>
            <p>
              Begin executing the project according to the established plan.
              Foster open communication among team members to ensure everyone is aligned and informed.
            </p>
            <gradient-text
                starting-color="#e66465"
                ending-color="transparent"
                text="2"
                class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
            />
          </div>
        </div>

        <div class="flex flex-col items-center lg:absolute bottom-[16rem] left-[60%]">
            <CommonSvgApostrophe
                ref="points[2]"
                fill="#184174"
                class="point w-20 h-20 shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
            />
            <div class="relative max-w-[250px] pt-[28px]">
              <h1 class="text-2xl font-bold">Review</h1>
              <p>
                Collect input from team members and stakeholders to identify strengths and areas for improvement.
              </p>
              <gradient-text
                starting-color="#e66465"
                ending-color="transparent"
                text="3"
                class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
              />
            </div>
          </div>

        <div class="flex flex-col items-center lg:absolute bottom-[30rem] right-0">
            <CommonSvgApostrophe
                ref="points[3]"
                fill="#184174"
               class="point w-20 h-20 shadow-slate-700 rounded-lg bg-[#ffffff] shadow-2xl"
            />
            <div class="relative max-w-[250px] pt-[28px]">
              <h1 class="text-2xl font-bold">Refinement</h1>
              <p>
                Implement changes based on feedback and evaluation to enhance future projects. Refine workflows and processes to improve efficiency and effectiveness.
              </p>
              <gradient-text
                starting-color="#e66465"
                ending-color="transparent"
                text="4"
                class-name="absolute right-0 top-0 -z-50 text-[150px] font-bold leading-[120px]"
              />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
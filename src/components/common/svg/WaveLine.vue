<script setup lang="ts">

const emits = defineEmits<{
  (e: 'onSegmentPointInitialized', payload: DOMPoint[]): void
  (e: 'onPathCreated', payload: string): void
}>();

const lineElement = ref<SVGLineElement>();
const wavePathElement = ref<SVGLineElement>();


const lineBrokenPoints = ref<DOMPoint[]>();
const path = ref('');
const controlDegree = ref(45);
const generatePath = () => {
  let _path = 'M';
  if (lineBrokenPoints.value?.length) {
    _path += `${lineBrokenPoints.value[0].x} ${lineBrokenPoints.value[0].y}`;

    const _bPoint = lineBrokenPoints.value?.slice(1, lineBrokenPoints.value?.length);
    _bPoint.forEach((_point, index) => {
      if (index % 2 === 0) {
        let  _prevPoint = _bPoint[index-1];

        if (index === 0) {
          _prevPoint = lineBrokenPoints.value![0];
        }

        const anglePosition = findThirdPosition(
            { x: _prevPoint.x, y: _prevPoint.y },
            { x: _point.x, y: _point.y },
            controlDegree.value
        )

        console.log(anglePosition)

        _path += ` Q${anglePosition.x} ${ anglePosition.y } ${_point.x} ${_point.y}`;
      } else {
        _path += ` T${_point.x} ${_point.y}`;
      }
    });
  }
  emits('onPathCreated', _path);
  return _path;
};

// function getSVGElementCoordinates(svgElement: SVGElement) {
//   const bbox = svgElement.getBoundingClientRect();
//   const svg = svgElement.ownerSVGElement;
//   const ctm = svg.getScreenCTM();
//
//   const x = (bbox.left - ctm.e) / ctm.a;
//   const y = (bbox.top - ctm.f) / ctm.d;
//
//   return { x, y };
// }


const segmentedLineElement = (count: number) => {
  const _totalLength = lineElement.value?.getTotalLength() ?? 1;

  const _points = Array.from(Array(count+1).keys()).map((value, index) => {
    return lineElement.value?.getPointAtLength(index * (_totalLength/count));
  }) as DOMPoint[]

  emits('onSegmentPointInitialized', _points);
  return _points;
}

interface Position {
  x: number;
  y: number;
}

function findThirdPosition(position1: Position, position2: Position, degree: number): Position {
  // Calculate the difference between the two positions
  const dx = position2.x - position1.x;
  const dy = position2.y - position1.y;

  // Calculate the magnitude of the difference
  const magnitude = Math.sqrt(dx * dx + dy * dy);

  // Calculate the unit vector in the direction of the difference
  const unitX = dx / magnitude;
  const unitY = dy / magnitude;

  // Rotate the unit vector by the given degree
  const radian = degree * Math.PI / 180;
  const sinTheta = Math.sin(radian);
  const cosTheta = Math.cos(radian);
  const rotatedX = unitX * cosTheta - unitY * sinTheta;
  const rotatedY = unitX * sinTheta + unitY * cosTheta;

  // Multiply the rotated unit vector by the magnitude of the difference to get the displacement vector
  const displacementX = rotatedX * magnitude;
  const displacementY = rotatedY * magnitude;

  // Add the displacement vector to one of the given positions to get the third position
  const x3 = position1.x + displacementX;
  const y3 = position1.y + displacementY;

  return { x: x3, y: y3 };
}

onMounted(() => {
  lineBrokenPoints.value = segmentedLineElement(3);
  path.value = generatePath();

});

watch([controlDegree], () => {
  path.value = generatePath();
});

const viewPort = ref("0 0 1536 750");

onUpdated(() => {
  console.log((useAttrs()?.canvasBoundary as DOMRect).height)
  if (useAttrs()?.canvasBoundary) {
    viewPort.value = `0 0 ${(useAttrs()?.canvasBoundary as DOMRect).width } ${(useAttrs()?.canvasBoundary as DOMRect).height}`;
  }
  viewPort.value = "0 0 1536 750";
})
</script>

<template>
  <svg class="svg-path-wave-line border absolute" :viewBox="viewPort" style="border: 1px solid; width: 100%; height: 100%;">

    <line ref="lineElement" v-bind="$attrs" stroke="red" />
    <circle v-for="(breakPoint, index) in lineBrokenPoints" :key="index" :cx="breakPoint.x" :cy="breakPoint.y" r="5" />
    <path ref="wavePathElement"
          fill="none"
          stroke-width="5"
          stroke="#95c4ff"
          :d="$attrs.path"
          :key="path"
          style="transition-duration: 1s"
    />
  </svg>
</template>

<style scoped></style>

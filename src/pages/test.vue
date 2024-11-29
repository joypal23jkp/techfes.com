<template>
  <div class="min-h-screen">
<!--    <svg class="demo-svg" ref="svgElement" viewBox="-40 -30 580 230">-->
<!--      <path-->
<!--          fill="none"-->
<!--          stroke="red"-->
<!--          d="M50 350 Q50 100, 160 290 T270 230 Q270 50, 380 170 T490 110 Q450 10 490 110 Q600 50"-->
<!--      />-->
<!--      <circle v-for="_pathPoint in pathPoints" :key="_pathPoint" :cx="_pathPoint.x" :cy="_pathPoint.y" r="2" fill="red" />-->

<!--      <line v-for="(_pathPoint, i) in pathPoints" :key="i" :x1="_pathPoint.x" :y1="_pathPoint.y + 20" :x2="_pathPoint.x" :y2="_pathPoint.y - 20" stroke="black" />-->
<!--    </svg>-->
    <BaseSVG class="border" viewBox="0 0 580 230">
      <line ref="lineElement" x1="0" y1="230" x2="580" y2="0" stroke="#95C4FF" />
      <circle v-for="breakPoint in lineBrokenPoints" :key="breakPoint" :cx="breakPoint.x" :cy="breakPoint.y" r="5" />
      <SVGPath
          ref="wavePathElement"
          stroke="black"
          :d="path"
      />
    </BaseSVG>
  </div>
</template>
<script lang="ts" setup>
import { BaseSVG, SVGPath } from "~/components/common/svg";
const svgElement = ref<SVGElement>();
const lineElement = ref<SVGLineElement>();
const wavePathElement = ref<SVGLineElement>();

const lineBrokenPoints = ref<DOMPoint[]>();
const path = ref('');
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
            45
        )

        _path += ` Q${anglePosition.x} ${ anglePosition.y } ${_point.x} ${_point.y}`;
      } else {
        _path += ` T${_point.x} ${_point.y}`;
      }
    });
  }
  return _path;
};

onMounted(() => {
  lineBrokenPoints.value = segmentedLineElement(5);
  path.value = generatePath();
});

const segmentedLineElement = (count: number) => {
  const _totalLength = lineElement.value?.getTotalLength() ?? 1;

  return Array.from(Array(count+1).keys()).map((value, index) => {
    return lineElement.value?.getPointAtLength(index * (_totalLength/count));
  }) as DOMPoint[]
}

function getPathPoints(d: string, step = 20) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);

  const length = path.getTotalLength();
  const count = length / step;

  const points = [];
  for (let i = 0; i < count + 1; i++) {
    const n = i * step;
    points.push(path.getPointAtLength(n));
  }

  return points;
}

const _d = ref("M 50 150 C 150 150, 150  50, 250  50 C 350  50, 350 150, 450 150");

const pathPoints = ref<DOMPoint[]>([]);

onMounted(() => {
  if (svgElement.value) {
    pathPoints.value = getPathPoints(_d.value, 30);
  }
})

interface Position {
  x: number;
  y: number;
}

function findThirdPosition(position1: Position, position2: Position, degree: number): Position {
  console.log(position1, position2)
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
</script>
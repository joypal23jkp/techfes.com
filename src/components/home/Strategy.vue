<script lang="ts" setup>
import { ref, onMounted, defineComponent, h } from 'vue';

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
    // for (let i = 0; i < points.value.length; i++) {
    //   const _point = points.value[i];
    //   const { x, y } = _point.getClientRects().item(0)!;
    //   // console.log('Client Rects ::', );
    //   pointsClientRects.value.push(_point.getClientRects());
    //   pointPosition.value.push({ x, y });
    // }

    for (let _point of points.value) {
      console.log(_point.getClientRects())
      const { x, y } = _point.getClientRects().item(0)!;
      pointsClientRects.value.push(_point.getClientRects());
      pointPosition.value.push({ x, y });
    }

    // if (points.value?.length) {
    //   for (let i = 0; i < points.value.length; i++) {
    //     points.value.item(i)!.style.top = `${domPoints.value![i].y}px`
    //   }
    // }
  }

  console.log(pointPosition.value, 'point position');
  console.log(generatePath())
})


const generatePath = () => {
  let _path = 'M';
  if (pointPosition.value?.length) {
    _path += `${pointPosition.value[0].x} ${pointPosition.value[0].y}`;

    const _bPoint = pointPosition.value?.slice(1, pointPosition.value?.length);
    _bPoint.forEach((_point, index) => {
      if (index % 2 === 0) {
        let  _prevPoint = _bPoint[index-1];

        if (index === 0) {
          _prevPoint = pointPosition.value![0];
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

const canvasBoundary = ref();
onMounted(() => {
  const strategySection = document.getElementById('strategySection');
  canvasBoundary.value = strategySection?.getBoundingClientRect();
});

// Point references
const point1 = ref(null);
const point2 = ref(null);
const point3 = ref(null);
const point4 = ref(null);
const connectingPath = ref(null);
const pathSvg = ref(null);
const strategySection = ref(null);
const pathData = ref('');

// SVG Path animations
const path1to2 = ref('');
const path2to3 = ref('');
const path3to4 = ref('');

// Add refs for path segments
const path1to2Ref = ref(null);
const path2to3Ref = ref(null);
const path3to4Ref = ref(null);

// Function to calculate the coordinates for path segments
const calculatePathData = (points) => {
  if (points.length < 2) return '';

  const pathSegments = [];
  
  for (let i = 0; i < points.length - 1; i++) {
    const start = points[i];
    const end = points[i + 1];
    
    // Calculate horizontal distance
    const dx = end.x - start.x;
    
    // Adjust wave amplitude based on distance
    const amplitude = Math.min(50, Math.max(20, dx * 0.15));
    
    // Different wave patterns for each segment
    if (i === 0) {
      // First segment - gentle upward curve then downward
      pathSegments.push(`M${start.x},${start.y} C${start.x + dx * 0.3},${start.y - amplitude} ${end.x - dx * 0.4},${end.y + amplitude} ${end.x},${end.y}`);
    } else if (i === 1) {
      // Second segment - S curve (up then down)
      pathSegments.push(`M${start.x},${start.y} C${start.x + dx * 0.25},${start.y - amplitude * 0.8} ${start.x + dx * 0.6},${start.y - amplitude * 1.2} ${start.x + dx * 0.7},${start.y} C${start.x + dx * 0.8},${start.y + amplitude * 0.8} ${end.x - dx * 0.2},${end.y + amplitude * 0.5} ${end.x},${end.y}`);
    } else {
      // Third segment - gentle downward curve then upward
      pathSegments.push(`M${start.x},${start.y} C${start.x + dx * 0.3},${start.y + amplitude * 0.8} ${end.x - dx * 0.5},${end.y - amplitude} ${end.x},${end.y}`);
    }
  }
  
  return pathSegments.join(' ');
};

onMounted(() => {
  // First, animate the points appearing
  const animatePoints = () => {
    return new Promise(resolve => {
      // Animate icon elements with a nice staggered effect
      const icons = document.querySelectorAll('.point-icon');
      icons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
          icon.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          icon.style.opacity = '1';
          icon.style.transform = 'scale(1)';
          
          // When the last icon animation starts, we'll prepare to animate paths
          if (index === icons.length - 1) {
            setTimeout(resolve, 600); // Wait for the last animation to complete
          }
        }, 400 + (index * 250)); // Slightly faster appearance
      });
    });
  };

  // Add a slight delay to ensure all elements are properly rendered
  setTimeout(async () => {
    updatePaths();
    
    // First animate all points appearing
    await animatePoints();
    
    // Then animate paths sequentially with more fluid motion
    const animatePath = (pathRef) => {
      return new Promise(resolve => {
        const path = pathRef.value;
        if (!path) {
          resolve();
          return;
        }
        
        // Make the path visible
        path.style.opacity = '1';
        
        // Get the total length of the path
        const length = path.getTotalLength();
        
        // Set up initial state - path is hidden with dashed line pattern
        path.style.strokeDasharray = `6, 8`;
        
        // Use higher dashoffset value to ensure the path is completely hidden
        path.style.strokeDashoffset = length * 3;
        
        // Force a reflow to ensure the initial state takes effect
        path.getBoundingClientRect();
        
        // Remove any existing animations to avoid conflicts
        path.style.animation = 'none';
        
        // Start the drawing animation with cubic-bezier for more natural motion
        path.style.transition = `stroke-dashoffset 1.8s cubic-bezier(0.33, 1, 0.68, 1)`;
        path.style.strokeDashoffset = '0';
        
        // After the drawing animation completes, add the continuous dash animation
        setTimeout(() => {
          path.style.transition = 'none';
          path.style.animation = 'pathDashOffset 40s linear infinite, glowPulse 4s infinite ease-in-out';
          resolve();
        }, 2000);
      });
    };
    
    // Animate paths sequentially with slight overlap for continuous flow
    await animatePath(path1to2Ref);
    setTimeout(() => {
      animatePath(path2to3Ref);
      
      setTimeout(() => {
        animatePath(path3to4Ref);
      }, 800); // Start the final segment before the second one completes
      
    }, 800); // Start the second segment before the first one completes
    
    // Add resize listener to recalculate path on window resize
    window.addEventListener('resize', updatePaths);
  }, 400);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePaths);
});

const updatePaths = () => {
  if (!point1.value || !point2.value || !point3.value || !point4.value) return;
  
  // Get icon centers for all points
  const getIconCenter = (el) => {
    const rect = el.querySelector('.point-icon').getBoundingClientRect();
    const sectionRect = strategySection.value.getBoundingClientRect();
    return { 
      x: rect.left + rect.width / 2 - sectionRect.left, 
      y: rect.top + rect.height / 2 - sectionRect.top 
    };
  };
  
  // Get positions of all points
  pointPosition.value = [
    getIconCenter(point1.value),
    getIconCenter(point2.value),
    getIconCenter(point3.value),
    getIconCenter(point4.value)
  ];
  
  // Calculate individual paths
  path1to2.value = calculatePathData([pointPosition.value[0], pointPosition.value[1]]);
  path2to3.value = calculatePathData([pointPosition.value[1], pointPosition.value[2]]);
  path3to4.value = calculatePathData([pointPosition.value[2], pointPosition.value[3]]);
  
  // Combined path for reference
  pathData.value = calculatePathData(pointPosition.value);
};
</script>

<template>
  <div class="container mb-[160px] h-[750px] w-full relative" ref="strategySection" id="strategySection">
    <!-- SVG Path connecting all points -->
    <svg class="absolute top-0 left-0 w-full h-full pointer-events-none z-0" ref="pathSvg">
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="rgba(58, 2, 179, 0.5)" />
          <stop offset="50%" stop-color="rgba(96, 44, 201, 0.6)" />
          <stop offset="100%" stop-color="rgba(125, 77, 230, 0.7)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        ref="path1to2Ref"
        :d="path1to2"
        fill="none"
        stroke="url(#pathGradient)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="6,8"
        filter="url(#glow)"
        class="path-animation"
      ></path>
      <path
        ref="path2to3Ref"
        :d="path2to3"
        fill="none"
        stroke="url(#pathGradient)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="6,8"
        filter="url(#glow)"
        class="path-animation"
        style="opacity: 0"
      ></path>
      <path
        ref="path3to4Ref"
        :d="path3to4"
        fill="none"
        stroke="url(#pathGradient)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="6,8"
        filter="url(#glow)"
        class="path-animation"
        style="opacity: 0"
      ></path>
    </svg>

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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="point flex flex-col items-center lg:absolute bottom-0" ref="point1">
        <!-- Planning Icon -->
        <div class="point-icon w-16 h-16 shadow-lg rounded-lg bg-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="rgba(215, 2, 40, 0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>

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

      <div class="point flex flex-col items-center lg:absolute bottom-[2rem] left-[35%]" ref="point2">
        <!-- Execution Icon -->
        <div class="point-icon w-16 h-16 shadow-lg rounded-lg bg-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="rgba(24, 65, 116, 0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>

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

      <div class="point flex flex-col items-center lg:absolute bottom-[16rem] left-[60%]" ref="point3">
        <!-- Review Icon -->
        <div class="point-icon w-16 h-16 shadow-lg rounded-lg bg-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="rgba(24, 65, 116, 0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
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

      <div class="point flex flex-col items-center lg:absolute bottom-[30rem] right-0" ref="point4">
        <!-- Refinement Icon -->
        <div class="point-icon w-16 h-16 shadow-lg rounded-lg bg-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="rgba(24, 65, 116, 0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
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
</template>

<style scoped>
.point-icon {
  position: relative;
  z-index: 10;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.point-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

.point-icon:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.point-icon:hover::before {
  opacity: 0.8;
}

.point-icon svg {
  transition: all 0.5s ease;
}

.point-icon:hover svg {
  transform: scale(1.1);
}

.point {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.point:hover {
  transform: translateY(-5px);
}

.point:hover .point-icon {
  transform: translateY(-8px) scale(1.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.path-animation {
  filter: drop-shadow(0px 0px 2px rgba(58, 2, 179, 0.4));
  position: relative;
  animation: pathDashOffset 40s linear infinite, glowPulse 4s infinite ease-in-out;
  transition: all 0.3s ease;
}

/* Dash offset animation - moving dashes along the path */
@keyframes pathDashOffset {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 300;
  }
}

/* Animated glow effect for path */
@keyframes glowPulse {
  0% {
    filter: drop-shadow(0px 0px 2px rgba(58, 2, 179, 0.3));
  }
  50% {
    filter: drop-shadow(0px 0px 6px rgba(125, 77, 230, 0.6));
  }
  100% {
    filter: drop-shadow(0px 0px 2px rgba(58, 2, 179, 0.3));
  }
}

/* Add animation to the points on load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.point:nth-child(1) {
  animation-delay: 0.2s;
}

.point:nth-child(2) {
  animation-delay: 0.4s;
}

.point:nth-child(3) {
  animation-delay: 0.6s;
}

.point:nth-child(4) {
  animation-delay: 0.8s;
}

@media (max-width: 1024px) {
  #strategySection {
    height: auto;
    padding-bottom: 2rem;
  }
  
  .point {
    position: relative !important;
    bottom: auto !important;
    left: auto !important;
    right: auto !important;
    margin-bottom: 3rem;
  }
  
  svg.absolute {
    display: none;
  }
}
</style>
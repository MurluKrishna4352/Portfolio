import React, { useEffect, useRef } from "react";

// Animated flock of birds flying in, then some settle on trees (SVG/canvas)
export default function FlockOfBirds() {
  const ref = useRef<SVGSVGElement>(null);

  // More realistic flock animation: V-formation, wing flaps, birds circle before landing, some nestle together
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    let frame = 0;
    // Birds start offscreen, fly in V, then circle, then land
    // Half birds land on trees, half on garden
    // 4 birds will land on leafy trees, 6 in the garden
    let birds = Array.from({ length: 10 }).map((_, i) => {
      const onTree = i < 4;
      // LeafyTree landing spots (match LeafyTree positions in page.tsx)
      const leafyTreeSpots = [
        { x: 60, y: 180 }, // leftmost tree
        { x: 220, y: 140 }, // 2nd tree
        { x: 700, y: 120 }, // rightmost tree
        { x: 850, y: 180 }, // far right tree
      ];
      // Garden landing spots (spread across the garden patch)
      const gardenSpots = [
        { x: 480, y: 350 },
        { x: 520, y: 340 },
        { x: 560, y: 355 },
        { x: 600, y: 345 },
        { x: 650, y: 350 },
        { x: 700, y: 355 },
      ];
      let nestX, nestY;
      if (onTree) {
        nestX = leafyTreeSpots[i].x + Math.random() * 10;
        nestY = leafyTreeSpots[i].y + Math.random() * 8;
      } else {
        const gardenIdx = i - 4;
        nestX = gardenSpots[gardenIdx].x + Math.random() * 16;
        nestY = gardenSpots[gardenIdx].y + Math.random() * 8;
      }
      return {
        x: -120 - i * 60,
        y: 80 + (i - 5) * 18 + Math.random() * 10,
        vx: 2.2 + Math.random() * 0.5,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
        landed: false,
        circling: false,
        onTree,
        nestX,
        nestY,
        // For circling
        circleAngle: Math.PI * 2 * (i / 10),
        circleRadius: 32 + Math.random() * 10,
        circleCenterX: onTree ? nestX + 80 : nestX + 60,
        circleCenterY: onTree ? nestY - 60 : nestY - 40,
        wingFlap: 0,
        // For garden birds: random walk
        wanderT: Math.random() * 1000,
      };
    });
    let animId: number;
    function animate() {
      frame++;
      birds.forEach((bird, i) => {
        if (!bird.landed) {
          // V-formation approach
          if (!bird.circling && bird.x < bird.circleCenterX - 10) {
            bird.x += bird.vx;
            bird.y += 0.5 * Math.sin(frame / 18 + bird.phase) + (i - 5) * 0.04;
            bird.wingFlap = Math.sin(frame / 4 + i) * 8;
            // Start circling when close
            if (bird.x > bird.circleCenterX - 10) {
              bird.circling = true;
              bird.circleAngle = Math.PI * 2 * (i / 10);
            }
          } else if (bird.circling && !bird.landed) {
            // Circle above trees/garden before landing
            bird.circleAngle += 0.025 + 0.01 * Math.random();
            bird.x = bird.circleCenterX + bird.circleRadius * Math.cos(bird.circleAngle);
            bird.y = bird.circleCenterY + bird.circleRadius * Math.sin(bird.circleAngle);
            bird.wingFlap = Math.sin(frame / 3 + i) * 10;
            // Land after a few circles
            if (bird.circleAngle > Math.PI * 2 * (2 + i / 10)) {
              bird.landed = true;
              bird.x = bird.nestX;
              bird.y = bird.nestY;
            }
          }
        } else {
          // Landed birds: tree birds nestle, garden birds wander
          if (bird.onTree) {
            // Tree birds: gentle nestling on the tree
            bird.wingFlap = Math.sin(frame / 12 + i) * 2;
            bird.x = bird.nestX + Math.sin(frame / 40 + i) * 1.2;
            bird.y = bird.nestY + Math.sin(frame / 30 + i) * 1.2;
          } else {
            // Garden birds: move around the garden patch
            bird.wanderT += 0.012 + Math.random() * 0.01;
            bird.x = bird.nestX + Math.sin(bird.wanderT + i) * 28 + Math.cos(bird.wanderT * 0.7 + i) * 12;
            bird.y = bird.nestY + Math.cos(bird.wanderT + i) * 12 + Math.sin(bird.wanderT * 0.5 + i) * 6;
            bird.wingFlap = Math.sin(frame / 8 + i) * 6;
          }
        }
      });
      // Draw
      if (svg) {
        let birdsEls = svg.querySelectorAll('.bird');
        birds.forEach((bird, i) => {
          let el = birdsEls[i] as SVGPathElement;
          if (el) {
            // Simulate wing flaps by morphing the path
            let flap = bird.wingFlap;
            let path = `M0 0 Q 8 ${-8 + flap} 16 0 Q 8 ${-4 + flap / 2} 0 0`;
            el.setAttribute('d', path);
            el.setAttribute('transform', `translate(${bird.x},${bird.y}) scale(${bird.landed ? 1.18 : 1})`);
            el.setAttribute('opacity', bird.landed ? '1' : '0.88');
          }
        });
      }
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  // SVG: 8 birds, nest shapes on trees
  return (
    <svg
      ref={ref}
      className="pointer-events-none absolute left-0 bottom-0 w-full h-full z-10"
      viewBox="0 0 1000 400"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* Birds flying in (simple V shapes) */}
      {[...Array(10)].map((_, i) => (
        <path
          key={i}
          className="bird"
          d="M0 0 Q 8 -8 16 0 Q 8 -4 0 0"
          fill="none"
          stroke="#444"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.88"
        />
      ))}
      {/* Nests removed as requested */}
      {/* Garden patch for birds to land on */}
      <ellipse cx="520" cy="350" rx="80" ry="18" fill="#b7d7a8" opacity="0.18" />
    </svg>
  );
}
// Imports
import React from "react";
import { useTrail, a } from "@react-spring/web";

interface AnimatedTrailProps {
  open: boolean;
  endHeight: number;
  children: React.ReactNode;
}

/**
 * Animates text with trail
 */
export default function AnimatedTrail(props: AnimatedTrailProps) {
  const { open, children, endHeight } = props;

  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 250 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? endHeight : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          style={{
            width: "100%",
            fontWeight: "100",
            overflow: "hidden",
            position: "relative",
            willChange: "transform, opacity",
            ...style,
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}

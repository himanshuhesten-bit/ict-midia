"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  /** Milliseconds between children. Set it to reveal each child in turn. */
  stagger?: number;
  className?: string;
  children: ReactNode;
};

const DURATION = 700;

/**
 * Fades content up as it scrolls into view.
 *
 * Content is fully visible in the server HTML. Only elements that start below
 * the fold are hidden after load, so nothing flashes and nothing is lost if
 * scripting or motion is unavailable.
 */
export default function Reveal({ as: Tag = "div", stagger = 0, className, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen, or scrolled past: leave it exactly as it is.
    if (root.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    const targets = stagger ? (Array.from(root.children) as HTMLElement[]) : [root];
    targets.forEach((target, index) => {
      target.dataset.reveal = "hidden";
      if (stagger) target.style.transitionDelay = `${Math.min(index, 8) * stagger}ms`;
    });

    let timer = 0;
    // Once the entrance is over, hand each element back to its own styles.
    const release = () => {
      targets.forEach((target) => {
        delete target.dataset.reveal;
        target.style.transitionDelay = "";
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        targets.forEach((target) => {
          target.dataset.reveal = "shown";
        });
        timer = window.setTimeout(release, DURATION + Math.min(targets.length, 9) * stagger + 120);
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      release();
    };
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

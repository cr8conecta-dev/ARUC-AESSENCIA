import React, { useEffect, useState } from "react";
// Import the actual logo SVG as a relative asset URL
import logoArucUrl from "../assets/images/logo aruc.svg";

interface ArucLogoProps {
  className?: string;
  circleColor?: string; // Main color for loops & letters, defaults to 'currentColor'
  dotColor?: string; // Color for brand accents/dots, defaults to '#cca98f'
  symbolOnly?: boolean; // Toggles whether to crop to just the graphic symbol
}

export default function ArucLogo({
  className = "w-10 h-10",
  circleColor = "currentColor",
  dotColor = "#cca98f",
  symbolOnly = false
}: ArucLogoProps) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    // Dynamic fetch of the hashed asset URL
    fetch(logoArucUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load logo asset");
        }
        return res.text();
      })
      .then((data) => {
        // Strip duplicate XML headers if they exist
        const cleaned = data.replace(/<\?xml.*\?>/g, "").trim();
        setSvgContent(cleaned);
      })
      .catch((err) => {
        console.error("Error loading ARUC logo:", err);
      });
  }, []);

  // Safe SVG placeholder fallback while the asset is loading
  if (!svgContent) {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="14"
          stroke={circleColor === "currentColor" ? "#cca98f" : circleColor}
          strokeWidth="4"
          className="animate-pulse"
        />
      </svg>
    );
  }

  // Process SVG content safely with DOMParser
  let processedSvg = "";
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, "image/svg+xml");
    const svgElement = doc.querySelector("svg");

    if (svgElement) {
      // 1. Remove hardcoded width/height to make it fully fluid
      svgElement.removeAttribute("width");
      svgElement.removeAttribute("height");

      // 2. Adjust viewBox and filter paths depending on symbolOnly mode
      if (symbolOnly) {
        // Remove text elements who lie at y > 700 at the bottom of the raw 1080 canvas
        const paths = doc.querySelectorAll("path");
        paths.forEach((path) => {
          const transform = path.getAttribute("transform") || "";
          const translateMatch = transform.match(
            /translate\(\s*[-+]?[0-9]*\.?[0-9]+\s*,\s*([-+]?[0-9]*\.?[0-9]+)\s*\)/
          );
          if (translateMatch) {
            const yVal = parseFloat(translateMatch[1]);
            if (yVal > 700) {
              path.remove();
            }
          }
        });

        // Elegant viewBox wrapping only the graphic loops symmetrically
        // Bounding box of loops: x (111 to 970), y (72 to 662)
        // Set viewPort: minX=90, minY=40, width=900, height=720 to ensure it is complete and uncut
        svgElement.setAttribute("viewBox", "90 40 900 720");
      } else {
        // For full logo (text + symbol), setting viewBox to 0 0 1080 1080 keeps letters fully inside matching raw dimensions
        svgElement.setAttribute("viewBox", "0 0 1080 1080");
      }

      // 3. Map dynamic color variables to path fills
      const paths = doc.querySelectorAll("path");
      paths.forEach((path) => {
        const fill = path.getAttribute("fill") || "";
        if (fill.toUpperCase() === "#F1EAE4" || fill === "") {
          path.setAttribute("fill", circleColor === "currentColor" ? "currentColor" : circleColor);
        } else if (fill.toUpperCase() === "#CBA88E") {
          path.setAttribute("fill", dotColor);
        }
      });

      const serializer = new XMLSerializer();
      processedSvg = serializer.serializeToString(doc);
    }
  } catch (error) {
    console.error("Error processing SVG with DOMParser:", error);
    // Graceful fallback to regex strings if DOMParser isn't supported
    processedSvg = svgContent
      .replace(/fill="#F1EAE4"/g, `fill="${circleColor === "currentColor" ? "currentColor" : circleColor}"`)
      .replace(/fill="#CBA88E"/g, `fill="${dotColor}"`);
    
    if (symbolOnly) {
      processedSvg = processedSvg.replace("<svg", `<svg viewBox="90 40 900 720"`);
    } else {
      processedSvg = processedSvg.replace("<svg", `<svg viewBox="0 0 1080 1080"`);
    }
  }

  // Render the sanitized dynamic vector directly inside an inline block element
  return (
    <div
      className={`inline-block select-none ${className}`}
      dangerouslySetInnerHTML={{ __html: processedSvg || svgContent }}
    />
  );
}

// Typographic logo with the custom dot inside the 'A'
export function ArucTypography({ className = "font-serif text-3xl tracking-[0.25em]" }: { className?: string }) {
  return (
    <span className={`${className} font-medium tracking-[0.25em] flex items-center`}>
      <span>ARUC</span>
    </span>
  );
}

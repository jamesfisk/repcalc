import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const alt = "RPE Calculator";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 300,
          color: "black",
          background: "linear-gradient(to bottom right, #f5fdff, #95b6fc)",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        🏋️‍♂️
      </div>
    ),
    { ...size },
  );
}

import { buildUrl } from "cloudinary-build-url";

const url = buildUrl("[Your Cloudinary Image ID]", {
  cloud: {
    cloudName: "[Your Cloudinary Cloud Name]",
  },
  transformations: {
    effect: {
      name: "pixelate",
      value: 40,
    },
  },
});

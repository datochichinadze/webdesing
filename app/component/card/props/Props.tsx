export const cars = [
  { id: 1, title: "911 -Turbo", image: "/turbo.jpg" },
  { id: 2, title: "GT3 RS", image: "/gtrs.jpg" },
  { id: 3, title: "Porsche", image: "/porsche.jpg" },
  { id: 4, title: "Super Porsche", image: "/superporsche.jpg" },
];

export interface CardProps {
  title: string;
  image: string;
}

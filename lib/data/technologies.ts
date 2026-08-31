export const technologies = [
  {
    id: "thermal",
    name: "Thermal imaging",
    body: "Infrared frames show surface temperature differences. Cooler or irregular patterns can mark zones worth checking for moisture or concealed plumbing — they do not reveal a pipe behind a wall on their own.",
  },
  {
    id: "moisture",
    name: "Moisture meter",
    body: "Readings on walls, ceilings, and floors help compare dry and affected areas and track whether a stain is active or historic.",
  },
  {
    id: "acoustic",
    name: "Acoustic detection",
    body: "Listening equipment can pick up characteristic sounds associated with water movement in concealed or buried lines when site conditions allow.",
  },
  {
    id: "ultrasonic",
    name: "Ultrasonic detection",
    body: "Used selectively on concealed leakage investigations where acoustic contrast is useful. Not every site or pipe material yields a clear signal.",
  },
  {
    id: "visual",
    name: "Visual inspection",
    body: "A methodical physical review of plumbing, wet rooms, walls, ceilings, floors, terraces, and other accessible construction details remains the backbone of every visit.",
  },
] as const;

/**
 * Typed flight comparison data (extracted from template/template.html).
 * Column mapping: Irány, Indulás (date, time, day), Érkezés (date, time, day), Légitársaság, Ár.
 */

export interface FlightLeg {
  direction: string;
  date: string;
  time: string;
  dayOfWeek: string;
  airline: string;
}

export interface FlightOption {
  outbound: FlightLeg;
  return: FlightLeg;
  price: number; // in Ft
}

export interface Destination {
  name: string;
  options: FlightOption[];
}

export const destinations: Destination[] = [
  {
    name: "Nápoly",
    options: [
      {
        outbound: {
          direction: "Budapest - Nápoly",
          date: "2026.07.02",
          time: "14:25",
          dayOfWeek: "Csütörtök",
          airline: "WizzAir",
        },
        return: {
          direction: "Nápoly - Budapest",
          date: "2026.07.05",
          time: "22:15",
          dayOfWeek: "Vasárnap",
          airline: "RyanAir",
        },
        price: 28_000,
      },
      {
        outbound: {
          direction: "Budapest - Nápoly",
          date: "2026.07.04",
          time: "14:25",
          dayOfWeek: "Szombat",
          airline: "WizzAir",
        },
        return: {
          direction: "Nápoly - Budapest",
          date: "2026.07.07",
          time: "11:55",
          dayOfWeek: "Kedd",
          airline: "WizzAir",
        },
        price: 22_000,
      },
    ],
  },
  {
    name: "Valencia",
    options: [
      {
        outbound: {
          direction: "Budapest - Valencia",
          date: "2026.07.02",
          time: "6:25",
          dayOfWeek: "Csütörtök",
          airline: "RyanAir",
        },
        return: {
          direction: "Valencia - Budapest",
          date: "2026.07.05",
          time: "6:10",
          dayOfWeek: "Vasárnap",
          airline: "RyanAir",
        },
        price: 58_000,
      },
      {
        outbound: {
          direction: "Budapest - Valencia",
          date: "2026.06.11",
          time: "6:25",
          dayOfWeek: "Csütörtök",
          airline: "RyanAir",
        },
        return: {
          direction: "Valencia - Budapest",
          date: "2026.06.14",
          time: "6:10",
          dayOfWeek: "Vasárnap",
          airline: "RyanAir",
        },
        price: 39_000,
      },
    ],
  },
  {
    name: "Alicante",
    options: [
      {
        outbound: {
          direction: "Budapest - Alicante",
          date: "2026.06.18",
          time: "21:20",
          dayOfWeek: "Csütörtök",
          airline: "RyanAir",
        },
        return: {
          direction: "Alicante - Budapest",
          date: "2026.06.22",
          time: "9:15",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 53_000,
      },
    ],
  },
  {
    name: "Rodosz",
    options: [
      {
        outbound: {
          direction: "Budapest - Rodosz",
          date: "2026.07.02",
          time: "18:30",
          dayOfWeek: "Csütörtök",
          airline: "RyanAir",
        },
        return: {
          direction: "Rodosz - Budapest",
          date: "2026.07.06",
          time: "14:50",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 77_000,
      },
      {
        outbound: {
          direction: "Budapest - Rodosz",
          date: "2026.06.12",
          time: "12:40",
          dayOfWeek: "Péntek",
          airline: "WizzAir",
        },
        return: {
          direction: "Rodosz - Budapest",
          date: "2026.06.15",
          time: "14:50",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 65_000,
      },
    ],
  },
  {
    name: "Mykonos",
    options: [
      {
        outbound: {
          direction: "Budapest - Mykonos",
          date: "2026.07.11",
          time: "7:40",
          dayOfWeek: "Szombat",
          airline: "RyanAir",
        },
        return: {
          direction: "Mykonos - Budapest",
          date: "2026.07.13",
          time: "19:00",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 56_000,
      },
      {
        outbound: {
          direction: "Budapest - Mykonos",
          date: "2026.07.18",
          time: "7:40",
          dayOfWeek: "Szombat",
          airline: "RyanAir",
        },
        return: {
          direction: "Mykonos - Budapest",
          date: "2026.07.20",
          time: "19:00",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 57_000,
      },
    ],
  },
  {
    name: "Lisszabon - Porto",
    options: [
      {
        outbound: {
          direction: "Budapest - Lisszabon",
          date: "2026.07.03",
          time: "16:45",
          dayOfWeek: "Péntek",
          airline: "WizzAir",
        },
        return: {
          direction: "Porto - Budapest",
          date: "2026.07.06",
          time: "19:20",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 73_500,
      },
      {
        outbound: {
          direction: "Budapest - Lisszabon",
          date: "2026.06.19",
          time: "16:45",
          dayOfWeek: "Péntek",
          airline: "WizzAir",
        },
        return: {
          direction: "Porto - Budapest",
          date: "2026.06.22",
          time: "19:20",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 72_000,
      },
    ],
  },
  {
    name: "Lisszabon",
    options: [
      {
        outbound: {
          direction: "Budapest - Lisszabon",
          date: "2026.06.12",
          time: "16:45",
          dayOfWeek: "Péntek",
          airline: "WizzAir",
        },
        return: {
          direction: "Lisszabon - Budapest",
          date: "2026.06.15",
          time: "20:30",
          dayOfWeek: "Hétfő",
          airline: "WizzAir",
        },
        price: 64_000,
      },
      {
        outbound: {
          direction: "Budapest - Lisszabon",
          date: "2026.06.12",
          time: "20:15",
          dayOfWeek: "Péntek",
          airline: "RyanAir",
        },
        return: {
          direction: "Lisszabon - Budapest",
          date: "2026.06.15",
          time: "17:35",
          dayOfWeek: "Hétfő",
          airline: "RyanAir",
        },
        price: 53_000,
      },
      {
        outbound: {
          direction: "Budapest - Lisszabon",
          date: "2026.06.12",
          time: "20:15",
          dayOfWeek: "Péntek",
          airline: "RyanAir",
        },
        return: {
          direction: "Lisszabon - Budapest",
          date: "2026.06.16",
          time: "19:10",
          dayOfWeek: "Kedd",
          airline: "RyanAir",
        },
        price: 48_000,
      },
    ],
  },
];

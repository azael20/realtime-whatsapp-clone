const { v4: uuidv4 } = require('uuid'); // Importa la biblioteca uuid para generar UUIDs

interface Contact {
  id: string;
  name: string;
  phone_number: string;
  profile_picture: string;
  status: string;
  last_message: string;
  last_message_seen: boolean;
  last_connection: string;
  unread_messages: number;
  createdAt: string;
}

export const whatsappContacts: Contact[] = [
  {
    id: "1",
    name: "Amigo 1",
    phone_number: "+1234567890",
    profile_picture: "https://via.placeholder.com/150",
    status: "Disponible",
    last_message: "Hola, ¿cómo estás?",
    last_message_seen: true,
    last_connection: "Hoy a las 10:30 AM",
    unread_messages: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Amigo 2",
    phone_number: "+9876543210",
    profile_picture: "https://via.placeholder.com/150",
    status: "Ocupado",
    last_message: "¡Vamos a cenar esta noche!",
    last_message_seen: false,
    last_connection: "Ayer a las 8:45 PM",
    unread_messages: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Familiar 1",
    phone_number: "+1112223333",
    profile_picture: "https://via.placeholder.com/150",
    status: "En línea",
    last_message: "Recuerda comprar leche en el camino a casa.",
    last_message_seen: true,
    last_connection: "Hace 2 días a las 3:15 PM",
    unread_messages: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Colega 1",
    phone_number: "+5556667777",
    profile_picture: "https://via.placeholder.com/150",
    status: "No molestar",
    last_message: "¿Tienes los informes listos?",
    last_message_seen: true,
    last_connection: "Hace 5 horas a las 9:00 AM",
    unread_messages: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Amiga 3",
    phone_number: "+4445556666",
    profile_picture: "https://via.placeholder.com/150",
    status: "Fuera de servicio",
    last_message: "Llámame cuando estés libre.",
    last_message_seen: true,
    last_connection: "Hace 1 semana a las 2:30 PM",
    unread_messages: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Compañero de equipo 1",
    phone_number: "+9998887777",
    profile_picture: "https://via.placeholder.com/150",
    status: "En una reunión",
    last_message: "Hablemos después de la reunión.",
    last_message_seen: false,
    last_connection: "Hoy a las 11:00 AM",
    unread_messages: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Amigo 4",
    phone_number: "+1231231234",
    profile_picture: "https://via.placeholder.com/150",
    status: "Disponible",
    last_message: "¿Qué estás haciendo esta tarde?",
    last_message_seen: false,
    last_connection: "Hoy a las 2:30 PM",
    unread_messages: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Familiar 2",
    phone_number: "+9879879876",
    profile_picture: "https://via.placeholder.com/150",
    status: "En línea",
    last_message: "Te extrañamos, ¿cuándo vienes a visitarnos?",
    last_message_seen: true,
    last_connection: "Ayer a las 7:00 PM",
    unread_messages: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "9",
    name: "Amiga 5",
    phone_number: "+3334445555",
    profile_picture: "https://via.placeholder.com/150",
    status: "Ocupada",
    last_message: "Hablamos más tarde, estoy en una llamada.",
    last_message_seen: true,
    last_connection: "Hoy a las 3:45 PM",
    unread_messages: 2,
    createdAt: new Date().toISOString(),
  },
  {
    id: "10",
    name: "Compañero de trabajo 2",
    phone_number: "+6665554444",
    profile_picture: "https://via.placeholder.com/150",
    status: "En reunión",
    last_message: "Luego reviso tu correo, estoy en una reunión importante.",
    last_message_seen: false,
    last_connection: "Hoy a las 10:00 AM",
    unread_messages: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "11",
    name: "Amigo 6",
    phone_number: "+1112223333",
    profile_picture: "https://via.placeholder.com/150",
    status: "Fuera de servicio",
    last_message: "Nos vemos en el partido el sábado.",
    last_message_seen: false,
    last_connection: "Hace 2 días a las 9:00 PM",
    unread_messages: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "12",
    name: "Familiar 3",
    phone_number: "+2223334444",
    profile_picture: "https://via.placeholder.com/150",
    status: "Disponible",
    last_message: "Recuerda comprar los boletos para el concierto.",
    last_message_seen: true,
    last_connection: "Hoy a las 8:30 AM",
    unread_messages: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "13",
    name: "Amiga 7",
    phone_number: "+7776665555",
    profile_picture: "https://via.placeholder.com/150",
    status: "En línea",
    last_message: "¿Quieres hacer planes para el fin de semana?",
    last_message_seen: true,
    last_connection: "Hace 1 semana a las 5:15 PM",
    unread_messages: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "14",
    name: "Familiar 3",
    phone_number: "+2223334444",
    profile_picture: "https://via.placeholder.com/150",
    status: "Disponible",
    last_message: "Recuerda comprar los boletos para el concierto.",
    last_message_seen: true,
    last_connection: "Hoy a las 8:30 AM",
    unread_messages: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "15",
    name: "Amiga 7",
    phone_number: "+7776665555",
    profile_picture: "https://via.placeholder.com/150",
    status: "En línea",
    last_message: "¿Quieres hacer planes para el fin de semana?",
    last_message_seen: true,
    last_connection: "Hace 1 semana a las 5:15 PM",
    unread_messages: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "16",
    name: "Familiar 3",
    phone_number: "+2223334444",
    profile_picture: "https://via.placeholder.com/150",
    status: "Disponible",
    last_message: "Recuerda comprar los boletos para el concierto.",
    last_message_seen: true,
    last_connection: "Hoy a las 8:30 AM",
    unread_messages: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "17",
    name: "Amiga 7",
    phone_number: "+7776665555",
    profile_picture: "https://via.placeholder.com/150",
    status: "En línea",
    last_message: "¿Quieres hacer planes para el fin de semana?",
    last_message_seen: true,
    last_connection: "Hace 1 semana a las 5:15 PM",
    unread_messages: 1,
    createdAt: new Date().toISOString(),
  },
];

import {TaskType} from "../models/Task.ts";
export const label = [
    'Personal',
    'Study',
    'Work',
];
export const tasks: TaskType[] = [
    {
        id: 1,
        title: 'Completar informe',
        label: 'Personal',
        name: 'Ali Connors',
        description: 'Terminar el informe de ventas mensuales'
    },
    {
        id: 2,
        title: 'Enviar correo electrónico',
        label: 'Work',
        name: 'Summer BBQ',
        description: 'Enviar el correo electrónico de seguimiento a los clientes'
    },
    {
        id: 3,
        title: 'Reunión de equipo',
        label: 'Personal',
        name: 'Oui Oui',
        description: 'Asistir a la reunión semanal del equipo'
    },
    {
        id: 4,
        title: 'Preparar presentación',
        label: 'Work',
        name: 'John Doe',
        description: 'Preparar la presentación para el próximo cliente'
    },
    {
        id: 5,
        title: 'Investigar nuevas oportunidades de mercado',
        label: 'Study',
        name: 'Jane Smith',
        description: 'Realizar investigación de mercado para identificar nuevas oportunidades'
    },
    {
        id: 6,
        title: 'Actualizar el sitio web',
        label: 'Work',
        name: 'Mark Johnson',
        description: 'Realizar actualizaciones y mejoras en el sitio web de la empresa'
    }
]
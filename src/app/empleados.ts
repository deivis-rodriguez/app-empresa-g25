export interface Empleado {
    nombre: string;
    cargo: string;
    idEmpleado: number;
    bono: boolean,
    detalleBono?: {
        descripcion: string,
        valor: number,
        fechaExpiracion: string
    }
}

export const empleados: Empleado[] = [
    {
        nombre: 'david Gomez',
        cargo: 'Operario',
        idEmpleado: 1,
        bono: true,
        detalleBono: {
            descripcion: 'bono por cumplir metas del mes de octubre',
            valor: 167400,
            fechaExpiracion: '31/12/2022'
        }
    },
    {
        nombre: 'Andrea Perez',
        cargo: 'Gerente',
        idEmpleado: 2,
        bono: true,
        detalleBono: {
            descripcion: 'bono por ventas',
            valor: 500500,
            fechaExpiracion: '31/12/2023'
        }
    },
    {
        nombre: 'Manuel Ospina',
        cargo: 'cordinador de piso',
        idEmpleado: 3,
        bono: false
    },
    {
        nombre: 'Clara Ramos',
        cargo: 'Operaria',
        idEmpleado: 4,
        bono: true,
        detalleBono: {
            descripcion: '',
            valor: 168000,
            fechaExpiracion: '30/06/2022'
        }
    },
];
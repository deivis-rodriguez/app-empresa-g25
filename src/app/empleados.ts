export interface Empleado {
    nombre: string;
    cargo: string;
    idEmpleado: number;
    bono: boolean
}

export const empleados: Empleado[] = [
    {
        nombre: 'david Gomez',
        cargo: 'Operario',
        idEmpleado: 1,
        bono: true
    },
    {
        nombre: 'Andea Perez',
        cargo: 'Gerente',
        idEmpleado: 2,
        bono: true
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
        bono: true
    },
];
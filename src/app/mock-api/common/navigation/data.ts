/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id: 'Pedidos',
        title: 'Pedidos',
        type: 'collapsable',
        icon: 'mat_outline:shopping_bag',
        link: '/',
        children: [
            {
                id: 'Hacer Pedido',
                title: 'Hacer Pedido',
                type: 'basic',
                icon: 'mat_outline:shopping_bag',
                link: '/pedidos/hacerpedido'
            },
            {
                id: 'Gestión Pedidos',
                title: 'Gestión Pedidos',
                type: 'basic',
                icon: 'mat_outline:shopping_bag',
                link: '/pedidos/gestion'
            },
            {
                id: 'Catalogo',
                title: 'Catalogo',
                type: 'basic',
                icon: 'mat_outline:shopping_bag',
                link: '/pedidos/catalogo'
            }

        ]

    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path : 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
    },
    {
        path : 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }
];
//pour creer un module=> ng g module nom_mod
//bsh n9olou lehne kifh bsh tchargi les modules
import Home from '../views/Home'
import About from '../views/About'

import NewNote from '../views/Notes/Create'

import TableOfNote from '../views/Notes/Table'
import ShowTheNote from '../views/Notes/Show'
import EditNote from '../views/Notes/Edit'
export default {
    mode: 'history',
    linkActiveClass: 'active',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'pages.about',
            component: About
        },
        {
            path: '/notes/create',
            name: 'notes.create',
            component: NewNote
        },
        {
            path: '/notes/table',
            name: 'notes.table',
            component: TableOfNote
        },
        {
            path: '/notes/:noteSlug',
            name: 'notes.show',
            component: ShowTheNote
        },
        {
            path: '/notes/:noteSlug/edit',
            name: 'notes.edit',
            component: EditNote
        },
    ]
}

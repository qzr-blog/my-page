import Edit from 'views/admin/Edit.vue'
import Admin from 'views/admin/Admin.vue'

export default [
  {
    path: '/admin/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/admin/index',
    name: 'admin',
    component: Admin
  }
]
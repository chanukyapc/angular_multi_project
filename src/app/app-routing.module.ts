import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { View1Component } from 'projects/application1/src/app/view1/view1.component';
// import { View2Component } from 'projects/application1/src/app/view2/view2.component';
import { View1Component } from '../../projects/application1/src/app/view1/view1.component';
import { View2Component } from '../../projects/application1/src/app/view2/view2.component';
// import { View2Component } from '../../projects/application2/src/app/view2/view2.component';
// import { View2Component } from '../'



const routes: Routes = [
  {path:'application1/thisisone',component:View1Component},
  { path:'application1/thisistwo',component:View2Component},
  // { path:'application1',redirectTo:'application1/thisisone'},
  { path: '**', redirectTo: '/application1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

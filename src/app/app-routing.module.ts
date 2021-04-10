import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BrowseComponent } from './browse/browse.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {path:'home.html',component:HomeComponent},
  {path:'',redirectTo:'/home.html',pathMatch:'full'},
   {path:'about.html',component:AboutComponent},
  {path:'browse.html',component:BrowseComponent},
  {path:'register.html',component:RegisterComponent},
  {path:'contact.html',component:ContactComponent},
  {path:'info.html',component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

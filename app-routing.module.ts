import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent} from './service/service.component';
import { PortfolioComponent} from './portfolio/portfolio.component'
import { LoginComponent } from './login/login.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'service', component: ServiceComponent},
  {path:'portfolio',component: PortfolioComponent},
  {path:'careers',component:CareersComponent},
  {path:'Login&signup',component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryContainer } from './containers/entry/entry.container';
import { JuicesContainer } from './containers/juices/juices.container';
import { CandiesContainer } from './containers/candies/candies.container';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entry'},
  {path: 'entry', component: EntryContainer},
  {path: 'juices', component: JuicesContainer},
  {path: 'candies', component: CandiesContainer},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }

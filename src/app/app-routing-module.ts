import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
const appRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

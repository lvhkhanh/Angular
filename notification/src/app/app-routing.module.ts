import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

const routes = [
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CleanUrlPipe } from './clean-url/clean-url';
@NgModule({
	declarations: [CleanUrlPipe],
	imports: [],
	exports: [CleanUrlPipe]
})
export class PipesModule {}

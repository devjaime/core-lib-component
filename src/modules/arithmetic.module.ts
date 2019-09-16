import { NgModule, ModuleWithProviders } from '@angular/core';

import { SumService } from '../services/sum.service';
import { SumComponent } from '../components/sum.component';

@NgModule({
    declarations: [
        // Pipes.
        // Directives.
        // Components.
        SumComponent
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        SumComponent
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class ArithmeticModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders<ArithmeticModule> {
        return {
            ngModule: ArithmeticModule,
            providers: [SumService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders<ArithmeticModule> {
        return {
            ngModule: ArithmeticModule,
            providers: [SumService]
        };
    }

}

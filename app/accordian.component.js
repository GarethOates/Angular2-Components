System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AccordianComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AccordianComponent = (function () {
                function AccordianComponent() {
                    this.isExpanded = false;
                }
                AccordianComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AccordianComponent.prototype, "title", void 0);
                AccordianComponent = __decorate([
                    core_1.Component({
                        selector: 'accordian',
                        template: "\n    <div class=\"panel panel-default\">\n        <div \n            class=\"panel-heading\" \n            (click)=\"toggle()\">\n      {{ title }}\n    <i \n        class=\"pull-right glyphicon\"\n        [ngClass]=\"{\n           'glyphicon-chevron-down': !isExpanded,\n           'glyphicon-chevron-up' : isExpanded \n        }\">\n    </i>\n        </div>\n        <div *ngIf=\"isExpanded\" class=\"panel-body\">\n            <ng-content></ng-content>\n        </div>        \n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AccordianComponent);
                return AccordianComponent;
            }());
            exports_1("AccordianComponent", AccordianComponent);
        }
    }
});
//# sourceMappingURL=accordian.component.js.map
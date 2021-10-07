/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButtons {
        "buttonTitle": string;
    }
    interface MyComponent {
        /**
          * The middle name
         */
        "content": string;
        "openModal": () => Promise<void>;
        /**
          * The first name
         */
        "title": string;
    }
}
declare global {
    interface HTMLMyButtonsElement extends Components.MyButtons, HTMLStencilElement {
    }
    var HTMLMyButtonsElement: {
        prototype: HTMLMyButtonsElement;
        new (): HTMLMyButtonsElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-buttons": HTMLMyButtonsElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyButtons {
        "buttonTitle"?: string;
    }
    interface MyComponent {
        /**
          * The middle name
         */
        "content"?: string;
        /**
          * The first name
         */
        "title"?: string;
    }
    interface IntrinsicElements {
        "my-buttons": MyButtons;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-buttons": LocalJSX.MyButtons & JSXBase.HTMLAttributes<HTMLMyButtonsElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
